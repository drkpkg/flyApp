import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { InfoClientComponent } from './info-client/info-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NewUserComponent } from '../user/new-user/new-user.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    ClientComponent,
    NewClientComponent,
    ListClientComponent,
    InfoClientComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
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
export class ClientModule { }
