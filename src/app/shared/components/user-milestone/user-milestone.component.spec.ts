import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMilestoneComponent } from './user-milestone.component';

describe('UserMilestoneComponent', () => {
  let component: UserMilestoneComponent;
  let fixture: ComponentFixture<UserMilestoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMilestoneComponent]
    });
    fixture = TestBed.createComponent(UserMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
