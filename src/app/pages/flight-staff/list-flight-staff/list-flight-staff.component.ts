import { Component, OnInit } from '@angular/core';
import FlightStaff from 'src/app/models/flight-staff.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-list-flight-staff',
  templateUrl: './list-flight-staff.component.html',
  styleUrls: ['./list-flight-staff.component.css']
})
export class ListFlightStaffComponent implements OnInit {

  dataSet: FlightStaff[] = [];

  constructor(private supabaseService: SupabaseService){}

  ngOnInit(): void {
    this.supabaseService.getFlightStaffView().then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      }else{
        this.dataSet = FlightStaff.fromJsonList(dataValue);
      }
    });
  }
}
