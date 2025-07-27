import { Component, inject, Input } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() taskNo: number = 1;
  @Input() taskId: string = '';
  type: 'success' | 'error' = 'success';
  message: string = '';
  tasksService: TasksService = inject(TasksService);

  onDeleteTaskClick () {
    this.tasksService.deleteTask(this.taskId)
    .subscribe({
      next: () => {
        this.type = 'success';
        this.message = 'Tasks Deleted Successfully!';
      },
      error: (err) => {
        this.type = 'error';
        this.message = err.message;
      },
    })
  }
}
