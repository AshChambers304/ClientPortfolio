import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from './projects/projects';
import { Project } from './projects/project.model';
import { fade } from 'src/app/shared/animations/fade';
import { ModalService } from 'src/app/services/modal.service';
import { CarouselSlide } from 'src/app/shared/models/carousel-slider-interface';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  animations: [fade],
})
export class ProjectPageComponent implements OnInit {
  public currentProject: Project | null = null;
  public slides: CarouselSlide[] | null = [];
  public currentSlide: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    const projectName = this.route.snapshot.params.projectName;

    this.currentProject = projects.find(
      (project) => project.id === projectName
    );

    console.log(this.currentProject);
  }

  ngOnInit(): void {
    this.setSlides();
  }

  setSlides(): void {
    for (let i = 0; i < this.currentProject.images.length; i++) {
      this.slides.push({ src: this.currentProject.images[i] });
    }
  }

  openModal(id: string, slideID: number): void {
    this.currentSlide = slideID;
    console.log(this.currentSlide);
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }
}
