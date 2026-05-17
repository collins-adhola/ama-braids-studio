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
    { title: 'Healthy Installs', text: 'Gentle technique that protects your edges and natural hair.' },
    { title: 'One-to-One', text: 'Private appointments — no rushing, no distractions.' },
    { title: 'Neat Parting', text: 'Clean, precise parts that make every style look its best.' },
    { title: 'Relaxed Vibes', text: 'A calm, comfortable atmosphere from start to finish.' },
  ];
}
