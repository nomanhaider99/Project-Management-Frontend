import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessDashboardComponent implements OnInit {
  router: Router = inject(Router);
  businessService: BusinessService = inject(BusinessService);
  component: string = 'projects';
  business: any;
  projectId: string = '';
  milestoneId: string = '';

  onTabClick(comp: string): any {
    this.component = comp;
    console.log(this.component)
  }

  controlAddTaskClick (value: any) {
    this.component = value.comp;
    this.milestoneId = value.milestone;
    console.log(value);
  }

  getViewClick (value: any) {
    this.component = value.comp;
    this.projectId = value.id;
  }

  getMilestoneClickFunc (value: any) {
    this.component = value.comp;
  }

  getAddMemberClickFunc (value: any) {
    this.component = value.comp;
  }

  getBusiness () {
    this.businessService.getLoggedInBusiness()
    .subscribe({
      next: (res) => {
        this.business = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  ngOnInit () {
    this.getBusiness();
  }

  logoutBusiness () {
    this.businessService.logoutBusiness()
    .subscribe({
      next: () => {
        this.router.navigateByUrl('/business/login');
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  getProjectById () {}
}
