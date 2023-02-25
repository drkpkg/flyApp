import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from "../../../supabase.service";

@Component({
  selector: 'app-info-R',
  templateUrl: './info-sale.component.html',
  styleUrls: ['./info-sale.component.css']
})
export class InfoSaleComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
  @Input() saleId: number = 0;

  constructor(private supabaseService: SupabaseService) {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Info sale", changes);
  }
}
