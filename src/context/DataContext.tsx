import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Monster, RecipeItem, PageContent, SavedCharacter, Stats, SeraphElement, CraftingProject, Spell, Skill, NPC } from '../data/types';

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
    plantsData: RecipeItem[];
    treesData: RecipeItem[];
    depositsData: RecipeItem[];
    bestiaryData: Monster[];
    recipesData: RecipeItem[];
    npcsData: NPC[];
    questsData: any[];
    spellsData: Spell[];
    skillsData: Skill[];
    wikiData: PageContent[];
    ingredientProfessionMap: Record<string, Set<string>>;
    itemMonsterMap: Record<string, Monster[]>;
    npcRecipesMap: Record<string, RecipeItem[]>;
    itemUsageMap: Record<string, RecipeItem[]>;
    spellMap: Record<string, Spell>;
    spellPrerequisiteMap: Record<string, Spell[]>;
    loading: boolean;
    error: string | null;
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
        plants: RecipeItem[];
        trees: RecipeItem[];
        deposits: RecipeItem[];
        bestiary: Monster[];
        recipes: RecipeItem[];
        npcs: NPC[];
        quests: any[];
        spells: Spell[];
        skills: Skill[];
    }>({
        items: [],
        plants: [],
        trees: [],
        deposits: [],
        bestiary: [],
        recipes: [],
        npcs: [],
        quests: [],
        spells: [],
        skills: []
    });

    const [maps, setMaps] = useState<{
        ingredientProfessionMap: Record<string, Set<string>>;
        itemMonsterMap: Record<string, Monster[]>;
        npcRecipesMap: Record<string, RecipeItem[]>;
        itemUsageMap: Record<string, RecipeItem[]>;
        spellMap: Record<string, Spell>;
        spellPrerequisiteMap: Record<string, Spell[]>;
        wikiData: PageContent[];
    }>({
        ingredientProfessionMap: {},
        itemMonsterMap: {},
        npcRecipesMap: {},
        itemUsageMap: {},
        spellMap: {},
        spellPrerequisiteMap: {},
        wikiData: []
    });

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

    // Web Worker for data fetching and map building
    useEffect(() => {
        const worker = new Worker(
            new URL('../workers/dataWorker.ts', import.meta.url),
            { type: 'module' }
        );

        worker.onmessage = (e: MessageEvent) => {
            const msg = e.data;
            if (msg.type === 'success') {
                setData(msg.data);

                // Convert string[] back to Set<string> for ingredientProfessionMap
                const convertedIngMap: Record<string, Set<string>> = {};
                for (const [key, arr] of Object.entries(msg.maps.ingredientProfessionMap)) {
                    convertedIngMap[key] = new Set(arr as string[]);
                }

                setMaps({
                    ingredientProfessionMap: convertedIngMap,
                    itemMonsterMap: msg.maps.itemMonsterMap,
                    npcRecipesMap: msg.maps.npcRecipesMap,
                    itemUsageMap: msg.maps.itemUsageMap,
                    spellMap: msg.maps.spellMap,
                    spellPrerequisiteMap: msg.maps.spellPrerequisiteMap,
                    wikiData: msg.maps.wikiData,
                });

                setLoading(false);
            } else if (msg.type === 'error') {
                console.error("Worker error:", msg.error);
                setError("Erreur lors du chargement des données.");
                setLoading(false);
            }
        };

        worker.onerror = (err) => {
            console.error("Worker fatal error:", err);
            setError("Erreur lors du chargement des données.");
            setLoading(false);
        };

        const baseUrl = import.meta.env.BASE_URL || '/';
        worker.postMessage({ baseUrl });

        return () => worker.terminate();
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
                    if (parsed.characters && Array.isArray(parsed.characters)) setSavedCharacters(parsed.characters);
                    if (parsed.craftingProjects && Array.isArray(parsed.craftingProjects)) setCraftingProjects(parsed.craftingProjects);
                    if (parsed.activeStats) setActiveStats(parsed.activeStats);
                    if (parsed.favRecipes && Array.isArray(parsed.favRecipes)) setFavRecipes(parsed.favRecipes);
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

    const value = {
        itemsData: data.items,
        plantsData: data.plants,
        treesData: data.trees,
        depositsData: data.deposits,
        bestiaryData: data.bestiary,
        recipesData: data.recipes,
        npcsData: data.npcs,
        questsData: data.quests,
        npcRecipesMap: maps.npcRecipesMap,
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
