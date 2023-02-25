import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import {ListFlightComponent} from "./list-flight/list-flight.component";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    FlightComponent,
    ListFlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    NzDividerModule,
    NzTableModule
  ]
})
export class FlightModule { }
