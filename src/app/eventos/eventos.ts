import { Component ,AfterViewInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-eventos',
  standalone: false,
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss'
})
export class Eventos implements AfterViewInit {
  ngAfterViewInit() {
    const carouselElement = document.getElementById('carouselCumple');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }
}
