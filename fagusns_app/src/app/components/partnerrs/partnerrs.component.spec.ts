import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerrsComponent } from './partnerrs.component';

describe('PartnerrsComponent', () => {
  let component: PartnerrsComponent;
  let fixture: ComponentFixture<PartnerrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
