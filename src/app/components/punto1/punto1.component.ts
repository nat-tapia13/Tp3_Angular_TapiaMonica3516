import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../models/noticia';

@Component({
  standalone: true,
  selector: 'app-punto1',
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css',
})
export class Punto1Component {
  noticia: Noticia = new Noticia;
  
  noticias = [
    {titulo: "Titulo01", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "./assets/images/noticia1.jpg"},
    {titulo: "Titulo02", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "./assets/images/noticia2.jpg"},
    {titulo: "Titulo03", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "./assets/images/noticia3.jpg"},
    {titulo: "Titulo04", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "./assets/images/noticia4.jpg"}
  ];
  
  indice = 0;

  constructor() { }

  siguiente(indice: number): void {
    if(indice < this.noticias.length - 1) {
      indice++;
    } else {
      indice = 0;
    }
    this.indice = indice;
  }

  anterior(indice: number): void {
    if(indice > 0) {
      indice--;
    } else {
      indice = this.noticias.length - 1;
    }
    this.indice = indice;
  }
  
  ngOnInit(): void {
  }
}