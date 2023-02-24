import { Component } from '@angular/core';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent {
  newReceptionist = false;
  editReceptionist = false;
  listReceptionist = true;
  clientId: number = 0;
  constructor() {

  }
  addReceptionist(){
    this.newReceptionist = true;
    this.editReceptionist = false;
    this.listReceptionist = false;
  }

  public restoreView() {
    this.newReceptionist = false;
    this.editReceptionist = false;
    this.listReceptionist = true;
  }
}
