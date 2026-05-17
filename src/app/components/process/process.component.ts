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
    { num: '1', title: 'Browse Styles', desc: 'Explore the gallery and find the look that speaks to you.' },
    { num: '2', title: 'Submit Enquiry', desc: 'Request your appointment with your style preferences and preferred timing.' },
    { num: '3', title: 'Secure Your Date', desc: 'Confirm your appointment with a small deposit.' },
    { num: '4', title: 'Relax & Enjoy', desc: 'Arrive, sit back, and leave looking and feeling amazing.' },
  ];
}
