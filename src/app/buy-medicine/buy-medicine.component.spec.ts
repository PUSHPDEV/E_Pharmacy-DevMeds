import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMedicineComponent } from './buy-medicine.component';

describe('BuyMedicineComponent', () => {
  let component: BuyMedicineComponent;
  let fixture: ComponentFixture<BuyMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
