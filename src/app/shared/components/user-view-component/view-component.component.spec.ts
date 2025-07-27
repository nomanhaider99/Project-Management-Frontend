import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewProjectComponent } from './view-component.component';

describe('ViewComponentComponent', () => {
  let component: UserViewProjectComponent;
  let fixture: ComponentFixture<UserViewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewProjectComponent]
    });
    fixture = TestBed.createComponent(UserViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
