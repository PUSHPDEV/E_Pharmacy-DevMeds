import { TestBed } from '@angular/core/testing';

import { BuyMedicineResolverService } from './buy-medicine-resolver.service';

describe('BuyMedicineResolverService', () => {
  let service: BuyMedicineResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyMedicineResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
