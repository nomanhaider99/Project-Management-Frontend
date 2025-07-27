import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { TaskType } from 'src/app/core/types/tasks.types';

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
  @Input() tasks: TaskType[] = [];
  @Output() filteredTasksEmmiter = new EventEmitter<TaskType[]>();
  type: 'success' | 'error' = 'success';
  message: string = '';
  tasksService: TasksService = inject(TasksService);

  onDeleteTaskClick (id:string) {
    this.tasks = this.tasks.filter(task => task._id !== id);
    this.filteredTasksEmmiter.emit(this.tasks);
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
