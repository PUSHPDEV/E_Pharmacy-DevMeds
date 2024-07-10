import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedicineImagesDialogComponent } from './show-medicine-images-dialog.component';

describe('ShowMedicineImagesDialogComponent', () => {
  let component: ShowMedicineImagesDialogComponent;
  let fixture: ComponentFixture<ShowMedicineImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMedicineImagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMedicineImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
