import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heartOutline,
  happyOutline,
  checkmarkCircleOutline,
  shieldCheckmarkOutline,
  leafOutline,
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
  selector: 'app-kids-braids-clapham',
  standalone: true,
  imports: [IonIcon, ScrollRevealDirective, LazyLoadImageDirective, FooterComponent],
  templateUrl: './kids-braids-clapham.page.html',
  styleUrls: ['./kids-braids-clapham.page.scss'],
})
export class KidsBraidsClaphamPage implements OnInit {
  benefits = [
    {
      icon: 'heart-outline',
      title: 'Gentle Installations',
      body: 'Every style is installed with care and patience — no pulling, no rushing, and full attention to your child\'s comfort throughout.',
    },
    {
      icon: 'happy-outline',
      title: 'Child-Friendly Experience',
      body: 'Appointments are calm and relaxed. Children are welcomed gently, with time built in to settle before any styling begins.',
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Comfortable From Start to Finish',
      body: 'Everything — from seating to technique — is adapted to make the experience as comfortable and stress-free as possible.',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Protective Styling',
      body: 'Styles are chosen and installed to protect your child\'s natural hair and support healthy growth underneath.',
    },
    {
      icon: 'leaf-outline',
      title: 'Healthy Hair Approach',
      body: 'Gentle technique means no tight tension at the scalp — preserving edges and keeping natural hair healthy from the start.',
    },
    {
      icon: 'home-outline',
      title: 'Private One-to-One',
      body: 'No noisy salon environment. Your child\'s appointment is entirely private — calm, focused, and uninterrupted.',
    },
  ];

  galleryImages = [
    { url: 'assets/images/kids-braids/kids-braids-6.jpeg',  alt: 'Kids braids — neat parting and gentle installation' },
    { url: 'assets/images/kids-braids/kids-braids-1.jpeg',  alt: 'Children\'s box braids — clean finish and healthy scalp' },
    { url: 'assets/images/kids-braids/kids-braids-4.jpeg',  alt: 'Kids protective braid style — South West London studio' },
    { url: 'assets/images/kids-braids/kids-braids-10.jpeg', alt: 'Girls braids Clapham — calm private appointment' },
    { url: 'assets/images/kids-braids/kids-braids-11.jpeg', alt: 'Children\'s cornrows — precise parting and natural finish' },
    { url: 'assets/images/kids-braids/kids-braids-17.jpeg', alt: 'Kids braid style — AMA Hair Studio Clapham' },
  ];

  faqs: Faq[] = [
    {
      question: 'What age do you braid children\'s hair?',
      answer: 'AMA braids children\'s hair from around age 3 upwards, though every child is different. If you\'re unsure whether your child is ready, just mention their age in your enquiry and it can be discussed before booking.',
      open: false,
    },
    {
      question: 'How long do kids braid appointments take?',
      answer: 'Children\'s appointments typically take between 1 and 5 hours, depending on the style, your child\'s hair length, and how settled they are. The pace is always relaxed — there\'s no rushing.',
      open: false,
    },
    {
      question: 'Are appointments private?',
      answer: 'Yes, completely. It is always one client at a time — no other children or clients in the studio. This makes for a much calmer, more comfortable experience for children who may feel anxious in a busy salon setting.',
      open: false,
    },
    {
      question: 'Do I need to provide extensions or braiding hair?',
      answer: 'You are welcome to bring your preferred braiding hair. If you\'re unsure what to buy or how much you\'ll need, just ask when you enquire and AMA will guide you based on the style and your child\'s hair.',
      open: false,
    },
    {
      question: 'How should I prepare my child\'s hair before the appointment?',
      answer: 'Please arrive with clean, fully detangled, and completely dry hair. Damp or tangled hair will significantly extend appointment time. If your child has any scalp sensitivities, do mention this when booking.',
      open: false,
    },
    {
      question: 'Are weekend appointments available?',
      answer: 'Yes — Saturday and Sunday appointments are available. Weekend slots are popular, especially for children\'s bookings, so it\'s worth enquiring early to check availability.',
      open: false,
    },
    {
      question: 'Are the styles suitable for school?',
      answer: 'Absolutely. Neat, classic styles such as cornrows, box braids, and knotless braids are all suitable for school wear. If your child\'s school has specific requirements, feel free to mention them when booking.',
      open: false,
    },
  ];

  constructor(
    private modal: EnquiryModalService,
    private seo: SeoService,
  ) {
    addIcons({
      heartOutline,
      happyOutline,
      checkmarkCircleOutline,
      shieldCheckmarkOutline,
      leafOutline,
      homeOutline,
      chevronDownOutline,
      logoWhatsapp,
    });
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Kids Braids Clapham | AMA Hair Studio',
      description:
        'Gentle and stylish kids braid appointments in Clapham and South West London. Calm private studio experience focused on comfort, care, and healthy protective styling.',
      canonicalUrl: 'https://amahairstudio.com/kids-braids-clapham',
      ogImage: 'https://amahairstudio.com/assets/images/og-thumbnail.png',
    });
  }

  openEnquiry(): void {
    this.modal.open();
  }

  openWhatsApp(): void {
    const message = encodeURIComponent(
      "Hi AMA! I'd like to enquire about a children's braid appointment.",
    );
    window.open(`https://wa.me/447846040251?text=${message}`, '_blank');
  }

  scrollToGallery(): void {
    document.getElementById('kids-gallery')?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
