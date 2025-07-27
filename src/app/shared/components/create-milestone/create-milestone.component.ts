import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MilestoneService } from 'src/app/core/services/milestones/milestones.service';

@Component({
  selector: 'app-create-milestone',
  templateUrl: './create-milestone.component.html',
  styleUrls: ['./create-milestone.component.css']
})
export class CreateMilestoneComponent {
  type: 'success' | 'error' = 'success';
  message: string = '';
  @Input() projectId: string = '';
  form: FormGroup;
  milestoneService: MilestoneService = inject(MilestoneService);
  @Output() createMilestoneEventEmmiter = new EventEmitter<{comp: string, project: string}>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(100)]]
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  onMilestoneCreateSubmit() {
    const data = {
      title: this.title?.value,
      description: this.description?.value,
      project: this.projectId
    }
    if (!data.title || !data.description) {
      this.type = 'error';
      this.message = 'Missing Input Fields!'
    } else {
      this.milestoneService.createMilestoneOfProject(data.title, data.description, data.project)
        .subscribe({
          next: (res: any) => {
            this.type = 'success';
            this.message = 'Milestone Created Succesfully!'
            this.createMilestoneEventEmmiter.emit({
              comp: 'view',
              project: data.project
            })
          },
          error: (err) => {
            this.type = 'error';
            this.message = err;
          },
        })
    }
  }
}
