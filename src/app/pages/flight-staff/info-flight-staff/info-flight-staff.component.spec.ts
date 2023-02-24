import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFlightStaffComponent } from './info-flight-staff.component';

describe('InfoFlightStaffComponent', () => {
  let component: InfoFlightStaffComponent;
  let fixture: ComponentFixture<InfoFlightStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFlightStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFlightStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
