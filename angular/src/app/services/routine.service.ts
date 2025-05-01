
import { Injectable } from '@angular/core';
import { Routine, RoutineType } from '../interfaces/routine';
import { map, Observable } from 'rxjs';
import {collection, collectionData, doc, docData, Firestore, where} from '@angular/fire/firestore';
import {query} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class RoutineService {
  private readonly basePath = 'rutinas';

  constructor(private readonly firestore: Firestore) {}

  /** Devuelve todas las rutinas */
  getRoutines(): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.basePath);
    // collectionData ya incluye el campo `id`
    return collectionData(colRef, { idField: 'id' }) as Observable<Routine[]>;
  }

  /** Devuelve una rutina por su ID */
  getRoutine(id: string): Observable<Routine> {
    const docRef = doc(this.firestore, this.basePath, id);
    return docData(docRef, { idField: 'id' }) as Observable<Routine>;
  }

  /** Devuelve las rutinas filtradas por el campo `tipo` */
  getRoutinesByType(tipo: RoutineType): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.basePath);
    const q = query(colRef, where('tipo', '==', tipo));
    return collectionData(q, { idField: 'id' }) as Observable<Routine[]>;
  }
}

