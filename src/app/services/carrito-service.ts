import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private servicioProducto : Producto) { }
  private productos: merch[] = [];
  carritoSubject = new BehaviorSubject<merch[]>(this.productos);
 

  agregarProducto(producto: merch) {
    let item = this.productos.find((v1)=> v1.nombre == producto.nombre);
    if (!item) {
      this.productos.push({... producto });
    }else{
      item.cantidad += producto.cantidad;
    }
     this.carritoSubject.next(this.productos);
  }

  vaciarCarrito() {
    this.productos.forEach(p => {
      this.servicioProducto.modificarStock(p)
    });
    this.productos = [];
    this.carritoSubject.next(this.productos);
  }
}
