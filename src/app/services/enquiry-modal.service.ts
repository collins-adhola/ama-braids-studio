import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EnquiryPreset {
  service?: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryModalService {
  private readonly preset$ = new BehaviorSubject<EnquiryPreset | null>(null);
  readonly state$ = this.preset$.asObservable();

  open(preset: EnquiryPreset = {}): void {
    this.preset$.next(preset);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.preset$.next(null);
    document.body.style.overflow = '';
  }
}
