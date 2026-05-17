import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      name: 'Knotless Braids',
      description: 'Lightweight, tension-free braids starting from the root. No knot means less pulling on your scalp and a more natural finish.',
      price: 'From £160',
    },
    {
      name: 'Box Braids',
      description: 'Classic squared-off sections in any size. Versatile, long-lasting, and endlessly stylish.',
      price: 'From £140',
    },
    {
      name: 'Cornrows',
      description: 'Flat scalp-braided rows — ideal for men\'s styles, natural hair upkeep, or a protective base.',
      price: 'From £80',
    },
    {
      name: 'Stitch Braids',
      description: 'Feed-in technique using stitching rows for sharp, sculpted definition and a seamless finish.',
      price: 'From £100',
    },
    {
      name: 'Kids Styles',
      description: 'Gentle, age-appropriate braids installed with patience and care in a calm, welcoming setting.',
      price: 'From £60',
    },
    {
      name: 'Custom Styles',
      description: 'Have something specific in mind? Let\'s talk through your vision and bring it to life.',
      price: 'From £120',
    },
  ];
}
