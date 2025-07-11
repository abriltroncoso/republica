import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class Carrito {


  merch$: Observable<merch[]>;

  constructor(private carritoService : CarritoService){
  this.merch$ = carritoService.carritoSubject.asObservable();  
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito()
    
  }


}
