import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {CargaService} from '../../../services/carga.service';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  datos_main =
    {
      mensaje: "",
      foto: ""

    }
  constructor(private cargaService: CargaService) {
  }

  ngOnInit(): void {
        this.cargaService.loadData().subscribe(data =>
        {
          this.datos_main.mensaje = data.message_main_page
          this.datos_main.foto = data.image_main_page
        })
    }

}
