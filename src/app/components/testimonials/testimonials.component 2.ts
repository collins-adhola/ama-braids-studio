import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'AMA is truly gifted. My knotless braids lasted 8 weeks and I got compliments every single day. The attention to detail is unmatched — she takes her time and it shows.',
      name: 'Zara M.',
      location: 'Clapham',
    },
    {
      text: 'I booked AMA for my wedding and I cannot imagine trusting anyone else. She did a trial session first, listened to every preference, and on the day I felt like royalty. Absolutely breathtaking.',
      name: 'Priya K.',
      location: 'Battersea',
    },
    {
      text: 'The most professional and relaxing braiding experience I\'ve had. Clean parting, no tension, and my stitch braids looked immaculate. I\'ve been recommending AMA to everyone.',
      name: 'Diane O.',
      location: 'Wandsworth',
    },
  ];
}
