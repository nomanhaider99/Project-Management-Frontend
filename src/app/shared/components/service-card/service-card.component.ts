import { Component, Input } from '@angular/core';
import { ButtonModule } from "../button/button.module";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
  standalone: true,
  imports: [ButtonModule]
})
export class ServiceCardComponent {
  @Input() heading: string = "";
  @Input() description: string = "";
}
