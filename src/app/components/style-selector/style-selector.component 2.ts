import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';

interface StyleCard {
  id: number;
  name: string;
  categories: string[];
  description: string;
  price: string;
  duration: string;
  hairType: string;
  isUnisex: boolean;
  imageUrl: string;
  selected: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-style-selector',
  standalone: true,
  imports: [ScrollRevealDirective, TitleCasePipe],
  templateUrl: './style-selector.component.html',
  styleUrls: ['./style-selector.component.scss'],
})
export class StyleSelectorComponent implements OnInit {
  constructor(private whatsapp: WhatsappService) {}

  activeFilter = 'all';
  selectedStyle: StyleCard | null = null;

  filters = [
    { key: 'all', label: 'All' },
    { key: 'extension', label: 'Extension Braids' },
    { key: 'cornrow', label: 'Cornrows' },
    { key: 'kids', label: 'Kids' },
    { key: 'unisex', label: 'Unisex / Men' },
    { key: 'natural', label: 'Natural Hair' },
  ];

  allStyles: StyleCard[] = [
    {
      id: 1, name: 'Knotless Braids', categories: ['extension'],
      description: 'Seamless feed-in technique for a natural, pain-free look at the root.',
      price: 'From £180', duration: '6–10 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-13.jpeg',
      selected: false, visible: true,
    },
    {
      id: 2, name: 'Box Braids', categories: ['extension'],
      description: 'Classic defined box sections for a timeless, versatile protective style.',
      price: 'From £160', duration: '5–8 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-14.jpeg',
      selected: false, visible: true,
    },
    {
      id: 3, name: 'Boho Braids', categories: ['extension'],
      description: 'Romantic curly ends and a free-flowing finish for an effortless boho look.',
      price: 'From £200', duration: '7–10 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-15.jpeg',
      selected: false, visible: true,
    },
    {
      id: 30, name: 'Jumbo Braids', categories: ['extension'],
      description: 'Bold, thick sections for a striking, high-impact look with minimal install time.',
      price: 'From £140', duration: '4–6 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-16.jpeg',
      selected: false, visible: true,
    },
    {
      id: 31, name: 'Micro Braids', categories: ['extension'],
      description: 'Tiny, intricate braids for incredible versatility and a delicate finish.',
      price: 'From £220', duration: '8–12 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-17.jpeg',
      selected: false, visible: true,
    },
    {
      id: 32, name: 'Goddess Braids', categories: ['extension'],
      description: 'Large, regal braids with flowing curly ends — majestic and statement-making.',
      price: 'From £190', duration: '6–9 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-19.jpeg',
      selected: false, visible: true,
    },
    {
      id: 33, name: 'Tribal Braids', categories: ['extension'],
      description: 'Cornrow base with hanging box braids — a bold blend of two classic styles.',
      price: 'From £170', duration: '5–8 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-21.jpeg',
      selected: false, visible: true,
    },
    {
      id: 34, name: 'Fulani Braids', categories: ['extension'],
      description: 'Cultural cornrow-and-braid combination with beads and a centre parting.',
      price: 'From £160', duration: '5–7 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-22.jpeg',
      selected: false, visible: true,
    },
    {
      id: 35, name: 'Ombré Box Braids', categories: ['extension'],
      description: 'Classic box braids with a stunning two-tone colour gradient from root to tip.',
      price: 'From £180', duration: '5–8 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-23.jpeg',
      selected: false, visible: true,
    },
    {
      id: 36, name: 'Waist-Length Braids', categories: ['extension'],
      description: 'Extra-long braids reaching the waist — dramatic length and full volume.',
      price: 'From £210', duration: '7–10 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-24.jpeg',
      selected: false, visible: true,
    },
    {
      id: 37, name: 'Blonde Box Braids', categories: ['extension'],
      description: 'Classic box braids in warm blonde tones — bold, bright and head-turning.',
      price: 'From £170', duration: '5–8 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-25.jpeg',
      selected: false, visible: true,
    },
    {
      id: 38, name: 'Boho Knotless Braids', categories: ['extension'],
      description: 'Knotless technique with loose curly ends for a carefree, textured finish.',
      price: 'From £210', duration: '7–10 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/extensions/extension-braid-13.jpeg',
      selected: false, visible: true,
    },
    {
      id: 4, name: 'Feed-In Cornrows (Side)', categories: ['cornrow', 'unisex'],
      description: 'Sleek feed-in cornrows with a clean side parting and neat finish.',
      price: 'From £80', duration: '2–3 hrs', hairType: 'Natural', isUnisex: true,
      imageUrl: 'assets/images/cornrows/gallery-braid-1.jpeg',
      selected: false, visible: true,
    },
    {
      id: 5, name: 'Cornrows with Curly Ends', categories: ['cornrow'],
      description: 'Classic cornrows finishing in voluminous curly ends for a boho feel.',
      price: 'From £90', duration: '2–4 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-2.jpeg',
      selected: false, visible: true,
    },
    {
      id: 6, name: 'Straight Back Cornrows', categories: ['cornrow', 'unisex'],
      description: 'Clean, classic straight-back rows — timeless, low-maintenance and versatile.',
      price: 'From £60', duration: '1–2 hrs', hairType: 'Natural', isUnisex: true,
      imageUrl: 'assets/images/cornrows/gallery-braid-3.jpeg',
      selected: false, visible: true,
    },
    {
      id: 10, name: 'Swirl Top Cornrows', categories: ['cornrow'],
      description: 'Artistic swirl pattern on top with clean sections flowing to the back.',
      price: 'From £100', duration: '3–4 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-4.jpeg',
      selected: false, visible: true,
    },
    {
      id: 11, name: 'Cornrow Bun Updo', categories: ['cornrow'],
      description: 'Elegant cornrow sections gathered into a polished bun — perfect for occasions.',
      price: 'From £110', duration: '3–5 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-5.jpeg',
      selected: false, visible: true,
    },
    {
      id: 12, name: 'Cornrow Back Bun', categories: ['cornrow'],
      description: 'Neat feed-in cornrows flowing into a gathered back bun finish.',
      price: 'From £100', duration: '2–4 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-6.jpeg',
      selected: false, visible: true,
    },
    {
      id: 13, name: 'Swirl Pattern Cornrows', categories: ['cornrow', 'unisex'],
      description: 'Intricate swirl patterning throughout the scalp for a bold, sculptural look.',
      price: 'From £120', duration: '4–5 hrs', hairType: 'Natural', isUnisex: true,
      imageUrl: 'assets/images/cornrows/gallery-braid-7.jpeg',
      selected: false, visible: true,
    },
    {
      id: 14, name: 'Feed-In Cornrows (Long)', categories: ['cornrow', 'unisex'],
      description: 'Long, precise feed-in cornrows with immaculate partings throughout.',
      price: 'From £90', duration: '3–4 hrs', hairType: 'Natural', isUnisex: true,
      imageUrl: 'assets/images/cornrows/gallery-braid-8.jpeg',
      selected: false, visible: true,
    },
    {
      id: 15, name: 'Cornrow Ponytail', categories: ['cornrow'],
      description: 'Cornrow sections feeding seamlessly into a sleek, flowing ponytail.',
      price: 'From £90', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-9.jpeg',
      selected: false, visible: true,
    },
    {
      id: 16, name: 'Box Braid Cornrows', categories: ['cornrow', 'extension'],
      description: 'Box braid cornrows with a rich ombré colour effect — the best of both.',
      price: 'From £140', duration: '4–6 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-10.jpeg',
      selected: false, visible: true,
    },
    {
      id: 17, name: 'Cornrow Front Bun', categories: ['cornrow'],
      description: 'Front-facing cornrow updo with a neat bun — elegant and practical.',
      price: 'From £100', duration: '2–4 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-11.jpeg',
      selected: false, visible: true,
    },
    {
      id: 18, name: 'Cornrow High Ponytail', categories: ['cornrow'],
      description: 'Smooth cornrow base sections lifted into a dramatic high ponytail.',
      price: 'From £90', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-12.jpeg',
      selected: false, visible: true,
    },
    {
      id: 19, name: 'Starburst Cornrows', categories: ['cornrow'],
      description: 'Striking geometric starburst parting — a true statement style.',
      price: 'From £130', duration: '4–6 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-13.jpeg',
      selected: false, visible: true,
    },
    {
      id: 20, name: 'Cornrow Ponytail & Curls', categories: ['cornrow'],
      description: 'Cornrow sections finishing in a curly ponytail for added texture and volume.',
      price: 'From £100', duration: '3–4 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-14.jpeg',
      selected: false, visible: true,
    },
    {
      id: 21, name: 'Feed-In Cornrows with Curls', categories: ['cornrow'],
      description: 'Feed-in cornrows cascading into loose, defined curly ends.',
      price: 'From £95', duration: '3–5 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-15.jpeg',
      selected: false, visible: true,
    },
    {
      id: 22, name: 'Low Side Ponytail', categories: ['cornrow'],
      description: 'Cornrows gathered into a low, sweeping side ponytail — effortlessly chic.',
      price: 'From £80', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/cornrows/gallery-braid-1.jpeg',
      selected: false, visible: true,
    },
    {
      id: 7, name: 'Kids Cornrows', categories: ['kids', 'cornrow'],
      description: 'Gentle, comfortable cornrows perfect for little ones.',
      price: 'From £45', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-1.jpeg',
      selected: false, visible: true,
    },
    {
      id: 8, name: 'Kids Knotless Braids', categories: ['kids', 'extension'],
      description: 'Pain-free knotless technique scaled for children\'s hair.',
      price: 'From £80', duration: '3–5 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-2.jpeg',
      selected: false, visible: true,
    },
    {
      id: 40, name: 'Kids Feed-In Cornrows', categories: ['kids', 'cornrow'],
      description: 'Neat feed-in cornrows with a smooth, comfortable finish for children.',
      price: 'From £50', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-3.jpeg',
      selected: false, visible: true,
    },
    {
      id: 41, name: 'Kids Box Braids', categories: ['kids', 'extension'],
      description: 'Classic box braids in a smaller size — great for school and play.',
      price: 'From £70', duration: '2–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-4.jpeg',
      selected: false, visible: true,
    },
    {
      id: 42, name: 'Kids Fulani Braids', categories: ['kids', 'extension'],
      description: 'Cornrow-and-braid combination with a centre parting, sized for children.',
      price: 'From £75', duration: '2–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-5.jpeg',
      selected: false, visible: true,
    },
    {
      id: 43, name: 'Kids Ponytail Braids', categories: ['kids', 'cornrow'],
      description: 'Cornrows gathered into a fun, tidy ponytail — perfect for active kids.',
      price: 'From £55', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-6.jpeg',
      selected: false, visible: true,
    },
    {
      id: 44, name: 'Kids Stitch Braids', categories: ['kids', 'cornrow'],
      description: 'Precisely parted stitch cornrows for a clean, long-lasting look.',
      price: 'From £60', duration: '1–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-7.jpeg',
      selected: false, visible: true,
    },
    {
      id: 45, name: 'Kids Boho Braids', categories: ['kids', 'extension'],
      description: 'Loose, carefree braids with curly ends — playful and stylish.',
      price: 'From £85', duration: '3–5 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-8.jpeg',
      selected: false, visible: true,
    },
    {
      id: 46, name: 'Kids Bun Updo', categories: ['kids', 'cornrow'],
      description: 'Cornrow sections flowing into a neat bun — smart and tidy.',
      price: 'From £60', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-9.jpeg',
      selected: false, visible: true,
    },
    {
      id: 47, name: 'Kids Two-Strand Twists', categories: ['kids', 'natural'],
      description: 'Gentle two-strand twists that celebrate and protect natural texture.',
      price: 'From £65', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-10.jpeg',
      selected: false, visible: true,
    },
    {
      id: 48, name: 'Kids Side Braids', categories: ['kids', 'cornrow'],
      description: 'Playful side-swept cornrows for an effortlessly cute finish.',
      price: 'From £50', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-11.jpeg',
      selected: false, visible: true,
    },
    {
      id: 49, name: 'Kids Goddess Braids', categories: ['kids', 'extension'],
      description: 'Larger goddess braids with soft curly ends — regal and fun for little ones.',
      price: 'From £80', duration: '2–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-12.jpeg',
      selected: false, visible: true,
    },
    {
      id: 50, name: 'Kids Jumbo Braids', categories: ['kids', 'extension'],
      description: 'Thick, quick-to-install braids that last and look bold.',
      price: 'From £70', duration: '2–3 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-13.jpeg',
      selected: false, visible: true,
    },
    {
      id: 51, name: 'Kids Lemonade Braids', categories: ['kids', 'cornrow'],
      description: 'Side-swept feed-in cornrows in the popular lemonade style.',
      price: 'From £65', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-14.jpeg',
      selected: false, visible: true,
    },
    {
      id: 52, name: 'Kids Crown Braids', categories: ['kids', 'cornrow'],
      description: 'Cornrows styled into a halo crown — beautiful for special occasions.',
      price: 'From £70', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-15.jpeg',
      selected: false, visible: true,
    },
    {
      id: 53, name: 'Kids High Ponytail', categories: ['kids', 'cornrow'],
      description: 'Cornrow base lifted into a high ponytail — fun and easy to maintain.',
      price: 'From £55', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-16.jpeg',
      selected: false, visible: true,
    },
    {
      id: 54, name: 'Kids Protective Style', categories: ['kids', 'natural'],
      description: 'A gentle protective style to keep little ones\' hair healthy and neat.',
      price: 'From £60', duration: '1–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-17.jpeg',
      selected: false, visible: true,
    },
    {
      id: 55, name: 'Kids Half-Up Braids', categories: ['kids', 'cornrow'],
      description: 'Half-up, half-down braid style — sweet and practical for everyday wear.',
      price: 'From £55', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-18.jpeg',
      selected: false, visible: true,
    },
    {
      id: 56, name: 'Kids Tribal Braids', categories: ['kids', 'extension'],
      description: 'Mini cornrow base with hanging braids — a stylish twist for kids.',
      price: 'From £80', duration: '2–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-19.jpeg',
      selected: false, visible: true,
    },
    {
      id: 57, name: 'Kids Beaded Braids', categories: ['kids', 'extension'],
      description: 'Braids finished with colourful beads for a playful, personalised look.',
      price: 'From £75', duration: '2–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-20.jpeg',
      selected: false, visible: true,
    },
    {
      id: 58, name: 'Kids French Braids', categories: ['kids', 'cornrow'],
      description: 'Classic French braid technique adapted for children\'s hair.',
      price: 'From £45', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-21.jpeg',
      selected: false, visible: true,
    },
    {
      id: 59, name: 'Kids Double Buns', categories: ['kids', 'cornrow'],
      description: 'Two cornrow sections meeting in cute double bun puffs on top.',
      price: 'From £50', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-22.jpeg',
      selected: false, visible: true,
    },
    {
      id: 60, name: 'Kids Zigzag Parts', categories: ['kids', 'cornrow'],
      description: 'Fun zigzag partings with neat cornrows — unique and eye-catching.',
      price: 'From £60', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-23.jpeg',
      selected: false, visible: true,
    },
    {
      id: 61, name: 'Kids Butterfly Braids', categories: ['kids', 'extension'],
      description: 'Creative butterfly-pattern braids for a truly unique style.',
      price: 'From £85', duration: '3–5 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-24.jpeg',
      selected: false, visible: true,
    },
    {
      id: 62, name: 'Kids Waist-Length Braids', categories: ['kids', 'extension'],
      description: 'Long braids reaching the waist — dramatic length for confident kids.',
      price: 'From £90', duration: '3–5 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-25.jpeg',
      selected: false, visible: true,
    },
    {
      id: 63, name: 'Kids Micro Braids', categories: ['kids', 'extension'],
      description: 'Tiny, delicate braids for older children who love intricate styles.',
      price: 'From £90', duration: '3–5 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-26.jpeg',
      selected: false, visible: true,
    },
    {
      id: 64, name: 'Kids Natural Twists', categories: ['kids', 'natural'],
      description: 'Simple two-strand twists using only natural hair — gentle and healthy.',
      price: 'From £55', duration: '1–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-27.jpeg',
      selected: false, visible: true,
    },
    {
      id: 65, name: 'Kids Updo Braids', categories: ['kids', 'cornrow'],
      description: 'Cornrows pinned into an elegant updo — perfect for special occasions.',
      price: 'From £65', duration: '2–3 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-28.jpeg',
      selected: false, visible: true,
    },
    {
      id: 66, name: 'Kids Ombré Braids', categories: ['kids', 'extension'],
      description: 'Two-tone colour braids in fun, vibrant shades sized for children.',
      price: 'From £80', duration: '3–4 hrs', hairType: 'Extension', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-29.jpeg',
      selected: false, visible: true,
    },
    {
      id: 67, name: 'Kids Straight-Back Braids', categories: ['kids', 'cornrow'],
      description: 'Clean straight-back rows — a simple classic for everyday school wear.',
      price: 'From £45', duration: '1–2 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'assets/images/kids-braids/kids-braids-30.jpeg',
      selected: false, visible: true,
    },
    {
      id: 9, name: 'Mini Twists', categories: ['natural'],
      description: 'Tiny, defined twists that celebrate your natural texture.',
      price: 'From £120', duration: '4–6 hrs', hairType: 'Natural', isUnisex: false,
      imageUrl: 'https://images.pexels.com/photos/8468501/pexels-photo-8468501.jpeg?w=600',
      selected: false, visible: true,
    },
  ];

  styles: StyleCard[] = [];

  ngOnInit(): void {
    this.styles = [...this.allStyles];
  }

  setFilter(key: string): void {
    this.activeFilter = key;
    this.styles = this.allStyles.map(s => ({
      ...s,
      visible: key === 'all' || s.categories.includes(key),
      selected: this.selectedStyle?.id === s.id ? s.selected : false,
    }));
    this.selectedStyle = null;
  }

  selectStyle(style: StyleCard): void {
    if (!style.visible) return;
    this.styles = this.styles.map(s => ({ ...s, selected: s.id === style.id }));
    this.selectedStyle = { ...style, selected: true };
  }

  bookSelected(): void {
    if (this.selectedStyle) {
      this.whatsapp.openBooking('Hair Appointment', this.selectedStyle.name);
    }
  }
}
