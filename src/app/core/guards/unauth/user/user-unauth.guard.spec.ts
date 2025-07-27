import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userUnauthGuard } from './user-unauth.guard';

describe('userUnauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userUnauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
