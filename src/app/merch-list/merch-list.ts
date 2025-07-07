import { Component } from '@angular/core';

@Component({
  selector: 'app-merch-list',
  standalone: false,
  templateUrl: './merch-list.html',
  styleUrl: './merch-list.scss'
})
export class MerchList {
 merch : merch[] = [
   {
    nombre : "Termo inox",
    precio :45000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/termo.png" ,
    cantidad: 0
  },
  {
    nombre : "Termo cc",
    precio :50000,
    stock : 0,
    descripcion: "termo personalizado" ,
    imagen : "/assets/termo-cc.png" ,
    cantidad: 0
  },
  {
    nombre : "yerbero morral",
    precio :20500,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/yerbero-morral.png" ,
    cantidad: 0
  },
  {
    nombre : "mate sp",
    precio :18000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/mate-sp.png" ,
    cantidad: 0
  },
  {
    nombre : "matera morral",
    precio :80000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/matera-morral.png" ,
    cantidad: 0
  },
  {
    nombre : "combo nacional",
    precio :40000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/combo-nacional.png" ,
    cantidad: 0
  },
  {
    nombre : "mate sp coquito",
    precio :12000,
    stock : 0,
    descripcion: "termo personalizado" ,
    imagen : "/assets/coquito.png" ,
    cantidad: 0
  }
]
agregarAlcarrito(producto : merch){

}

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
