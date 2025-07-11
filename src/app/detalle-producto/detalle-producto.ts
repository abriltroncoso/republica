import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Producto } from '../services/producto';
import { CarritoService } from '../services/carrito-service';


@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.scss'
})
export class DetalleProducto {
   merch!: merch;

  constructor(
    private route: ActivatedRoute,
    private productoService: Producto,
    private carrito : CarritoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const encontrado = this.productoService.getProductoPorId(id);
    if (encontrado) {
      this.merch = encontrado;
    }
  }
    agregarAlcarrito(producto: merch) {
    this.carrito.agregarProducto(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad= 0;
  }
}
