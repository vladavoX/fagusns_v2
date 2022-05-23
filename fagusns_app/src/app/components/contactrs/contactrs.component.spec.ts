import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactrsComponent } from './contactrs.component';

describe('ContactrsComponent', () => {
  let component: ContactrsComponent;
  let fixture: ComponentFixture<ContactrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
