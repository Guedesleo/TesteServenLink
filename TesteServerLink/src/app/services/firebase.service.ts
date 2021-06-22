import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../shared/services/user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  userData: any;
  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) {}
  emailSignIn(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
      })
      .catch((error) => window.alert('Digite o email/senha novamente'));
  }
  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        window.alert('Cadastrado com sucesso!');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        window.alert('Digite o email/senha novamente');
        this.router.navigate(['/register-users']);
      });
  }

  async forgotPasswords(email: string) {
    await this.firebaseAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error) => window.alert('Digite o Email novamente'));
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
