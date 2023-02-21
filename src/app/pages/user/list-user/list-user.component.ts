import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  @Input() newUser: boolean;
  @Input() editUser: boolean;
  @Input() listUser: boolean;
  dataSet: any;

  constructor() {
    this.newUser = false;
    this.editUser = false;
    this.listUser = true;
  }

  addUser() {
    this.newUser = true;
    this.editUser = false;
    this.listUser = false;
  }
}
