import { Component } from '@angular/core';
import { Producto } from '../services/producto';
import { CarritoService } from '../services/carrito-service';
import { parseTemplate } from '@angular/compiler';
@Component({
  selector: 'app-merch-list',
  standalone: false,
  templateUrl: './merch-list.html',
  styleUrl: './merch-list.scss'
})
export class MerchList {

merch: merch[] = [];

  constructor(private productoService: Producto, private carrito : CarritoService) {}

  ngOnInit(): void {
    this.merch = this.productoService.getProductos();
  }

  agregarAlcarrito(producto: merch) {
    this.carrito.agregarProducto(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad= 0;
  }




}
