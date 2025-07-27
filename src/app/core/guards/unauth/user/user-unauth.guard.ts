import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/users.service';

export const userUnauthGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isLoggedIn = await userService.isLoggedIn();

  if (!isLoggedIn) {
    return true;
  } else {
    router.navigateByUrl('/user/dashboard');
    return false;
  }
};
