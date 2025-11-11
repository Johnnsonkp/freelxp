const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/projects',
  'public/images/AgencyProjects',
  'public/images'
];

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  try {
    const stats = fs.statSync(filePath);
    const originalSize = (stats.size / 1024).toFixed(2);

    await sharp(filePath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85 })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(filePath + '.tmp');

    fs.renameSync(filePath + '.tmp', filePath);

    const newStats = fs.statSync(filePath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(1);

    console.log(`✓ ${path.basename(filePath)}: ${originalSize}KB → ${newSize}KB (saved ${saved}%)`);
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await compressImage(filePath);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image compression...\n');

  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Processing ${dir}...`);
      await processDirectory(dir);
      console.log('');
    }
  }

  console.log('✅ Done!');
}

main();
