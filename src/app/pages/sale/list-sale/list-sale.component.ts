import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from 'src/app/supabase.service';
import Sale from "../../../models/sale.model";


@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
  dataSet: Sale[] = [];

  constructor(private supabaseService: SupabaseService) {

  }

  ngOnInit(): void {
    this.supabaseService.sales().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          this.dataSet = Sale.fromJsonList(data);
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
    console.log("List sale", changes);
  }
}
