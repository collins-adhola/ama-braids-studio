import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

/**
 * Lazy Loading Image Directive
 * Usage: <img appLazyLoad src="image.jpg" [placeholder]="'image-placeholder.jpg'" />
 *
 * Features:
 * - Lazy loads images only when they enter the viewport
 * - Smooth fade-in transition
 * - Fallback for browsers without IntersectionObserver support
 * - Placeholder support for better UX
 */
@Directive({
  selector: "img[appLazyLoad]",
  standalone: true,
})
export class LazyLoadImageDirective implements OnInit {
  @Input() appLazyLoad: boolean = true;
  @Input() placeholder: string | null = null;

  private intersectionObserver: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (!this.appLazyLoad) {
      return;
    }

    const img = this.el.nativeElement;

    // Set placeholder if provided
    if (this.placeholder) {
      this.renderer.setAttribute(img, "src", this.placeholder);
    }

    // Add loading="lazy" for browser native lazy loading
    this.renderer.setAttribute(img, "loading", "lazy");
    this.renderer.setAttribute(img, "decoding", "async");

    // Store the actual image source
    const dataSrc = img.getAttribute("data-src") || img.getAttribute("src");
    if (dataSrc && !img.src?.includes(dataSrc)) {
      this.renderer.setAttribute(img, "data-src", dataSrc);
    }

    // Use IntersectionObserver for enhanced lazy loading
    if ("IntersectionObserver" in window) {
      this.setupIntersectionObserver(img);
    } else {
      // Fallback for older browsers
      this.loadImage(img);
    }
  }

  private setupIntersectionObserver(img: HTMLImageElement): void {
    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.01,
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(img);
          if (this.intersectionObserver) {
            this.intersectionObserver.unobserve(img);
          }
        }
      });
    }, options);

    this.intersectionObserver.observe(img);
  }

  private loadImage(img: HTMLImageElement): void {
    const dataSrc = img.getAttribute("data-src") || img.getAttribute("src");

    if (dataSrc && !img.src?.includes(dataSrc)) {
      // Use a temporary image to pre-load
      const tempImg = new Image();

      tempImg.onload = () => {
        this.renderer.setAttribute(img, "src", dataSrc);
        this.renderer.addClass(img, "loaded");
        this.addFadeInAnimation(img);
      };

      tempImg.onerror = () => {
        console.warn(`Failed to load image: ${dataSrc}`);
      };

      tempImg.src = dataSrc;
    }
  }

  private addFadeInAnimation(img: HTMLImageElement): void {
    this.renderer.setStyle(img, "opacity", "1");
    this.renderer.setStyle(img, "transition", "opacity 0.3s ease-in");
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
