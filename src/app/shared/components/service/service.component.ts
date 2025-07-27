import { Component, OnInit } from '@angular/core';
import { features } from 'src/data/services';
import { ServiceCardComponent } from "../service-card/service-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  standalone: true,
  imports: [ServiceCardComponent, CommonModule]
})
export class ServiceComponent implements OnInit {
  data: {heading: string, description: string}[] = [];

  ngOnInit(): void {
    this.data = features
  }

}
