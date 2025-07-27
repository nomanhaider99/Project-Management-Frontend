import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { businessUnauthGuard } from './business-unauth.guard';

describe('businessUnauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => businessUnauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
