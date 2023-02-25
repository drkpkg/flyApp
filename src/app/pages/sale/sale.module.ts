import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import {NewSaleComponent} from "./new-sale/new-sale.component";
import {InfoSaleComponent} from "./info-sale/info-sale.component";
import {ListSaleComponent} from "./list-sale/list-sale.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSelectModule} from "ng-zorro-antd/select";
import {PassengerPersonComponent} from "./new-passenger-person/passenger-person.component";


@NgModule({
  declarations: [
    SaleComponent,
    NewSaleComponent,
    InfoSaleComponent,
    ListSaleComponent,
    PassengerPersonComponent
  ],
    imports: [
        CommonModule,
        SaleRoutingModule,
        NzCardModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzTableModule,
        NzDividerModule,
        NzSelectModule
    ]
})
export class SaleModule { }
