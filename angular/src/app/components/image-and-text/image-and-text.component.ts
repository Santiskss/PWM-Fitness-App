import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-and-text',
  imports: [],
  templateUrl: './image-and-text.component.html',
  styleUrl: './image-and-text.component.css'
})
export class ImageAndTextComponent {
  @Input() texto: string = ""
  @Input() imagen: string = "";

}
