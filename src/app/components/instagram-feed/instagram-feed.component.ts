import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
})
export class InstagramFeedComponent {
  previews = [
    { url: 'assets/images/extensions/extension-braid-14.jpeg', alt: 'Extension braids' },
    { url: 'assets/images/cornrows/gallery-braid-3.jpeg', alt: 'Cornrow style' },
    { url: 'assets/images/kids-braids/kids-braids-3.jpeg', alt: 'Kids braids' },
  ];

  openInstagram(): void {
    window.open('https://www.instagram.com/braidsbyama/', '_blank', 'noopener');
  }
}
