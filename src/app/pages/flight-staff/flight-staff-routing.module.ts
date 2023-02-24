import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightStaffComponent } from './flight-staff.component';

const routes: Routes = [
  {
    path: '',
    component: FlightStaffComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightStaffRoutingModule { }
