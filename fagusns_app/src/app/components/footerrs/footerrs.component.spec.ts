import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrsComponent } from './footerrs.component';

describe('FooterrsComponent', () => {
  let component: FooterrsComponent;
  let fixture: ComponentFixture<FooterrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
