import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { EnquiryPageComponent } from './pages/enqiury-page/enquiry-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { EnquirySuccessPageComponent } from './pages/enquiry-success-page/enquiry-success-page.component';
import { MobileNavComponent } from './shared/components/mobile-nav/mobile-nav.component';
import { NavLinksComponent } from './shared/components/nav-links/nav-links.component';
import { FloatingNavComponent } from './shared/components/floating-nav/floating-nav.component';
import { ModalModule } from './shared/components/modal';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { CarouselDialogComponent } from './shared/components/dialogs/carousel-dialog/carousel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    InformationPageComponent,
    TestimonialsPageComponent,
    EnquiryPageComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    EnquirySuccessPageComponent,
    MobileNavComponent,
    NavLinksComponent,
    FloatingNavComponent,
    ProjectPageComponent,
    CarouselDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
