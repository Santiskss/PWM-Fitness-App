import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  async register(userData:any) {
    const {email, password, ...otherData} = userData;
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const userId = userCredential.user.uid;

    const userDocRef = doc(this.firestore, `users/${userId}`);
    await setDoc(userDocRef, {
      email,
      ...otherData
    });

    return userCredential;
  }

  async getUserProfile(userId:string) {
    const userDoc = doc(this.firestore, `users/${userId}`);
    const snapshot = await getDoc(userDoc);
    return snapshot.exists() ? snapshot.data() : null;
  }

  login({email, password}:any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginwithgoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

}
