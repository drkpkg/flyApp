import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlightStaffComponent } from './list-flight-staff.component';

describe('ListFlightStaffComponent', () => {
  let component: ListFlightStaffComponent;
  let fixture: ComponentFixture<ListFlightStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFlightStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFlightStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
