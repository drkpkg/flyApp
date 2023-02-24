import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  newStaff = false;
  editStaff = false;
  listStaff = true;
  clientId: number = 0;
  constructor() {

  }
  addStaff(){
    this.newStaff = true;
    this.editStaff = false;
    this.listStaff = false;
  }

  public restoreView() {
    this.newStaff = false;
    this.editStaff = false;
    this.listStaff = true;
  }
}
