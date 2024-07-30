import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-4cc62',
        appId: '1:937167945680:web:01d6bbba6c16be57f403d5',
        storageBucket: 'simple-crm-4cc62.appspot.com',
        apiKey: 'AIzaSyB1Q8upBUVrwZzsxk3rkD_6jShGsapKeac',
        authDomain: 'simple-crm-4cc62.firebaseapp.com',
        messagingSenderId: '937167945680',
        measurementId: 'G-KHFLRSSFML',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
