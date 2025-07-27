import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/users.service';

export const userAuthGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
    const isLoggedIn = await userService.isLoggedIn();
  
    if (isLoggedIn) {
      return true;
    } else {
      router.navigateByUrl('/user/login');
      return false;
    }
};
