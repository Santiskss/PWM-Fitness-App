import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private firestore: Firestore) { }

  addUser(user: User) {
    const userRef = collection(this.firestore, 'user');
    return addDoc(userRef, user);
  }
}
