import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {SubscriptionComponent} from '../../subscription/subscription.component';
import {CargaService} from '../../../services/carga.service';
import {NgForOf} from '@angular/common';

interface pregTemp {
  pregunta: string
}
@Component({
  selector: 'app-select-payment-plan',
  imports: [
    HeaderComponent,
    FooterComponent,
    SubscriptionComponent,
    NgForOf
  ],
  templateUrl: './select-payment-plan.component.html',
  styleUrl: './select-payment-plan.component.css'
})
export class SelectPaymentPlanComponent implements OnInit{
  datos_sub = {
    plan1: {precio: '', name: '', imagen: ''},
    plan2: {precio: '', name: '', imagen: ''},
    plan3: {precio: '', name: '', imagen: ''},
    preguntas: [] as {pregunta: string, respues: string}[]
  }
  constructor(private cargaService: CargaService) {
  }

  ngOnInit(): void {
        this.cargaService.loadData().subscribe(data =>
        {
          this.datos_sub.plan1 = data.suscripciones.planes[0]
          this.datos_sub.plan2 = data.suscripciones.planes[1]
          this.datos_sub.plan3 = data.suscripciones.planes[2]
          this.datos_sub.preguntas = data.suscripciones.preguntas


        })
    }
}
