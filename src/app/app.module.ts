import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes'; // Agrega esto si ya tienes el módulo de rutas
import { AppComponent } from './app.component';

// import { Punto1Component } from './components/punto1/punto1.component';
// import { Punto2Component } from './components/punto2/punto2.component';
// import { Punto3Component } from './components/punto3/punto3.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    // Punto1Component,
    // Punto2Component,
    // Punto3Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Esto asegura que tu aplicación soporte rutas
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
