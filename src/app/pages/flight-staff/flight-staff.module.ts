import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoFlightStaffComponent } from './info-flight-staff/info-flight-staff.component';
import { ListFlightStaffComponent } from './list-flight-staff/list-flight-staff.component';
import { NewFlightStaffComponent } from './new-flight-staff/new-flight-staff.component';
import { FlightStaffRoutingModule } from './flight-staff-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FlightStaffComponent } from './flight-staff.component';



@NgModule({
  declarations: [
    FlightStaffComponent,
    InfoFlightStaffComponent,
    ListFlightStaffComponent,
    NewFlightStaffComponent
  ],
  imports: [
    CommonModule,
    FlightStaffRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzMessageModule,
    NzCardModule
  ]
})
export class FlightStaffModule { }
