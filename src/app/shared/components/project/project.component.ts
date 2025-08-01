import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { ProjectType } from 'src/app/core/types/project.types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnChanges, OnInit {
  @Input() title: string = '';
  @Input() description?: string = '';
  @Input() _id: string = '';
  @Input() owner: string = '';
  @Input() status: any = '';
  @Input() priority: any = '';
  @Input() startDate: string = '';
  @Input() progress: any = 0;
  @Input() members?: string[] = [];
  @Input() milestones: string[] = [];
  @Input() projects: ProjectType[] = [];
  @Output() viewClick = new EventEmitter<{comp: string, id: string}>();
  @Output() fiteredProjectsEmmiter = new EventEmitter<ProjectType[]>();
  businessService: BusinessService = inject(BusinessService);
  projectService: ProjectsService = inject(ProjectsService);

  viewButtonClick (id: string) {
    this.viewClick.emit({
      comp: 'view',
      id: id
    });
  }  

  fetchBusiness() {
    this.businessService.getBusinessById(this.owner).subscribe({
      next: (res: any) => {
        this.owner = res.data.name;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.startDate = String(new Date(this.startDate)).slice(4, 15)
  }
  
  deleteProject (id: string) {
    this.projects = this.projects.filter(project => project._id !== id);
    this.fiteredProjectsEmmiter.emit(this.projects);
    console.log(this.projects.length);
    this.projectService.deleteProject(id)
    .subscribe({
      next: (res) => {
        console.log("Project Deleted Successfully!")
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  ngOnInit () {
    this.fetchBusiness();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.owner !== '' || this.owner !== undefined) {
      this.fetchBusiness();
    }
  }
}
