import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appoint-list',
  standalone: true,
  imports: [FormsModule, NgForOf, DatePipe, NgIf],
  templateUrl: './appoint-list.component.html',
  styleUrl: './appoint-list.component.css'
})
export class AppointListComponent implements OnInit {

  private _appointmentsKey = "appointments"

  private _appointments: Appointment[] = [{
    id: "1",
    title: "Get a 1",
    date: new Date()
  },

  ];

  // constructor() {
  //   this.appointments = this.loadFromLocalStorage();
  // }

  ngOnInit(): void {
    this.appointments = this.loadFromLocalStorage();
  }

  newAppointment: Appointment = {
    id: "",
    title: "",
    date: new Date()
  }


  get appointments() {
    return this._appointments;
  }

  set appointments(value) {
    this._appointments = value;
  }

  private saveInLocalStorage() {
    localStorage.setItem(this._appointmentsKey, JSON.stringify(this.appointments));
  }

  private loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this._appointmentsKey) || "[]");
  }

  add() {
    this.appointments.push({
      id: "2",
      title: this.newAppointment.title,
      date: this.newAppointment.date
    });
    this.saveInLocalStorage()
    this.newAppointment.title = "";
    this.newAppointment.date = new Date();
  }

  delete(index: number) {
    this.appointments.splice(index, 1)
    this.saveInLocalStorage()
  }

  insert(index: number) {
    this.appointments.splice(index, -1, {
      id: "3",
      title: this.newAppointment.title,
      date: this.newAppointment.date
    })
    this.saveInLocalStorage()
    this.newAppointment.title = "";
    this.newAppointment.date = new Date();
  }

}
