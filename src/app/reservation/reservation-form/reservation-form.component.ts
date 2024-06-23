import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../../models/reservation";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent{


  reservationForm: FormGroup = new FormGroup({
    checkInDate: new FormControl('', [ Validators.required]),
    checkOutDate: new FormControl('', [ Validators.required]),
    guestEmail: new FormControl('', [ Validators.required, Validators.email]),
    guestName: new FormControl('', [ Validators.required]),
    roomNumber: new FormControl(1, [ Validators.required, Validators.min(1)]),
  })


  onSubmit() {
    alert(JSON.stringify(this.reservationForm.getRawValue()))
    if(this.reservationForm.valid){
      alert('Your reservation has been submitted')
    }

  }
}
