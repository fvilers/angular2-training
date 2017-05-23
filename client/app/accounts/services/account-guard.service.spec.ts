import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterStub } from '../../core';
import { AccountGuardService, CurrentAccountService } from '.';

describe('AccountGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountGuardService,
        CurrentAccountService,
        { provide: Router, useValue: RouterStub }
      ]
    });
  });

  it('should ...', inject([AccountGuardService], (service: AccountGuardService) => {
    expect(service).toBeTruthy();
  }));
});
