// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebase = {
    apiKey: "AIzaSyAY3x5PETJAQUjwspcCC5Cexo2xvpswN90",
    authDomain: "my-angular-project-596df.firebaseapp.com",
    projectId: "my-angular-project-596df",
    storageBucket: "my-angular-project-596df.appspot.com",
    messagingSenderId: "907332762450",
    appId: "1:907332762450:web:882be34226a31f0c79188b",
    measurementId: "G-H1DKYVBMJ5"
  }

  public auth;

  constructor() {
    const app = initializeApp(this.firebase);
    this.auth = getAuth(app);
  }
}
