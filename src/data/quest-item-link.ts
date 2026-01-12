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
  const stopWords = ['de', 'du', 'des', 'le', 'la', 'les', 'au', 'aux', 'd', 'l'];
  
  return str.split(/\s+/).map(word => {
    let p = word.split('').map(char => {
      if (/[aAàÀâÂäÄ]/.test(char)) return '[aAàÀâÂäÄ]';
      if (/[eEéÉèÈêÊëË]/.test(char)) return '[eEéÉèÈêÊëË]';
      if (/[iIîÎïÏ]/.test(char)) return '[iIîÎïÏ]';
      if (/[oOôÔöÖ]/.test(char)) return '[oOôÔöÖ]';
      if (/[uUùÙûÛüÜ]/.test(char)) return '[uUùÙûÛüÜ]';
      if (/[yYÿŸ]/.test(char)) return '[yYÿŸ]';
      if (/[cCçÇ]/.test(char)) return '[cCçÇ]';
      return escapeRegExp(char);
    }).join('');

    // If word is not a stop word and long enough, handle plural/singular
    const lowerWord = word.toLowerCase();
    if (!stopWords.includes(lowerWord) && word.length > 2) {
      if (lowerWord.endsWith('s') || lowerWord.endsWith('x')) {
        // Already ends with s/x, make it optional to match singular
        p = p.slice(0, -1) + '[sx]?';
      } else {
        // Doesn't end with s/x, add optional [sx] to match plural
        p = p + '[sx]?';
      }
    }
    return p;
  }).join('\\s+');
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
  // CRITICAL: Sort names by length descending for the regex too
  // This ensures "Arc long des étoiles" is matched before "Arc"
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

export const highlightKeywords = (html: string): string => {
  if (!html) return html;

  // 1. First, strip any existing npc-keyword styling to avoid nested spans
  // and allow the regex to match clean text
  let processed = html;
  
  // Remove existing npc-keyword spans and keep content
  // We do this multiple times or use a broader regex to catch nested/multiple spans
  processed = processed.replace(/<span class=['"]npc-keyword['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-amber-500['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-slate-100 font-bold['"]>(.*?)<\/span>/gi, '$1');
  // Second pass for potentially nested structures
  processed = processed.replace(/<span class=['"]npc-keyword['"]>(.*?)<\/span>/gi, '$1');

  // 2. Handle "Vous avez dit : <b>Keyword</b>" pattern (unquoted bold text)
  // We explicitly add quotes and style it
  processed = processed.replace(/Vous avez dit\s*:\s*<(b|strong)>([^<]+)<\/\1>/gi, (_match, _tag, text) => {
    return `Vous avez dit : <span class='npc-keyword'><span class='text-amber-500'>"</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>"</span></span>`;
  });

  // 3. Handle standard triggers followed by quoted text
  // Regex to find triggers followed by quoted text
  // Triggers: parlez/dites/répondez/répondre/dire/mots-clés/demandez/tapez/entrez/prononcez/puis/ou...
  const triggerPattern = /(parlez(?:[- ]lui)?|dites(?:[- ](?:lui|directement|une (?:derni[èe]re )?fois))?|r[ée]pondez(?:[- ]lui)?|r[ée]pondre|dire|mots?[- ]cl[ée]s?|demandez(?:[- ]lui)?|tapez|entrez|prononcez|puis|ou(?: (?:simplement|m[êe]me|encore))?)\s*[:,-]?\s*((?:[«"“][^"»”]+[»"”][\s,:;-]*(?:\b(?:ou|et|soit|sinon|simplement|m[êe]me|bien|alors|puis|encore)\b[\s,:;-]*)*)+)/gi;

  return processed.replace(triggerPattern, (_match, trigger, content) => {
    // Style the content parts
    // We look for quotes within the content and style them
    const styledContent = content.replace(/([«"“])([^"»”]+)([»"”])/g, (_m: string, q1: string, text: string, q2: string) => {
      // Wrap the whole keyword in npc-keyword class
      // Inner spans handle the specific colors for quotes (amber) and text (white)
      return `<span class='npc-keyword'><span class='text-amber-500'>${q1}</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>${q2}</span></span>`;
    });

    return `${trigger} ${styledContent}`;
  });
};

export const cleanTitle = (title: string): string => {
  if (!title) return title;
  // Remove starting hyphen followed by optional digits and optional space
  return title.replace(/^-\d*\s*/, '');
};

export const cleanHtml = (html: string): string => {
  if (!html) return html;
  let cleaned = html;

  // 1. Remove "superfluous" formatting tags but keep their content
  // Strips: big, small, font, center, div, style (keeping span)
  cleaned = cleaned.replace(/<\/?(?:big|small|font|center|div|style)[^>]*>/gi, '');

  // 2. Clean attributes from common structural tags (p, b, i, strong, em, u)
  // This removes inline styles, classes, aligns, etc.
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])\s+[^>]+>/gi, '<$1>');

  // 3. Remove empty paragraph/formatting tags (containing only whitespace or &nbsp;)
  // We do this a couple of times to catch nested empty tags
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');

  return cleaned.trim();
};

export const formatLists = (html: string): string => {
  if (!html) return html;
  
  // Convert explicit break tags to newlines for processing
  let text = html.replace(/<br\s*\/?>/gi, '\n');
  
  // Also handle </p> as a newline indicator if present
  text = text.replace(/<\/p>/gi, '</p>\n');

  // Regex to find lines starting with "- " (bullet points)
  // We look for a newline (or start of string), optional whitespace, hyphen, whitespace, then content
  const listPattern = /(?:^|\n)\s*-\s+(.+)/g;

  // If no lists found, return original (with <br> restored if we stripped them, so better to operate on copy)
  if (!text.match(listPattern)) return html;

  // Replace "- Item" with "<li>Item</li>"
  text = text.replace(listPattern, (match, content) => {
    // Check if the match started with a newline to preserve it outside the <li>
    const prefix = match.startsWith('\n') ? '\n' : '';
    return `${prefix}<li>${content}</li>`;
  });

  // Wrap groups of <li> elements in <ul>
  // We look for consecutive <li> lines (separated by newlines)
  text = text.replace(/((?:<li>.+<\/li>\s*)+)/g, '<ul class="list-disc pl-6 space-y-1 my-3 text-slate-300 marker:text-amber-500">$1</ul>');

  // Restore newlines to <br /> for non-list content
  text = text.replace(/\n/g, '<br />');

  return text;
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
