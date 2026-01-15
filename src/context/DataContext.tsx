import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { Monster, RecipeItem, PageContent } from '../data/types';
import { fastNormalize } from '../data/utils';

interface DataContextType {
    itemsData: RecipeItem[];
    bestiaryData: Monster[];
    recipesData: RecipeItem[];
    wikiData: PageContent[];
    ingredientProfessionMap: Record<string, Set<string>>;
    itemMonsterMap: Record<string, Monster[]>;
    itemUsageMap: Record<string, RecipeItem[]>;
    loading: boolean;
    error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<{
        items: RecipeItem[];
        bestiary: Monster[];
        recipes: RecipeItem[];
    }>({ items: [], bestiary: [], recipes: [] });
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                // In production, these will be fetched from the hosted URL
                // In development, they are served from public/data/
                const baseUrl = import.meta.env.BASE_URL || '/';
                const [items, bestiary, recipes] = await Promise.all([
                    fetch(`${baseUrl}data/items.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/bestiary.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/recipes.json`).then(res => res.json()),
                ]);

                setData({ items, bestiary, recipes });
                setLoading(false);
            } catch (err) {
                console.error("Failed to load data:", err);
                setError("Erreur lors du chargement des données.");
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const maps = useMemo(() => {
        if (loading || !data.items.length) return {
            ingredientProfessionMap: {},
            itemMonsterMap: {},
            itemUsageMap: {},
            wikiData: []
        };

        const ingredientProfessionMap: Record<string, Set<string>> = {};
        const itemMonsterMap: Record<string, Monster[]> = {};
        const itemUsageMap: Record<string, RecipeItem[]> = {};

        // Index Monsters by Drop
        data.bestiary.forEach(monster => {
            monster.drops.forEach(drop => {
                const normalizedDrop = fastNormalize(drop);
                if (!itemMonsterMap[normalizedDrop]) {
                    itemMonsterMap[normalizedDrop] = [];
                }
                itemMonsterMap[normalizedDrop].push(monster);
            });
        });

        const walk = (item: RecipeItem, profession: string, parentRecipe: RecipeItem) => {
            const normalizedName = fastNormalize(item.name);
            
            if (!ingredientProfessionMap[normalizedName]) {
                ingredientProfessionMap[normalizedName] = new Set();
            }
            if (profession) {
                ingredientProfessionMap[normalizedName].add(profession);
            }

            if (parentRecipe && fastNormalize(parentRecipe.name) !== normalizedName) {
                if (!itemUsageMap[normalizedName]) {
                    itemUsageMap[normalizedName] = [];
                }
                if (!itemUsageMap[normalizedName].some(r => r.name === parentRecipe.name)) {
                    itemUsageMap[normalizedName].push(parentRecipe);
                }
            }
            
            if (item.ingredients) {
                item.ingredients.forEach(ing => walk(ing, profession || item.profession || "", parentRecipe));
            }
        };

        data.recipes.forEach(recipe => {
            const normalizedName = fastNormalize(recipe.name);
            
            if (recipe.profession) {
                if (!ingredientProfessionMap[normalizedName]) {
                    ingredientProfessionMap[normalizedName] = new Set();
                }
                ingredientProfessionMap[normalizedName].add(recipe.profession);
            }
            
            recipe.ingredients?.forEach(ing => walk(ing, recipe.profession || "", recipe));
        });

        const wikiData: PageContent[] = [
            {
                id: 'bestiary',
                title: 'Bestiaire',
                category: 'bestiary',
                description: "Retrouvez ici les informations sur les créatures peuplant les contrées d'Althéa.",
                monsters: data.bestiary
            },
            {
                id: 'metiers',
                title: 'Artisanat',
                category: 'profession',
                description: "L'intégralité des recettes d'artisanat de T4C NMS.",
                recipes: data.recipes
            },
            {
                id: 'items',
                title: 'Objets',
                category: 'items',
                description: "Retrouvez ici la liste complète des équipements, armes et composants d'Althéa.",
                recipes: data.items
            }
        ];

        return { ingredientProfessionMap, itemMonsterMap, itemUsageMap, wikiData };
    }, [data, loading]);

    const value = {
        itemsData: data.items,
        bestiaryData: data.bestiary,
        recipesData: data.recipes,
        ...maps,
        loading,
        error
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
