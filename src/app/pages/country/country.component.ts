import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import Country from "../../models/country.model";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  newCountry = false;
  editCountry = false;
  listCountry = true;

  constructor(private supabaseService: SupabaseService) {
  }

  ngOnInit(): void {

  }

  addUser() {
    this.newCountry = true;
    this.editCountry = false;
    this.listCountry = false;
  }

  restoreView() {
    this.newCountry = false;
    this.editCountry = false;
    this.listCountry = true;
  }
}
