import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStaffComponent } from './flight-staff.component';

describe('FlightStaffComponent', () => {
  let component: FlightStaffComponent;
  let fixture: ComponentFixture<FlightStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
