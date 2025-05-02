import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CreateRoutineService} from '../../../services/create-routine.service';
import {Router} from '@angular/router';
import {CreatedRoutine} from '../../../interfaces/created-routine';

@Component({
  selector: 'app-routine-list',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './routine-list.component.html',
  styleUrl: './routine-list.component.css'
})
export class RoutineListComponent implements OnInit {
  routines$!: Observable<CreatedRoutine[]>;

  constructor(private crs: CreateRoutineService, private router: Router) {
  }

  ngOnInit() {
    this.routines$ = this.crs.getRoutines();
  }

  new() {
    this.router.navigate(['/routineForm']).then(r => {
      // Optional: handle the navigation result if necessary
    });
  }

  edit(id?: string) {
    if (id) this.router.navigate(['/routines', id, 'edit']);
  }

  delete(id?: string) {
    if (!id) return;
    if (!confirm('¿Eliminar esta rutina?')) return;
    this.crs.deleteRoutine(id)
      .then(() => {
        // opcional: mostrar toast
      })
      .catch(err => console.error(err));
  }
}
