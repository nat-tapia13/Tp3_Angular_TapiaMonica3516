import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  
  palabras: Array<string> = [];
  palabra: string = '';
  vpalabra: Array<string> = [];
  letrasAdivinadas: Array<string> = [];
  intentos: number = 0;
  maxIntentos: number = 6;
  juegoTerminado: boolean = false;
  mensaje: string = '';

  constructor() { 
    this.palabras = ['MESSI',
      'DIMARIA',
      'MESSI',
      'JULIAN ALVAREZ',
      'GONZALO MONTIEL',
      'CUTI ROMERO',
      'PAULO DYBALA',
      'NICOLAS TAGLIAFICO',
      'EMILIANO MARTINEZ',
      'LEONARDO PAREDES',
      'RODRIGO DE PAUL',
    ];
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.vpalabra = this.palabra.split('');
    this.letrasAdivinadas = new Array(this.palabra.length).fill('_');
    this.intentos = 0;
    this.juegoTerminado = false;
    this.mensaje = '';
  }

  verificarLetra(letra: string) {
    if (this.juegoTerminado) return;

    let letraEncontrada = false;
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i].toUpperCase() === letra.toUpperCase()) {
        this.letrasAdivinadas[i] = letra;
        letraEncontrada = true;
      }
    }

    if (!letraEncontrada) {
      this.intentos++;
    }

    this.verificarEstadoJuego();
  }

  verificarEstadoJuego() {
    if (this.intentos >= this.maxIntentos) {
      this.juegoTerminado = true;
      this.mensaje = '¡Perdiste! La palabra era: ' + this.palabra;
    } else if (!this.letrasAdivinadas.includes('_')) {
      this.juegoTerminado = true;
      this.mensaje = '¡Ganaste!';
    }
  }

  ngOnInit(): void {
  }
}
