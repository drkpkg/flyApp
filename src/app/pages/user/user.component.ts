import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  newUser = false;
  editUser = false;
  listUser = true;
  userId: number = 0;
  constructor() {

  }
  addUser(){
    this.newUser = true;
    this.editUser = false;
    this.listUser = false;
  }

  ngOnInit(): void {
  }

}
