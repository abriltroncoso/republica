import { Component } from '@angular/core';

@Component({
  selector: 'app-tortas',
  standalone: false,
  templateUrl: './tortas.html',
  styleUrl: './tortas.scss'
})
export class Tortas {
 tortas = [
    {
      nombre: 'Rogel',
      descripcion: 'Rogel casero ideal para eventos informales',
      imagen: 'assets/rogel.png',
    },
    {
      nombre: 'Torta sin TACC',
      descripcion: 'Especial para personas celíacas.',
      imagen: 'assets/rogel.png',
    },
    {
      nombre: 'Torta de boda',
      descripcion: 'Elegante y personalizada para tu casamiento.',
      imagen: 'assets/rogel.png',
    },
    // ...agregás más tortas acá
  ];
}
