import { Component, HostListener, ViewChild, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-floating-nav',
  templateUrl: './floating-nav.component.html',
  styleUrls: ['./floating-nav.component.scss'],
})
export class FloatingNavComponent {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events
      .pipe(
        filter(
          (routerEvent: NavigationEnd) => routerEvent instanceof NavigationEnd
        )
      )
      .subscribe((_) => {
        this.floatingNav.nativeElement.style.opacity = 0;
        this.floatingNav.nativeElement.style.zIndex = -1;
      });
  }
  @ViewChild('floatingNav') floatingNav;

  @HostListener('window:mousewheel', ['$event']) scroll(
    event: MouseEvent
  ): void {
    this.onScrollFunc();
  }

  onScrollFunc(): void {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (
      (document.body.scrollTop > 290 ||
        document.documentElement.scrollTop > 290) &&
      viewportWidth >= 900
    ) {
      this.floatingNav.nativeElement.style.opacity = 1;
      this.floatingNav.nativeElement.style.zIndex = 1;
    } else {
      this.floatingNav.nativeElement.style.opacity = 0;
      this.floatingNav.nativeElement.style.zIndex = -1;
    }
  }
}
