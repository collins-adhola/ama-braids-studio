import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  constructor(private modal: EnquiryModalService) {}

  modalOpen = false;
  activeCategory: string | null = null;

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
    { url: 'assets/images/cornrows/gallery-braid-12.jpeg', category: 'cornrows', alt: 'Cornrow updo' },
    { url: 'assets/images/cornrows/gallery-braid-13.jpeg', category: 'cornrows', alt: 'Cornrow pattern' },
    { url: 'assets/images/cornrows/gallery-braid-15.jpeg', category: 'cornrows', alt: 'Cornrow style' },
    { url: 'assets/images/cornrows/gallery-braid-2.jpeg',  category: 'cornrows', alt: 'Stitch braids' },
    { url: 'assets/images/cornrows/gallery-braid-4.jpeg',  category: 'cornrows', alt: 'Cornrow detail' },
    { url: 'assets/images/extensions/extension-braid-13.jpeg', category: 'extensions', alt: 'Knotless braids' },
    { url: 'assets/images/extensions/extension-braid-14.jpeg', category: 'extensions', alt: 'Box braids' },
    { url: 'assets/images/extensions/extension-braid-21.jpeg', category: 'extensions', alt: 'Extension braids' },
    { url: 'assets/images/extensions/extension-braid-24.jpeg', category: 'extensions', alt: 'Long knotless' },
    { url: 'assets/images/extensions/extension-braid-25.jpeg', category: 'extensions', alt: 'Braided style' },
    { url: 'assets/images/kids-braids/kids-braids-1.jpeg',  category: 'kids', alt: 'Kids braids' },
    { url: 'assets/images/kids-braids/kids-braids-4.jpeg',  category: 'kids', alt: 'Kids cornrows' },
    { url: 'assets/images/kids-braids/kids-braids-6.jpeg',  category: 'kids', alt: 'Kids protective style' },
    { url: 'assets/images/kids-braids/kids-braids-10.jpeg', category: 'kids', alt: 'Kids braided style' },
    { url: 'assets/images/kids-braids/kids-braids-11.jpeg', category: 'kids', alt: 'Kids knotless' },
    { url: 'assets/images/kids-braids/kids-braids-17.jpeg', category: 'kids', alt: 'Kids style' },
    { url: 'assets/images/kids-braids/kids-braids-18.jpeg', category: 'kids', alt: 'Kids updo' },
    { url: 'assets/images/unisex-braids/unisex-braids1.jpg',  category: 'unisex', alt: "Men's braids" },
    { url: 'assets/images/unisex-braids/unisex-braids2.jpg',  category: 'unisex', alt: 'Unisex style' },
    { url: 'assets/images/unisex-braids/unisex-braids3.jpg',  category: 'unisex', alt: 'Unisex cornrows' },
    { url: 'assets/images/unisex-braids/unisex-braids5.avif', category: 'unisex', alt: 'Unisex cornrow pattern' },
  ];

  get modalTitle(): string {
    if (!this.activeCategory) return 'Style Gallery';
    return this.categories.find(c => c.id === this.activeCategory)?.title ?? 'Style Gallery';
  }

  get visibleImages(): GalleryImage[] {
    if (!this.activeCategory) return this.allImages;
    return this.allImages.filter(img => img.category === this.activeCategory);
  }

  openModal(categoryId?: string): void {
    this.activeCategory = categoryId ?? null;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  setFilter(categoryId: string | null): void {
    this.activeCategory = categoryId;
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
