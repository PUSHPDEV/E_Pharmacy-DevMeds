import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { Medicine } from '../_model/medicine.model';
import { ImageProcessingService } from '../image-processing.service';
import { Router } from '@angular/router';
import { MedicineService } from '../_services/medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicineDetails: Medicine[] = [];



  constructor(private medicineService: MedicineService, private imageProcessingService: ImageProcessingService, private router: Router) {

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


  showMedicineDetails(medicineId: any) {

    this.router.navigate(['/medicineViewDetails', { medicineId: medicineId }]);
  }
}
