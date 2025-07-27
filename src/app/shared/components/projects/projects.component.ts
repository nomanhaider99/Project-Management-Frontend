import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { UserService } from 'src/app/core/services/users/users.service';
import { ProjectType } from 'src/app/core/types/project.types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnChanges {
  projects: ProjectType[] = [];
  projectsService: ProjectsService = inject(ProjectsService);
  usersService: UserService = inject(UserService);
  owner: string = '';
  @Output() viewClickEmmiter = new EventEmitter();

  viewClick(value: any) {
    this.viewClickEmmiter.emit(value);
  }

  fetchData() {
    this.usersService.getLoggedInUser().subscribe({
      next: (res) => {
        this.projectsService.getMyProjects(res.data._id)
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
      }
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }
}
