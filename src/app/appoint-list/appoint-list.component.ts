import {Component} from '@angular/core';
import {JsonPipe, KeyValuePipe} from "@angular/common";

@Component({
  selector: 'app-appoint-list',
  standalone: true,
  imports: [
    JsonPipe,
    KeyValuePipe
  ],
  templateUrl: './appoint-list.component.html',
  styleUrl: './appoint-list.component.css'
})
export class AppointListComponent {

  private _appointment = {
    data: "Get a haircut"
  };

  get appointment () {
    return this._appointment;
  }

  set appointment (value) {
    this._appointment = value;
  }

  trigerEvent() {
    console.log('Event trigered');
    this.appointment = {
      data: "Get a 1"
    };
  }

}
