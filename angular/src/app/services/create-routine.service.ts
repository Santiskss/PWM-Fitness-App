import { Injectable } from '@angular/core';
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
import {Auth} from '@angular/fire/auth';
import {Routine} from '../interfaces/routine';

@Injectable({
  providedIn: 'root'
})
export class CreateRoutineService {
  private readonly basePath = 'user_routines';

  constructor(private readonly firestore: Firestore, private auth: Auth) {}

  getRoutines(): Observable<Routine[]> {
    const colRef = collection(this.firestore, this.basePath);
    return collectionData(colRef, { idField: 'id' }) as Observable<Routine[]>;
  }

  getRoutine(id: string): Observable<Routine> {
    const docRef = doc(this.firestore, this.basePath, id);
    return docData(docRef, { idField: 'id' }) as Observable<Routine>;
  }

  async addRoutine(r: Routine): Promise<void> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('Debes estar logueado');
      const colRef = collection(this.firestore, this.basePath);
      await addDoc(colRef, {...r, ownerUid: user.uid});
    }

  updateRoutine(id: string, r: Partial<Routine>): Promise<void> {
    const docRef = doc(this.firestore, this.basePath, id);
    return updateDoc(docRef, r);
  }

  deleteRoutine(id: string): Promise<void> {
    const docRef = doc(this.firestore, this.basePath, id);
    return deleteDoc(docRef);
  }
}
