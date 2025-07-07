import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'republica';
  public logo = 'assets/logo-republica.png';
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
