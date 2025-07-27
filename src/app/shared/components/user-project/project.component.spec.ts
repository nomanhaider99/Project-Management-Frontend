import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: UserProjectComponent;
  let fixture: ComponentFixture<UserProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProjectComponent]
    });
    fixture = TestBed.createComponent(UserProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
