import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig =
  {apiKey: "AIzaSyDboHLi3Vl-xgoEGRgh0NmWwBSopasL1Wc",
  authDomain: "fitness-app-9ff3b.firebaseapp.com",
  projectId: "fitness-app-9ff3b",
  storageBucket: "fitness-app-9ff3b.firebasestorage.app",
  messagingSenderId: "413264381975",
  appId: "1:413264381975:web:94b5d200ea4909c20d3452"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "fitness-app-9ff3b", appId: "1:413264381975:web:94b5d200ea4909c20d3452", storageBucket: "fitness-app-9ff3b.firebasestorage.app", apiKey: "AIzaSyDboHLi3Vl-xgoEGRgh0NmWwBSopasL1Wc", authDomain: "fitness-app-9ff3b.firebaseapp.com", messagingSenderId: "413264381975" })), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "fitness-app-9ff3b", appId: "1:413264381975:web:94b5d200ea4909c20d3452", storageBucket: "fitness-app-9ff3b.firebasestorage.app", apiKey: "AIzaSyDboHLi3Vl-xgoEGRgh0NmWwBSopasL1Wc", authDomain: "fitness-app-9ff3b.firebaseapp.com", messagingSenderId: "413264381975" })), provideAuth(() => getAuth())
  ]
};
