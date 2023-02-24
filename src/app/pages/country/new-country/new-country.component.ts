import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit{
  formBuilder: FormBuilder;
  formGroup: FormGroup;

  constructor(private supabaseService: SupabaseService, private messageService: NzMessageService){
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group(
      {
        name: new FormControl('',[Validators.required]),
      }
    )
  }

  ngOnInit(){

  }

  onSubmit(){
    this.supabaseService.createCountry(this.formGroup.value.name).then(({data, error}) => {
      if(error)
      {
        this.messageService.create(
          'error',
          'No se ha podido crear el país',
        );
      }else{
        this.messageService.success('Se ha creado el país correctamente');
      }
    })
  }
}
