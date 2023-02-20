import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftComponent } from './aircraft.component';


@NgModule({
  declarations: [
    AircraftComponent
  ],
  imports: [
    CommonModule,
    AircraftRoutingModule
  ]
})
export class AircraftModule { }
