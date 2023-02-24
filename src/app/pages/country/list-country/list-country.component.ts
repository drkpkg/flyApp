import {Component, OnInit} from '@angular/core';
import Customer from 'src/app/models/customer.model';
import {SupabaseService} from 'src/app/supabase.service';
import Country from "../../../models/country.model";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  dataSet: Country[] = [];

  constructor(private supabaseService: SupabaseService, private notificationService: NzNotificationService) {

  }

  ngOnInit(): void {
    this.supabaseService.countries().then(({data, error}) => {
      if (error) {
        this.notificationService.error('Error', 'No se ha podido obtener la lista de países');
      } else {
        if (data) {
          this.dataSet = Country.fromJsonList(data);
        }
      }
    });
  }
}
