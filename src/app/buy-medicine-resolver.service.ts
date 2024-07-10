import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Medicine } from './_model/medicine.model';
import { Observable, map } from 'rxjs';
import { MedicineService } from './_services/medicine.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class BuyMedicineResolverService implements Resolve<Medicine[]> {


  constructor(private medicineService: MedicineService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Medicine[]
    | Observable<Medicine[]> | Promise<Medicine[]> {


    const id = route.paramMap.get("id");
    const isSingleMedicineCheckout = route.paramMap.get("isSingleMedicineCheckout");
    return this.medicineService.getMedicineDetails(isSingleMedicineCheckout, id)
      .pipe(
        map(
          (x: Medicine[], i) => x.map((medicine: Medicine) => this.imageProcessingService.createImages(medicine))
        )
      );
  }

}
