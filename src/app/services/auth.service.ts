import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 2000);
    });
  }

  signOut() {
    this.isAuth = false;
  }
  createNewUser(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        );
    });
  }
  signOutUser() {
    firebase.auth().signOut();
  }
}
