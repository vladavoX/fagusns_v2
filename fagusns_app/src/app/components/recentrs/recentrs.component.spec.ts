import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentrsComponent } from './recentrs.component';

describe('RecentrsComponent', () => {
  let component: RecentrsComponent;
  let fixture: ComponentFixture<RecentrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
