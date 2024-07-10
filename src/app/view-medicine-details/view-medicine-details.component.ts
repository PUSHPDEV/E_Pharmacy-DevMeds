import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Medicine } from '../_model/medicine.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ShowMedicineImagesDialogComponent } from '../show-medicine-images-dialog/show-medicine-images-dialog.component';
import { ImageProcessingService } from '../image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { MedicineService } from '../_services/medicine.service';
@Component({
  selector: 'app-view-medicine-details',
  templateUrl: './view-medicine-details.component.html',
  styleUrls: ['./view-medicine-details.component.css']
})
export class ViewMedicineDetailsComponent implements OnInit {
  medicine: any;




  medicineDetails: Medicine[] = [];
  displayedColumns: string[] = ['Id', 'Medicine Name', 'Medicine Description', 'Medicine Discounted Price', 'Medicine Actual Price', 'Images', 'Edit', 'Delete']

  constructor(private medicineService: MedicineService, public imagesDialog: MatDialog, private imageProcessingService: ImageProcessingService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllMedicines();
  }


  public getAllMedicines() {
    this.medicineService.getAllMedicines()
      .pipe(
        map((x: Medicine[], i) => x.map((medicine: Medicine) => this.imageProcessingService.createImages(medicine)))
      )
      .subscribe(
        (resp: Medicine[]) => {

          console.log(resp);
          this.medicineDetails = resp;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }

      );
  }

  deleteMedicine(medicineId: number) {
    this.medicineService.deleteMedicine(medicineId).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getAllMedicines();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  showImages(medicine: Medicine) {

    console.log(medicine);
    this.imagesDialog.open(ShowMedicineImagesDialogComponent, {
      data: {
        images: medicine.medicineImages
      },
      height: '500px',
      width: '800px'
    });
  }


  editMedicine(medicineId: number) {

    this.router.navigate(['/addNewMedicine', { medicineId: medicineId }]);
  }
}
