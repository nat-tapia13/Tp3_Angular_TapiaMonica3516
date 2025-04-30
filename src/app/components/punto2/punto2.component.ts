import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  standalone: true,
  selector: 'app-punto2',
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css',
})
export class Punto2Component {
  producto : Producto = new Producto;

  constructor() { }

}