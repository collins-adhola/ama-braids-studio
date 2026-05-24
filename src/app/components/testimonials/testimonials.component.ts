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
      text: 'AMA did the most beautiful knotless braids for me. So neat, so gentle on my hair — I was obsessed from the moment I looked in the mirror.',
      name: 'Chloé M.',
      role: 'Battersea',
      avatar: 'assets/images/extensions/extension-braid-25.jpeg',
      initials: 'CM',
    },
    {
      text: 'Finally found someone who takes their time and really cares. My hair looked incredible and she made me feel so comfortable the whole time.',
      name: 'Jade T.',
      role: 'Clapham',
      avatar: 'assets/images/portrait.jpeg',
      initials: 'JT',
    },
    {
      text: "I've been going to AMA for two years and every single time she delivers. The attention to detail is unmatched.",
      name: 'Jacenta',
      role: 'Lawyer · Bucks',
      avatar: 'assets/images/jacenta_profile.png',
      initials: 'J',
    },
  ];
}
