import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from 'src/app/supabase.service';
import Flight from "../../../models/flight.model";


@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
  dataSet: Flight[] = [];

  constructor(private supabaseService: SupabaseService) {

  }

  ngOnInit(): void {
    this.supabaseService.flights().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          console.log(data);
          this.dataSet = Flight.fromJsonList(data);
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
    console.log("List flight", changes);
  }
}
