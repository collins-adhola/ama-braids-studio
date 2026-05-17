import { Component } from '@angular/core';
import { EnquiryModalService } from '../../services/enquiry-modal.service';

@Component({
  selector: 'app-bridal',
  standalone: true,
  imports: [],
  templateUrl: './bridal.component.html',
  styleUrls: ['./bridal.component.scss'],
})
export class BridalComponent {
  constructor(private modal: EnquiryModalService) {}

  enquire(): void {
    this.modal.open({ service: 'Bridal Package' });
  }
}
