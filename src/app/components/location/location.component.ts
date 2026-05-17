import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  areas = [
    { name: 'Battersea', postcodes: 'SW8 / SW11', note: 'Primary area' },
    { name: 'Clapham', postcodes: 'SW4 / SW9', note: 'Primary area' },
    { name: 'Balham', postcodes: 'SW12', note: 'Home visits' },
    { name: 'Fulham', postcodes: 'SW6', note: 'Home visits' },
    { name: 'Chelsea', postcodes: 'SW3 / SW10', note: 'Home visits' },
    { name: 'Richmond', postcodes: 'TW9 / TW10', note: 'Home visits' },
    { name: 'Wider SW London', postcodes: 'All SW postcodes', note: 'On request' },
  ];
}
