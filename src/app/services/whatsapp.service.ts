import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly phone = '447846040251';

  openBooking(service: string, style?: string): void {
    const lines = [
      '✨ Hi AMA, I\'d like to book an appointment!',
      '',
      `① Service: ${service}`,
      style ? `② Style: ${style}` : '',
      '③ Please let me know your available slots.',
      '',
      'Thank you!',
    ].filter(l => l !== undefined && !(l === '' && style === undefined)).join('\n');

    window.open(`https://wa.me/${this.phone}?text=${encodeURIComponent(lines)}`, '_blank');
  }

  openEnquiry(message: string): void {
    window.open(`https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
