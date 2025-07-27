import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessDashboardComponent implements OnInit, OnChanges {
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

  afterCreateTabChenger (value: any) {
    this.component = value;
  }

  getMilestoneClickFunc (value: any) {
    this.component = value.comp;
  }

  getAddMemberClickFunc (value: any) {
    this.component = value.comp;
  }

  afterAddMemberCompleted (value: any) {
    this.component = value.comp;
    this.projectId = value.project;
  }

  afterCreateMilestoneCompleted (value: any) {
    this.component = value.comp;
    this.projectId = value.project;
  }

  afterCreateTaskCompleted (value: any) {
    this.component = value.comp;
    this.projectId = value.project;
    this.milestoneId = value.milestone;
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

  ngOnChanges () {
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
