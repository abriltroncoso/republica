import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-desayunos',
  standalone: false,
  templateUrl: './desayunos.html',
  styleUrl: './desayunos.scss'
})
export class Desayunos implements AfterViewInit {
  ngAfterViewInit() {
    const carouselElement = document.getElementById('carouselDesayunos');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }
}
