import { Component, EventEmitter, inject, Output, SimpleChanges } from '@angular/core';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { ProjectType } from 'src/app/core/types/project.types';

@Component({
  selector: 'app-business-projects',
  templateUrl: './business-projects.component.html',
  styleUrls: ['./business-projects.component.css']
})
export class BusinessProjectsComponent {
  projects: ProjectType[] = [];
  projectsService: ProjectsService = inject(ProjectsService);
  businessService: BusinessService = inject(BusinessService);
  owner: string = '';
  @Output() viewClick = new EventEmitter<string>();

  onViewButtonClicked (event: any) {
    this.viewClick.emit(event);
  }

  fetchData() {
    this.businessService.getLoggedInBusiness()
      .subscribe({
        next: (business) => { 
          this.projectsService.getProjectsOfBusiness(business.data._id)
            .subscribe({
              next: (res: any) => {
                this.projects = res.data;
              },
              error: (err) => {
                console.log(err);
              },
            });
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }
}
