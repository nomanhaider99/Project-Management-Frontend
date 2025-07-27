import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedComponent } from './trusted.component';

describe('TrustedComponent', () => {
  let component: TrustedComponent;
  let fixture: ComponentFixture<TrustedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustedComponent]
    });
    fixture = TestBed.createComponent(TrustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
