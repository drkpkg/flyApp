import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/models/customer.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  dataSet: Customer[] = [];

  constructor(private supabaseService: SupabaseService){

  }

  ngOnInit(): void {
      this.supabaseService.getCustomerView().then(({data, error}) => {
      let dataValue: any = data;
      if (error) {
        console.log('error', error)
      }else{
        this.dataSet = Customer.fromJsonList(dataValue);
      }
    });
  }
}
