import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'republica';
  protected logo = 'assets/images/logo-republica.png';
  protected productos = [
  { img: 'assets/gorra.png' },
  { img: 'assets/eventos.png' },
  { img: 'assets/comida.png' },
   { img: 'assets/cartel.png' },
];
}
