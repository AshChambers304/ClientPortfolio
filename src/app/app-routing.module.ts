import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryPageComponent } from './pages/enqiury-page/enquiry-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { EnquirySuccessPageComponent } from './pages/enquiry-success-page/enquiry-success-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryPageComponent,
  },
  {
    path: 'information',
    component: InformationPageComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsPageComponent,
  },
  {
    path: 'enquiry',
    component: EnquiryPageComponent,
  },
  {
    path: 'enquiry-success',
    component: EnquirySuccessPageComponent,
  },
  {
    path: 'projects/:projectName',
    component: ProjectPageComponent,
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
