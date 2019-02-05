import { TestBed } from '@angular/core/testing';

import { GuestRecordService } from './guest-record.service';

describe('GuestRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestRecordService = TestBed.get(GuestRecordService);
    expect(service).toBeTruthy();
  });
});
