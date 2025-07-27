import { Component, Input, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  isPasswordShown = signal(false);
  @Input() value: string = "";
  @Input() control: FormControl = new FormControl();

  showPassword () {
    this.isPasswordShown.update(current => !current);
  }

  
}
