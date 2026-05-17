import { Component, HostListener } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

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

  constructor(private modal: EnquiryModalService) {
    addIcons({ menuOutline, closeOutline });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(id: string): void {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  openEnquiry(): void {
    this.menuOpen = false;
    this.modal.open();
  }
}
