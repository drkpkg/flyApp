import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import Country from "../../models/country.model";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];

  constructor(private supabaseService: SupabaseService) {
  }

  ngOnInit(): void {
    this.supabaseService.countries().then(({data, error}) => {
      if (error) {
        console.log('error', error)
      } else {
        if (data) {
          this.countries = Country.fromJsonList(data);
        }
      }
    });
  }

}
