import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

export const businessUnauthGuard: CanActivateFn = async (route, state) => {
  const businessService = inject(BusinessService);
  const router = inject(Router);

  const isLoggedIn = await businessService.isBusinessLoggedIn();

  if (!isLoggedIn) {
    return true;
  } else {
    router.navigateByUrl('/business/dashboard');
    return false;
  }
};
