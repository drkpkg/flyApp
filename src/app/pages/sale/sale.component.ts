import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  listView: boolean;
  newView: boolean;

  constructor() {
    this.listView = true;
    this.newView = false;
  }

  ngOnInit(): void {
  }

  cancelProcess() {
    this.listView = true;
    this.newView = false;
  }

  saleProcess() {
    this.listView = false;
    this.newView = true;
  }

}
