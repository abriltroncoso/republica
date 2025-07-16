import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito-service';
import { Observable } from 'rxjs';
import {  Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class Carrito {

  @Output() cerrar = new EventEmitter<void>();

  merch$: Observable<merch[]>;

  constructor(private carritoService : CarritoService){
  this.merch$ = carritoService.carritoSubject.asObservable();  
  }
   

  cerrarCarrito() {
    this.cerrar.emit();
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito()
    
  }
calcularSubtotal(merch: any[]) {
  return merch.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
}

calcularDescuento(merch: any[]) {
  return this.calcularSubtotal(merch) * 0.1;
}

calcularTotal(merch: any[]) {
  return this.calcularSubtotal(merch) - this.calcularDescuento(merch);
}

calcularCuotas(merch: any[]) {
  return (this.calcularTotal(merch) / 3).toFixed(2);
}


}
