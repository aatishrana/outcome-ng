import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStoryComponent } from './plan-story.component';

describe('PlanStoryComponent', () => {
  let component: PlanStoryComponent;
  let fixture: ComponentFixture<PlanStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
