import { useState, useMemo, memo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fastNormalize } from '../data/utils';
import { 
  Search, MapPin, Pickaxe, RotateCcw, Info, ExternalLink, Map as MapIcon, X, Filter, BarChart3
} from 'lucide-react';
import Pagination from './shared/Pagination';
import EmptyState from './shared/EmptyState';

interface DepositListProps {
  deposits: any[]; // Using any to accommodate the specific JSON structure
}

const DEFAULT_ITEMS_PER_PAGE = 24;

const DROP_RATE_COLORS: Record<string, string> = {
  'Common': 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  'Rare': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Special': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Legendary': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const DepositCard = memo(({ deposit }: { deposit: any }) => {
  const [showAllCoords, setShowAllCoords] = useState(false);
  const coords = Array.isArray(deposit.coordinates) ? deposit.coordinates : [];
  const zones = Array.isArray(deposit.zone) ? deposit.zone : [deposit.zone];
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card-hover-glow group relative bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/50 flex flex-col"
    >
      <div className="p-5 bg-slate-900/40 border-b border-slate-700/50 relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 border bg-amber-500/10 text-amber-400 border-amber-500/30">
                {deposit.type || 'Gisement'}
              </span>
              {deposit.dropRate && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 border ${DROP_RATE_COLORS[deposit.dropRate] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                  {deposit.dropRate}
                </span>
              )}
              {zones.map((z: string, i: number) => (
                <span key={i} className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter shrink-0">
                  {z}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-black group-hover:text-amber-400 transition-colors leading-tight italic tracking-tight text-slate-100 flex items-center gap-2 overflow-hidden mt-2">
              <span>{deposit.name}</span>
            </h3>
          </div>
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
            <Pickaxe size={18} />
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-6">
        {deposit.description && (
          <div className="space-y-2">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
              <Info size={12} /> Description
            </span>
            <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/30 p-3 rounded-xl border border-slate-800/50">
              {deposit.description}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
            <MapPin size={12} /> Localisations ({coords.length})
          </span>
          <div className="flex flex-wrap gap-2">
            {coords.slice(0, showAllCoords ? coords.length : 6).map((coord: string, idx: number) => (
              <Link 
                key={idx} 
                to={`/maps?type=location&name=${encodeURIComponent(zones[0] || '')}`}
                className="flex items-center gap-2 text-[11px] text-blue-400 font-mono bg-blue-400/5 px-2.5 py-1.5 rounded-lg border border-blue-400/10 hover:bg-blue-400/10 transition-colors group/coord"
              >
                <MapIcon size={12} className="text-blue-500 group-hover/coord:scale-110 transition-transform" />
                <span>{coord}</span>
              </Link>
            ))}
            {coords.length > 6 && (
                <button 
                  onClick={() => setShowAllCoords(!showAllCoords)}
                  className="text-[10px] font-black text-slate-500 hover:text-amber-500 uppercase tracking-widest px-2"
                >
                  {showAllCoords ? "Voir moins" : `+ ${coords.length - 6} autres`}
                </button>
            )}
            {coords.length === 0 && (
              <span className="text-xs text-slate-600 italic">Aucune localisation répertoriée</span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700/30">
          <Link 
            to={`/wiki/metiers?search=${encodeURIComponent(deposit.name)}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/20 rounded-xl transition-all font-black uppercase tracking-widest text-[10px]"
          >
            <ExternalLink size={14} />
            Voir l'utilisation en craft
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

const DepositList = ({ deposits }: DepositListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  const [selectedZone, setSelectedZone] = useState<string>('Toutes');
  const [selectedRarity, setSelectedRarity] = useState<string>('Toutes');
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  useEffect(() => {
    setActiveSearchTerm(urlSearch);
    setCurrentPage(1);
  }, [urlSearch]);

  const handleSearchChange = (val: string) => {
    setActiveSearchTerm(val);
    setCurrentPage(1);
    setSearchParams(prev => {
      if (val) prev.set('search', val);
      else prev.delete('search');
      return prev;
    }, { replace: true });
  };

  const allZones = useMemo(() => {
    const zonesSet = new Set<string>();
    deposits.forEach(d => { 
      if (Array.isArray(d.zone)) d.zone.forEach((z: string) => zonesSet.add(z));
      else if (d.zone) zonesSet.add(d.zone);
    });
    return ['Toutes', ...Array.from(zonesSet).sort()];
  }, [deposits]);

  const rarities = ['Toutes', 'Common', 'Rare', 'Special', 'Legendary'];

  const handleReset = () => {
    setActiveSearchTerm('');
    setSelectedZone('Toutes');
    setSelectedRarity('Toutes');
    setCurrentPage(1);
    setSearchParams(new URLSearchParams());
  };

  const filteredDeposits = useMemo(() => {
    const query = fastNormalize(activeSearchTerm);
    return deposits.filter(d => {
      const matchesSearch = !query || fastNormalize(d.name).includes(query);
      const zones = Array.isArray(d.zone) ? d.zone : [d.zone];
      const matchesZone = selectedZone === 'Toutes' || zones.includes(selectedZone);
      const matchesRarity = selectedRarity === 'Toutes' || d.dropRate === selectedRarity;
      return matchesSearch && matchesZone && matchesRarity;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [deposits, selectedZone, selectedRarity, activeSearchTerm]);

  const paginatedDeposits = useMemo(() => {
    return filteredDeposits.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredDeposits, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 bg-slate-800/30 p-4 md:p-6 rounded-2xl border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-4 relative z-10">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Rechercher un gisement ou un minerai..."
              value={activeSearchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3.5 pl-12 pr-12 text-slate-100 focus:border-amber-500/50 outline-none transition-all font-bold"
            />
            {activeSearchTerm && (
              <button onClick={() => handleSearchChange('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all"><X size={18} /></button>
            )}
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 shrink-0">
            <button onClick={handleReset} className="btn-danger flex-1 md:flex-none justify-center">
              <RotateCcw size={16} /> <span className="md:hidden lg:inline">Réinitialiser</span>
            </button>
            
            <div className="flex items-center gap-4 px-4 py-2 bg-slate-950/50 rounded-xl border border-slate-800 shadow-inner">
              <div className="text-slate-400 whitespace-nowrap flex items-center gap-2">
                <span className="font-black text-amber-500 text-lg">{filteredDeposits.length}</span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-60">/ {deposits.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 ml-1">
              <BarChart3 size={14} className="text-purple-500/50" />
              <label htmlFor="deposit-rarity-select" className="text-[10px] font-black uppercase tracking-[0.2em]">Rareté</label>
            </div>
            <div className="relative">
              <select 
                id="deposit-rarity-select"
                value={selectedRarity}
                onChange={(e) => { setSelectedRarity(e.target.value); setCurrentPage(1); }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-300 focus:border-amber-500 outline-none appearance-none"
              >
                {rarities.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 ml-1">
              <MapPin size={14} className="text-blue-500/50" />
              <label htmlFor="deposit-zone-select" className="text-[10px] font-black uppercase tracking-[0.2em]">Zone</label>
            </div>
            <div className="relative">
              <select 
                id="deposit-zone-select"
                value={selectedZone}
                onChange={(e) => { setSelectedZone(e.target.value); setCurrentPage(1); }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-300 focus:border-amber-500 outline-none appearance-none"
              >
                {allZones.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
              <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {paginatedDeposits.map((dep, idx) => (
            <DepositCard key={dep.name + idx} deposit={dep} />
          ))}
        </AnimatePresence>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newSize) => { setItemsPerPage(newSize); setCurrentPage(1); }}
        totalItems={filteredDeposits.length}
        pageSizeOptions={[12, 24, 48]}
      />

      {filteredDeposits.length === 0 && (
        <EmptyState
          icon={Pickaxe}
          title="Aucun gisement trouvé"
          subtitle="Essayez de modifier votre recherche."
        />
      )}
    </div>
  );
};

export default DepositList;
