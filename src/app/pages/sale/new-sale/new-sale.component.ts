import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupabaseService} from 'src/app/supabase.service';
import Sale from "../../../models/sale.model";
import Customer from "../../../models/customer.model";
import Flight from "../../../models/flight.model";
import {SaleRepository} from "../../../repositories/sale.repository";
import {PaymentMethod} from "../../../models/paymen-method.model";

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent implements OnInit {
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  sale: Sale = new Sale();
  customers: Customer[];
  flights: Flight[];
  paymentMethods: PaymentMethod[];
  passengers: any[] = [];

  constructor(private supabaseService: SupabaseService, private saleRepository: SaleRepository) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        customer_id: new FormControl('', [Validators.required]),
        flight_id: new FormControl('', [Validators.required]),
        passenger_data: new FormControl('', [Validators.required]),
        payment_method_id: new FormControl('', [Validators.required]),
        unit_price: new FormControl('', [Validators.required]),
        //passengers: this.formBuilder.array([]),
        p1_name: new FormControl('', [Validators.required]),
        p1_surname: new FormControl('', [Validators.required]),
        p1_lastname: new FormControl('', [Validators.required]),
        p1_identity_document: new FormControl('', [Validators.required]),
        p1_phone: new FormControl('', [Validators.required]),
        p1_active: new FormControl(true, [Validators.required]),
        p2_name: new FormControl('', [Validators.required]),
        p2_surname: new FormControl('', [Validators.required]),
        p2_lastname: new FormControl('', [Validators.required]),
        p2_identity_document: new FormControl('', [Validators.required]),
        p2_phone: new FormControl('', [Validators.required]),
        p2_active: new FormControl(true, [Validators.required]),
      }
    )
    this.customers = [];
    this.flights = [];
    this.paymentMethods = [];
  }

  ngOnInit() {
    this.saleRepository.updateSale(this.sale)
    this.supabaseService.getCustomerView().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          this.customers = Customer.fromJsonList(data);
        }
      }
    });
    this.supabaseService.flights().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          this.flights = Flight.fromJsonList(data);
        }
      }
    });
    this.supabaseService.paymentMethods().then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        if (data) {
          this.paymentMethods = PaymentMethod.fromJsonList(data);
        }
      }
    });
    this.formGroup.get('flight_id')?.valueChanges.subscribe((value) => {
      this.flights.forEach((flight) => {
        if (flight.id == value) {
          this.formGroup.get('unit_price')?.setValue(flight.price);
        }
      })
    });
  }

  onSubmit() {
    this.passengers.push({
      name: this.formGroup.get('p1_name')?.value,
      surname: this.formGroup.get('p1_surname')?.value,
      lastname: this.formGroup.get('p1_lastname')?.value,
      identity_document: this.formGroup.get('p1_identity_document')?.value,
      phone: this.formGroup.get('p1_phone')?.value,
      active: this.formGroup.get('p1_active')?.value,
    })
    this.passengers.push({
      name: this.formGroup.get('p2_name')?.value,
      surname: this.formGroup.get('p2_surname')?.value,
      lastname: this.formGroup.get('p2_lastname')?.value,
      identity_document: this.formGroup.get('p2_identity_document')?.value,
      phone: this.formGroup.get('p2_phone')?.value,
      active: this.formGroup.get('p2_active')?.value,
    })
    this.supabaseService.createSale(
      this.formGroup.get('customer_id')?.value,
      this.formGroup.get('flight_id')?.value,
      this.passengers,
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
}
