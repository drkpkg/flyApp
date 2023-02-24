import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistComponent } from './receptionist.component';
import { ListReceptionistComponent } from './list-receptionist/list-receptionist.component';
import { NewReceptionistComponent } from './new-receptionist/new-receptionist.component';
import { InfoReceptionistComponent } from './info-receptionist/info-receptionist.component';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
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
    ReceptionistComponent,
    ListReceptionistComponent,
    NewReceptionistComponent,
    InfoReceptionistComponent
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
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
export class ReceptionistModule { }
