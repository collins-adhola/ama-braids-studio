import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { EnquiryModalService } from '../../services/enquiry-modal.service';
import { SectionScrollService } from '../../services/section-scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IonIcon],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  constructor(
    private modal: EnquiryModalService,
    private router: Router,
    private scrollService: SectionScrollService,
  ) {
    addIcons({ menuOutline, closeOutline });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goHome(): void {
    this.menuOpen = false;
    if (this.onHomePage()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }

  navigateToSection(id: string): void {
    this.menuOpen = false;
    if (this.onHomePage()) {
      this.scrollService.request(id);
    } else {
      this.scrollService.setPending(id);
      this.router.navigate(['/']);
    }
  }

  openEnquiry(): void {
    this.menuOpen = false;
    this.modal.open();
  }

  private onHomePage(): boolean {
    return this.router.url.split('?')[0].split('#')[0] === '/';
  }
}
