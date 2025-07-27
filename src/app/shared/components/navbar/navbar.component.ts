import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { ButtonModule } from '../button/button.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [ButtonModule, LogoComponent]
})
export class NavbarComponent {

}
