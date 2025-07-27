import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingUserComponent } from './user.component';

describe('UserComponent', () => {
  let component: OnBoardingUserComponent;
  let fixture: ComponentFixture<OnBoardingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardingUserComponent]
    });
    fixture = TestBed.createComponent(OnBoardingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
