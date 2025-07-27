import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class BusinessLoginComponent {
  form: FormGroup
  businessService: BusinessService = inject(BusinessService);
  type: 'success' | 'error' = 'success';
  message: string = '';
  router: Router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  submitForm() {
    if (this.email?.value == '' || this.password?.value == '') {
      this.type = 'error'
      this.message = 'Kindly fill your credentials, we are getting empty credentials.'
    } else {
      this.businessService.loginBusiness(this.email?.value, this.password?.value)
        .subscribe({
          next: (res) => {
            this.type = "success";
            this.message = res.message;
            if (!res.data.tagline && !res.data.description && !res.data.address) {
              this.router.navigateByUrl('/business/onboarding');
            } else {
              this.router.navigateByUrl('/business/dashboard');
            }

          },
          error: (err) => {
            this.type = "error";
            this.message = err.error.message
          }
        })
    }
  }
}
