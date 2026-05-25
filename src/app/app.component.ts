import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EnquiryModalComponent } from './components/enquiry-modal/enquiry-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, RouterOutlet, NavbarComponent, EnquiryModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
