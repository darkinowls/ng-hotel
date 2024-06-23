import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AppointListComponent} from "./appoint-list/appoint-list.component";
import {BookComponent} from "./book/book.component";
import {HomeModule} from "./home/home.module";
import {ReservationModule} from "./reservation/reservation.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointListComponent, BookComponent, HomeModule, ReservationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'amedia-angular';
  property = 'value';


}
