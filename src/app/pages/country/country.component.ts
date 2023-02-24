import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import Country from "../../models/country.model";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnChanges {
  @Input() newView = false;
  @Input() editView = false;
  @Input() listView = true;

  constructor(private supabaseService: SupabaseService) {
  }

  ngOnInit(): void {

  }

  addView() {
    this.newView = true;
    this.editView = false;
    this.listView = false;
  }

  restoreView() {
    this.newView = false;
    this.editView = false;
    this.listView = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
