import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionScrollService {
  private readonly scrollNow$ = new Subject<string>();
  readonly scrollNow = this.scrollNow$.asObservable();

  // Holds a section ID to scroll to once the homepage has finished rendering
  pendingSection: string | null = null;

  // Called when already on the homepage — fires immediately to any subscriber
  request(sectionId: string): void {
    this.scrollNow$.next(sectionId);
  }

  // Called before cross-route navigation — HomePage picks this up on init
  setPending(sectionId: string): void {
    this.pendingSection = sectionId;
  }

  consumePending(): string | null {
    const id = this.pendingSection;
    this.pendingSection = null;
    return id;
  }

  // Shared scroll utility: accounts for the fixed navbar height
  scrollToId(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const nav = document.querySelector('.navbar') as HTMLElement | null;
    const navHeight = nav ? nav.offsetHeight + 8 : 72;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
