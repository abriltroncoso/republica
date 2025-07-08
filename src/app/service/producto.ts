import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Producto {

  constructor() { }

   merch : merch[] = [
   {
    id:1 ,
    nombre : "Termo inox",
    precio :45000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/termo.png" ,
    cantidad: 0
  },
  {
    id : 2,
    nombre : "Termo cc",
    precio :50000,
    stock : 0,
    descripcion: "termo personalizado" ,
    imagen : "/assets/termo-cc.png" ,
    cantidad: 0
  },
  {
    id: 3,
    nombre : "yerbero morral",
    precio :20500,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/yerbero-morral.png" ,
    cantidad: 0
  },
  {
    id : 4,
    nombre : "mate sp",
    precio :18000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/mate-sp.png" ,
    cantidad: 0
  },
  {
    id : 5,
    nombre : "matera morral",
    precio :80000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/matera-morral.png" ,
    cantidad: 0
  },
  {
    id : 6,
    nombre : "combo nacional",
    precio :40000,
    stock : 4,
    descripcion: "termo personalizado" ,
    imagen : "/assets/combo-nacional.png" ,
    cantidad: 0
  },
  {
    id : 7,
    nombre : "mate sp coquito",
    precio :12000,
    stock : 0,
    descripcion: "termo personalizado" ,
    imagen : "/assets/coquito.png" ,
    cantidad: 0
  }
]
  getProductos() : merch[]{
    return this.merch;
  }
 getProductoPorId(id: number): merch | undefined {
    return this.merch.find(p => p.id === id);
  }
}
