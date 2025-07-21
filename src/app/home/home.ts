import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected productos = [
  { img: 'assets/merch.jpg' ,
    nombre: "Merch"
  },
  { img: 'assets/eventos.jpg' ,
    nombre: "Eventos"
  },
  { img: 'assets/carta.jpg' ,
    nombre : "Carta"
  },
   { img: 'assets/tortasInicio.png',
    nombre: "Tortas"
    },
];
}
