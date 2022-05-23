import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutrsComponent } from './aboutrs.component';

describe('AboutrsComponent', () => {
  let component: AboutrsComponent;
  let fixture: ComponentFixture<AboutrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
