import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-day-edit',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './day-edit.component.html',
  styleUrl: './day-edit.component.css'
})
export class DayEditComponent {

}
