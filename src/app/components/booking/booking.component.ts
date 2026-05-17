import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

interface BookingService {
  name: string;
  duration: string;
  note: string;
  icon: string;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  constructor(
    private whatsapp: WhatsappService,
    private modal: EnquiryModalService,
  ) {}

  services: BookingService[] = [
    { name: 'Hair Appointment', duration: '5–10 hrs', note: 'Consultation recommended', icon: '✦' },
    { name: 'Kids Appointment', duration: '1–5 hrs', note: 'Child-friendly experience', icon: '✦' },
    { name: "Cornrows / Men's Styles", duration: '1–4 hrs', note: 'Natural hair or custom patterns', icon: '✦' },
  ];

  steps = [
    'Browse the style guide and find the look that speaks to you',
    'Submit your enquiry with your preferences and any inspiration',
    'AMA will review and reach out to confirm your appointment',
    'Arrive, relax, and leave looking and feeling amazing',
  ];

  requestAppointment(svc?: BookingService): void {
    this.modal.open(svc ? { service: svc.name } : {});
  }

  openWhatsApp(): void {
    this.whatsapp.openEnquiry(
      "✨ Hi AMA! I'd like to enquire about booking an appointment. Please let me know your availability.",
    );
  }
}
