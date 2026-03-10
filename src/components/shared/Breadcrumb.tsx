import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Home, BookOpen, Calculator, Map, User, Scroll, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WIKI_SLUGS: Record<string, string> = {
  items: 'Objets',
  metiers: 'Artisanat',
  harvest: 'Récolte',
  deposits: 'Gisements',
  bestiary: 'Bestiaire',
  npcs: 'PNJs',
  spells: 'Sorts',
  skills: 'Compétences',
};

const ROOT_LABELS: Record<string, string> = {
  wiki: 'Encyclopédie',
  planner: 'Simulateur',
  maps: 'Cartographie',
  equipable: 'Personnage',
  legal: 'Mentions Légales',
  quests: 'Quêtes',
};

const ROOT_ICONS: Record<string, any> = {
  wiki: BookOpen,
  planner: Calculator,
  maps: Map,
  equipable: User,
  quests: Scroll,
  legal: ShieldCheck,
};

interface Crumb {
  label: string;
  to?: string;
  icon?: any;
}

const DiamondSeparator = () => (
  <span className="mx-1.5 flex items-center">
    <svg viewBox="0 0 8 8" className="w-1.5 h-1.5 text-amber-500/40" fill="currentColor">
      <path d="M4 0L8 4L4 8L0 4Z" />
    </svg>
  </span>
);

const Breadcrumb = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (location.pathname === '/') return null;

  const segments = location.pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ label: 'Accueil', to: '/', icon: Home }];

  if (segments.length > 0) {
    const root = segments[0];
    const rootLabel = ROOT_LABELS[root] || root;
    const rootIcon = ROOT_ICONS[root];
    crumbs.push({
      label: rootLabel,
      to: segments.length > 1 ? `/${root}` : undefined,
      icon: rootIcon,
    });

    if (root === 'wiki' && segments[1]) {
      const slug = segments[1];
      crumbs.push({
        label: WIKI_SLUGS[slug] || slug,
      });
    }
  }

  const search = searchParams.get('search');
  if (search) {
    crumbs.push({ label: `"${search}"` });
  }

  return (
    <motion.nav
      className="flex items-center gap-0.5 text-xs mb-6 flex-wrap py-2 px-3 rounded-xl bg-slate-900/20 border border-slate-800/30 backdrop-blur-sm w-fit"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        const Icon = crumb.icon;
        return (
          <span key={i} className="flex items-center gap-0.5">
            {i > 0 && <DiamondSeparator />}
            {crumb.to && !isLast ? (
              <Link
                to={crumb.to}
                className="text-slate-500 hover:text-amber-500 transition-colors flex items-center gap-1.5 px-1.5 py-0.5 rounded-md hover:bg-amber-500/5"
              >
                {Icon && <Icon size={12} className="opacity-60" />}
                <span>{crumb.label}</span>
              </Link>
            ) : (
              <span className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-md ${isLast ? 'text-amber-400/80 font-bold bg-amber-500/5' : 'text-slate-500'}`}>
                {Icon && <Icon size={12} className="opacity-60" />}
                <span>{crumb.label}</span>
              </span>
            )}
          </span>
        );
      })}

      {/* Decorative trailing dash */}
      <span className="ml-1 w-4 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
    </motion.nav>
  );
};

export default Breadcrumb;
