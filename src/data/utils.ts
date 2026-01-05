/**
 * Normalizes text for consistent lookups
 */
export const fastNormalize = (text: string): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, ' ')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\b(le|la|les|de|du|des|d|un|une|au|aux)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
};
