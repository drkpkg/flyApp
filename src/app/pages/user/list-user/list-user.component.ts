import {Component, Input, OnInit} from '@angular/core';
import {SupabaseService} from "../../../supabase.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  dataSet: any;

  constructor(private supabaseService: SupabaseService) {
    this.dataSet = [];
  }

  ngOnInit(): void {
    this.supabaseService.getUsers().then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      }else{
        this.dataSet = dataValue;
      }
    });
  }
}
