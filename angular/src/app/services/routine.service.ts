
import { Injectable } from '@angular/core';
import { Routine, RoutineType } from '../interfaces/routine';
import { map, Observable } from 'rxjs';
import {collection, collectionData, doc, docData, Firestore, where} from '@angular/fire/firestore';
import {query} from '@angular/fire/firestore';
import {Auth} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class RoutineService {
  private readonly basePath = 'rutinas';
  private readonly createPath = 'user_routines';

  constructor(private readonly firestore: Firestore, private readonly auth: Auth) {}

  getRoutines(): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.basePath);
    return collectionData(colRef, { idField: 'id' }) as Observable<Routine[]>;
  }

  getRoutine(id: string): Observable<Routine> {
    const docRef = doc(this.firestore, this.basePath, id);
    return docData(docRef, { idField: 'id' }) as Observable<Routine>;
  }

  getRoutinesByType(tipo: RoutineType): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.basePath);
    const q = query(colRef, where('tipo', '==', tipo));
    return collectionData(q, { idField: 'id' }) as Observable<Routine[]>;
  }

  getCreatedRoutines(): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.createPath);
    return collectionData(colRef, { idField: 'id' }) as Observable<Routine[]>;
  }
}

