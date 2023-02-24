import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from "../../../supabase.service";

@Component({
  selector: 'app-info-country',
  templateUrl: './info-country.component.html',
  styleUrls: ['./info-country.component.css']
})
export class InfoCountryComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
  @Input() countryId: number = 0;

  constructor(private supabaseService: SupabaseService) {

  }

  ngOnInit(): void {
    this.supabaseService.country(this.countryId).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          console.log(data);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Info country", changes);
  }
}
