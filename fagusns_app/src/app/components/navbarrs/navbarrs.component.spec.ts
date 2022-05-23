import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrsComponent } from './navbarrs.component';

describe('NavbarrsComponent', () => {
  let component: NavbarrsComponent;
  let fixture: ComponentFixture<NavbarrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
