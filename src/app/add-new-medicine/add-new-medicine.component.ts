import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicine } from '../_model/medicine.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from '../_services/medicine.service';

@Component({
  selector: 'app-add-new-medicine',
  templateUrl: './add-new-medicine.component.html',
  styleUrls: ['./add-new-medicine.component.css']
})
export class AddNewMedicineComponent implements OnInit {

  isNewMedicine = true;
  // file!: File;

  medicine: Medicine = {
    medicineId: 0,
    medicineName: "",
    medicineDescription: "",
    medicineDiscountedPrice: 0,
    medicineActualPrice: 0,
    medicineImages: [],
  };


  constructor(
    private medicineService: MedicineService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute

  ) {

  }
  ngOnInit(): void {
    this.medicine = this.activatedRoute.snapshot.data['medicine'];

    if (this.medicine && this.medicine.medicineId) {
      this.isNewMedicine = false;
    }
  }


  addMedicine(medicineForm: NgForm) {
    const formData = this.prepareFormDataForMedicine(this.medicine);

    this.medicineService.addMedicine(formData).subscribe(
      (response: Medicine) => {
        medicineForm.reset();
        this.medicine.medicineImages = [];
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormDataForMedicine(medicine: Medicine): FormData {


    const formData = new FormData();

    formData.append(
      'medicine',
      new Blob([JSON.stringify(medicine)], { type: 'application/json' })
    );

    for (var i = 0; i < medicine.medicineImages.length; i++) {
      formData.append(

        'imageFile',
        medicine.medicineImages[i].file,
        medicine.medicineImages[i].file.name

      );
    }
    return formData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.medicine.medicineImages.push(fileHandle);
    }
  }


  removeImages(i: number) {
    this.medicine.medicineImages.splice(i, 1);

  }

  fileDropped(fileHandle: FileHandle) {
    this.medicine.medicineImages.push(fileHandle);


  }
}
