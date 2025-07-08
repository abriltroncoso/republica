import { Component } from '@angular/core';
import { Producto } from '../service/producto';
@Component({
  selector: 'app-merch-list',
  standalone: false,
  templateUrl: './merch-list.html',
  styleUrl: './merch-list.scss'
})
export class MerchList {

merch: merch[] = [];

  constructor(private productoService: Producto) {}

  ngOnInit(): void {
    this.merch = this.productoService.getProductos();
  }

  agregarAlcarrito(producto: merch) {
    console.log('Agregado al carrito:', producto);
  }




}
