import {Component, OnInit} from '@angular/core';
import {map, Observable, of, switchMap} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {CreateRoutineService} from '../../../services/create-routine.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {Auth, authState} from '@angular/fire/auth';
import {Routine} from '../../../interfaces/routine';
import {RoutineService} from '../../../services/routine.service';

@Component({
  selector: 'app-routine-list',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './routine-list.component.html',
  styleUrl: './routine-list.component.css'
})
export class RoutineListComponent implements OnInit {
  routines$!: Observable<Routine[]>;


  constructor(private crs: CreateRoutineService, private router: Router, private auth: Auth, private routineSvc: RoutineService) {
  }

  ngOnInit() {
    this.routines$ = authState(this.auth).pipe(
      switchMap(user => {
        if (!user) return of([] as Routine[]);
        return this.routineSvc.getCreatedRoutines().pipe(
          map(all => all.filter(r => r.ownerUid === user.uid))
        );
      })
    );
  }

  new() {
    this.router.navigate(['/routineForm']).then(r => {
    });
  }

  edit(id?: string) {
    if (id) this.router.navigate(['/routineForm', id]);
  }

  delete(id?: string) {
    if (!id) return;
    if (!confirm('¿Eliminar esta rutina?')) return;
    this.crs.deleteRoutine(id)
      .then(() => {
      })
      .catch(err => console.error(err));
  }
}
