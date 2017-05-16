import { TestBed, inject } from '@angular/core/testing';

import { AccountGuardService } from './account-guard.service';

describe('AccountGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountGuardService]
    });
  });

  it('should ...', inject([AccountGuardService], (service: AccountGuardService) => {
    expect(service).toBeTruthy();
  }));
});
