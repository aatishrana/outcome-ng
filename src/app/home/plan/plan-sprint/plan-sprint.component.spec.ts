import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSprintComponent } from './plan-sprint.component';

describe('PlanSprintComponent', () => {
  let component: PlanSprintComponent;
  let fixture: ComponentFixture<PlanSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
