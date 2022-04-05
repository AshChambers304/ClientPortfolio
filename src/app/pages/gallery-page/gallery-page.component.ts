import { Component } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';
import { CarouselSlide } from 'src/app/shared/models/carousel-slider-interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  animations: [fade],
})
export class GalleryPageComponent {
  currentSlide = 0;

  public slides: CarouselSlide[] = [
    { src: 'assets/images/featured-1.jpg' },
    { src: 'assets/images/featured-2.jpg' },
    { src: 'assets/images/featured-3.jpg' },
    { src: 'assets/images/portrait.jpeg' },
  ];

  constructor(private modalService: ModalService) {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
