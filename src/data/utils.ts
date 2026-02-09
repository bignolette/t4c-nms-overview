/**
 * Highly optimized normalization for search and lookups.
 * Memoizes results to avoid re-processing same strings.
 */
const cache: Record<string, string> = {};

export const fastNormalize = (text: string): string => {
  if (!text) return "";
  if (cache[text]) return cache[text];

  const result = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, ' ') // Handle both types of apostrophes
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ") // Replace punctuation with space to keep words separate
    .replace(/\b(le|la|les|de|du|des|d|un|une|au|aux|l)\b/g, "")
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => {
      // More robust singularization
      if (word.length > 3) {
        if (word.endsWith('s')) return word.slice(0, -1);
        if (word.endsWith('aux')) return word.slice(0, -3) + 'al';
        if (word.endsWith('x')) return word.slice(0, -1);
      }
      return word;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  cache[text] = result;
  return result;
};

/**
 * Common Slot mapping for equipment
 */
export const mapTypeToSlot = (type: string | undefined): string | null => {
  if (!type) return null;
  switch (type) {
    case 'Heaume': return 'Tete';
    case 'Amulette': return 'Amulette';
    case 'Bracelet': return 'Bracelet';
    case 'Anneau':
    case 'Bijou': return 'Anneau';
    case 'Robe':
    case 'Armure':
    case 'Plastron':
    case 'Torse': return 'Torse';
    case 'Cape':
    case 'Orbe': return 'Cape';
    case 'Arme':
    case 'Arc': return 'Arme';
    case 'Bouclier':
    case 'Focus':
    case 'Flèches': return 'Bouclier';
    case 'Gant': return 'Gant';
    case 'Ceinture': return 'Ceinture';
    case 'Jambière': return 'Jambière';
    case 'Botte': return 'Botte';
    default: return null;
  }
};

/**
 * Standardizes the display of stat values (e.g. adding + if missing)
 */
export const formatStatValue = (value: string | number | undefined): string => {
  if (value === undefined || value === null) return "";
  const s = String(value).trim();
  if (s.startsWith('+') || s.startsWith('-')) return s;
  if (/^\d/.test(s)) return `+${s}`;
  return s;
};

/**
 * Formats gold value: "1 234 567 pièce(s) d'or"
 */
export const formatGold = (value: string | number | undefined): string => {
  if (value === undefined || value === null || value === "") return "";
  const numStr = String(value).replace(/[^0-9]/g, '');
  const num = parseInt(numStr);
  if (isNaN(num)) return String(value);
  
  // Use a regex to insert non-breaking spaces every 3 digits for better visibility
  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  return `${formatted} pièce(s) d'or`;
};

/**
 * Generate a unique ID with fallback for older browsers
 */
export const generateUUID = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};