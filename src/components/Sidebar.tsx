import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Hammer, Skull, Package, User, ShieldCheck, Calculator, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ isOpen = true, onToggle }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', icon: Home, path: '/' },
    { name: 'Simulateur', icon: Calculator, path: '/planner' },
    { name: 'Equipable', icon: User, path: '/equipable' },
    { name: 'Artisanat', icon: Hammer, path: '/wiki/metiers' },
    { name: 'Bestiaire', icon: Skull, path: '/wiki/bestiary' },
    { name: 'Objets', icon: Package, path: '/wiki/items' },
    { name: 'Mentions Légales', icon: ShieldCheck, path: '/legal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-md md:hidden text-white border border-slate-700 shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Toggle (Floating when closed) */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="hidden md:flex fixed top-6 left-6 z-50 p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-amber-500 border border-slate-700 shadow-xl transition-all hover:scale-105"
          title="Afficher le menu"
        >
          <PanelLeftOpen size={20} />
        </button>
      )}

      {/* Sidebar Overlay (Mobile) */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-40 bg-slate-900 border-r border-slate-800 
        transform transition-all duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        ${isOpen ? 'md:w-64' : 'md:w-0 md:border-none md:overflow-hidden'}
        flex flex-col h-full
      `}>
        {/* Inner Container to prevent content squishing during transition */}
        <div className={`flex flex-col h-full w-64 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'md:opacity-0'}`}>
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 drop-shadow-sm">
                T4C NMS
              </h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Overview</p>
            </div>
            
            {/* Desktop Close Button */}
            <button
              onClick={onToggle}
              className="hidden md:block text-slate-500 hover:text-slate-300 p-1 rounded hover:bg-slate-800 transition-colors"
              title="Masquer le menu"
            >
              <PanelLeftClose size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 mt-2">
            <ul className="space-y-1 px-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                      ${isActive(item.path) 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-lg shadow-amber-500/5' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100 hover:pl-5'}
                    `}
                  >
                    <item.icon size={20} className={isActive(item.path) ? "animate-pulse" : "group-hover:scale-110 transition-transform"} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-slate-800 bg-slate-950/30">
              <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                Les données proviennent du <a href="#" className="hover:text-amber-500 underline">Wiki T4C NMS</a> et du site <a href="#" className="hover:text-amber-500 underline">NMS Révolution</a>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;