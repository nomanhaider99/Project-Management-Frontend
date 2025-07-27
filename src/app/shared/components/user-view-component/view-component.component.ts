import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MilestoneService } from 'src/app/core/services/milestones/milestones.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { UserService } from 'src/app/core/services/users/users.service';
import { MilestoneType } from 'src/app/core/types/milestone.types';
import { ProjectType } from 'src/app/core/types/project.types';
import { UserType } from 'src/app/core/types/user.types';

@Component({
  selector: 'app-user-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class UserViewProjectComponent implements OnInit {
  milestones: MilestoneType[] = [];
  milestoneService: MilestoneService = inject(MilestoneService);
  projcetsService: ProjectsService = inject(ProjectsService);
  userService: UserService = inject(UserService);
  @Input() projectData: ProjectType | any;
  @Input() projectId: string = '';
  errorMessage: string = '';
  members: UserType[] = [];
  @Output() controlCreateMilestone = new EventEmitter<{ comp: string, projectId: string }>();
  @Output() controlAddMember = new EventEmitter<{ comp: string, projectId: string }>();
  @Output() controlAddTask = new EventEmitter<{ comp: string, projectId: string, milestone: string }>();

  valueToBeEmit = {
    comp: 'create-milestone',
    projectId: this.projectId
  }

  addMemberValueToBeEmit = {
    comp: 'add-member',
    projectId: this.projectId
  }

  ControlMilestoneCreationButtonClick(value: any) {
    this.controlCreateMilestone.emit(value);
    console.log(value);
  }

  ControlAddMemberButtonClick(value: any) {
    this.controlAddMember.emit(value);
    console.log(value);
  }

  ControlAddTaskButtonClick(value: any) {
    this.controlAddTask.emit(value);
  }

  getCurrentOpenedProject() {
    this.projcetsService.getProjectById(this.projectId)
      .subscribe({
        next: (res: any) => {
          this.projectData = res.data;
          this.userService.getUsersByIds(res.data.members)
            .subscribe({
              next: (res) => {
                this.members = res.data
              },
              error: (err) => {
                console.log(err);
              }
            })
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  fetchMilestones() {
    this.milestoneService.getMilestonesOfProject(this.projectId)
      .subscribe({
        next: (res) => {
          this.milestones = res.data;
        },
        error: (err) => {
          if (err.status = 404) {
            this.errorMessage = 'No Milestones Found For This Project!'
          }
        },
      })
  }

  ngOnInit(): void {
    this.fetchMilestones();
    this.getCurrentOpenedProject();
  }

  // ngOnChanges(): void {
  //   this.fetchMilestones();
  //   this.getCurrentOpenedProject();
  // }
}
