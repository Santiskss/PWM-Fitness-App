import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          observer.next(userCredential);
          this.router.navigate(['/home']);
        })
        .catch((error: any) => {
          observer.error(error);
        });
    });
  }

  getCurrentUser(){
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.signOut();
  }
}
