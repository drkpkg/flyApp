import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightStaffComponent } from './new-flight-staff.component';

describe('NewFlightStaffComponent', () => {
  let component: NewFlightStaffComponent;
  let fixture: ComponentFixture<NewFlightStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFlightStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFlightStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
