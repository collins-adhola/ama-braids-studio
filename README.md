# ama-braids

## Image Optimisation

This project includes a documented image optimisation workflow for website photography and gallery assets.

### What it covers

- Audit and backup original images before making changes.
- Resize images to display size (max `1400px` width for large assets).
- Compress JPEG gallery images at `75-85%` quality while preserving detail.
- Convert to modern formats like `WebP` or `AVIF` where appropriate.
- Use responsive markup with `<picture>` and `srcset` for different device widths.
- Apply lazy loading to below-the-fold and gallery images using `loading="lazy"`.
- Automate image optimisation during build using a custom script.

### How to use

#### Local optimisation

Run the optimisation script from the frontend folder:

```bash
cd frontend
npm run optimize:images
```

#### Build with optimisation

Use the build scripts that run image optimisation first:

```bash
npm run build
npm run build:prod
```

### Best practices for galleries

- Serve lower-resolution thumbnails in grid views.
- Load full-resolution images only when the user views or expands them.
- Use blurred or subtle placeholder images for a polished gallery experience.
- Keep hero and portrait images under `500KB` if possible.
- Keep gallery assets around `150-300KB` after optimisation.

### Notes

- The optimisation script is defined at `frontend/scripts/optimize-images.js`.
- The image optimisation skill is documented in `.github/skills/image-optimisation/SKILL.md`.
- Use `loading="lazy"` + `decoding="async"` on key image tags for better performance.
