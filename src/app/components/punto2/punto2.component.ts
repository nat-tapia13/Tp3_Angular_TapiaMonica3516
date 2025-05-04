import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
declare var bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-punto2',
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css',
})
export class Punto2Component {
  producto : Producto = new Producto;

productos = [
  {nombre: "notebook asus 13L", descripcion: "disco  40GB, 15pulgadas", precio:"45.5",src: "./assets/images/producto1.jpg"}, 
  {nombre: "Producto 2", precio: "200", descripcion: "Descripción del producto 2", src: "./assets/images/producto1.jpg"},
  {nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", precio:"88",src:"./assets/images/producto1.jpg"},
  {nombre: "Producto 4", precio: "400", descripcion: "Descripción del producto 4", src: "./assets/images/producto1.jpg"},
  {nombre: "Monitor LG 14", descripcion: "texto descriptivo producto 02", precio:"88",src:"./assets/images/producto1.jpg"},
  {nombre: "Producto 6", precio: "400", descripcion: "Descripción del producto 6", src: "./assets/images/producto1.jpg"},

];
constructor() { }

carrito: any[] = []; // Array para almacenar los productos agregados al carrito
mensajeDeConfirmacion: string = '';
ngOnInit() {
  // Verificar si Bootstrap está disponible
  if (typeof bootstrap === 'undefined') {
    console.error('Bootstrap JS no está disponible. Revisa la configuración.');
  }
}


agregarAlCarrito(producto: any) {
  // Verifica si el producto ya está en el carrito
  if (!this.carrito.find(p => p.nombre === producto.nombre)) {
    this.carrito.push(producto); // Agrega el producto al carrito
    this.actualizarTotal(); // Actualiza el total al agregar un producto
    this.mensajeDeConfirmacion = `${producto.nombre} ha sido agregado al carrito.`;

    // Activamos el modal SOLO cuando el producto es nuevo
    setTimeout(() => {
      const modalElement = document.getElementById('modalConfirmacion');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 100);
  }
}

actualizarTotal(): number {
  return this.carrito.reduce((total, producto) => total + Number(producto.precio),0);

}

}
