import { Component, inject } from '@angular/core';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { PasswordInputModule } from '../../password-input/password-input.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  message: string = '';
  type: 'success' | 'error' = 'success';
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required,]],
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
      this.userService.loginUser(this.email?.value, this.password?.value)
        .subscribe({
          next: (res) => {
            this.type = "success";
            this.message = res.message;
            console.log(res.data)
            if (!res.data.tagline && !res.data.description) {
              this.router.navigateByUrl('/user/onboarding');
            } else {
              this.router.navigateByUrl('/user/dashboard');
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
