import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../supabase.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formBuilder: FormBuilder;
  formGroup: FormGroup;
  passwordVisible = false;
  password?: string;
  error: boolean = false;
  errorMessage: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/users']);
    }
  }

  onSubmit() {
    this.supabaseService.signIn(this.formGroup.value.email, this.formGroup.value.password).then(({data, error}) => {
      if (error) {
        this.error = true;
        this.errorMessage = error.message == 'Invalid login credentials' ? 'Usuario o contraseña incorrectos' : 'Ha ocurrido un error, intente nuevamente';
      }else{
        this.errorMessage = '';
        sessionStorage.setItem('token', JSON.stringify(data.session));
        this.router.navigate(['/'], {replaceUrl: true});
      }
    });
  }
}
