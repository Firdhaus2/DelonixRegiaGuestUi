import { TestBed } from '@angular/core/testing';

import { GuestPaymentService } from './guest-payment.service';

describe('GuestPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestPaymentService = TestBed.get(GuestPaymentService);
    expect(service).toBeTruthy();
  });
});
