import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  type: 'success' | 'error' = 'success';
  message: string = '';
  form: FormGroup;
  projectsService: ProjectsService = inject(ProjectsService);
  @Input() projectId: string = '';

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required]]
    })
  }

  get username () {
    return this.form.get('username');
  }

  getControl (name: string) {
    return this.form.get(name) as FormControl;
  }

  submitAddMemberForm () {
    if (this.username?.value == '') {
      this.type = 'error';
      this.message = 'Username Field is Empty!';
    } else {
      this.projectsService.addMemberToProject(this.projectId, this.username?.value)
      .subscribe({
        next: (res) => {
          this.type = 'success';
          this.message = 'Member Added successfully!'
        },
        error: (err) => {
          this.type = 'error';
          this.message = err;
        },
      })
    }
  }
}
