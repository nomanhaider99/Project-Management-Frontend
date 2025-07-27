import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class OnBoardingBusinessComponent {
  form: FormGroup
  message: string = '';
  type: 'success' | 'error' = 'success';
  businessService: BusinessService = inject(BusinessService);
  router: Router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tagline: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(80)]],
      description: ['', [Validators.minLength(30), Validators.maxLength(600)]],
      address: ['', [Validators.minLength(15), Validators.maxLength(150)]]
    })
  }

  get tagline() {
    return this.form.get('tagline');
  }

  get description() {
    return this.form.get('description');
  }

  get address() {
    return this.form.get('address');
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  submitForm() {
    if (this.tagline?.value == '') {
      this.type = 'error';
      this.message = 'Tagline is Required'
    } else {
      this.businessService.getLoggedInBusiness()
        .subscribe({
          next: (business) => {
            this.businessService.updateBusiness(business.data._id, this.tagline?.value, this.description?.value, this.address?.value)
              .subscribe({
                next: (res) => {
                  this.type = "success";
                  this.message = res.message;
                  setTimeout(() => {
                    this.router.navigateByUrl('/business/dashboard');
                  }, 500)
                },
                error: (err) => {
                  this.type = "error";
                  this.message = err.error.message
                },
              })
          },
          error: (err) => {
            console.log(err);
          },
        })
    }
  }
}
