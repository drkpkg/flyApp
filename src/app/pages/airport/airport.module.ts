import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { AirportComponent } from './airport.component';


@NgModule({
  declarations: [
    AirportComponent
  ],
  imports: [
    CommonModule,
    AirportRoutingModule
  ]
})
export class AirportModule { }
