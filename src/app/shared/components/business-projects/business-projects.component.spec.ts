import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProjectsComponent } from './business-projects.component';

describe('BusinessProjectsComponent', () => {
  let component: BusinessProjectsComponent;
  let fixture: ComponentFixture<BusinessProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessProjectsComponent]
    });
    fixture = TestBed.createComponent(BusinessProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
