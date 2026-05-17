# Image Optimization Guide

## Completed Optimizations

### 1. ✓ Compressed All Existing Images

- **Hero images** (hero.jpeg, portrait.jpeg): Reduced from 500K+ to ~380K
- **Cornrows gallery**: Reduced to 20-26K per image
- **Extensions gallery**: Reduced from 700K-1.2MB to 300-400K per image
- **Kids braids**: Optimized with quality preservation

**Quality Settings:**

- Hero/Portrait: 85% quality, max 1400px width
- Gallery images: 82% quality, max 1400px width
- Extensions: 80% quality (larger images), max 1400px width

---

## 2. ✓ Automated Build Process

### How It Works

When you run `npm run build`, images are automatically optimized:

```bash
# Standard build with optimization
npm run build

# Production build with optimization
npm run build:prod

# Manual optimization (optional)
npm run optimize:images
```

**Build Script Location:** `frontend/scripts/optimize-images.js`

The script:

- Detects image type (hero, gallery, general)
- Applies appropriate compression levels
- Preserves image quality for luxury aesthetic
- Strips metadata to reduce file size
- Maintains max 1400px width for responsive design

---

## 3. ✓ Lazy Loading Implementation

### Using Lazy Load Directive

Add the `appLazyLoad` directive to any image:

```html
<!-- Basic usage -->
<img appLazyLoad src="assets/images/gallery-image.jpeg" alt="Description" />

<!-- With placeholder for UX -->
<img
  appLazyLoad
  src="assets/images/gallery-image.jpeg"
  placeholder="assets/images/placeholder.jpg"
  alt="Description"
/>
```

### How It Works

1. **Browser Native Lazy Loading**: `loading="lazy"` attribute
2. **IntersectionObserver**: Loads images when 50px before viewport
3. **Fallback**: Loads images immediately on older browsers
4. **Async Decoding**: `decoding="async"` for smooth rendering
5. **Fade-in Animation**: Smooth 0.3s opacity transition

### Implementation Steps

#### Step 1: Import the Directive in Component

```typescript
import { LazyLoadImageDirective } from "@app/directives/lazy-load-image.directive";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [LazyLoadImageDirective, CommonModule],
  template: `...`,
})
export class GalleryComponent {}
```

#### Step 2: Add to Template

```html
<div class="gallery-grid">
  @for (image of galleryImages; track image.id) {
  <img appLazyLoad [src]="image.src" [alt]="image.alt" />
  }
</div>
```

---

## Performance Metrics

### Before Optimization

- Hero image: 503K / 533K
- Extensions images: 700K-1.2MB each
- Total gallery size: ~25MB+

### After Optimization

- Hero image: ~380K (24% reduction)
- Extensions images: 300-400K each (50-65% reduction)
- Estimated total gallery: ~8-10MB (60%+ reduction)

### With Lazy Loading

- Page load time: Faster (only viewport images loaded)
- User experience: Smooth fade-in transitions
- Mobile performance: Significantly improved

---

## Responsive Image Best Practices

### For Gallery Components

```html
<picture>
  <source
    srcset="assets/images/gallery-small.webp"
    media="(max-width: 600px)"
  />
  <source
    srcset="assets/images/gallery-medium.webp"
    media="(max-width: 1000px)"
  />
  <img appLazyLoad src="assets/images/gallery-large.jpeg" alt="Gallery Image" />
</picture>
```

### CSS for Image Optimization

```scss
img {
  &[appLazyLoad] {
    opacity: 0;
    transition: opacity 0.3s ease-in;

    &.loaded {
      opacity: 1;
    }
  }
}
```

---

## Maintenance

### When Adding New Images

1. Place images in appropriate subdirectory:
   - `src/assets/images/` for hero/main images
   - `src/assets/images/cornrows/` for gallery
   - `src/assets/images/extensions/` for extension styles
   - `src/assets/images/kids-braids/` for kids styles

2. Images are automatically optimized on next build

3. Add `appLazyLoad` directive to image tags in templates

### File Size Targets

- Gallery images: 150-300KB max
- Hero images: Under 500KB
- Extension images: 300-400KB max

---

## Next Steps (Optional)

### Convert to WebP (Additional 30-40% Savings)

```bash
# Install WebP converter
brew install webp

# Convert JPEG to WebP
for file in src/assets/images/**/*.jpeg; do
  cwebp "$file" -o "${file%.jpeg}.webp"
done
```

Then use with picture element for even more savings.

### Enable Gzip/Brotli Compression

Update `angular.json`:

```json
{
  "projects": {
    "app": {
      "architect": {
        "build": {
          "options": {
            "optimization": {
              "scripts": true,
              "styles": true,
              "fonts": true
            }
          }
        }
      }
    }
  }
}
```

---

## Troubleshooting

### Images Not Showing

1. Check console for 404 errors
2. Verify file paths in src attribute
3. Ensure images exist in `src/assets/images/`

### Lazy Loading Not Working

1. Verify `appLazyLoad` directive is imported
2. Check browser console for errors
3. Use native `loading="lazy"` as fallback

### Build Optimization Fails

1. Ensure ImageMagick is installed: `brew install imagemagick`
2. Check file permissions on images
3. Run `npm run optimize:images` manually to debug

---

## Support

For image optimization issues or questions, review the script at:
`frontend/scripts/optimize-images.js`
