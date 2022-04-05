import { Component } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss'],
  animations: [fade],
})
export class TestimonialsPageComponent {
  public testimonials = [
    {
      entry:
        'Michelle designed and project managed a child friendly bedroom for my children, for which she went above and beyond my expectations. Michelle has a keen eye for detail and provides inspiring designs in all her work. She maintains a high level of professionalism and creativity and we look forward to working with her again on our upcoming projects.',
      name: 'Jilka Family',
    },
    {
      entry:
        'We hired Michelle to design and fully renovate a dated property we purchased. She advised on how to add value to the property and an ideal budget. She designed, sourced all the materials, organised and project manage her team of skilled contractors on-site to deliver our dream home. We thoroughly enjoyed the process and would highly recommend Michelle.',
      name: 'Sidhu Family',
    },
    {
      entry:
        'We were looking for advice in how to improve the value of our property. Michelle offered creative solutions to meet our budget requirements resulting in a plan of improvements which we are now implementing as we have opportunity',
      name: 'Liddle Family',
    },
    {
      entry:
        'We approached Michelle to help us to select and source materials for a new build. She coached us, sourced and specified the materials in an way that we achieved a harmonious design for the build that we enjoy with our family and friends.',
      name: 'Costa Family',
    },
  ];
}
