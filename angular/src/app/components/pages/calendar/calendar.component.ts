import { Component } from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-calendar',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
