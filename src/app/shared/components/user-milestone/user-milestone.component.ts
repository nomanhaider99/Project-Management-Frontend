import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MilestoneService } from 'src/app/core/services/milestones/milestones.service';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { TaskType } from 'src/app/core/types/tasks.types';

@Component({
  selector: 'app-user-milestone',
  templateUrl: './user-milestone.component.html',
  styleUrls: ['./user-milestone.component.css']
})
export class UserMilestoneComponent implements OnInit {
  @Input() status: any;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() mielstoneNo: number = 1;
  @Input() milestone: string = '';
  @Input() project: string = '';
  @Input() tasks: TaskType[] = [];
  tasksService: TasksService = inject(TasksService);
  milestoneService: MilestoneService = inject(MilestoneService);
  @Output() addTaskEmmiter = new EventEmitter<{comp: string, project: string, milestone: string}>();
  type: 'success' | 'error' = 'success';
  message: string = '';

  onMilestoneCompletion () {
    this.milestoneService.updateMilestoneStatus(this.milestone, this.project)
    .subscribe({
      next: (res) => {
        this.type = 'success';
        this.message = 'Milestone Completed Successfully!'
      },
      error: (err) => {
        this.type = 'error';
        this.message = err.message;
      },
    });
  }


  fetchTasksOfMilestone () {
    this.tasksService.getTasksOfMilestone(this.milestone, this.project)
    .subscribe({
      next: (res: any) => {
        this.tasks = res.data
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.fetchTasksOfMilestone();
  }
}
