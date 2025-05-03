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
  cosas :Observable<any>
  constructor(private firestore: Firestore) {
    this.cosas = docData(doc(this.firestore, this.basePath, "contenido"), {idField: 'id'}) as Observable<any>
  }

  loadData()
  {
    return this.cosas
  }

}
