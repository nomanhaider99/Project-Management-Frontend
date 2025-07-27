import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ErrorComponent {
  @Input() errormessage: string = "";
  @Input() ifCondition: any;
}
