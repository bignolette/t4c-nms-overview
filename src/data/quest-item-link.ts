import { itemsData } from './items';
import { fastNormalize } from './utils';
import type { Quest } from './quests';

// Cache for normalized item names to avoid re-computing
const normalizedItemsCache: { name: string; norm: string }[] = [];
let isCacheBuilt = false;

// Regex Cache
let masterItemRegex: RegExp | null = null;

const VOWEL_MAP: Record<string, string> = {
  'a': '[aAàÀâÂäÄ]',
  'e': '[eEéÉèÈêÊëË]',
  'i': '[iIîÎïÏ]',
  'o': '[oOôÔöÖ]',
  'u': '[uUùÙûÛüÜ]',
  'y': '[yYÿŸ]',
  'c': '[cCçÇ]'
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const createPattern = (str: string) => {
  const stopWords = ['de', 'du', 'des', 'le', 'la', 'les', 'au', 'aux', 'd', 'l', 'un', 'une', 'un'];
  
  // Split by spaces and apostrophes
  const parts = str.split(/[\s'’]+/).filter(p => p.length > 0);
  
  return parts.map((word, index) => {
    // Character by character mapping for vowels/accents
    let p = word.split('').map(char => {
      const lowerChar = char.toLowerCase();
      return VOWEL_MAP[lowerChar] || escapeRegExp(char);
    }).join('');

    const lowerWord = word.toLowerCase();
    
    // Improved plural handling
    if (!stopWords.includes(lowerWord) && word.length > 2) {
      if (lowerWord.endsWith('s') || lowerWord.endsWith('x')) {
        p = p.slice(0, -1) + '[sx]?';
      } else if (lowerWord.endsWith('al')) {
        p = p + '(?:[sx]|ux)?';
      } else {
        p = p + '[sx]?';
      }
    }
    
    return p;
  }).join('(?:\\s+|[\'’]|&nbsp;|<[^>]+>)*'); // allow spaces, apostrophes, nbsp OR tags between words
};

const buildCache = () => {
  if (isCacheBuilt) return;
  
  const sortedItems = [...itemsData].filter(item => item.name.length >= 2);

  // Index items for findItemsInQuest
  sortedItems.forEach(item => {
    normalizedItemsCache.push({
      name: item.name,
      norm: fastNormalize(item.name)
    });
  });

  // Sort items by length descending to match longest phrases first
  sortedItems.sort((a, b) => b.name.length - a.name.length);
  
  // Build a giant alternation: (Tag)|(Item1|Item2|...)
  // We use word boundaries \b but be careful with French apostrophes.
  // We use a lookbehind/lookahead for word boundaries that includes apostrophes
  const itemPatterns = sortedItems.map(item => {
    const pattern = createPattern(item.name);
    // Short names (2-3 chars) need stricter boundaries to avoid matching inside other words
    if (item.name.length <= 3) {
      return `\\b${pattern}\\b`;
    }
    return pattern;
  }).join('|');

  // The final regex matches either:
  // 1. An existing link (to skip it)
  // 2. An HTML tag (to skip it)
  // 3. An item name (to link it)
  const finalPattern = `(<a[^>]*>.*?</a>|<[^>]+>)|(${itemPatterns})`;
  masterItemRegex = new RegExp(finalPattern, 'gi');

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
    // Ensure we don't match short names inside other words in the normalized text
    if (norm.length <= 3) {
      const regex = new RegExp(`\\b${escapeRegExp(norm)}\\b`, 'i');
      if (regex.test(normalizedText)) {
        foundItems.add(name);
      }
    } else if (normalizedText.includes(norm)) {
      foundItems.add(name);
    }
  });

  return Array.from(foundItems).sort();
};

export const highlightKeywords = (html: string): string => {
  if (!html) return html;

  let processed = html;
  
  // 1. Remove existing keyword spans to start clean
  processed = processed.replace(/<span class=['"]npc-keyword['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-amber-500['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-slate-100 font-bold['"]>(.*?)<\/span>/gi, '$1');

  // 2. Bold triggers without quotes: "Vous avez dit : <b>Keyword</b>"
  processed = processed.replace(/Vous avez dit\s*:\s*<(b|strong)>([^<]+)<\/\1>/gi, (_match, _tag, text) => {
    return `Vous avez dit : <span class='npc-keyword'><span class='text-amber-500'>"</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>"</span></span>`;
  });

  // 3. Quoted triggers
  const triggerPattern = /(parlez(?:[- ]lui)?|dites(?:[- ](?:lui|directement|une (?:derni[èe]re )?fois))?|r[ée]pondez(?:[- ]lui)?|r[ée]pondre|dire|mots?[- ]cl[ée]s?|demandez(?:[- ]lui)?|tapez|entrez|prononcez|puis|ou(?: (?:simplement|m[êe]me|encore))?)\s*[:,-]?\s*((?:[«"“][^"»”]+[»"”][\s,:;-]*(?:\b(?:ou|et|soit|sinon|simplement|m[êe]me|bien|alors|puis|encore)\b[\s,:;-]*)*)+)/gi;

  return processed.replace(triggerPattern, (_match, trigger, content) => {
    const styledContent = content.replace(/([«"“])([^"»”]+)([»"”])/g, (_m: string, q1: string, text: string, q2: string) => {
      return `<span class='npc-keyword'><span class='text-amber-500'>${q1}</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>${q2}</span></span>`;
    });

    return `${trigger} ${styledContent}`;
  });
};

export const cleanTitle = (title: string): string => {
  if (!title) return title;
  return title.replace(/^-\d*\s*/, '');
};

export const cleanHtml = (html: string): string => {
  if (!html) return html;
  let cleaned = html;

  cleaned = cleaned.replace(/<\/?(?:big|small|font|center|div|style)[^>]*>/gi, '');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])\s+[^>]+>/gi, '<$1>');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');

  return cleaned.trim();
};

export const formatLists = (html: string): string => {
  if (!html) return html;
  
  let text = html.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/p>/gi, '</p>\n');

  const listPattern = /(?:^|\n)\s*-\s+(.+)/g;
  if (!text.match(listPattern)) return html;

  text = text.replace(listPattern, (match, content) => {
    const prefix = match.startsWith('\n') ? '\n' : '';
    return `${prefix}<li>${content}</li>`;
  });

  text = text.replace(/((?:<li>.+<\/li>\s*)+)/g, '<ul class="list-disc pl-6 space-y-1 my-3 text-slate-300 marker:text-amber-500">$1</ul>');
  text = text.replace(/\n/g, '<br />');

  return text;
};

export const linkItemsInHtml = (html: string): string => {
  if (!html) return html;
  buildCache();

  if (!masterItemRegex) return html;

  // We process the whole HTML in one go using the regex that skips tags
  return html.replace(masterItemRegex, (match, tag, itemName) => {
    // If it matched a tag (group 1), return it as is
    if (tag) return tag;
    
    // If it matched an item name (group 2), wrap it in a link
    // itemName is the actual text found in the HTML (could have tags/caps/plurals)
    return `<a href="#/wiki/items?search=${encodeURIComponent(itemName.replace(/<[^>]+>/g, ''))}" class="text-amber-400 font-bold hover:underline decoration-amber-500/50 underline-offset-2 transition-colors cursor-pointer relative z-10" title="Voir l'objet">${itemName}</a>`;
  });
};
