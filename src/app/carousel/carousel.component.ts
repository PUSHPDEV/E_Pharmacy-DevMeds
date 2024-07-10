import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { name: 'Carousel-1.jpg', caption: "Medicine For Everyone" },
    { name: 'Carousel-2.jpg', caption: "Medicine For Everyone" },
    { name: 'Carousel-3.jpg', caption: "Medicine For Everyone" },

  ];
}
