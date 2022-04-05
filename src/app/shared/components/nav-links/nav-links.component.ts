import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavLinksComponent implements OnInit {
  constructor(private navService: NavigationService) {}
  showSideNav: Observable<boolean>;

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onLinkClick(): void {
    this.navService.setShowNav(false);
  }
}
