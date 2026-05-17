import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pillars = [
    { title: 'Braids with Care', text: 'Every style is crafted with patience, attention to detail, and genuine love for the craft.' },
    { title: 'One-to-One Sessions', text: 'Your appointment is yours alone — no double bookings, no rushing, just calm and focused care.' },
    { title: 'Private Home Studio', text: 'A comfortable, relaxed setting by appointment — not a busy salon environment.' },
    { title: 'Battersea & Clapham', text: 'Based in SW London, serving clients across Battersea, Clapham, and nearby areas.' },
  ];
}
