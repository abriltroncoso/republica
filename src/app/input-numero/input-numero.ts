import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-numero',
  standalone: false,
  templateUrl: './input-numero.html',
  styleUrl: './input-numero.scss'
})
export class InputNumero {
  constructor() {}

  @Input()
  producto! : merch;

  disminuirCantidad(producto : merch){
  if (producto.cantidad > 0) {
    producto.cantidad--;
  }
}
aumentarCantidad(producto : merch){
  if (producto.stock > producto.cantidad) {
    producto.cantidad++;
  }
}
}

