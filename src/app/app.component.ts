import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  siteHidden = false;
  currentRoute = '';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.navigationService.getShowNav().subscribe((value) => {
      this.siteHidden = value;
    });
    this.router.events
      .pipe(
        filter(
          (routerEvent: NavigationStart) =>
            routerEvent instanceof NavigationStart
        )
      )
      .subscribe((navigationEvent: NavigationStart) => {
        this.currentRoute = navigationEvent.url;
        console.log(this.currentRoute);
        if (
          this.currentRoute === '/testimonials' ||
          this.currentRoute === '/enquiry'
        ) {
          this.document.body.style.background = '#f6f2e9';
        } else {
          this.document.body.style.background = '#ffffff';
        }
      });
  }
}
