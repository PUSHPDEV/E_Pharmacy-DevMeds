import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicineDetailsComponent } from './view-medicine-details.component';

describe('ViewMedicineDetailsComponent', () => {
  let component: ViewMedicineDetailsComponent;
  let fixture: ComponentFixture<ViewMedicineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedicineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
