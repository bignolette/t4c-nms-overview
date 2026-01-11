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

  // Regex to find triggers followed by quoted text
  // Triggers: parlez/dites/répondez/dire/mots-clés/demandez/puis/ou...
  const triggerPattern = /(parlez(?:[- ]lui)?|dites(?:[- ](?:lui|directement))?|r[ée]pondez(?:[- ]lui)?|dire|mots?[- ]cl[ée]s?|demandez(?:[- ]lui)?|puis|ou(?: (?:simplement|m[êe]me|encore))?)\s*[:,-]?\s*((?:[«"“][^"»”]+[»"”][\s,:;-]*(?:\b(?:ou|et|soit|sinon|simplement|m[êe]me|bien|alors|puis|encore)\b[\s,:;-]*)*)+)/gi;

  return html.replace(triggerPattern, (_match, trigger, content) => {
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
