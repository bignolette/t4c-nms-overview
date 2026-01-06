import type { Monster, PageContent, RecipeItem } from './types';
import { bestiaryData } from './bestiary';
import { recipesData } from './recipes';
import { itemsData } from './items';
import { fastNormalize } from './utils';

// Re-export types and utils for convenience
export type * from './types';
export * from './utils';

export const wikiData: PageContent[] = [
  {
    id: 'bestiary',
    title: 'Bestiaire',
    category: 'bestiary',
    description: "Retrouvez ici les informations sur les créatures peuplant les contrées d'Althéa. Découvrez leurs butins précieux pour vos métiers.",
    monsters: bestiaryData
  },
  {
    id: 'metiers',
    title: 'Artisanat',
    category: 'profession',
    description: "L'intégralité des recettes d'artisanat de T4C NMS. Chaque item est détaillé avec ses composants et sa localisation.",
    recipes: recipesData
  },
  {
    id: 'items',
    title: 'Objets',
    category: 'items',
    description: "Retrouvez ici la liste complète des équipements, armes et composants d'Althéa. Utilisez la recherche pour trouver un objet spécifique ou ses sources d'obtention.",
    recipes: itemsData
  }
];

// --- PERFORMANCE OPTIMIZATION: Pre-calculated lookup maps ---

/**
 * Map of [normalized_item_name] -> Set of Professions that use it
 */
export const ingredientProfessionMap: Record<string, Set<string>> = {};

/**
 * Map of [normalized_item_name] -> List of Monsters that drop it
 */
export const itemMonsterMap: Record<string, Monster[]> = {};

const buildUsageMap = () => {
  const recipes = recipesData;
  const bestiary = bestiaryData;

  // Index Monsters by Drop
  bestiary.forEach(monster => {
    monster.drops.forEach(drop => {
      const normalizedDrop = fastNormalize(drop);
      if (!itemMonsterMap[normalizedDrop]) {
        itemMonsterMap[normalizedDrop] = [];
      }
      itemMonsterMap[normalizedDrop].push(monster);
    });
  });

  const walk = (item: RecipeItem, profession: string) => {
    const normalizedName = fastNormalize(item.name);
    if (!ingredientProfessionMap[normalizedName]) {
      ingredientProfessionMap[normalizedName] = new Set();
    }
    if (profession) {
      ingredientProfessionMap[normalizedName].add(profession);
    }
    
    if (item.ingredients) {
      item.ingredients.forEach(ing => walk(ing, profession || item.profession || ""));
    }
  };

  recipes.forEach(recipe => {
    if (recipe.profession) {
      // Index the main product
      const normalizedName = fastNormalize(recipe.name);
      if (!ingredientProfessionMap[normalizedName]) {
        ingredientProfessionMap[normalizedName] = new Set();
      }
      ingredientProfessionMap[normalizedName].add(recipe.profession);
      
      // Index all ingredients recursively
      recipe.ingredients?.forEach(ing => walk(ing, recipe.profession!));
    }
  });
};

buildUsageMap();
