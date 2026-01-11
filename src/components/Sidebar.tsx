import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Hammer, Skull, Package, User, ShieldCheck, Calculator, PanelLeftClose, PanelLeftOpen, Shield, Compass, Scroll, ChevronDown, ChevronRight } from 'lucide-react';
import { quests } from '../data/quests';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ isOpen = true, onToggle }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(true);
  const location = useLocation();

  const zones = useMemo(() => {
    const allZones = quests.map(q => q.zone);
    return [...new Set(allZones)].sort();
  }, []);

  const navItems = [
    { name: 'Accueil', icon: Home, path: '/' },
    { name: 'Simulateur', icon: Calculator, path: '/planner' },
    { name: 'Explorateur', icon: Compass, path: '/explorer' },
    { name: 'Equipable', icon: User, path: '/equipable' },
    { name: 'Quêtes', icon: Scroll, path: '/quests', hasSubmenu: true },
    { name: 'Artisanat', icon: Hammer, path: '/wiki/metiers' },
    { name: 'Bestiaire', icon: Skull, path: '/wiki/bestiary' },
    { name: 'Objets', icon: Package, path: '/wiki/items' },
    { name: 'Mentions Légales', icon: ShieldCheck, path: '/legal' },
  ];

  const isActive = (path: string) => {
    if (path === '/quests') {
      return location.pathname.startsWith('/quests');
    }
    return location.pathname === path;
  };

  const isZoneActive = (zone: string) => {
    const encodedZone = encodeURIComponent(zone);
    return location.pathname === `/quests/${encodedZone}`;
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-xl md:hidden text-white border border-slate-700 shadow-2xl"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Toggle (Floating when closed) */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="hidden md:flex fixed top-6 left-6 z-50 p-3 bg-slate-900/80 backdrop-blur-md rounded-xl text-amber-500 border border-amber-500/20 shadow-2xl transition-all hover:scale-110 hover:bg-slate-800 active:scale-95"
          title="Afficher le menu"
        >
          <PanelLeftOpen size={24} />
        </button>
      )}

      {/* Sidebar Overlay (Mobile) */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-40 bg-slate-950 border-r border-slate-800/60 
        transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        ${isOpen ? 'md:w-80' : 'md:w-0 md:border-none md:overflow-hidden'}
        flex flex-col h-full shadow-[15px_0_40px_-15px_rgba(0,0,0,0.6)]
      `}>
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-transparent pointer-events-none" />
        
        {/* Inner Container to prevent content squishing during transition */}
        <div className={`relative flex flex-col h-full w-80 transition-all duration-300 ${isOpen ? 'opacity-100' : 'md:opacity-0 md:translate-x-[-30px]'}`}>
          {/* Header */}
          <div className="py-16 px-10 border-b border-slate-800/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-inner">
                  <Shield className="text-amber-500" size={28} />
                </div>
                <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600">
                  T4C NMS
                </h1>
              </div>
              
              {/* Desktop Close Button */}
              <button
                onClick={onToggle}
                className="hidden md:flex text-slate-500 hover:text-amber-500 p-2.5 rounded-xl hover:bg-slate-900 transition-all group"
                title="Masquer le menu"
              >
                <PanelLeftClose size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.5em] ml-[60px]">Overview</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-12 px-6 custom-scrollbar">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const active = isActive(item.path);
                
                if (item.hasSubmenu) {
                  return (
                    <li key={item.path} className="space-y-2">
                      <div className="relative group">
                        <Link
                          to={item.path}
                          onClick={() => {
                            if (!isMobileOpen) setIsQuestsOpen(true);
                          }}
                          className={`
                            flex items-center gap-5 px-6 py-5 rounded-[24px] transition-all duration-300 relative overflow-hidden
                            ${active 
                              ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.1)]' 
                              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent'}
                          `}
                        >
                          {active && <div className="absolute left-0 top-4 bottom-4 w-2 bg-amber-500 rounded-full" />}
                          <item.icon size={26} className={`shrink-0 transition-transform duration-300 ${active ? 'scale-110 shadow-amber-500/50' : 'group-hover:scale-110 group-hover:text-amber-400'}`} />
                          <span className={`font-black text-[15px] uppercase tracking-wider ${active ? 'text-amber-400' : ''}`}>{item.name}</span>
                          
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setIsQuestsOpen(!isQuestsOpen);
                            }}
                            className="ml-auto p-1 hover:bg-amber-500/20 rounded-md transition-colors"
                          >
                            {isQuestsOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                          </button>
                        </Link>
                      </div>

                      {/* Submenu */}
                      <div className={`
                        pl-12 space-y-1 overflow-hidden transition-all duration-500
                        ${isQuestsOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
                      `}>
                        {zones.map((zone) => (
                          <Link
                            key={zone}
                            to={`/quests/${encodeURIComponent(zone)}`}
                            onClick={() => setIsMobileOpen(false)}
                            className={`
                              flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-bold transition-all
                              ${isZoneActive(zone)
                                ? 'text-amber-400 bg-amber-500/5 translate-x-1'
                                : 'text-slate-500 hover:text-slate-300 hover:translate-x-1'}
                            `}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isZoneActive(zone) ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]' : 'bg-slate-700'}`} />
                            {zone}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`
                        flex items-center gap-5 px-6 py-5 rounded-[24px] transition-all duration-300 group relative overflow-hidden
                        ${active 
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.1)] scale-[1.02]' 
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent'}
                      `}
                    >
                      {/* Active indicator bar */}
                      {active && <div className="absolute left-0 top-4 bottom-4 w-2 bg-amber-500 rounded-full" />}
                      
                      <item.icon size={26} className={`shrink-0 transition-transform duration-300 ${active ? 'scale-110 shadow-amber-500/50' : 'group-hover:scale-110 group-hover:text-amber-400'}`} />
                      <span className={`font-black text-[15px] uppercase tracking-wider ${active ? 'text-amber-400' : ''}`}>{item.name}</span>
                      
                      {active && (
                        <div className="ml-auto w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_12px_rgba(245,158,11,1)]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="p-6 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
              <p className="text-[10px] text-slate-500 text-center leading-relaxed font-medium">
                Données : <br/>
                <a href="https://t4c.fandom.com/fr/wiki/The_4th_Coming" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors underline decoration-slate-700 underline-offset-4">Wiki T4C NMS</a> & <a href="https://nmsrevolution.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors underline decoration-slate-700 underline-offset-4">T4C NMS Révolution</a>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;