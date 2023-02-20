import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirportComponent} from "./airport.component";

const routes: Routes = [
  { path: '', component: AirportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
