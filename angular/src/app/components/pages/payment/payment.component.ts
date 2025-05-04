import { Component } from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-payment',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
