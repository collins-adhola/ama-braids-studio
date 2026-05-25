import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  sparklesOutline,
  leafOutline,
  calendarOutline,
  heartOutline,
  peopleOutline,
  homeOutline,
  chevronDownOutline,
  logoWhatsapp,
} from 'ionicons/icons';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LazyLoadImageDirective } from '../../directives/lazy-load-image.directive';
import { FooterComponent } from '../../components/footer/footer.component';
import { EnquiryModalService } from '../../services/enquiry-modal.service';
import { SeoService } from '../../services/seo.service';

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-cornrows-south-west-london',
  standalone: true,
  imports: [IonIcon, ScrollRevealDirective, LazyLoadImageDirective, FooterComponent],
  templateUrl: './cornrows-south-west-london.page.html',
  styleUrls: ['./cornrows-south-west-london.page.scss'],
})
export class CornrowsSouthWestLondonPage implements OnInit {
  benefits = [
    {
      icon: 'sparkles-outline',
      title: 'Precision Parting',
      body: 'Clean, consistent parts are the foundation of every cornrow style. The lines are straight, the sections are even, and the finish speaks for itself.',
    },
    {
      icon: 'leaf-outline',
      title: 'Healthy Installs',
      body: 'Low-tension technique throughout — protecting your edges, natural hair, and scalp from the root of each braid to the tip.',
    },
    {
      icon: 'calendar-outline',
      title: 'Long-Lasting Style',
      body: 'With proper care, cornrows and stitch braids hold their shape for 4–6 weeks, making them one of the most practical protective styles available.',
    },
    {
      icon: 'heart-outline',
      title: 'Low Tension Approach',
      body: 'No pulling, no discomfort. Every braid is installed with the right tension for a style that looks sharp without stressing the hair or scalp.',
    },
    {
      icon: 'people-outline',
      title: 'Men & Women Welcome',
      body: 'Cornrows and stitch braids for everyone — natural finish straight-backs for men through to intricate freestyle patterns for women.',
    },
    {
      icon: 'home-outline',
      title: 'Private Studio',
      body: 'One client at a time, always. A calm, focused appointment without salon noise, double bookings, or distractions.',
    },
  ];

  galleryImages = [
    { url: 'assets/images/cornrows/gallery-braid-12.jpeg', alt: 'Cornrows South West London — precision parting and clean lines' },
    { url: 'assets/images/cornrows/gallery-braid-13.jpeg', alt: 'Stitch braids South London — neat scalp pattern and natural finish' },
    { url: 'assets/images/cornrows/gallery-braid-15.jpeg', alt: 'Feed-in cornrows Battersea — low tension healthy install' },
    { url: 'assets/images/cornrows/gallery-braid-2.jpeg',  alt: 'Natural hair cornrows — scalp braids Clapham studio' },
    { url: 'assets/images/cornrows/gallery-braid-4.jpeg',  alt: 'Scalp braids SW London — freestyle cornrow pattern' },
    { url: 'assets/images/unisex-braids/unisex-braids1.jpg', alt: "Men's cornrows London — clean straight-back natural finish" },
  ];

  faqs: Faq[] = [
    {
      question: 'How long do cornrows last?',
      answer: 'Cornrows and stitch braids typically last 4–6 weeks with proper care. Keeping the scalp moisturised and sleeping with a satin or silk bonnet will significantly extend the life of the style.',
      open: false,
    },
    {
      question: 'Do you braid natural hair only?',
      answer: 'Not exclusively. AMA works with natural hair for cornrow styles, but feed-in braids and stitch braids can incorporate extensions for added length and fullness. Just mention your preference when you enquire.',
      open: false,
    },
    {
      question: 'Are stitch braids available?',
      answer: 'Yes. Stitch braids are available alongside straight-backs, feed-ins, and freestyle cornrow patterns. If you have a specific style in mind, share a reference image in your enquiry.',
      open: false,
    },
    {
      question: "Do you offer men's cornrows?",
      answer: 'Yes. Neat straight-backs and scalp braid styles are available for men. Appointments are private, relaxed, and treated with the same level of attention and precision as any other booking.',
      open: false,
    },
    {
      question: 'Are feed-in braids included as a cornrow option?',
      answer: 'Yes — feed-in braids are available as part of the cornrow service. They create a more natural, tapered look at the root and are a popular choice for clients who want a cleaner finish.',
      open: false,
    },
    {
      question: 'Is hair provided or do I bring my own?',
      answer: 'For natural cornrow styles, no extensions are needed and nothing is required. For feed-ins or stitch braids with added hair, you are welcome to bring your preferred braiding hair — or ask AMA for guidance on what to source.',
      open: false,
    },
    {
      question: 'How should I prepare my hair before the appointment?',
      answer: 'Please arrive with clean, fully detangled, and completely dry hair. Washed hair that has not been detangled will add significant time to the appointment. If you have any scalp concerns, mention them in your enquiry.',
      open: false,
    },
  ];

  constructor(
    private modal: EnquiryModalService,
    private seo: SeoService,
  ) {
    addIcons({
      sparklesOutline,
      leafOutline,
      calendarOutline,
      heartOutline,
      peopleOutline,
      homeOutline,
      chevronDownOutline,
      logoWhatsapp,
    });
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Cornrows South West London | AMA Hair Studio',
      description:
        'Luxury cornrows, stitch braids, and feed-in braid appointments in South West London. Clean parting, healthy installs, and private one-to-one appointments at AMA Hair Studio.',
      canonicalUrl: 'https://amahairstudio.com/cornrows-south-west-london',
      ogImage: 'https://amahairstudio.com/assets/images/og-thumbnail.png',
    });
  }

  openEnquiry(): void {
    this.modal.open();
  }

  openWhatsApp(): void {
    const message = encodeURIComponent(
      "Hi AMA! I'd like to enquire about a cornrow appointment.",
    );
    window.open(`https://wa.me/447846040251?text=${message}`, '_blank');
  }

  scrollToGallery(): void {
    document.getElementById('cornrows-gallery')?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
