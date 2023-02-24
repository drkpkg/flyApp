import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { InfoStaffComponent } from './info-staff/info-staff.component';
import { StaffComponent } from './staff.component';
import { StaffRoutingModule } from './staff-routing.module';
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
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    StaffComponent,
    ListStaffComponent,
    NewStaffComponent,
    InfoStaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzMessageModule,
    NzCardModule,
    NzSelectModule
  ]
})
export class StaffModule { }
