import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { InstagramFeedComponent } from '../../components/instagram-feed/instagram-feed.component';
import { BookingComponent } from '../../components/booking/booking.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SectionScrollService } from '../../services/section-scroll.service';

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
export class HomePage implements OnInit, OnDestroy {
  private sub: Subscription | undefined;

  constructor(private scrollService: SectionScrollService) {}

  ngOnInit(): void {
    const pending = this.scrollService.consumePending();
    if (pending) {
      setTimeout(() => this.scrollService.scrollToId(pending), 300);
    }

    this.sub = this.scrollService.scrollNow.subscribe(id => {
      this.scrollService.scrollToId(id);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
