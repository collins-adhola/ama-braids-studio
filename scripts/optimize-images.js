/**
 * Image Optimization Build Script
 * Compresses and optimizes images during the build process
 *
 * Usage: node scripts/optimize-images.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const IMAGES_DIR = path.join(__dirname, "../src/assets/images");

// Configuration for different image types
const imageConfig = {
  hero: { quality: 85, maxWidth: 1400, extensions: ["jpeg"] },
  gallery: { quality: 82, maxWidth: 1400, extensions: ["jpeg"] },
  general: { quality: 82, maxWidth: 1400, extensions: ["jpeg", "png"] },
};

/**
 * Get image type based on directory
 */
function getImageType(filePath) {
  if (filePath.includes("hero") || filePath.includes("portrait")) {
    return "hero";
  }
  if (
    filePath.includes("gallery") ||
    filePath.includes("cornrows") ||
    filePath.includes("extensions") ||
    filePath.includes("kids-braids")
  ) {
    return "gallery";
  }
  return "general";
}

/**
 * Compress image using ImageMagick
 */
function compressImage(inputPath, outputPath, quality, maxWidth) {
  try {
    const command = `convert "${inputPath}" -resize ${maxWidth}x\\> -quality ${quality} -strip "${outputPath}"`;
    execSync(command, { stdio: "inherit" });
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to optimize: ${path.basename(inputPath)}`);
    console.error(error.message);
  }
}

/**
 * Process all images in directory
 */
function optimizeImagesInDirectory(dirPath, config) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        optimizeImagesInDirectory(filePath, config);
      } else if (
        config.extensions.includes(
          path.extname(file).substring(1).toLowerCase(),
        )
      ) {
        // Create temporary output file to avoid corruption if process fails
        const tempPath = filePath + ".tmp";
        compressImage(filePath, tempPath, config.quality, config.maxWidth);

        // Replace original if successful
        if (fs.existsSync(tempPath)) {
          fs.renameSync(tempPath, filePath);
        }
      }
    });
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

/**
 * Main optimization function
 */
function optimizeAllImages() {
  console.log("🖼️  Starting image optimization...\n");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const startTime = Date.now();

  try {
    const files = fs.readdirSync(IMAGES_DIR);

    files.forEach((file) => {
      const filePath = path.join(IMAGES_DIR, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        const type = getImageType(filePath);
        const config = imageConfig[type];
        console.log(`\nProcessing ${type} images in ${file}/`);
        optimizeImagesInDirectory(filePath, config);
      } else if (file.match(/\.(jpeg|jpg|png|gif)$/i)) {
        const type = getImageType(file);
        const config = imageConfig[type];
        const tempPath = filePath + ".tmp";
        compressImage(filePath, tempPath, config.quality, config.maxWidth);

        if (fs.existsSync(tempPath)) {
          fs.renameSync(tempPath, filePath);
        }
      }
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✓ Image optimization complete in ${duration}s\n`);
  } catch (error) {
    console.error("Optimization failed:", error.message);
    process.exit(1);
  }
}

// Run optimization
optimizeAllImages();
