import { Component } from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-rutine',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './rutine.component.html',
  styleUrl: './rutine.component.css'
})
export class RutineComponent {

}
