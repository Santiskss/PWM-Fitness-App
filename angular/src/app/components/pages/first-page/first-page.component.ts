import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';
import {ImageAndTextComponent} from '../../image-and-text/image-and-text.component';
import {CargaService} from '../../../services/carga.service';

@Component({
  selector: 'app-first-page',
  imports: [
    FooterComponent,
    HeaderComponent,
    ImageAndTextComponent
  ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent implements OnInit{
  datos_first = {
    texto_calendar: '',
    texto_today: '',
    img_today: '',
    img_calendar: ''
  }

  constructor(private cargaService: CargaService,) {
  }
  ngOnInit(): void {
    this.cargaService.loadData().subscribe(data =>
    {
      this.datos_first.texto_calendar = data.first_page.calendar;
      this.datos_first.img_calendar = data.first_page.calendar_img;
      this.datos_first.texto_today = data.first_page.today;
      this.datos_first.img_today = data.first_page.today_img;
    })
  }

}
