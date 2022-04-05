import { Component } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
  animations: [fade],
})
export class InformationPageComponent {}
