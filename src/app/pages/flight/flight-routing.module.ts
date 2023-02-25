import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightComponent} from "./flight.component";

const routes: Routes = [
  {
    path: '',
    component: FlightComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
