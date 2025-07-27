import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { businessAuthGuard } from './business-auth.guard';

describe('businessAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => businessAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
