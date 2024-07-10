import { TestBed } from '@angular/core/testing';

import { MedicineResolveServiceService } from './medicine-resolve-service.service';

describe('MedicineResolveServiceService', () => {
  let service: MedicineResolveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineResolveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
