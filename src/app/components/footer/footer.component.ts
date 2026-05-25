import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoInstagram, logoWhatsapp, logoFacebook } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonIcon, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    addIcons({ logoInstagram, logoWhatsapp, logoFacebook });
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  openWhatsApp(): void {
    const message = encodeURIComponent('Hi AMA! I\'d like to find out more about your braiding services.');
    window.open(`https://wa.me/447846040251?text=${message}`, '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/braidsbyama', '_blank');
  }

  openGoogleBusiness(): void {
    window.open('https://www.google.com/maps/search/AMA+Hair+Studio+Battersea', '_blank');
  }
}
