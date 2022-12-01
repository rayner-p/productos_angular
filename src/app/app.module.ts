import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [AppComponent, DashboardComponent, ListProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
