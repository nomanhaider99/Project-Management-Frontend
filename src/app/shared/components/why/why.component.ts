import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServiceComponent } from "../service/service.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css'],
  standalone: true,
  imports: [NavbarComponent, ServiceComponent, FooterComponent]
})
export class WhyComponent {

}
