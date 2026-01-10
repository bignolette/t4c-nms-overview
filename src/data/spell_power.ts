
/**
 * Données relatives au calcul de la puissance magique (Spell Power)
 * Extraites du guide "Comprendre la puissance magique"
 */

export interface MagicPalier {
  threshold: number;
  rank: number;
}

export const spellPowerConfig = {
  /**
   * Paliers de puissance brute. 
   * La puissance brute progresse d'un rang tous les 160 points en Intelligence ou Sagesse.
   */
  paliers: [
    { threshold: 160, rank: 1 },
    { threshold: 320, rank: 2 },
    { threshold: 480, rank: 3 },
    { threshold: 640, rank: 4 },
    { threshold: 800, rank: 5 },
    { threshold: 960, rank: 6 },
    { threshold: 1120, rank: 7 },
    { threshold: 1280, rank: 8 }
  ] as MagicPalier[],

  /**
   * Logique de Simulation
   */
  simulation: {
    maxRank: 9,
    palierSize: 160,
    
    /**
     * Calcul du rang de puissance brute à partir des statistiques.
     */
    calculateBaseRank: (intelligence: number, wisdom: number) => {
      const maxStat = Math.max(intelligence, wisdom);
      return Math.floor(maxStat / 160);
    }
  },

  /**
   * Informations pédagogiques (Issues du wiki)
   */
  guide: {
    summary: "La puissance magique réelle d'un mage dépend de deux éléments : la puissance brute (paliers) et la puissance relative (bonus ratio/équipement).",
    stagnation: "Une fois un certain seuil atteint en Intelligence/Sagesse, les dommages stagnent à cause de la limite brute. Les items boostant la magie permettent de dépasser ce palier de stagnation.",
    tips: [
      "Le rang de puissance brute progresse tous les 160 points.",
      "Les objets apportant un bonus de ratio (%) deviennent plus intéressants que les bonus bruts (+) à mesure que vos statistiques augmentent.",
      "En Arcane, il n'y a pas de puissance relative : c'est le rang de magie brute qui booste le mana-burst."
    ]
  }
};
