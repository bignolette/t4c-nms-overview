import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { Monster, RecipeItem, PageContent, SavedCharacter, Stats, SeraphElement, CraftingProject, Spell, Skill } from '../data/types';
import { fastNormalize } from '../data/utils';

// Helper to migrate old save format (with accents/French keys) to technical format
const migrateSaveData = (data: any): any => {
    if (!data.characters || !Array.isArray(data.characters)) return data;

    const elementMap: Record<string, SeraphElement> = {
        'Feu': 'fire',
        'Eau': 'water',
        'Air': 'air',
        'Terre': 'earth',
        'Lumière': 'light',
        'Nécromancie': 'necromancy'
    };

    const migrateElementRecord = (record: Record<string, number>): Record<SeraphElement, number> => {
        const newRecord: any = {};
        Object.entries(record).forEach(([key, value]) => {
            const newKey = elementMap[key] || key;
            newRecord[newKey] = value;
        });
        return newRecord;
    };

    return {
        ...data,
        characters: data.characters.map((char: any) => ({
            ...char,
            seraphPowers: migrateElementRecord(char.seraphPowers || {}),
            seraphResists: migrateElementRecord(char.seraphResists || {})
        }))
    };
};

interface DataContextType {
    itemsData: RecipeItem[];
    bestiaryData: Monster[];
    recipesData: RecipeItem[];
    spellsData: Spell[];
    skillsData: Skill[];
    wikiData: PageContent[];
    ingredientProfessionMap: Record<string, Set<string>>;
    itemMonsterMap: Record<string, Monster[]>;
    itemUsageMap: Record<string, RecipeItem[]>;
    spellMap: Record<string, Spell>;
    spellPrerequisiteMap: Record<string, Spell[]>;
    loading: boolean;
    error: string | null;
    // ...
    savedCharacters: SavedCharacter[];
    setSavedCharacters: React.Dispatch<React.SetStateAction<SavedCharacter[]>>;
    craftingProjects: CraftingProject[];
    setCraftingProjects: React.Dispatch<React.SetStateAction<CraftingProject[]>>;
    activeStats: Stats;
    setActiveStats: React.Dispatch<React.SetStateAction<Stats>>;
    favRecipes: string[];
    setFavRecipes: React.Dispatch<React.SetStateAction<string[]>>;
    saveDataToFile: (filename?: string) => void;
    loadDataFromFile: (file: File) => Promise<void>;
    showNotification: (message: string, type?: 'success' | 'error') => void;
    notification: { message: string, type: 'success' | 'error' } | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<{
        items: RecipeItem[];
        bestiary: Monster[];
        recipes: RecipeItem[];
        spells: Spell[];
        skills: Skill[];
    }>({ items: [], bestiary: [], recipes: [], spells: [], skills: [] });
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // User Data State
    const [savedCharacters, setSavedCharacters] = useState<SavedCharacter[]>([]);
    const [craftingProjects, setCraftingProjects] = useState<CraftingProject[]>([]);
    const [activeStats, setActiveStats] = useState<Stats>({ str: 0, end: 0, dex: 0, int: 0, wis: 0 });
    const [favRecipes, setFavRecipes] = useState<string[]>([]);
    const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
    const [storageLoaded, setStorageLoaded] = useState(false);

    // Persistence LocalStorage
    useEffect(() => {
        try {
            const savedCharsStr = localStorage.getItem('t4c_nms_saved_characters');
            if (savedCharsStr) setSavedCharacters(JSON.parse(savedCharsStr));

            const projectsStr = localStorage.getItem('t4c_nms_crafting_projects');
            if (projectsStr) setCraftingProjects(JSON.parse(projectsStr));

            const favsStr = localStorage.getItem('t4c_nms_fav_recipes');
            if (favsStr) setFavRecipes(JSON.parse(favsStr));
        } catch (e) {
            console.error("Erreur lors du chargement depuis localStorage", e);
        } finally {
            setStorageLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (storageLoaded) localStorage.setItem('t4c_nms_saved_characters', JSON.stringify(savedCharacters));
    }, [savedCharacters, storageLoaded]);

    useEffect(() => {
        if (storageLoaded) localStorage.setItem('t4c_nms_crafting_projects', JSON.stringify(craftingProjects));
    }, [craftingProjects, storageLoaded]);

    useEffect(() => {
        if (storageLoaded) localStorage.setItem('t4c_nms_fav_recipes', JSON.stringify(favRecipes));
    }, [favRecipes, storageLoaded]);

    const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                // In production, these will be fetched from the hosted URL
                // In development, they are served from public/data/
                const baseUrl = import.meta.env.BASE_URL || '/';
                const [items, bestiary, recipes, spells, skills] = await Promise.all([
                    fetch(`${baseUrl}data/items.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/bestiary.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/recipes.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/spells.json`).then(res => res.json()),
                    fetch(`${baseUrl}data/skills.json`).then(res => res.json()),
                ]);

                setData({ items, bestiary, recipes, spells, skills });
                setLoading(false);
            } catch (err) {
                console.error("Failed to load data:", err);
                setError("Erreur lors du chargement des données.");
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // File Persistence Logic
    const saveDataToFile = (filename?: string) => {
        const dataToSave = {
            version: 1,
            timestamp: Date.now(),
            characters: savedCharacters,
            craftingProjects: craftingProjects,
            activeStats: activeStats,
            favRecipes: favRecipes
        };
        
        const blob = new Blob([JSON.stringify(dataToSave, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const defaultName = `t4c_nms_backup_${new Date().toISOString().split('T')[0]}.json`;
        a.download = filename ? (filename.endsWith('.json') ? filename : `${filename}.json`) : defaultName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const loadDataFromFile = async (file: File): Promise<void> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const content = e.target?.result as string;
                    const rawData = JSON.parse(content);
                    const parsed = migrateSaveData(rawData);
                    
                    // Basic validation
                    if (parsed.characters && Array.isArray(parsed.characters)) {
                        setSavedCharacters(parsed.characters);
                    }
                    if (parsed.craftingProjects && Array.isArray(parsed.craftingProjects)) {
                        setCraftingProjects(parsed.craftingProjects);
                    }
                    if (parsed.activeStats) {
                        setActiveStats(parsed.activeStats);
                    }
                    if (parsed.favRecipes && Array.isArray(parsed.favRecipes)) {
                        setFavRecipes(parsed.favRecipes);
                    }
                    resolve();
                } catch (err) {
                    console.error("Failed to parse save file:", err);
                    reject(err);
                }
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsText(file);
        });
    };

    const maps = useMemo(() => {
        if (loading || !data.items.length) return {
            ingredientProfessionMap: {},
            itemMonsterMap: {},
            itemUsageMap: {},
            spellMap: {},
            spellPrerequisiteMap: {},
            wikiData: []
        };

        const ingredientProfessionMap: Record<string, Set<string>> = {};
        const itemMonsterMap: Record<string, Monster[]> = {};
        const itemUsageMap: Record<string, RecipeItem[]> = {};
        const spellMap: Record<string, Spell> = {};
        const spellPrerequisiteMap: Record<string, Spell[]> = {};

        // Index Spells
        data.spells.forEach(spell => {
            spellMap[fastNormalize(spell.name)] = spell;
        });

        // Build Spell Prerequisite Map (Inverse lookup)
        data.spells.forEach(spell => {
            if (spell.prerequisites) {
                const normalizedPrereq = fastNormalize(spell.prerequisites);
                // We check if any known spell name is contained in the prerequisite string
                Object.keys(spellMap).forEach(knownSpellName => {
                    if (normalizedPrereq.includes(knownSpellName)) {
                        if (!spellPrerequisiteMap[knownSpellName]) {
                            spellPrerequisiteMap[knownSpellName] = [];
                        }
                        spellPrerequisiteMap[knownSpellName].push(spell);
                    }
                });
            }
        });

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
            },
            {
                id: 'spells',
                title: 'Sorts',
                category: 'spell',
                description: "La bibliothèque complète des sorts standards et NMS.",
                spells: data.spells
            },
            {
                id: 'skills',
                title: 'Compétences',
                category: 'skill',
                description: "Toutes les compétences physiques et utilitaires d'Althéa.",
                skills: data.skills
            }
        ];

        return { ingredientProfessionMap, itemMonsterMap, itemUsageMap, spellMap, spellPrerequisiteMap, wikiData };
    }, [data, loading]);

    const value = {
        itemsData: data.items,
        bestiaryData: data.bestiary,
        recipesData: data.recipes,
        spellsData: data.spells,
        skillsData: data.skills,
        ingredientProfessionMap: maps.ingredientProfessionMap,
        itemMonsterMap: maps.itemMonsterMap,
        itemUsageMap: maps.itemUsageMap,
        spellMap: maps.spellMap,
        spellPrerequisiteMap: maps.spellPrerequisiteMap,
        wikiData: maps.wikiData,
        loading,
        error,
        savedCharacters,
        setSavedCharacters,
        craftingProjects,
        setCraftingProjects,
        activeStats,
        setActiveStats,
        favRecipes,
        setFavRecipes,
        saveDataToFile,
        loadDataFromFile,
        showNotification,
        notification
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
