import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../../models/reservation";
import {ReservationService} from "../reservation.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

  constructor(private readonly reservationService: ReservationService) {
  }


  reservationForm: FormGroup = new FormGroup({
    checkInDate: new FormControl('', [Validators.required]),
    checkOutDate: new FormControl('', [Validators.required]),
    guestEmail: new FormControl('', [Validators.required, Validators.email]),
    guestName: new FormControl('', [Validators.required]),
    roomNumber: new FormControl(1, [Validators.required, Validators.min(1)]),
  })

  get reservations(): Reservation[] {
    return this.reservationService.getAllReservations()
  }

  onSubmit() {
    alert(JSON.stringify(this.reservationForm.getRawValue()))
    if (this.reservationForm.valid) {
      const r = this.reservationService.createReservation(this.reservationForm.getRawValue() as Reservation)
      alert('Reservation created successfully' + JSON.stringify(r))
    }

  }
}
