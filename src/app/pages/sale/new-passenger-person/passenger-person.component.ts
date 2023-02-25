import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SupabaseService} from "../../../supabase.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// {"name": "John", "surname": "Doe", "lastname": "Doe", "identity_document": "999928938", "phone": "999999999"},
@Component({
  selector: 'app-passenger-person-form',
  templateUrl: './passenger-person.component.html',
  styleUrls: ['./passenger-person.component.css']
})
export class PassengerPersonComponent implements OnInit {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  customers: any[];

  constructor(private supabaseService: SupabaseService) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        identity_document: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
      }
    )
    this.customers = [];
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }
}
