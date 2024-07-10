import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot,} from '@angular/router';
import { Observable, map, of} from 'rxjs';
import { Medicine } from './_model/medicine.model';
import { ImageProcessingService } from './image-processing.service';
import { MedicineService } from './_services/medicine.service';

@Injectable({
  providedIn: 'root',
})
export class MedicineResolveServiceService implements Resolve<Medicine> {
  constructor(
    private medicineService: MedicineService,
    private imageProcessingService: ImageProcessingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Medicine> {
    const id = route.paramMap.get('medicineId');
    if (id) {
      const parsedId = parseInt(id, 10);
      //then we have to fetch the details from backend
      return this.medicineService
        .getMedicineDetailsById(parsedId)
        .pipe(map((p) => this.imageProcessingService.createImages(p)));
    } else {
      // return empty product observable.
      return of(this.getMedicineDetailsById());
    }
  }
  getMedicineDetailsById() {
    return {
      medicineId: 0,
      medicineName: '',
      medicineDescription: '',
      medicineDiscountedPrice: 0,
      medicineActualPrice: 0,
      medicineImages: [],
    };
  }
}
