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
  newUser = false;
  editUser = false;
  listUser = true;
  userId: number = 0;
  countries: Country[] = [];

  constructor(private supabaseService: SupabaseService, private notificationService: NzNotificationService) {
  }

  ngOnInit(): void {

  }
  addUser(){
    this.newUser = true;
    this.editUser = false;
    this.listUser = false;
  }

  restoreView() {
    this.newUser = false;
    this.editUser = false;
    this.listUser = true;
  }
}
