import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuComponent } from './vistas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pruebas-3af17","appId":"1:1044940065278:web:00c42fbdf7430e230918af","storageBucket":"pruebas-3af17.appspot.com","apiKey":"AIzaSyCIiUg0muqgPro0Gwj_Rh1ARNBhz2MtZog","authDomain":"pruebas-3af17.firebaseapp.com","messagingSenderId":"1044940065278","measurementId":"G-582E8BN6LC"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
