import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { promisify } from 'util';
import stream from 'stream';

const pipeline = promisify(stream.pipeline);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputPath = path.join(rootDir, 'extract', 'url_quetes.json');
const htmlDir = path.join(rootDir, 'extract', 'quetes', 'html');
const outputTsPath = path.join(rootDir, 'src', 'data', 'quests.ts');
const assetsDir = path.join(rootDir, 'public', 'assets', 'quests');

const BASE_URL = '/t4c-nms-overview'; 

if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

function slugify(text) {
  return text.toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

function looseSlug(text) {
  return text.toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
}

function standardizeDescription(html) {
  if (!html) return '';
  let clean = html
    .replace(/★/g, '')
    .replace(/<font[^>]*>/g, '')
    .replace(/<\/font>/g, '')
    .replace(/style="[^"]*"/g, '')
    .replace(/class="[^"]*"/g, '')
    .replace(/id="[^"]*"/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    // Highlight keywords in quotes
    .replace(/"([^\"]+)"/g, '<span class="text-amber-400 font-bold">"$1"</span>')
    .replace(/«\s*([^»]+)\s*»/g, '<span class="text-amber-400 font-bold">"$1"</span>')
    // Format coordinates for the UI to pick up
    .replace(/(\(\d+[\s,]+\d+[\s,]+\d+\))/g, '<span class="coords-trigger cursor-pointer bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 border border-slate-600 hover:bg-cyan-500/20 transition-colors" title="Cliquer pour copier">$1</span>');

  return clean.trim();
}

async function downloadImage(url, destPath) {
  try {
    const response = await axios.get(url, { responseType: 'stream', timeout: 15000 });
    await pipeline(response.data, fs.createWriteStream(destPath));
    return true;
  } catch (error) { return false; }
}

const htmlFiles = fs.readdirSync(htmlDir);
const fileMap = new Map();
htmlFiles.forEach(f => fileMap.set(looseSlug(f.replace('.html', '')), f));

async function scrapeQuest(questInfo) {
  const { url, zone: initialZone } = questInfo;
  const urlParts = url.split('/');
  const lastPart = urlParts[urlParts.length - 1].split('#')[0];
  const titleFromUrl = decodeURIComponent(lastPart).replace(/_/g, ' ');
  const fileName = fileMap.get(looseSlug(titleFromUrl));
  if (!fileName) return null;

  try {
    const htmlContent = fs.readFileSync(path.join(htmlDir, fileName), 'utf8');
    const $ = cheerio.load(htmlContent);
    const title = $('#firstHeading').text().trim() || $('h1').first().text().trim() || titleFromUrl;
    const slug = slugify(title);
    const questDir = path.join(assetsDir, slug);
    if (!fs.existsSync(questDir)) fs.mkdirSync(questDir, { recursive: true });

    const questData = { title, slug, zone: initialZone, prerequisites: [], rewards: [], npcs: [], gold: '', steps: [], credits: [] };

    let content = $('.mw-parser-output');
    if (content.find('#soscontenu').length > 0) content = content.find('#soscontenu');
    
    // Extraction des crédits et métadonnées
    content.find('p, li, b, i').each((i, el) => {
      const text = $(el).text().trim();
      const lowerText = text.toLowerCase();
      
      // Detection credits
      if (lowerText.includes('by ') || lowerText.includes('uqbar') || lowerText.includes('meyli') || lowerText.includes('elcentor')) {
          const creditMatch = text.match(/(?:By\s+)?([A-Z][a-zë]+(?:\s+[A-Z][a-z]+)*|Uqbar|Mëyli|Elcentor)/i);
          if (creditMatch) questData.credits.push(creditMatch[0]);
      }

      if (lowerText.match(/^(prérequis|condition|niveau requis|objet nécessaire|items nécessaires)\s*:/)) {
         const val = text.split(':')[1]?.trim(); if (val) questData.prerequisites.push(val);
      } else if (lowerText.match(/^(récompense|gain|xp gagné)\s*:/)) {
         const val = text.split(':')[1]?.trim(); if (val) questData.rewards.push(...val.split(/,| et /).map(s => s.trim()));
      } else if (lowerText.match(/^(pnj|boss|monstres) impliqués\s*:/)) {
         const val = text.split(':')[1]?.trim(); if (val) questData.npcs.push(...val.split(/,| et /).map(s => s.trim()));
      } else if (lowerText.includes('or nécessaire') || lowerText.includes('cout')) {
         const goldMatch = text.match(/(\d+[\d\s.]*)\s*(golds?|pièces d\'or|po)/i);
         if (goldMatch) questData.gold = goldMatch[1].trim();
      }
    });

    const cleanContent = content.clone();
    cleanContent.find('#sosmenu, #sosentete, .navbox, .mw-editsection, .mw-jump-link, .toc, script, style, iframe, noscript, .sos-bouton, .sos-boutonac').remove();
    cleanContent.find('a').each((i, el) => { if ($(el).find('img').length === 0) $(el).replaceWith($(el).text()); });

    let currentStep = { title: 'Introduction', description: '', images: [] };
    let stepCount = 0;
    const elements = cleanContent.find('h2, h3, h4, p, ul, ol, figure, div.thumb');
    
    for (let i = 0; i < elements.length; i++) {
      const tagName = elements[i].tagName.toLowerCase();
      const $el = $(elements[i]);

      if (['h2', 'h3', 'h4'].includes(tagName)) {
         if (currentStep.description.trim() || currentStep.images.length > 0) {
           currentStep.order = stepCount++;
           questData.steps.push(currentStep);
         }
         currentStep = { title: $el.text().trim(), description: '', images: [] };
      } else if (tagName === 'figure' || $el.hasClass('thumb')) {
        const imgs = $el.find('img');
        for (let j = 0; j < imgs.length; j++) {
          const src = $(imgs[j]).attr('src');
          const realSrc = $(imgs[j]).attr('data-src') || src;
          if (realSrc && !realSrc.includes('data:image')) {
              const filename = `img_${stepCount}_${j}.jpg`;
              const localPath = path.join(questDir, filename);
              if (!fs.existsSync(localPath)) await downloadImage(realSrc, localPath);
              currentStep.images.push(`${BASE_URL}/assets/quests/${slug}/${filename}`);
          }
        }
      } else {
        const desc = standardizeDescription($.html($el));
        if (desc && !desc.toLowerCase().includes('n\'hésitez pas à signaler')) {
            // Check if this paragraph is just a credit we already captured
            const isJustCredit = questData.credits.some(c => desc.includes(c) && desc.length < c.length + 10);
            if (!isJustCredit) currentStep.description += desc;
        }
      }
    }
    if (currentStep.description.trim() || currentStep.images.length > 0) {
      currentStep.order = stepCount++;
      questData.steps.push(currentStep);
    }

    questData.credits = [...new Set(questData.credits)];
    questData.prerequisites = [...new Set(questData.prerequisites.map(p => p.trim()))];
    questData.rewards = [...new Set(questData.rewards.map(r => r.trim()))];
    
    return questData;
  } catch (err) { return null; }
}

async function run() {
  const questsRaw = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const results = [];
  for (const q of questsRaw) {
    const data = await scrapeQuest(q);
    if (data) results.push(data);
  }
  const tsContent = `export interface QuestStep { order: number; title: string; description: string; images: string[]; }\nexport interface Quest { title: string; slug: string; zone: string; prerequisites: string[]; rewards: string[]; npcs: string[]; gold: string; steps: QuestStep[]; credits: string[]; }\nexport const quests: Quest[] = ${JSON.stringify(results, null, 2)};`;
  fs.writeFileSync(outputTsPath, tsContent);
  console.log('Données harmonisées avec crédits et coordonnées !');
}
run();