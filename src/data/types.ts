export interface Monster {
  name: string;
  location: string;
  coordinates?: string;
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

export interface RecipeItem {
  name: string;
  quantity: number;
  profession?: 'Apothicaire' | 'Bijoutier' | 'Couturier' | 'Armurier' | 'Forgeron' | 'Ebéniste' | 'Métallurgie';
  level?: number;
  icon?: string;
  ingredients?: RecipeItem[];
  source?: string;
  learnedFrom?: string;
  coordinates?: string;
  locationPrecision?: string;
  description?: string;
  prerequisites?: ItemStats;
  bonuses?: ItemStats;
  bonusText?: string;
  proc?: {
    chance: string;
    effect: string;
    description: string;
  };
}

export interface PageContent {
  id: string;
  title: string;
  category: 'zone' | 'class' | 'general' | 'spell' | 'profession' | 'guide' | 'bestiary';
  description: string;
  monsters?: Monster[];
  recipes?: RecipeItem[];
}
