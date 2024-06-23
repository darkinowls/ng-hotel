import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterLink} from "@angular/router";
import {ReservationModule} from "../reservation/reservation.module";
import {ReservationListComponent} from "../reservation/reservation-list/reservation-list.component";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    // ReservationModule
  ],
})
export class HomeModule { }
