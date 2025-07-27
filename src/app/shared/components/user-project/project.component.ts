import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';

@Component({
  selector: 'app-user-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class UserProjectComponent implements OnChanges, OnInit {
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
  @Output() viewClick = new EventEmitter<{comp: string, id: string}>();
  businessService: BusinessService = inject(BusinessService);
  projectService: ProjectsService = inject(ProjectsService);

  viewButtonClick (id: string) {
    this.viewClick.emit({
      comp: 'user-view',
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
