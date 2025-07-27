import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/components/landing/landing.component';
import { LoginComponent } from './features/auth/user/login/login.component';
import { RegisterComponent } from './features/auth/user/register/register.component';
import { WhyComponent } from './shared/components/why/why.component';
import { BusinessLoginComponent } from './features/auth/business/login/login.component';
import { BusinessRegisterComponent } from './features/auth/business/register/register.component';
import { OnBoardingBusinessComponent } from './features/onboarding/business/business.component';
import { OnBoardingUserComponent } from './features/onboarding/user/user.component';
import { UserDashboardComponent } from './features/dashboard/user/user.component';
import { BusinessDashboardComponent } from './features/dashboard/business/business.component';
import { userAuthGuard } from './core/guards/auth/user/user-auth.guard';
import { businessAuthGuard } from './core/guards/auth/business/business-auth.guard';
import { userUnauthGuard } from './core/guards/unauth/user/user-unauth.guard';
import { businessUnauthGuard } from './core/guards/unauth/business/business-unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'user/register',
    component: RegisterComponent,
    pathMatch: 'full',
    canActivate: [userUnauthGuard]
  },
  {
    path: 'user/login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [userUnauthGuard]
  },
  {
    path: 'user/onboarding',
    component: OnBoardingUserComponent,
    pathMatch: 'full',
    canActivate: [userAuthGuard]
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [userAuthGuard],
  },
  {
    path: 'business/register',
    component: BusinessRegisterComponent,
    pathMatch: 'full',
    canActivate: [businessUnauthGuard]
  },
  {
    path: 'business/login',
    component: BusinessLoginComponent,
    pathMatch: 'full',
    canActivate: [businessUnauthGuard]
  },
  {
    path: 'business/onboarding',
    component: OnBoardingBusinessComponent,
    canActivate: [businessAuthGuard]
  },
  {
    path: 'business/dashboard',
    component: BusinessDashboardComponent,
    canActivate: [businessAuthGuard]
  },
  {
    path: 'why',
    component: WhyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
