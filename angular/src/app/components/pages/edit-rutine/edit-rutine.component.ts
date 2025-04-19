import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-edit-rutine',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './edit-rutine.component.html',
  styleUrl: './edit-rutine.component.css'
})
export class EditRutineComponent {

}
