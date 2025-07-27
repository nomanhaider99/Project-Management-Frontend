import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class BusinessRegisterComponent {
  form: FormGroup
  message: string = '';
  type: 'success' | 'error' = 'success';
  router: Router = inject(Router);
  businessService: BusinessService = inject(BusinessService);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get name() {
    return this.form.get('name');
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
    if (this.name?.value == '' || this.email?.value == '' || this.password?.value == '') {
      this.type = 'error'
      this.message = 'Kindly fill your credentials, we are getting empty credentials.'
    } else {
      this.businessService.registerBusiness(this.name?.value, this.email?.value, this.password?.value)
        .subscribe({
          next: (res) => {
            this.type = "success";
            this.message = res.message;
            this.router.navigateByUrl('/business/login');
          },
          error: (err) => {
            this.type = "error";
            this.message = err.error.message
          }
        })
    }
  }
}
