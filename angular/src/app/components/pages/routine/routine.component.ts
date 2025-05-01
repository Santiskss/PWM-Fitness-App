
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RoutineService} from "../../../services/routine.service";
 import {Routine, RoutineType} from "../../../interfaces/routine";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-routine',
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css'
})
export class RoutineComponent implements OnInit {
  // Lista de tipos para el primer <select>
  routineTypes = Object.values(RoutineType) as RoutineType[];

  filteredRoutines: Routine[] = [];
  selectedType: RoutineType | '' = '';
  selectedRoutineId: string = '';
  routineDetails: Routine | null = null;

  constructor(private readonly routineSvc: RoutineService) {}

  ngOnInit(): void {
    // Opcional: precargar todas las rutinas si lo necesitas
    // this.routineSvc.getRoutines().subscribe(r => console.log('Todas:', r));
  }

  onTypeChange(): void {
    this.filteredRoutines = [];
    this.routineDetails = null;
    this.selectedRoutineId = '';

    if (!this.selectedType) {
      return;
    }

    this.routineSvc
      .getRoutinesByType(this.selectedType)
      .subscribe((list: Routine[]) => {
        this.filteredRoutines = list;
        console.log('Rutinas por tipo:', list);
      });
  }

  onRoutineChange(): void {
    this.routineDetails = null;

    if (!this.selectedRoutineId) {
      return;
    }

    this.routineSvc
      .getRoutine(this.selectedRoutineId)
      .subscribe((r: any) => {
        this.routineDetails = r;
        console.log('Detalle rutina:', r);
      });
  }
}

