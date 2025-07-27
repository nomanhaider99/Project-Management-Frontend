import { Component, inject, Input } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() taskNo: number = 1;
  @Input() taskId: string = '';
  type: 'success' | 'error' = 'success';
  message: string = '';
  tasksService: TasksService = inject(TasksService);
}
