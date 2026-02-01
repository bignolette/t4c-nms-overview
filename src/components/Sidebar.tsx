import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, ShieldCheck, Calculator, PanelLeftClose, PanelLeftOpen, BookOpen } from 'lucide-react';
import RuneIcon from './ui/RuneIcon';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ isOpen = true, onToggle }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', icon: Home, path: '/' },
    { name: 'Encyclopédie', icon: BookOpen, path: '/wiki' },
    { name: 'Simulateur', icon: Calculator, path: '/planner' },
    { name: 'Personnage', icon: User, path: '/equipable' },
    { name: 'Mentions Légales', icon: ShieldCheck, path: '/legal' },
  ];

  const isActive = (path: string) => {
    if (path === '/wiki') return location.pathname.startsWith('/wiki');
    return location.pathname === path;
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
        fixed md:relative inset-y-0 left-0 z-40 glass-card border-r border-white/5
        transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        ${isOpen ? 'md:w-80' : 'md:w-0 md:border-none md:overflow-hidden'}
        flex flex-col h-full shadow-[15px_0_40px_-15px_rgba(0,0,0,0.6)]
      `}>
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        
        {/* Inner Container to prevent content squishing during transition */}
        <div className={`relative flex flex-col h-full w-80 transition-all duration-300 ${isOpen ? 'opacity-100' : 'md:opacity-0 md:translate-x-[-30px]'}`}>
          {/* Header */}
          <div className="py-16 px-10 border-b border-white/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4 group/logo cursor-default">
                <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-inner group-hover/logo:scale-110 transition-transform duration-500">
                  <RuneIcon stat="shield" size={28} color="#f59e0b" />
                </div>
                <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 font-fantasy">
                  T4C NMS
                </h1>
              </div>
              
              {/* Desktop Close Button */}
              <button
                onClick={onToggle}
                className="hidden md:flex text-slate-500 hover:text-amber-500 p-2.5 rounded-xl hover:bg-white/5 transition-all group"
                title="Masquer le menu"
              >
                <PanelLeftClose size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[12px] font-black text-amber-500/40 uppercase tracking-[0.5em] ml-[60px] font-fantasy">Overview</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-8 px-6 custom-scrollbar flex flex-col gap-8">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const active = isActive(item.path);
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`
                        flex items-center gap-5 px-6 py-5 rounded-[24px] transition-all duration-300 group relative overflow-hidden
                        ${active 
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] scale-[1.02]' 
                          : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'}
                      `}
                    >
                      {/* Active indicator bar */}
                      {active && <div className="absolute left-0 top-4 bottom-4 w-1.5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)]" />}
                      
                      <item.icon size={26} className={`shrink-0 transition-transform duration-300 ${active ? 'scale-110 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'group-hover:scale-110 group-hover:text-amber-400'}`} />
                      <span className={`font-black text-[15px] uppercase tracking-wider font-fantasy ${active ? 'text-amber-400' : ''}`}>{item.name}</span>
                      
                      {active && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_12px_rgba(245,158,11,1)]" />
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