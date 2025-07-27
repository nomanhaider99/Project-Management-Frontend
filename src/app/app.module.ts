import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from './shared/components/button/button.module';
import { TweetModule } from './shared/components/tweet/tweet.module';
import { PasswordInputModule } from './features/auth/password-input/password-input.module';
import { CompanyModule } from './shared/components/company/company.module';
import { RegisterModule } from './features/auth/user/register/register.module';
import { InputModule } from './shared/components/input/input.module';
import { LoginModule } from './features/auth/user/login/login.module';
import { BusinessLoginModule } from './features/auth/business/login/login.module';
import { BusinessRegisterModule } from './features/auth/business/register/register.module';
import { OnBoardingBusinessModule } from './features/onboarding/business/business.module';
import { OnBoardingUserModule } from './features/onboarding/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardModule } from './features/dashboard/user/user.module';
import { CreateProjectModule } from './shared/components/create-project/create-project.module';
import { BusinessDashboardModule } from './features/dashboard/business/business.module';
import { ProjectsModule } from './shared/components/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TweetModule,
    PasswordInputModule,
    CompanyModule,
    InputModule,
    RegisterModule,
    LoginModule,
    BusinessLoginModule,
    BusinessRegisterModule,
    OnBoardingBusinessModule,
    OnBoardingUserModule,
    HttpClientModule,
    UserDashboardModule,
    BusinessDashboardModule,
    CreateProjectModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
