import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { CarouselSlide } from 'src/app/shared/models/carousel-slider-interface';

@Component({
  selector: 'app-carousel-dialog',
  templateUrl: './carousel-dialog.component.html',
  styleUrls: ['./carousel-dialog.component.scss'],
})
export class CarouselDialogComponent implements OnInit {
  constructor() {}

  @Input() slides: CarouselSlide[] | null = null;
  @Input() currentSlide: number | null = 0;
  @Output()
  closeModalEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  closeModal(): void {
    this.closeModalEmitter.emit('carousel-modal');
  }
}
