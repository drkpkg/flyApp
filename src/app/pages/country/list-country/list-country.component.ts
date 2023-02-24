import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from 'src/app/supabase.service';
import Country from "../../../models/country.model";

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
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

  view(data: number | undefined) {
    this.newView = false;
    this.editView = false;
    this.listView = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("List country", changes);
  }
}
