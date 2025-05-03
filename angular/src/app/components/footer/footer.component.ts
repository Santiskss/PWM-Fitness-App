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
    blog: "",
    insta: {} as {imagen: "", link: ""},
    face: {} as {imagen: "", link: ""},
    twit: {} as {imagen: "", link: ""},
    tik: {} as {imagen: "", link: ""},
    logo: ""


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
      this.datos_footer.insta = datos.redes_sociales_footer[0]
      this.datos_footer.face = datos.redes_sociales_footer[1]
      this.datos_footer.twit = datos.redes_sociales_footer[2]
      this.datos_footer.tik = datos.redes_sociales_footer[3]
      this.datos_footer.logo = datos.logo

    })
  }


  redirigir(link: string) {
    window.open(link, '_blank');
  }
}
