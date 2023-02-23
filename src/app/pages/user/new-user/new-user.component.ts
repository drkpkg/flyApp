import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SupabaseService} from "../../../supabase.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(private supabaseService: SupabaseService) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {

  }

  submitForm() {
    if(this.formGroup.valid){
      this.supabaseService.createUser(this.formGroup.value.email, this.formGroup.value.password).then(({data, error}) => {
        let dataValue: any = data;
        if (error) {
          console.log('error', error)
        }else{
          console.log('data', dataValue)
        }
      });
    }
  }
}
