import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  standalone: false,
  templateUrl: './carta.html',
  styleUrl: './carta.scss'
})
export class Carta {
  carta = [
    { img : "assets/carta1.png"},
    {img : "assets/carta2.png"}
  ]
}
