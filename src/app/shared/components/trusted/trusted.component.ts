import { Component } from '@angular/core';
import { CompanyModule } from '../company/company.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trusted',
  templateUrl: './trusted.component.html',
  styleUrls: ['./trusted.component.css'],
  standalone: true,
  imports: [CompanyModule, CommonModule]
})
export class TrustedComponent {
  companies: string[] = ["uplift", "Mojo", "Amazon", "Duolingo", "DigitalSpring"]
}
