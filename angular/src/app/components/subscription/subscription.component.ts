import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-subscription',
  imports: [],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  @Input() price: string = '';

}
