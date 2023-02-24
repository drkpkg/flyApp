import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import {InfoCountryComponent} from "./info-country/info-country.component";
import {NewCountryComponent} from "./new-country/new-country.component";
import {ListCountryComponent} from "./list-country/list-country.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    CountryComponent,
    InfoCountryComponent,
    NewCountryComponent,
    ListCountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule
  ]
})
export class CountryModule { }
