import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Component({
  standalone: true,
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticia: Noticia = new Noticia;
  
  noticias = [
    {titulo: "sbsbsbbsjsbsbjjs", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "../../assets/images/noti1.png"},
    {titulo: "sbsbsbbsjsbsbjjs", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "../../assets/images/noti2.jpg"},
    {titulo: "sbsbsbbsjsbsbjjs", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "../../assets/images/noti3.jpg"},
    {titulo: "sbsbsbbsjsbsbjjs", descripcion: "bbcbebcejbc ebciejcjsbsjuiuwebciwuiu wj jbcjjwbjvhwbjw.", src: "../../assets/images/noti4.jpg"}
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