import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkrsComponent } from './workrs.component';

describe('WorkrsComponent', () => {
  let component: WorkrsComponent;
  let fixture: ComponentFixture<WorkrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
