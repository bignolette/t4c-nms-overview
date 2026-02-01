import React from 'react';

interface Props {
  name: string | null;
  children?: React.ReactNode;
}

const CharacterNameVisual: React.FC<Props> = ({ name, children }) => {
  const displayName = name || "SÉLECTIONNEZ UN PERSONNAGE";
  const [particles, setParticles] = React.useState<{id: number, left: string, top: string, size: number, duration: number, delay: number}[]>([]);

  // Générer des particules aléatoires pour l'effet de fond
  React.useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [name]);

  return (
    <div className="relative w-full py-6 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-amber-500/20 mb-2 group">
      {/* Particules d'arrière-plan */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-amber-500/20 rounded-full animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Lueur centrale */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-shimmer" />

      {/* Texte avec effet de masque et brillance */}
      <div className="relative flex flex-col items-center">
        <span className="text-[10px] font-black text-amber-500/60 uppercase tracking-[0.4em] mb-1">
          {name ? "Personnage sélectionné" : "En attente de chargement"}
        </span>
        <h1 className={`text-2xl sm:text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-200 to-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] text-center px-4 ${!name ? 'opacity-20 grayscale' : ''}`}>
          {displayName}
        </h1>

        {children && (
          <div className="mt-4 w-full px-8 animate-fadeIn">
            {children}
          </div>
        )}

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-2 rounded-full opacity-50" />
      </div>
    </div>
  );
};

export default CharacterNameVisual;
