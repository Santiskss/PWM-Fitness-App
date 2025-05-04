import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {ImageAndTextComponent} from '../../image-and-text/image-and-text.component';
import {RoutineService} from '../../../services/routine.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pro-routine',
  imports: [
    HeaderComponent,
    FooterComponent,
    ImageAndTextComponent,
    NgForOf
  ],
  templateUrl: './pro-rutine.component.html',
  styleUrl: './pro-rutine.component.css'
})
export class ProRutineComponent implements OnInit{
  rutinas_pro = [] as {description: string}[]
  constructor(private routineService: RoutineService) {
  }

  ngOnInit(): void {
    this.routineService.getRoutines().subscribe(rutinas => {
      for (let i = 0; i < 40; i = i + 10) {
        this.rutinas_pro.push(rutinas[i]);
      }
      console.log();
    })

    }
}
