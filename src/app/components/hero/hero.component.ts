import { Component } from '@angular/core';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  constructor(private modal: EnquiryModalService) {}

  openEnquiry(): void {
    this.modal.open();
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
