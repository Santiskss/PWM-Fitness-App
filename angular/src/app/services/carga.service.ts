import { Injectable } from '@angular/core';
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
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaService {
  private readonly basePath = 'data';
  constructor(private firestore: Firestore) { }
  loadHeader()
  {
    const ref = doc(this.firestore, this.basePath, "contenido")
    return docData(ref, {idField: 'id'}) as Observable<any>
  }
}
