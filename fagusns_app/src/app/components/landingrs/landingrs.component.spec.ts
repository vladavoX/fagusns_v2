import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingrsComponent } from './landingrs.component';

describe('LandingrsComponent', () => {
  let component: LandingrsComponent;
  let fixture: ComponentFixture<LandingrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
