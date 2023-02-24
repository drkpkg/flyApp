import { Component, OnInit } from '@angular/core';
import Staff from 'src/app/models/staff.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

  dataSet: Staff[] = []

  constructor(private supabaseService: SupabaseService){}

  ngOnInit(): void {
    this.supabaseService.getStaffView().then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      }else{
        this.dataSet = Staff.fromJsonList(dataValue);
      }
    });
  }
}
