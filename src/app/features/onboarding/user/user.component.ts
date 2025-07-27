import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-business',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class OnBoardingUserComponent {
  form: FormGroup;
  message: string = '';
  type: 'success' | 'error' = 'success';
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tagline: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(80)]],
      description: ['', [Validators.minLength(30), Validators.maxLength(600)]]
    })
  }

  get tagline() {
    return this.form.get('tagline');
  }

  get description() {
    return this.form.get('description');
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  submitForm() {
    if (this.tagline?.value == '') {
      this.type = 'error';
      this.message = 'Tagline is Required'
    } else {
      this.userService.getLoggedInUser()
        .subscribe({
          next: (user) => {
            this.userService.updateUser(user.data._id, this.tagline?.value, this.description?.value)
              .subscribe({
                next: (res) => {
                  this.type = "success";
                  this.message = res.message;
                  setTimeout(() => {
                    this.router.navigateByUrl('/user/dashboard');
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
