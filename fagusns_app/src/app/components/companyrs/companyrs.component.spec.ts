import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrsComponent } from './companyrs.component';

describe('CompanyrsComponent', () => {
  let component: CompanyrsComponent;
  let fixture: ComponentFixture<CompanyrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
