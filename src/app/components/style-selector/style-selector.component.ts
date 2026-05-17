import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

interface StyleItem {
  id: number;
  name: string;
  categories: string[];
  description: string;
  price: string;
  duration: string;
  hairType: string;
  imageUrl: string;
  isUnisex: boolean;
  visible: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-style-selector',
  standalone: true,
  imports: [ScrollRevealDirective, TitleCasePipe],
  templateUrl: './style-selector.component.html',
  styleUrls: ['./style-selector.component.scss'],
})
export class StyleSelectorComponent {
  constructor(
    private whatsapp: WhatsappService,
    private modal: EnquiryModalService,
  ) {}

  activeFilter = 'all';
  selectedStyle: StyleItem | null = null;

  filters = [
    { key: 'all', label: 'All Styles' },
    { key: 'extensions', label: 'Extensions' },
    { key: 'cornrows', label: 'Cornrows' },
    { key: 'kids', label: 'Kids' },
    { key: 'unisex', label: 'Unisex' },
  ];

  styles: StyleItem[] = [
    {
      id: 1, name: 'Knotless Box Braids', categories: ['extensions'],
      description: 'Lightweight, tension-free braids with a natural finish. No knot at the root means less strain and longer wear.',
      price: 'From £160', duration: '6–8 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-13.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 2, name: 'Medium Box Braids', categories: ['extensions'],
      description: 'Classic box braids in medium size — versatile, protective, and timeless.',
      price: 'From £140', duration: '5–7 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-14.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 3, name: 'Large Knotless Braids', categories: ['extensions'],
      description: 'Bold, bigger sections for a statement look with a quicker install time.',
      price: 'From £120', duration: '4–6 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-15.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 4, name: 'Goddess Braids', categories: ['extensions'],
      description: 'Boho-style braids with curly ends and wispy pieces for a romantic, effortless finish.',
      price: 'From £180', duration: '7–9 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-16.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 5, name: 'Jumbo Braids', categories: ['extensions'],
      description: 'Thick, oversized braids that make a bold statement with minimal install time.',
      price: 'From £130', duration: '4–5 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-17.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 6, name: 'Twist Braids', categories: ['extensions'],
      description: 'Two-strand twists with added hair for extra length and volume.',
      price: 'From £130', duration: '4–6 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/extensions/extension-braid-19.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 7, name: 'Feed-In Cornrows', categories: ['cornrows'],
      description: 'Neat scalp braids with added hair for fullness and length. Clean and versatile.',
      price: 'From £100', duration: '3–5 hrs', hairType: 'Natural + Extensions',
      imageUrl: 'assets/images/cornrows/gallery-braid-1.jpeg',
      isUnisex: true, visible: true, selected: false,
    },
    {
      id: 8, name: 'Stitch Braids', categories: ['cornrows'],
      description: 'Sharp, sculpted cornrows with a stitching technique for precise, defined lines.',
      price: 'From £80', duration: '2–4 hrs', hairType: 'Natural',
      imageUrl: 'assets/images/cornrows/gallery-braid-2.jpeg',
      isUnisex: true, visible: true, selected: false,
    },
    {
      id: 9, name: 'Ghana Braids', categories: ['cornrows'],
      description: 'Raised, thick cornrows in curved or straight patterns with a bold, sculptural look.',
      price: 'From £90', duration: '3–5 hrs', hairType: 'Natural + Extensions',
      imageUrl: 'assets/images/cornrows/gallery-braid-3.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 10, name: 'Kids Knotless Braids', categories: ['kids'],
      description: 'Gentle knotless braids designed for little ones — low tension, comfortable, and fun.',
      price: 'From £60', duration: '2–4 hrs', hairType: 'Extensions',
      imageUrl: 'assets/images/kids-braids/kids-braids-1.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 11, name: 'Kids Cornrows', categories: ['kids'],
      description: 'Age-appropriate scalp braids in fun patterns or simple tidy rows.',
      price: 'From £50', duration: '1–3 hrs', hairType: 'Natural',
      imageUrl: 'assets/images/kids-braids/kids-braids-2.jpeg',
      isUnisex: false, visible: true, selected: false,
    },
    {
      id: 12, name: "Men's Braids", categories: ['unisex', 'cornrows'],
      description: 'Clean cornrows and scalp braids tailored for men — straight back or custom designs.',
      price: 'From £80', duration: '1–3 hrs', hairType: 'Natural',
      imageUrl: 'assets/images/unisex-braids/unisex-braids1.jpg',
      isUnisex: true, visible: true, selected: false,
    },
  ];

  setFilter(key: string): void {
    this.activeFilter = key;
    this.styles = this.styles.map(s => ({
      ...s,
      visible: key === 'all' || s.categories.includes(key),
    }));
  }

  selectStyle(style: StyleItem): void {
    this.styles = this.styles.map(s => ({ ...s, selected: s.id === style.id }));
    this.selectedStyle = style;
  }

  bookSelected(): void {
    if (this.selectedStyle) {
      this.modal.open({ service: this.selectedStyle.name });
    }
  }
}
