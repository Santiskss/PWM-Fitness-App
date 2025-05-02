import { Injectable } from '@angular/core';
import {CreatedRoutine} from '../interfaces/created-routine';
import {Observable} from 'rxjs';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreateRoutineService {
  private readonly basePath = 'user_routines';

  constructor(private readonly firestore: Firestore) {}

  getRoutines(): Observable<CreatedRoutine[]> {
    const colRef = collection(this.firestore, this.basePath);
    return collectionData(colRef, { idField: 'id' }) as Observable<CreatedRoutine[]>;
  }

  getRoutine(id: string): Observable<CreatedRoutine> {
    const docRef = doc(this.firestore, this.basePath, id);
    return docData(docRef, { idField: 'id' }) as Observable<CreatedRoutine>;
  }

  addRoutine(r: CreatedRoutine): Promise<void> {
    const colRef = collection(this.firestore, this.basePath);
    return addDoc(colRef, r).then(() => {});
  }

  updateRoutine(id: string, r: Partial<CreatedRoutine>): Promise<void> {
    const docRef = doc(this.firestore, this.basePath, id);
    return updateDoc(docRef, r);
  }

  deleteRoutine(id: string): Promise<void> {
    const docRef = doc(this.firestore, this.basePath, id);
    return deleteDoc(docRef);
  }
}
