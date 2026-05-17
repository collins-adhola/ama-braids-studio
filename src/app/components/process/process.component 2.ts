import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  steps = [
    {
      num: '1',
      title: 'Enquire',
      desc: 'Reach out via WhatsApp or the booking panel with your style idea and preferred dates.',
    },
    {
      num: '2',
      title: 'Consult',
      desc: 'We discuss your vision, hair type, length, and any prep needed before your appointment.',
    },
    {
      num: '3',
      title: 'Secure',
      desc: 'A £30 non-refundable deposit confirms your slot and locks in your date.',
    },
    {
      num: '4',
      title: 'Transform',
      desc: 'Arrive, relax, and leave with a stunning style crafted just for you.',
    },
  ];
}
