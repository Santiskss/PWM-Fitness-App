import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {Exercise} from '../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
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

  listGroups(): Observable<string[]> {
    return of(this.groupNames);
  }

  listByGroup(group: string): Observable<Exercise[]> {
    const colRef = collection(this.firestore, `exercises_${group}`);
    return collectionData(colRef, { idField: 'id' }) as Observable<Exercise[]>;
  }
}
