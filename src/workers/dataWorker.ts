/**
 * Web Worker that handles fetching JSON data, parsing, and building derived maps.
 * Offloads heavy computation from the main thread.
 */

interface Monster {
  name: string;
  location: string;
  coordinates?: string[];
  drops: string[];
  exp: string;
  gold: string;
  weakness?: string;
  resistance?: string;
  unique?: boolean;
}

interface RecipeItem {
  name: string;
  quantity: number;
  profession?: string;
  level?: number;
  ingredients?: RecipeItem[];
  type?: string;
  learnedFrom?: string;
  prerequisites?: Record<string, string>;
  bonuses?: Record<string, string>;
  secondary?: Record<string, string>;
  [key: string]: any;
}

interface Spell {
  name: string;
  prerequisites?: string;
  level: number;
  wis: number;
  int: number;
  price: string;
  pc?: number;
  mana: string;
  description: string;
  npc: Record<string, string[]>;
  type?: string;
  source: string;
  prerequisitesStats?: Record<string, string>;
}

interface NPC {
  name: string;
  locationPrecision?: string;
  zone: string;
  coordinates?: string;
}

// Minimal normalization for lookup keys (mirrors fastNormalize from utils)
const cache: Record<string, string> = {};
function fastNormalize(text: string): string {
  if (!text) return "";
  if (cache[text]) return cache[text];

  const result = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, ' ')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ")
    .replace(/\b(le|la|les|de|du|des|d|un|une|au|aux|l)\b/g, "")
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => {
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
}

self.onmessage = async (e: MessageEvent) => {
  const { baseUrl } = e.data;

  try {
    const [items, plants, trees, deposits, bestiary, recipes, npcs, quests, spells, skills] = await Promise.all([
      fetch(`${baseUrl}data/items.json`).then(res => res.json()),
      fetch(`${baseUrl}data/plants.json`).then(res => res.json()),
      fetch(`${baseUrl}data/trees.json`).then(res => res.json()),
      fetch(`${baseUrl}data/deposits.json`).then(res => res.json()),
      fetch(`${baseUrl}data/bestiary.json`).then(res => res.json()),
      fetch(`${baseUrl}data/recipes.json`).then(res => res.json()),
      fetch(`${baseUrl}data/npcs.json`).then(res => res.json()),
      fetch(`${baseUrl}data/quests.json`).then(res => res.json()),
      fetch(`${baseUrl}data/spells.json`).then(res => res.json()),
      fetch(`${baseUrl}data/skills.json`).then(res => res.json()),
    ]);

    // Build derived maps
    const ingredientProfessionMap: Record<string, string[]> = {};
    const itemMonsterMap: Record<string, Monster[]> = {};
    const npcRecipesMap: Record<string, RecipeItem[]> = {};
    const itemUsageMap: Record<string, RecipeItem[]> = {};
    const spellMap: Record<string, Spell> = {};
    const spellPrerequisiteMap: Record<string, Spell[]> = {};

    // Index NPCs by recipes they teach
    recipes.forEach((recipe: RecipeItem) => {
      if (recipe.learnedFrom) {
        const normL = fastNormalize(recipe.learnedFrom);
        const officialNpc = npcs.find((n: NPC) => fastNormalize(n.name) === normL);
        const npcKey = officialNpc ? fastNormalize(officialNpc.name) : normL;

        if (!npcRecipesMap[npcKey]) npcRecipesMap[npcKey] = [];
        npcRecipesMap[npcKey].push(recipe);
      }
    });

    // Index Spells
    spells.forEach((spell: Spell) => {
      spellMap[fastNormalize(spell.name)] = spell;
    });

    // Build Spell Prerequisite Map
    spells.forEach((spell: Spell) => {
      if (spell.prerequisites) {
        const normalizedPrereq = fastNormalize(spell.prerequisites);
        Object.keys(spellMap).forEach(knownSpellName => {
          if (normalizedPrereq.includes(knownSpellName)) {
            if (!spellPrerequisiteMap[knownSpellName]) spellPrerequisiteMap[knownSpellName] = [];
            spellPrerequisiteMap[knownSpellName].push(spell);
          }
        });
      }
    });

    // Index Monsters by Drop
    bestiary.forEach((monster: Monster) => {
      monster.drops.forEach(drop => {
        const normalizedDrop = fastNormalize(drop);
        if (!itemMonsterMap[normalizedDrop]) itemMonsterMap[normalizedDrop] = [];
        itemMonsterMap[normalizedDrop].push(monster);
      });
    });

    // Build ingredient profession map and item usage map
    const walk = (item: RecipeItem, profession: string, parentRecipe: RecipeItem) => {
      const normalizedName = fastNormalize(item.name);
      if (!ingredientProfessionMap[normalizedName]) ingredientProfessionMap[normalizedName] = [];
      if (profession && !ingredientProfessionMap[normalizedName].includes(profession)) {
        ingredientProfessionMap[normalizedName].push(profession);
      }
      if (parentRecipe && fastNormalize(parentRecipe.name) !== normalizedName) {
        if (!itemUsageMap[normalizedName]) itemUsageMap[normalizedName] = [];
        if (!itemUsageMap[normalizedName].some(r => r.name === parentRecipe.name)) {
          itemUsageMap[normalizedName].push(parentRecipe);
        }
      }
      if (item.ingredients) item.ingredients.forEach(ing => walk(ing, profession || item.profession || "", parentRecipe));
    };

    recipes.forEach((recipe: RecipeItem) => {
      const normalizedName = fastNormalize(recipe.name);
      if (recipe.profession) {
        if (!ingredientProfessionMap[normalizedName]) ingredientProfessionMap[normalizedName] = [];
        if (!ingredientProfessionMap[normalizedName].includes(recipe.profession)) {
          ingredientProfessionMap[normalizedName].push(recipe.profession);
        }
      }
      recipe.ingredients?.forEach(ing => walk(ing, recipe.profession || "", recipe));
    });

    // Build wiki data
    const combinedItems = [...items, ...plants, ...trees, ...deposits];
    const wikiData = [
      {
        id: 'bestiary',
        title: 'Bestiaire',
        category: 'bestiary',
        description: "Retrouvez ici les informations sur les créatures peuplant les contrées d'Althéa.",
        monsters: bestiary
      },
      {
        id: 'npcs',
        title: 'PNJs',
        category: 'npc',
        description: "Liste des personnages non-joueurs d'Althéa.",
        npcs
      },
      {
        id: 'metiers',
        title: 'Artisanat',
        category: 'profession',
        description: "L'intégralité des recettes d'artisanat de T4C NMS.",
        recipes
      },
      {
        id: 'items',
        title: 'Objets',
        category: 'items',
        description: "Retrouvez ici la liste complète des équipements, armes et composants d'Althéa.",
        recipes: combinedItems
      },
      {
        id: 'spells',
        title: 'Sorts',
        category: 'spell',
        description: "La bibliothèque complète des sorts standards et NMS.",
        spells
      },
      {
        id: 'skills',
        title: 'Compétences',
        category: 'skill',
        description: "Toutes les compétences physiques et utilitaires d'Althéa.",
        skills
      }
    ];

    self.postMessage({
      type: 'success',
      data: { items, plants, trees, deposits, bestiary, recipes, npcs, quests, spells, skills },
      maps: {
        ingredientProfessionMap,
        itemMonsterMap,
        npcRecipesMap,
        itemUsageMap,
        spellMap,
        spellPrerequisiteMap,
        wikiData,
      }
    });
  } catch (err) {
    self.postMessage({
      type: 'error',
      error: String(err)
    });
  }
};
