import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Search, X, Map as MapIcon, Compass, Hammer, ArrowRightCircle } from 'lucide-react';
import { fastNormalize } from '../data/utils';
import type { NPC } from '../data/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EmptyState from './shared/EmptyState';
import Pagination from './shared/Pagination';

const NpcCard = ({ npc }: { npc: NPC }) => {
    const navigate = useNavigate();
    const { npcRecipesMap } = useData();

    const taughtRecipes = useMemo(() => {
        return npcRecipesMap[fastNormalize(npc.name)] || [];
    }, [npc.name, npcRecipesMap]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="card-hover-glow group glass-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin size={48} className="text-amber-500" />
            </div>

            <div className="relative z-10 flex flex-col h-full gap-4">
                <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-black text-slate-100 uppercase italic tracking-tighter leading-tight group-hover:text-amber-500 transition-colors">
                            {npc.name}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {npc.zone.map((z) => (
                            <div key={z} className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg">
                                <Compass size={12} className="text-amber-500" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{z}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                        {npc.locationPrecision || "Localisation précise non renseignée."}
                    </p>

                    {taughtRecipes.length > 0 && (
                        <div className="mt-6 space-y-3">
                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block flex items-center gap-2">
                                <Hammer size={12} /> Recettes enseignées
                            </span>
                            <div className="grid grid-cols-1 gap-2">
                                {taughtRecipes.map((recipe, i) => (
                                    <button
                                        key={i}
                                        onClick={() => navigate(`/wiki/metiers?search=${encodeURIComponent(recipe.name)}`)}
                                        className="flex items-center justify-between p-2 rounded-lg bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/30 transition-all group/u text-left"
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <span className="text-[9px] font-black text-amber-500/50 bg-amber-500/10 px-1 rounded shrink-0">LVL {recipe.level}</span>
                                            <span className="text-xs font-bold text-slate-300 group-hover/u:text-amber-400">{recipe.name}</span>
                                        </div>
                                        <ArrowRightCircle size={12} className="text-slate-600 group-hover/u:text-amber-500 shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {npc.coordinates && (
                    <button
                        onClick={() => navigate(`/maps?type=npc&name=${encodeURIComponent(npc.name)}`)}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/20 rounded-xl transition-all font-black uppercase tracking-widest text-[10px]"
                    >
                        <MapIcon size={14} />
                        Voir sur la carte
                    </button>
                )}
            </div>
        </motion.div>
    );
};

interface NpcListProps {
    npcs?: NPC[];
}

const NpcList: React.FC<NpcListProps> = ({ npcs }) => {
    const { npcsData } = useData();
    const sourceData = npcs || npcsData;
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedZone, setSelectedZone] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(24);

    const zones = useMemo(() => {
        const uniqueZones = new Set(sourceData.flatMap(n => n.zone));
        return ['All', ...Array.from(uniqueZones).sort()];
    }, [sourceData]);

    const filteredNpcs = useMemo(() => {
        let results = sourceData;

        if (selectedZone !== 'All') {
            results = results.filter(n => n.zone.includes(selectedZone));
        }

        if (searchQuery) {
            const query = fastNormalize(searchQuery);
            results = results.filter(n =>
                fastNormalize(n.name).includes(query) ||
                (n.locationPrecision && fastNormalize(n.locationPrecision).includes(query))
            );
        }

        return results.sort((a, b) => a.name.localeCompare(b.name));
    }, [sourceData, searchQuery, selectedZone]);

    // Reset to page 1 when filters change
    useMemo(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedZone]);

    const paginatedNpcs = useMemo(() => {
        return filteredNpcs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    }, [filteredNpcs, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredNpcs.length / itemsPerPage);

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 group w-full search-input-glow rounded-2xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-all duration-300 search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Rechercher un PNJ ou un lieu..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-12 text-slate-100 focus:border-amber-500/50 outline-none transition-all font-bold"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all hover:rotate-90 duration-200"><X size={18} /></button>
                    )}
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                    <div className="flex items-center gap-4 px-4 py-4 bg-slate-900/50 rounded-2xl border border-slate-800 shadow-inner h-[58px]">
                        <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
                            <span className="font-black text-amber-500 text-lg">{filteredNpcs.length}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">/ {sourceData.length}</span>
                        </div>
                    </div>

                    <select
                        value={selectedZone}
                        onChange={(e) => setSelectedZone(e.target.value)}
                        className="bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-slate-100 font-bold outline-none focus:border-amber-500/50 transition-all cursor-pointer h-[58px]"
                    >
                        {zones.map(zone => (
                            <option key={zone} value={zone}>{zone === 'All' ? 'Toutes les zones' : zone}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {paginatedNpcs.map((npc, idx) => (
                        <NpcCard key={npc.name + idx} npc={npc} />
                    ))}
                </AnimatePresence>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
                totalItems={filteredNpcs.length}
                pageSizeOptions={[12, 24, 48]}
            />

            {filteredNpcs.length === 0 && (
                <EmptyState
                    icon={MapPin}
                    title="Aucun PNJ trouvé"
                    subtitle="Essayez de modifier votre recherche."
                />
            )}
        </div>
    );
};

export default NpcList;
export { NpcCard };
