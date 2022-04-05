import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { MobileNavDirection } from './mobile-nav-direction';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileNavComponent implements OnInit {
  showSideNav: Observable<boolean>;

  @Input() mobilenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: MobileNavDirection = MobileNavDirection.Left;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition =
      this.direction +
      ' ' +
      this.duration +
      's, visibility ' +
      this.duration +
      's';
    navBarStyle.width = this.navWidth + 'vw';
    navBarStyle[this.direction] = (showNav ? 0 : this.navWidth * -1) + 'vw';

    return navBarStyle;
  }
}
