import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'date-fns';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  staticStatus: string[] = ["ongoing", "expired"]
  staticPriority: string[] = ["low", "medium", "urgent"];
  form: FormGroup
  businessService: BusinessService = inject(BusinessService);
  projectService: ProjectsService = inject(ProjectsService);
  message: string = '';
  type: 'success' | 'error' = 'success';

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(100)]],
      status: [''],
      priority: [''],
      startDate: [''],
    })
  }

  get title () {
    return this.form.get('title');
  }

  get description () {
    return this.form.get('description');
  }

  get status () {
    return this.form.get('status');
  }

  get priority () {
    return this.form.get('priority');
  }

  get startDate () {
    return this.form.get('startDate');
  }

  getControl (name: string) {
    return this.form.get(name) as FormControl;
  }

  submitForm () {   
    const data = {
      title: this.title?.value,
      description: this.description?.value,
      status: this.status?.value,
      priority: this.priority?.value,
      startDate: this.startDate?.value
    }
    if (!data.title || !data.description || !data.status || !data.priority || !data.startDate) {
      this.type = 'error';
      this.message = 'Missing Input Fields!'
    } else {
      this.businessService.getLoggedInBusiness()
      .subscribe({
        next: (business) => {
          this.projectService.createProject(business.data._id, data.title, data.description, data.status, data.priority, data.startDate)
          .subscribe({
            next: (res) => {
              this.type = 'success';
              this.message = 'Project Created Successfully!'
            },
            error: (err) => {
              this.type = 'error';
              this.message = err;
            }
          })
        },
        error: (err) => {
          console.log(err);
        },
      })
    }
  }
}
