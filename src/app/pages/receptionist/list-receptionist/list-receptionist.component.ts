import { Component } from '@angular/core';
import Receptionist from 'src/app/models/receptionist.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-list-receptionist',
  templateUrl: './list-receptionist.component.html',
  styleUrls: ['./list-receptionist.component.css']
})
export class ListReceptionistComponent {
  dataSet: Receptionist[] = [];

  constructor(private supabaseService: SupabaseService){}

  ngOnInit(): void {
    this.supabaseService.getReceptionistView().then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      }else{
        this.dataSet = Receptionist.fromJsonList(dataValue);
      }
    });
  }
}
