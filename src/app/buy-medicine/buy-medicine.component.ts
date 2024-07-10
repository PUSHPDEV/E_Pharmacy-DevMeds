import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../_model/order-details.model';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../_model/medicine.model';
import { MedicineService } from '../_services/medicine.service';

@Component({
  selector: 'app-buy-medicine',
  templateUrl: './buy-medicine.component.html',
  styleUrls: ['./buy-medicine.component.css'],
})
export class BuyMedicineComponent implements OnInit {
  // isSingleMedicineCheckout: string | null = null;
  medicineDetails: Medicine[] = []; //array which will contain the details about the medicine

  orderDetails: OrderDetails = {
    // object which send to the backend
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderMedicineQuantityList: [],
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private medicineService: MedicineService
  ) {}
  ngOnInit(): void {
    this.medicineDetails = this.activatedRoute.snapshot.data['medicineDetails'];
    // this.isSingleMedicineCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout");

    // Initialize orderMedicineQuantityList with default values
    this.medicineDetails.forEach(x =>
      this.orderDetails.orderMedicineQuantityList.push({
        medicineId: x.medicineId,
        quantity: 1,
      })
    );
    console.log(this.orderDetails);
    console.log(this.medicineDetails);
  }

  public placeOrder(orderForm: NgForm) {
    this.medicineService.placeOrder(this.orderDetails).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // total no of quantity
  getQuantityForMedicine(medicineId: number) {
    const filteredMedicine = this.orderDetails.orderMedicineQuantityList.filter(
      (medicineQuantity) => medicineQuantity.medicineId === medicineId
    );
    return filteredMedicine[0].quantity;
  }

  // Calculating the total price of medicine
  getCalculatedTotal(medicineId: number, medicineDiscountedPrice: any) {
    const filteredMedicine = this.orderDetails.orderMedicineQuantityList.filter(
      (medicineQuantity) => medicineQuantity.medicineId === medicineId
    );
    return filteredMedicine[0].quantity * medicineDiscountedPrice;
  }



  //total
  onQuantityChanged(_quantity: any, medicineId: any) {
    this.orderDetails.orderMedicineQuantityList.filter(
      (orderMedicine) => orderMedicine.medicineId === medicineId
    )[0].quantity = _quantity;
  } 



  getCalculatedGrandTotal() {
    let grandTotal = 0;
    this.orderDetails.orderMedicineQuantityList.forEach((medicineQuantity) => {
      const price = this.medicineDetails.filter(
        (medicine) => medicine.medicineId === medicineQuantity.medicineId
      )[0].medicineDiscountedPrice;
      grandTotal = grandTotal + price * medicineQuantity.quantity;
    });
    return grandTotal;
  }
}
