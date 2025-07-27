import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  form: FormGroup;
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  message: string = "";
  type: "success" | "error" = "success";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.minLength(6), Validators.maxLength(24), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  submitForm() {
    const data = {
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password
    }
    if (this.form.errors?.['minlength'] || this.form.errors?.['maxlength']) {
      this.type = "error";
      this.message = "An Unexpected error occured during register, kindly re-check your credentials."
    } else {
      if (data.email !== '' && data.username !== '' && data.password !== '') {
        this.userService.registerUser(data.username, data.email, data.password).subscribe({
          next: (res) => {
            this.type = "success";
            this.message = res.message;
            this.router.navigateByUrl('/user/login');
          },
          error: (err) => {
            this.type = "error";
            this.message = err.error.message
          }
        });
      } else {
        this.type = "error";
        this.message = "Kindly fill your credentials, we are getting empty credentials."
      }
    }
  }
}
