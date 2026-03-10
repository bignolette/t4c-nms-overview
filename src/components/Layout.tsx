import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import Background3D from './Background3D';
import Footer from './Footer';
import NotificationToast from './ui/NotificationToast';
import ScrollProgress from './ui/ScrollProgress';
import BackToTop from './ui/BackToTop';
import Breadcrumb from './shared/Breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
}

// Section accent color context
interface SectionAccent {
  color: string;     // tailwind text color
  bg: string;        // tailwind bg color
  border: string;    // tailwind border color
  label: string;
}

const SECTION_ACCENTS: Record<string, SectionAccent> = {
  '/':         { color: 'text-amber-500',   bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   label: 'Accueil' },
  '/wiki':     { color: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/30',    label: 'Encyclopédie' },
  '/bestiary': { color: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'border-rose-500/30',    label: 'Bestiaire' },
  '/recipes':  { color: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   label: 'Artisanat' },
  '/spells':   { color: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'border-violet-500/30',  label: 'Sorts' },
  '/skills':   { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'Compétences' },
  '/planner':  { color: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    label: 'Simulateur' },
  '/maps':     { color: 'text-green-400',   bg: 'bg-green-500/10',   border: 'border-green-500/30',   label: 'Cartographie' },
  '/equipable':{ color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'Personnage' },
  '/quests':   { color: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'border-yellow-500/30',  label: 'Quêtes' },
  '/legal':    { color: 'text-slate-400',   bg: 'bg-slate-500/10',   border: 'border-slate-500/30',   label: 'Mentions' },
};

const SectionAccentContext = createContext<SectionAccent>(SECTION_ACCENTS['/']);

export const useSectionAccent = () => useContext(SectionAccentContext);

function getAccent(pathname: string): SectionAccent {
  // Exact match first
  if (SECTION_ACCENTS[pathname]) return SECTION_ACCENTS[pathname];
  // Prefix match
  const root = '/' + pathname.split('/').filter(Boolean)[0];
  return SECTION_ACCENTS[root] || SECTION_ACCENTS['/'];
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  const accent = getAccent(location.pathname);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <SectionAccentContext.Provider value={accent}>
      <div className="h-screen h-[100dvh] text-slate-100 flex overflow-hidden selection:bg-amber-500/30 relative">
        <Background3D pathname={location.pathname} />

        {/* Subtle global noise overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Header />
        <NotificationToast />

        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto h-full scroll-smooth relative w-full"
        >
          <ScrollProgress scrollRef={mainRef as React.RefObject<HTMLDivElement>} />
          <div className="container mx-auto px-4 pt-20 md:pt-24 pb-20 md:pb-32 max-w-6xl flex flex-col min-h-full">
            <Breadcrumb />
            <div className="flex-1">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 12, scale: 0.995 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.995 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
            <Footer />
          </div>
        </main>
        <BackToTop scrollRef={mainRef as React.RefObject<HTMLDivElement>} />
      </div>
    </SectionAccentContext.Provider>
  );
};

export default Layout;
