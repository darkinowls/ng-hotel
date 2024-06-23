import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationListComponent} from "./reservation-list/reservation-list.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationFormComponent} from "./reservation-form/reservation-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReservationService} from "./reservation.service";


@NgModule({
  declarations: [ReservationComponent, ReservationListComponent, ReservationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class ReservationModule {
}
