import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineViewDetailsComponent } from './medicine-view-details.component';

describe('MedicineViewDetailsComponent', () => {
  let component: MedicineViewDetailsComponent;
  let fixture: ComponentFixture<MedicineViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
