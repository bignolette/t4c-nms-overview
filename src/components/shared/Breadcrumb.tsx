import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

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
};

interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (location.pathname === '/') return null;

  const segments = location.pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ label: 'Accueil', to: '/' }];

  if (segments.length > 0) {
    const root = segments[0];
    const rootLabel = ROOT_LABELS[root] || root;
    crumbs.push({
      label: rootLabel,
      to: segments.length > 1 ? `/${root}` : undefined,
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
    <nav className="flex items-center gap-1 text-xs mb-4 flex-wrap">
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={12} className="text-slate-700" />}
            {crumb.to && !isLast ? (
              <Link
                to={crumb.to}
                className="text-slate-500 hover:text-amber-500 transition-colors flex items-center gap-1"
              >
                {i === 0 && <Home size={12} />}
                {crumb.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-slate-400 font-bold' : 'text-slate-500'}>
                {i === 0 && <Home size={12} className="inline mr-1" />}
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
