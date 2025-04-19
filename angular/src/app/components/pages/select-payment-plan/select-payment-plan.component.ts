import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-select-payment-plan',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './select-payment-plan.component.html',
  styleUrl: './select-payment-plan.component.css'
})
export class SelectPaymentPlanComponent {

}
