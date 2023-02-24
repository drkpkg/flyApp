import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { InfoStaffComponent } from './info-staff/info-staff.component';



@NgModule({
  declarations: [
    ListStaffComponent,
    NewStaffComponent,
    InfoStaffComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaffModule { }
