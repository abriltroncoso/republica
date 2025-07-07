import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected productos = [
  { img: 'assets/gorra.png' ,
    nombre: "Merch"
  },
  { img: 'assets/eventos.png' ,
    nombre: "Eventos"
  },
  { img: 'assets/comida.png' ,
    nombre : "Carta"
  },
   { img: 'assets/cartel.png',
    nombre: "tortas"
    },
];
}
