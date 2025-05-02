import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {UsedExercise} from '../interfaces/used-exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  // Grupos musculares disponibles
  private readonly groupNames = [
    'cardio',
    'chest',
    'lower_arms',
    'lower_legs',
    'neck',
    'shoulders',
    'upper_arms',
    'upper_legs',
    'waist',
    'back'
  ];

  constructor(private firestore: Firestore) {}

  /** Devuelve sólo los nombres de grupos */
  listGroups(): Observable<string[]> {
    return of(this.groupNames);
  }

  /** Devuelve la lista de ejercicios para un grupo */
  listByGroup(group: string): Observable<UsedExercise[]> {
    const colRef = collection(this.firestore, `exercises_${group}`);
    // Asumimos que en cada doc hay { id, name, reps?, ... }
    return collectionData(colRef, { idField: 'id' }) as Observable<UsedExercise[]>;
  }
}
