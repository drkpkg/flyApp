import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newEmployee = false;
  editEmployee = false;
  listEmployee = true;
  EmployeeId: number = 0;
  constructor() {

  }
  addEmployee(){
    this.newEmployee = true;
    this.editEmployee = false;
    this.listEmployee = false;
  }

  ngOnInit(): void {
  }

  public restoreView() {
    this.newEmployee = false;
    this.editEmployee = false;
    this.listEmployee = true;
  }

}
