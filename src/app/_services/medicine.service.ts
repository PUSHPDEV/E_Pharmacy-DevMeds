import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../_model/medicine.model';
import { OrderDetails } from '../_model/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {


  constructor(private httpClient: HttpClient) { }

  public addMedicine(medicine: FormData) {
    return this.httpClient.post<Medicine>("http://localhost:8080/addMedicine", medicine);
  }

  public getAllMedicines() {
    return this.httpClient.get<Medicine[]>("http://localhost:8080/getAllMedicines");
  }
  public getMedicineDetailsById(medicineId: number) {
    return this.httpClient.get<Medicine>("http://localhost:8080/getMedicineDetailsById/" + medicineId);

  }

  public deleteMedicine(medicineId: number) {
    return this.httpClient.delete("http://localhost:8080/deleteMedicine/" + medicineId);

  }


  public getMedicineDetails(isSingleMedicineCheckout: any, medicineId: any) {
    return this.httpClient.get<Medicine[]>("http://localhost:8080/getMedicineDetails/" + isSingleMedicineCheckout + "/" + medicineId)
  }


  public placeOrder(orderDetails:OrderDetails){
    return this.httpClient.post('http://localhost:8080/placeOrder/',orderDetails);
  }
}
