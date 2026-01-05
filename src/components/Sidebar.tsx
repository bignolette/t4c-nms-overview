import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Hammer, Skull, Package, User } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', icon: Home, path: '/' },
    { name: 'Equipable', icon: User, path: '/equipable' },
    { name: 'Métiers', icon: Hammer, path: '/wiki/metiers' },
    { name: 'Bestiaire', icon: Skull, path: '/wiki/bestiary' },
    { name: 'Objets', icon: Package, path: '/wiki/items' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-md md:hidden text-white border border-slate-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-800">
            <h1 className="text-2xl font-bold text-amber-500 tracking-wider">T4C NMS Overview</h1>
            <p className="text-xs text-slate-400 mt-1">La 4ème Prophétie</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 mt-4">
            <ul className="space-y-1 px-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive(item.path) 
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}
                    `}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 text-center text-xs text-slate-600">
            v1.0.0 • par Bignole (Les donn&eacute;es proviennent du Wiki T4C NMS et du site NMS Révolution)
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;