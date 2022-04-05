import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-success-page',
  templateUrl: './enquiry-success-page.component.html',
  styleUrls: ['./enquiry-success-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnquirySuccessPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goHome(): void {
    this.router.navigateByUrl('/');
  }
}
