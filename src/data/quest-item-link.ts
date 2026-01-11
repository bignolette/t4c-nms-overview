import { itemsData } from './items';
import { fastNormalize } from './utils';
import type { Quest } from './quests';

// Cache for normalized item names to avoid re-computing
const normalizedItemsCache: { name: string; norm: string }[] = [];
let isCacheBuilt = false;

// Regex Cache
let masterItemRegex: RegExp | null = null;

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const createPattern = (str: string) => {
  return str.split('').map(char => {
    if (/[aAàÀâÂäÄ]/.test(char)) return '[aAàÀâÂäÄ]';
    if (/[eEéÉèÈêÊëË]/.test(char)) return '[eEéÉèÈêÊëË]';
    if (/[iIîÎïÏ]/.test(char)) return '[iIîÎïÏ]';
    if (/[oOôÔöÖ]/.test(char)) return '[oOôÔöÖ]';
    if (/[uUùÙûÛüÜ]/.test(char)) return '[uUùÙûÛüÜ]';
    if (/[yYÿŸ]/.test(char)) return '[yYÿŸ]';
    if (/[cCçÇ]/.test(char)) return '[cCçÇ]';
    if (/\s/.test(char)) return '\\s+';
    return escapeRegExp(char);
  }).join('');
};

const buildCache = () => {
  if (isCacheBuilt) return;
  
  const sortedNames: string[] = [];

  itemsData.forEach(item => {
    // Only index items with names longer than 2 characters to avoid noise
    if (item.name.length > 2) {
      normalizedItemsCache.push({
        name: item.name,
        norm: fastNormalize(item.name)
      });
      sortedNames.push(item.name);
    }
  });

  // Sort by length (descending) to ensure we match specific items first
  // e.g. "Potion de soin" before "Potion"
  normalizedItemsCache.sort((a, b) => b.norm.length - a.norm.length);
  
  // Build Regex
  // Sort names by length descending for the regex too
  sortedNames.sort((a, b) => b.length - a.length);
  
  // Create a giant alternation group: \b(Name1|Name2|...)\b
  // We use word boundaries to avoid matching "Fer" in "Ferme"
  const pattern = '\\b(' + sortedNames.map(createPattern).join('|') + ')\\b';
  masterItemRegex = new RegExp(pattern, 'g');

  isCacheBuilt = true;
};

export const findItemsInQuest = (quest: Quest): string[] => {
  buildCache();
  
  const foundItems = new Set<string>();
  
  const fullText = [
    quest.title,
    ...quest.steps.map(s => s.description.replace(/<[^>]+>/g, ' ')),
    ...quest.rewards,
    ...quest.prerequisites
  ].join(' ');

  const normalizedText = fastNormalize(fullText);

  normalizedItemsCache.forEach(({ name, norm }) => {
    if (normalizedText.includes(norm)) {
      foundItems.add(name);
    }
  });

  return Array.from(foundItems).sort();
};

export const linkItemsInHtml = (html: string): string => {
  if (!html) return html;
  buildCache();

  if (!masterItemRegex) return html;

  // Split by HTML tags so we only replace in text content
  const parts = html.split(/(<[^>]+>)/g);

  return parts.map(part => {
    // If it's a tag, return as is
    if (part.startsWith('<')) return part;
    
    // Replace items in text
    // We use a function replacement to use the matched text in the link
    return part.replace(masterItemRegex!, (match) => {
      // Create a link that points to the item search
      // Use standard <a> tag since this is injected HTML
      // We use hash routing
      return `<a href="#/wiki/items?search=${encodeURIComponent(match)}" class="text-amber-400 font-bold hover:underline decoration-amber-500/50 underline-offset-2 transition-colors cursor-pointer relative z-10" title="Voir l'objet">${match}</a>`;
    });
  }).join('');
};
