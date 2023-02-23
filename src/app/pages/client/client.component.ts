import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  newClient = false;
  editClient = false;
  listClient = true;
  clientId: number = 0;
  constructor() {

  }
  addClient(){
    this.newClient = true;
    this.editClient = false;
    this.listClient = false;
  }

  ngOnInit(): void {
  }

  public restoreView() {
    this.newClient = false;
    this.editClient = false;
    this.listClient = true;
  }
}
