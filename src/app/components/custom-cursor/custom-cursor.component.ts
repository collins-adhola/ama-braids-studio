import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss'],
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  @ViewChild('dot', { static: true }) dotRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ring', { static: true }) ringRef!: ElementRef<HTMLDivElement>;

  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animFrame = 0;
  private isTouchDevice = false;

  ngOnInit(): void {
    this.isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!this.isTouchDevice) {
      this.animate();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrame);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.isTouchDevice) return;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    const dot = this.dotRef?.nativeElement;
    if (dot) {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onHover(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, [role="button"], .style-card, .service-row, .feed-tile');
    const ring = this.ringRef?.nativeElement;
    if (ring) {
      ring.classList.toggle('expanded', !!isInteractive);
    }
  }

  private animate(): void {
    const ring = this.ringRef?.nativeElement;
    if (ring) {
      this.ringX += (this.mouseX - this.ringX) * 0.12;
      this.ringY += (this.mouseY - this.ringY) * 0.12;
      ring.style.left = `${this.ringX}px`;
      ring.style.top = `${this.ringY}px`;
    }
    this.animFrame = requestAnimationFrame(() => this.animate());
  }
}
