import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistComponent } from './receptionist.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
