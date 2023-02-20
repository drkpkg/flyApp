import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';


@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
