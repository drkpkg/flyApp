import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-staff',
  templateUrl: './flight-staff.component.html',
  styleUrls: ['./flight-staff.component.css']
})
export class FlightStaffComponent implements OnInit{
  newFlightStaff = false;
  editFlightStaff = false;
  listFlightStaff = true;
  clientId: number = 0;
  constructor() {

  }
  addFlightStaff(){
    this.newFlightStaff = true;
    this.editFlightStaff = false;
    this.listFlightStaff = false;
  }

  ngOnInit(): void {
  }

  public restoreView() {
    this.newFlightStaff = false;
    this.editFlightStaff = false;
    this.listFlightStaff = true;
  }
}
