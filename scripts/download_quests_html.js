
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputPath = path.join(rootDir, 'extract', 'url_quetes.json');
const outputDir = path.join(rootDir, 'extract', 'quetes', 'html');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function downloadPage(quest) {
  const { url } = quest;
  // Extract title from URL last part if possible or use a temp slug
  // Ideally we use the same slugify logic as before, but we need the title.
  // We can get the title from the URL for the filename.
  const urlParts = url.split('/');
  const lastPart = urlParts[urlParts.length - 1];
  const title = decodeURIComponent(lastPart).replace(/_/g, ' ');
  const slug = slugify(title);
  const filePath = path.join(outputDir, `${slug}.html`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping (already exists): ${slug}`);
    return;
  }

  console.log(`Downloading: ${url} -> ${slug}.html`);
  
  try {
    const { data } = await axios.get(url);
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error(`Failed to download ${url}:`, error.message);
  }
}

async function run() {
  const quests = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  
  for (const quest of quests) {
    await downloadPage(quest);
    await new Promise(r => setTimeout(r, 200)); // Rate limit
  }
  console.log('All pages downloaded.');
}

run();
