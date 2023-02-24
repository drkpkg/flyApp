import {Component, OnInit} from '@angular/core';
import {SupabaseService} from 'src/app/supabase.service';
import Country from "../../../models/country.model";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  dataSet: Country[] = [];

  constructor(private supabaseService: SupabaseService) {

  }

  ngOnInit(): void {
    this.supabaseService.countries().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          this.dataSet = Country.fromJsonList(data);
        }
      }
    });
  }
}
