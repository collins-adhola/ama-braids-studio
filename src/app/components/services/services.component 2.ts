import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
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
  services: Service[] = [
    {
      name: 'Knotless Braids',
      description: 'Seamless, pain-free braids with a natural root finish. Available in all lengths and thicknesses.',
      price: 'From £180',
    },
    {
      name: 'Cornrows',
      description: 'Precisely fed-in cornrows with clean partings. Sleek, structured and long-lasting.',
      price: 'From £140',
    },
    {
      name: 'Kids Styles',
      description: 'Gentle, protective styles crafted specially for little ones — comfortable and adorable.',
      price: 'From £80',
    },
    {
      name: 'Silk Press',
      description: 'A luxurious straightening service using heat protection for a smooth, silky finish.',
      price: 'From £100',
    },
  ];
}
