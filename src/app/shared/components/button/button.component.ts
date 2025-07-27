import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class ButtonComponent {
  @Input() text: string = "";
  @Input() isPrimary: boolean = false; 
  @Input() additionalClasses: string = "";
  @Input() disabled: boolean = false;
  @Input() type?: "button" | "submit" = "button";
  @Input() valueToBeEmmited: any = '';
  @Output() clickEvent = new EventEmitter();

  onButtonClick() {
    this.clickEvent.emit(this.valueToBeEmmited);
  }
}
