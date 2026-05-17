import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { EnquiryModalComponent } from './components/enquiry-modal/enquiry-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    GalleryComponent,
    TestimonialsComponent,
    InstagramFeedComponent,
    BookingComponent,
    FooterComponent,
    CustomCursorComponent,
    EnquiryModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
