import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-create-rutine',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './create-rutine.component.html',
  styleUrl: './create-rutine.component.css'
})
export class CreateRutineComponent {

}
