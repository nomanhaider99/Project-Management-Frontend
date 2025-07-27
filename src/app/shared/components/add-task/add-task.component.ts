import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  type: 'success' | 'error' = 'success';
  message: string = '';
  form: FormGroup;
  tasksService: TasksService = inject(TasksService);
  @Input() project: string = '';
  @Input() milestone: string = '';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(100)]],
    })
  }

  get title () {
    return this.form.get('title');
  }

  get description () {
    return this.form.get('description');
  }

  getControl (name: string) {
    return this.form.get(name) as FormControl;
  }

  submitAddTaskForm () {
    const data = {
      title: this.title?.value,
      description: this.description?.value,
      milestone: this.milestone,
      project: this.project
    }
    if (this.title?.value == '' || this.description?.value == '') {
      this.type = 'error';
      this.message = 'Missing Input Field Values!'
    } else {
      this.tasksService.createTask(data.title, data.description, data.project, data.milestone)
      .subscribe({
        next: (res) => {
          this.type = 'success';
          this.message = 'Task Created Successfully!'
        },
        error: (err) => {
          this.type = 'error';
          this.message = err;
        }
      })
    }
  }
}
