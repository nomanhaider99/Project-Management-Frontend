import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectComponent } from './view-component.component';

describe('ViewComponentComponent', () => {
  let component: ViewProjectComponent;
  let fixture: ComponentFixture<ViewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProjectComponent]
    });
    fixture = TestBed.createComponent(ViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
