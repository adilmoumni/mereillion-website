import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve(process.argv[2] ?? 'out');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

const stats = {
  scanned: 0,
  optimized: 0,
  skipped: 0,
  bytesBefore: 0,
  bytesAfter: 0,
};

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;

  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`;
};

const walkFiles = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
};

const buildOptimizedBuffer = async (filePath, buffer) => {
  const extension = path.extname(filePath).toLowerCase();
  const image = sharp(buffer, { animated: true }).rotate();

  switch (extension) {
    case '.jpg':
    case '.jpeg':
      return image.jpeg({
        quality: 80,
        mozjpeg: true,
        progressive: true,
      }).toBuffer();
    case '.png':
      return image.png({
        compressionLevel: 9,
        progressive: true,
      }).toBuffer();
    case '.webp':
      return image.webp({
        quality: 80,
        effort: 6,
      }).toBuffer();
    case '.avif':
      return image.avif({
        quality: 50,
        effort: 6,
      }).toBuffer();
    default:
      return null;
  }
};

const optimizeFile = async (filePath) => {
  const extension = path.extname(filePath).toLowerCase();

  if (!supportedExtensions.has(extension)) return;

  const originalBuffer = await fs.readFile(filePath);
  const relativePath = path.relative(outputDir, filePath);

  stats.scanned += 1;
  stats.bytesBefore += originalBuffer.byteLength;

  try {
    const optimizedBuffer = await buildOptimizedBuffer(filePath, originalBuffer);

    if (!optimizedBuffer) {
      stats.skipped += 1;
      stats.bytesAfter += originalBuffer.byteLength;
      return;
    }

    const savings = originalBuffer.byteLength - optimizedBuffer.byteLength;
    const minimumSavings = Math.max(1024, Math.floor(originalBuffer.byteLength * 0.02));

    if (savings < minimumSavings) {
      stats.skipped += 1;
      stats.bytesAfter += originalBuffer.byteLength;
      return;
    }

    await fs.writeFile(filePath, optimizedBuffer);
    stats.optimized += 1;
    stats.bytesAfter += optimizedBuffer.byteLength;

    const savingsPercent = ((savings / originalBuffer.byteLength) * 100).toFixed(1);
    console.log(
      `optimized ${relativePath}: ${formatBytes(originalBuffer.byteLength)} -> ${formatBytes(optimizedBuffer.byteLength)} (-${savingsPercent}%)`,
    );
  } catch (error) {
    stats.skipped += 1;
    stats.bytesAfter += originalBuffer.byteLength;
    console.warn(`skipped ${relativePath}: ${error instanceof Error ? error.message : String(error)}`);
  }
};

const main = async () => {
  try {
    await fs.access(outputDir);
  } catch {
    console.error(`Output directory not found: ${outputDir}`);
    process.exit(1);
  }

  const files = await walkFiles(outputDir);

  for (const filePath of files) {
    await optimizeFile(filePath);
  }

  const totalSavings = stats.bytesBefore - stats.bytesAfter;
  const savingsPercent = stats.bytesBefore === 0
    ? '0.0'
    : ((totalSavings / stats.bytesBefore) * 100).toFixed(1);

  console.log(
    `image optimization complete: scanned ${stats.scanned}, optimized ${stats.optimized}, skipped ${stats.skipped}, saved ${formatBytes(totalSavings)} (${savingsPercent}%)`,
  );
};

await main();
