import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = []

  constructor() {
  }

  //CRUD operations

  // Create a new reservation
  createReservation(reservation: Omit<Reservation, 'id'>): Reservation {
    const newReservation: Reservation = {
      ...reservation,
      id: uuidv4()  // Generate a unique ID
    };
    this.reservations.push(newReservation);
    return newReservation;
  }

  // Read all reservations
  getAllReservations(): Reservation[] {
    return [...this.reservations];  // Return a copy to avoid direct manipulation
  }

  // Read a specific reservation by ID
  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  // Update an existing reservation
  patchReservation(id: string, updatedReservation: Partial<Omit<Reservation, 'id'>>): Reservation | null {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    if (index !== -1) {
      this.reservations[index] = {...this.reservations[index], ...updatedReservation};
      return this.reservations[index];
    }
    return null;
  }

  // Delete a reservation
  deleteReservation(id: string): boolean {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      return true;
    }
    return false;
  }

}
