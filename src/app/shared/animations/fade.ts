import { trigger, animate, transition, style } from '@angular/animations';

export const fade = trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 })),
  ]),
  transition('* => void', [animate('1000ms', style({ opacity: 0 }))]),
]);
