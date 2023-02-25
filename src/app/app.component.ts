import { Component } from '@angular/core';
import {SupabaseService} from "./supabase.service";
import {SignInWithIdTokenCredentials} from "@supabase/supabase-js";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  hasUser: boolean = false;

  constructor(private supabaseService: SupabaseService, private router: Router) {
    this.hasUser = false;
    this.checkUser();
  }

  private checkUser() {
    if (sessionStorage.getItem('token') != null) {
      let token = JSON.parse(sessionStorage.getItem('token') as string);
      this.supabaseService.signInWithToken(token.refresh_token).then(({data, error}) => {
        if (error) {
          console.log('error', error)
        }else{
          sessionStorage.setItem('token', JSON.stringify(data.session));
          this.hasUser = true;
        }
      });
    }else{
      if (this.router.url != '/login'){
        this.router.navigate(['/login']);
      }
    }
  }
}
