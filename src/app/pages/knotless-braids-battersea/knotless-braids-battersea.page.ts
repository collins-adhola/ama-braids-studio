import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  leafOutline,
  heartOutline,
  sparklesOutline,
  calendarOutline,
  brushOutline,
  shieldCheckmarkOutline,
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
  selector: 'app-knotless-braids-battersea',
  standalone: true,
  imports: [IonIcon, ScrollRevealDirective, LazyLoadImageDirective, FooterComponent],
  templateUrl: './knotless-braids-battersea.page.html',
  styleUrls: ['./knotless-braids-battersea.page.scss'],
})
export class KnotlessBraidsBatterseaPage implements OnInit {
  benefits = [
    { icon: 'leaf-outline', title: 'Lightweight Feel', body: 'Knotless starts mean less bulk at the root — dramatically lighter and more comfortable to wear.' },
    { icon: 'heart-outline', title: 'Reduced Scalp Tension', body: 'The gradual technique distributes weight evenly, protecting your edges and natural hairline.' },
    { icon: 'sparkles-outline', title: 'Natural Movement', body: 'Hair moves freely and naturally from the root, with none of the stiffness of traditional box braids.' },
    { icon: 'calendar-outline', title: 'Long-Lasting Style', body: 'With proper care, knotless braids maintain their look for 6–8 weeks — a true protective investment.' },
    { icon: 'brush-outline', title: 'Versatile Styling', body: 'Wear them down, tied up, or parted — knotless braids work beautifully in every arrangement.' },
    { icon: 'shield-checkmark-outline', title: 'Scalp-Friendly Install', body: 'Installed without a tight knot at the base, reducing tension and encouraging healthy hair growth underneath.' },
  ];

  galleryImages = [
    { url: 'assets/images/extensions/extension-braid-13.jpeg', alt: 'Knotless braids — neat parting and healthy scalp install' },
    { url: 'assets/images/extensions/extension-braid-14.jpeg', alt: 'Knotless box braids — natural movement and length' },
    { url: 'assets/images/extensions/extension-braid-21.jpeg', alt: 'Knotless braids — scalp detail, South West London studio' },
    { url: 'assets/images/extensions/extension-braid-24.jpeg', alt: 'Knotless braids — long protective style installation' },
    { url: 'assets/images/extensions/extension-braid-25.jpeg', alt: 'Knotless braids — clean part and lightweight finish' },
    { url: 'assets/images/cornrows/gallery-braid-12.jpeg', alt: 'Precision braid parting — AMA Hair Studio Battersea' },
  ];

  faqs: Faq[] = [
    {
      question: 'How long do knotless braids last?',
      answer: 'With proper care, knotless braids typically last 6–8 weeks. Moisturising your scalp and edges regularly, and sleeping with a silk or satin bonnet, will significantly extend the life of your style.',
      open: false,
    },
    {
      question: 'Do I need to bring my own hair?',
      answer: 'You are welcome to bring your preferred braiding hair. If you are unsure which to choose, AMA can advise on the best options for your desired style and length — just mention it in your enquiry.',
      open: false,
    },
    {
      question: 'How long does installation take?',
      answer: 'Knotless braid installations typically take between 5 and 10 hours depending on style, length, and volume. Your estimated duration will be confirmed when your appointment is booked.',
      open: false,
    },
    {
      question: 'Is a consultation required before booking?',
      answer: 'A brief consultation is included with every appointment to discuss your style preferences, hair health, and any concerns. This ensures the install is tailored to you from the very start.',
      open: false,
    },
    {
      question: 'Are deposits required?',
      answer: 'Yes — a £30 non-refundable deposit is required to secure your appointment. This is processed securely online via Stripe and is deducted from your total on the day.',
      open: false,
    },
    {
      question: 'Do you braid children\'s hair?',
      answer: 'Yes. AMA offers calm, gentle appointments for children in a relaxed one-to-one environment. Kids\' appointments are available separately and can be discussed at the time of enquiry.',
      open: false,
    },
    {
      question: 'How should I prepare my hair before the appointment?',
      answer: 'Please arrive with clean, fully detangled, and completely dry hair. If you are transitioning from a relaxer or have any scalp sensitivities, do mention this in your enquiry so AMA can prepare accordingly.',
      open: false,
    },
  ];

  constructor(
    private modal: EnquiryModalService,
    private seo: SeoService,
  ) {
    addIcons({
      leafOutline,
      heartOutline,
      sparklesOutline,
      calendarOutline,
      brushOutline,
      shieldCheckmarkOutline,
      chevronDownOutline,
      logoWhatsapp,
    });
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Knotless Braids Battersea | AMA Hair Studio',
      description:
        'Luxury knotless braid appointments in Battersea and South West London. Calm private studio experience focused on healthy installs, comfort, and long-lasting results.',
      canonicalUrl: 'https://amahairstudio.com/knotless-braids-battersea',
      ogImage: 'https://amahairstudio.com/assets/images/og-thumbnail.png',
    });
  }

  openEnquiry(): void {
    this.modal.open();
  }

  openWhatsApp(): void {
    const message = encodeURIComponent(
      'Hi AMA! I\'d like to enquire about knotless braid appointments.',
    );
    window.open(`https://wa.me/447846040251?text=${message}`, '_blank');
  }

  scrollToGallery(): void {
    document.getElementById('knotless-gallery')?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
