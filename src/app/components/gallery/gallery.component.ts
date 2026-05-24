import { Component, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface GalleryImage {
  url: string;
  category: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  constructor(private modal: EnquiryModalService) {}

  modalOpen = false;

  categories: CategoryCard[] = [
    {
      id: 'cornrows',
      title: 'Cornrows',
      description: 'Precision scalp braids using your natural hair. Clean, sharp, and beautifully defined.',
      imageUrl: 'assets/images/cornrows/gallery-braid-12.jpeg',
      tags: ['Scalp Friendly', 'Natural Hair', 'No Extensions Required'],
    },
    {
      id: 'extensions',
      title: 'Extensions',
      description: 'Knotless braids, box braids, and more — added length and fullness with a naturally feathered start.',
      imageUrl: 'assets/images/extensions/extension-braid-13.jpeg',
      tags: ['Protective Style', 'Low Tension', 'Long Lasting'],
    },
    {
      id: 'kids',
      title: 'Kids',
      description: 'Gentle styles for little ones, installed with patience and care in a calm environment.',
      imageUrl: 'assets/images/kids-braids/kids-braids-6.jpeg',
      tags: ['Child Friendly', '1-to-1 Appointment', 'Healthy Install'],
    },
    {
      id: 'unisex',
      title: 'Unisex',
      description: 'Clean cornrows and scalp styles for all. Neat lines, natural finish, modern aesthetic.',
      imageUrl: 'assets/images/unisex-braids/unisex-braids3.jpg',
      tags: ['All Hair Types', 'Natural Finish', 'Scalp Friendly'],
    },
  ];

  allImages: GalleryImage[] = [
    { url: 'assets/images/extensions/extension-braid-13.jpeg', category: 'Extensions', alt: 'Knotless braids' },
    { url: 'assets/images/cornrows/gallery-braid-1.jpeg', category: 'Cornrows', alt: 'Feed-in cornrows' },
    { url: 'assets/images/kids-braids/kids-braids-1.jpeg', category: 'Kids', alt: 'Kids braids' },
    { url: 'assets/images/unisex-braids/unisex-braids1.jpg', category: 'Unisex', alt: "Men's braids" },
    { url: 'assets/images/extensions/extension-braid-14.jpeg', category: 'Extensions', alt: 'Box braids' },
    { url: 'assets/images/cornrows/gallery-braid-2.jpeg', category: 'Cornrows', alt: 'Stitch braids' },
    { url: 'assets/images/extensions/extension-braid-15.jpeg', category: 'Extensions', alt: 'Large knotless braids' },
    { url: 'assets/images/kids-braids/kids-braids-2.jpeg', category: 'Kids', alt: 'Kids cornrows' },
    { url: 'assets/images/cornrows/gallery-braid-3.jpeg', category: 'Cornrows', alt: 'Ghana braids' },
    { url: 'assets/images/unisex-braids/unisex-braids2.jpg', category: 'Unisex', alt: 'Unisex style' },
    { url: 'assets/images/extensions/extension-braid-16.jpeg', category: 'Extensions', alt: 'Goddess braids' },
    { url: 'assets/images/cornrows/gallery-braid-4.jpeg', category: 'Cornrows', alt: 'Cornrow pattern' },
    { url: 'assets/images/kids-braids/kids-braids-3.jpeg', category: 'Kids', alt: 'Kids style' },
    { url: 'assets/images/extensions/extension-braid-17.jpeg', category: 'Extensions', alt: 'Jumbo braids' },
    { url: 'assets/images/cornrows/gallery-braid-5.jpeg', category: 'Cornrows', alt: 'Cornrows close-up' },
    { url: 'assets/images/unisex-braids/unisex-braids3.jpg', category: 'Unisex', alt: 'Unisex cornrows' },
    { url: 'assets/images/extensions/extension-braid-19.jpeg', category: 'Extensions', alt: 'Twist braids' },
    { url: 'assets/images/kids-braids/kids-braids-4.jpeg', category: 'Kids', alt: 'Kids braided style' },
    { url: 'assets/images/cornrows/gallery-braid-6.jpeg', category: 'Cornrows', alt: 'Sculpted cornrows' },
    { url: 'assets/images/extensions/extension-braid-21.jpeg', category: 'Extensions', alt: 'Extension braids' },
    { url: 'assets/images/kids-braids/kids-braids-5.jpeg', category: 'Kids', alt: 'Kids knotless' },
    { url: 'assets/images/extensions/extension-braid-22.jpeg', category: 'Extensions', alt: 'Braided style' },
    { url: 'assets/images/cornrows/gallery-braid-7.jpeg', category: 'Cornrows', alt: 'Cornrow detail' },
    { url: 'assets/images/kids-braids/kids-braids-6.jpeg', category: 'Kids', alt: 'Kids protective style' },
  ];

  openModal(): void {
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalOpen) this.closeModal();
  }

  bookAppointment(): void {
    this.closeModal();
    this.modal.open();
  }
}
