import { Component, ViewChild, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('desktopNav') desktopNav;
  @ViewChild('navLogo') navLogo;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.navService.setShowNav(true);
  }
}
