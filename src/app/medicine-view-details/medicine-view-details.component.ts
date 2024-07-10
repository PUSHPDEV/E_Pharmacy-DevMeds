import { Component, OnInit } from '@angular/core';
import { Medicine } from '../_model/medicine.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicine-view-details',
  templateUrl: './medicine-view-details.component.html',
  styleUrls: ['./medicine-view-details.component.css']
})
export class MedicineViewDetailsComponent implements OnInit {
  medicine!: Medicine;
  selectedMedicineIndex = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.medicine = this.activatedRoute.snapshot.data['medicine'];
    console.log(this.medicine);


  }
  changeIndex(index: any) {
    this.selectedMedicineIndex = index;
  }
  buyMedicine(medicineId: any) {
    this.router.navigate(['/buyMedicine', {
      isSingleMedicineCheckout: true, id: medicineId
    }]);
  }
}
