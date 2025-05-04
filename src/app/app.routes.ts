import { Routes } from '@angular/router';
import { HeaderComponent }  from './components/header/header.component'
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';

export const routes: Routes = [
  // { path: "header", component: HeaderComponent },
  { path: "punto1", component: Punto1Component },
  { path: "punto2", component: Punto2Component },
  { path: "punto3", component: Punto3Component },
  { path: '', redirectTo: '/punto1', pathMatch: 'full' },
  { path: '**', redirectTo: '/header  ' }
 
];
