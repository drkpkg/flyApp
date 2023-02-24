import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistComponent } from './receptionist.component';
import { ListReceptionistComponent } from './list-receptionist/list-receptionist.component';
import { NewReceptionistComponent } from './new-receptionist/new-receptionist.component';
import { InfoReceptionistComponent } from './info-receptionist/info-receptionist.component';



@NgModule({
  declarations: [
    ReceptionistComponent,
    ListReceptionistComponent,
    NewReceptionistComponent,
    InfoReceptionistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceptionistModule { }
