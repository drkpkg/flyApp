import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupabaseService} from 'src/app/supabase.service';
import Sale from "../../../models/sale.model";

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent implements OnInit, OnChanges {
  @Input() newView: boolean = false;
  @Input() editView: boolean = false;
  @Input() listView: boolean = true;
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  sale: Sale = new Sale();

  constructor(private supabaseService: SupabaseService) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        customer_id: new FormControl('', [Validators.required]),
        flight_id: new FormControl('', [Validators.required]),
        passenger_data: new FormControl('', [Validators.required]),
        payment_method_id: new FormControl('', [Validators.required]),
        unit_price: new FormControl('', [Validators.required]),
      }
    )
  }

  ngOnInit() {

  }

  onSubmit() {
    this.supabaseService.createSale(
      this.formGroup.get('customer_id')?.value,
      this.formGroup.get('flight_id')?.value,
      this.formGroup.get('passenger_data')?.value,
      this.formGroup.get('payment_method_id')?.value,
      this.formGroup.get('unit_price')?.value,
    ).then(({data, error}) => {
      if (error) {
        console.log(error)
      } else {
        window.location.reload();
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("New sale", changes);
  }
}
