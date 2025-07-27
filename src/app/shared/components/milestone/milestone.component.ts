import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { TaskType } from 'src/app/core/types/tasks.types';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
  @Input() status: any;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() mielstoneNo: number = 1;
  @Input() milestone: string = '';
  @Input() project: string = '';
  @Input() tasks: TaskType[] = [];
  tasksService: TasksService = inject(TasksService);
  @Output() addTaskEmmiter = new EventEmitter<{comp: string, project: string, milestone: string}>();

  onAddTaskClick () {
    this.addTaskEmmiter.emit({
      comp: 'add-task',
      project: this.project,
      milestone: this.milestone
    });
  }

  fetchTasksOfMilestone () {
    this.tasksService.getTasksOfMilestone(this.milestone, this.project)
    .subscribe({
      next: (res: any) => {
        this.tasks = res.data
        console.log(this.tasks);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.fetchTasksOfMilestone();
    console.log(this.milestone, this.project);
  }
}
