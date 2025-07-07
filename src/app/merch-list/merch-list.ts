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
    nombre : "mate",
    precio :14000,
    stock : 4,
    descripcion: "mate de calabaza"  
  }
]
}
