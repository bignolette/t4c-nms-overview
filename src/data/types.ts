export interface Monster {
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

export interface ItemStats {
    str?: string;
    end?: string;
    dex?: string;
    int?: string;
    wis?: string;
    ca?: string;
}

export interface Stats {
    str: number;
    end: number;
    dex: number;
    int: number;
    wis: number;
}

export type SeraphElement = 'fire' | 'water' | 'air' | 'earth' | 'light' | 'necromancy';

export interface SavedCharacter {
    name: string;
    renaissance: number;
    seraphStats: Stats;
    seraphPowers: Record<SeraphElement, number>;
    seraphResists: Record<SeraphElement, number>;
    levelPoints: Stats;
    finalStats: Stats;
    updatedAt: number;
}

export type ItemSource =
    | 'Amulette' | 'Anneau' | 'Arc' | 'Arme' | 'Botte' | 'Bouclier' | 'Bracelet'
    | 'Cape' | 'Ceinture' | 'Flèches' | 'Focus' | 'Gant' | 'Heaume' | 'Jambière'
    | 'Orbe' | 'Plastron' | 'Robe' | 'Matériau' | 'Divers' | 'Récolte' | 'Mine'
    | string; // Fallback for specific strings like "Mine: Cave..."

export interface ItemLocation {
    label: string;
    coordinates: string;
}

export interface MaterialSource {
    typeSource: string;
    locations: ItemLocation[];
}

export interface RecipeItem {
    name: string;
    quantity: number;
    profession?: 'Apothicaire' | 'Bijoutier' | 'Couturier' | 'Armurier' | 'Forgeron' | 'Ebéniste' | 'Métallurgie';
    level?: number;
    icon?: string;
    ingredients?: RecipeItem[];
    source?: ItemSource;
    typeSource?: string;
    locations?: ItemLocation[];
    sources?: MaterialSource[];
    learnedFrom?: string;
    coordinates?: string;
    locationPrecision?: string;
    zones?: string[];
    description?: string;
    prerequisites?: ItemStats;
    bonuses?: ItemStats;
    secondary?: Record<string, string>;
    proc?: {
        chance: string;
        effect: string;
        description: string;
    };
}

export interface QuestStep {
    id: string | number;
    title?: string;
    description: string;
    images?: string[];
}

export interface Quest {
    id: string;
    title: string;
    description: string;
    steps: QuestStep[];
}

export interface CraftingProject {
    id: string;
    recipeName: string; 
    targetQuantity: number;
    createdAt: number;
    completed?: boolean;
    collectedIngredients?: string[];
}

export interface PageContent {

    id: string;

    title: string;

    category: 'zone' | 'class' | 'items' | 'spell' | 'profession' | 'guide' | 'bestiary' | 'skill';

    description: string;

    monsters?: Monster[];

    recipes?: RecipeItem[];

    quests?: Quest[];

    spells?: Spell[];

    skills?: Skill[];

}



export interface Spell {

    name: string;

    prerequisites?: string;

    level: number;

    wis: number;

    int: number;

    price: string;

    pc?: number;

    mana: string;

    description: string;

    npc: string;

    type?: string;

    source: 'Standard' | 'NMS';

}



export interface Skill {

    name: string;

    maxTraining: string;

    requirements: string;

    firstTeacher: string;

    initialCost: string;

    description: string;

    trainingTeachers: string;

    trainingCost: string;

}
