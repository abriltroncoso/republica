import { Component } from '@angular/core';
import { CarritoService } from './services/carrito-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'republica';
  public logo = 'assets/logo-republica.png';
   mostrarCarrito = false;
   
    toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
