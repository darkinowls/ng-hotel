import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppointListComponent} from "./appoint-list/appoint-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'amedia-angular';
  property = 'value';



}
