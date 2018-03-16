import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBacklogNewComponent } from './product-backlog-new.component';

describe('ProductBacklogNewComponent', () => {
  let component: ProductBacklogNewComponent;
  let fixture: ComponentFixture<ProductBacklogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBacklogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBacklogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
