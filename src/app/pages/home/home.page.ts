import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { InstagramFeedComponent } from '../../components/instagram-feed/instagram-feed.component';
import { BookingComponent } from '../../components/booking/booking.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    GalleryComponent,
    TestimonialsComponent,
    InstagramFeedComponent,
    BookingComponent,
    FooterComponent,
  ],
  templateUrl: './home.page.html',
})
export class HomePage {}
