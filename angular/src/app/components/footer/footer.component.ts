import {Component, OnInit} from '@angular/core';
import {CargaService} from '../../services/carga.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    standalone: true,
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  datos_footer = {
    terminos: "",
    estado: "",
    comunidad: "",
    nosotros: "",
    personal: "",
    blog: ""

  }
  constructor(private cargaService: CargaService) {  }

  ngOnInit() {
    this.cargaService.loadData().subscribe(datos =>
    {
      this.datos_footer.terminos = datos.footer_text[0]
      this.datos_footer.estado = datos.footer_text[1]
      this.datos_footer.comunidad = datos.footer_text[2]
      this.datos_footer.nosotros = datos.company_footer[0]
      this.datos_footer.personal = datos.company_footer[1]
      this.datos_footer.blog = datos.company_footer[2]

    })
  }


}
