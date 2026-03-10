import { motion } from 'framer-motion';
import { ShieldCheck, Info, Lock, Globe } from 'lucide-react';
import OrnamentDivider from '../components/ui/OrnamentDivider';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Legal = () => {
  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-3xl p-6 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-500/10 rounded-2xl border border-slate-500/20">
              <ShieldCheck size={28} className="text-slate-400" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-500 text-xs font-bold uppercase tracking-wider">
                Informations
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tighter italic uppercase">Mentions Légales</h1>
          <p className="text-slate-400 font-medium max-w-3xl leading-relaxed border-l-2 border-slate-500/30 pl-4">
            Conformément aux dispositions de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 (LCEN).
          </p>
        </div>
      </motion.div>

      <OrnamentDivider variant="wave" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Éditeur */}
        <motion.section
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-2xl p-6 space-y-4 group hover:border-amber-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 group-hover:scale-110 transition-transform">
              <Info size={20} className="text-amber-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Édition du site</h2>
          </div>
          <div className="text-sm text-slate-400 space-y-2">
            <p>Le présent site est édité à titre non-professionnel par :</p>
            <p className="font-bold text-slate-200 uppercase tracking-wide">Bignole</p>
            <p className="italic mt-4">
              Conformément à l'article 6, III, 2° de la loi n° 2004-575 du 21 juin 2004, l'éditeur a choisi
              de rester anonyme. Les informations d'identification personnelle ont été transmises à l'hébergeur.
            </p>
          </div>
        </motion.section>

        {/* Hébergeur */}
        <motion.section
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-2xl p-6 space-y-4 group hover:border-blue-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:scale-110 transition-transform">
              <Globe size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Hébergement</h2>
          </div>
          <div className="text-sm text-slate-400 space-y-2">
            <p>Le site est hébergé par :</p>
            <p className="font-bold text-slate-200">GitHub Inc.</p>
            <p>88 Colin P Kelly Jr St</p>
            <p>San Francisco, CA 94107, USA</p>
            <p>Téléphone : +1 (415) 448-6673</p>
          </div>
        </motion.section>

        {/* Propriété Intellectuelle */}
        <motion.section
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-2 glass-card rounded-2xl p-6 space-y-4 group hover:border-amber-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} className="text-purple-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Propriété Intellectuelle et Crédits</h2>
          </div>
          <div className="text-sm text-slate-400 space-y-4 leading-relaxed text-justify">
            <p>
              <strong>The 4th Coming (T4C)</strong> est une marque déposée et une propriété intellectuelle de
              <span className="text-amber-500 font-bold"> Dialsoft LLC</span>. Les noms d'objets, statistiques de sorts, caractéristiques de monstres
              et tout autre élément issu de l'univers du jeu sont la propriété exclusive de leurs auteurs respectifs.
            </p>
            <p>
              Ce site est une "Fan-App" non officielle à but purement informatif. Il contient des assets visuels originaux du jeu (images, textures, icônes) issus des fichiers du jeu, et n'est en aucun cas affilié, approuvé ou soutenu par
              Dialsoft ou les exploitants officiels des serveurs T4C.
            </p>
            <p>
              Une grande partie des données textuelles, quêtes et informations ont été reprises et adaptées des sites
              <strong> <a href="https://nmsrevolution.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">T4C Wiki NMS</a></strong> et
              <strong> <a href="https://nmsrevolution.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">T4C NMS Révolution</a></strong>.
              Le code source de l'application est mis à disposition à des fins éducatives et communautaires.
            </p>
          </div>
        </motion.section>

        {/* Cookies / Données */}
        <motion.section
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-2 glass-card rounded-2xl p-6 space-y-4 group hover:border-emerald-500/20 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <Lock size={20} className="text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Données Personnelles</h2>
          </div>
          <div className="text-sm text-slate-400 leading-relaxed">
            <p>
              Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie de traçage ou de publicité.
              Aucune donnée n'est stockée de manière persistante dans votre navigateur. Vous pouvez sauvegarder vos données (personnages, favoris) dans un fichier local sur votre appareil et les recharger lors de votre prochaine visite.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Legal;
