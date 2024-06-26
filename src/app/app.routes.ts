import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservationListComponent} from "./reservation/reservation-list/reservation-list.component";
import {ReservationFormComponent} from "./reservation/reservation-form/reservation-form.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'list',
    component: ReservationListComponent
  },

  {
    path: 'new',
    component: ReservationFormComponent
  },
];
