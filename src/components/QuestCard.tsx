
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Quest } from '../data/quests';
import { findItemsInQuest, linkItemsInHtml, highlightKeywords, formatLists, cleanTitle, cleanHtml } from '../data/quest-item-link';
import { 
  ChevronDown, ChevronUp, MapPin, Coins, Trophy, 
  Scroll, Users, CheckCircle, Copy, ImageIcon,
  Award, Maximize2, Package
} from 'lucide-react';
import ImageModal from './ImageModal';

interface QuestCardProps {
  quest: Quest;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  
  // Gallery state
  const [modalData, setModalData] = useState<{ images: string[], index: number } | null>(null);

  const relatedItems = useMemo(() => findItemsInQuest(quest), [quest]);
  
  const processedSteps = useMemo(() => {
    return quest.steps.map(step => {
      // Pipeline: Clean Source -> Lists -> Keywords -> Links
      const cleaned = cleanHtml(step.description);
      const withLists = formatLists(cleaned);
      const withKeywords = highlightKeywords(withLists);
      const withLinks = linkItemsInHtml(withKeywords);
      
      return {
        ...step,
        title: cleanTitle(step.title),
        description: withLinks
      };
    });
  }, [quest]);

  useEffect(() => {
    const saved = localStorage.getItem(`quest-progress-${quest.slug}`);
    if (saved) setCompletedSteps(JSON.parse(saved));
  }, [quest.slug]);

  const toggleStep = (idx: number) => {
    const newSteps = completedSteps.includes(idx)
      ? completedSteps.filter(i => i !== idx)
      : [...completedSteps, idx];
    setCompletedSteps(newSteps);
    localStorage.setItem(`quest-progress-${quest.slug}`, JSON.stringify(newSteps));
  };

  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('coords-trigger')) {
      const coords = target.innerText;
      navigator.clipboard.writeText(coords);
      setCopyStatus(coords);
      setTimeout(() => setCopyStatus(null), 2000);
    }
  };

  const openGallery = (stepImages: string[], initialIndex: number) => {
    setModalData({ images: stepImages, index: initialIndex });
  };

  return (
    <div className={`
      bg-slate-800/40 backdrop-blur-xl border rounded-2xl overflow-hidden shadow-2xl mb-8 
      transition-all duration-500 group
      ${isOpen ? 'border-amber-500/50 ring-1 ring-amber-500/20' : 'border-slate-700 hover:border-slate-500'}
    `}>
      {/* Header */}
      <div 
        className="p-5 cursor-pointer flex justify-between items-center bg-gradient-to-r from-slate-900/80 to-transparent hover:from-slate-800/80 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-5">
          <div className={`
            p-3 rounded-xl transition-all duration-500 transform
            ${isOpen ? 'bg-amber-500 text-slate-900 rotate-12 scale-110 shadow-lg shadow-amber-500/20' : 'bg-slate-700 text-slate-400 group-hover:text-slate-200'}
          `}>
            <Scroll size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
              {quest.title}
            </h3>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400 mt-1">
              <span className="flex items-center gap-1.5 bg-slate-900/50 px-2.5 py-0.5 rounded-full border border-slate-700">
                <MapPin size={14} className="text-rose-400" />
                {quest.zone}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-500/80">{quest.steps.length} étapes</span>
              {completedSteps.length > 0 && (
                <>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400 font-bold">{Math.round((completedSteps.length / quest.steps.length) * 100)}% complété</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isOpen ? <ChevronUp size={24} className="text-amber-500" /> : <ChevronDown size={24} className="text-slate-500" />}
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="p-8 border-t border-slate-700/50 bg-slate-900/20">
          
          {/* Subtle Community Note */}
          <div className="mb-8 flex justify-center">
            <div className="bg-slate-800/50 border border-slate-700 px-4 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Un oubli ? Une erreur ? Signalez-le à la communauté
            </div>
          </div>
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {quest.prerequisites.length > 0 && (
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-2 text-amber-400 mb-3 font-bold uppercase tracking-widest text-xs">
                  <CheckCircle size={16} /> Prérequis
                </div>
                <ul className="text-sm text-slate-300 space-y-2">
                  {quest.prerequisites.map((req, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed">
                      <span className="text-amber-500/50">•</span> {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {(quest.gold || quest.rewards.length > 0) && (
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400 mb-3 font-bold uppercase tracking-widest text-xs">
                  <Trophy size={16} /> Butins & XP
                </div>
                <ul className="text-sm text-slate-300 space-y-2">
                  {quest.gold && (
                    <li className="flex items-center gap-2 text-yellow-400 font-bold italic">
                      <Coins size={14} /> {quest.gold} po
                    </li>
                  )}
                  {quest.rewards.map((rew, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed">
                      <span className="text-emerald-500/50">•</span> {rew}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedItems.length > 0 && (
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/30 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400 mb-3 font-bold uppercase tracking-widest text-xs">
                  <Package size={16} /> Objets mentionnés
                </div>
                <div className="flex flex-wrap gap-2">
                  {relatedItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={`/wiki/items?search=${encodeURIComponent(item)}`}
                      className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20 hover:bg-indigo-500/20 hover:text-indigo-200 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {quest.npcs.length > 0 && (
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 text-blue-400 mb-3 font-bold uppercase tracking-widest text-xs">
                  <Users size={16} /> Personnages
                </div>
                 <div className="flex flex-wrap gap-2">
                  {quest.npcs.map((npc, i) => (
                    <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20">
                      {npc}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="relative border-l border-slate-700/50 ml-4 space-y-16 pl-10">
            {processedSteps.map((step, idx) => (
              <div key={idx} className={`relative group/step transition-all duration-500 ${completedSteps.includes(idx) ? 'opacity-40 grayscale blur-[0.5px]' : 'opacity-100'}`}>
                {/* Checkbox / Marker */}
                <button 
                  onClick={() => toggleStep(idx)}
                  className={`
                    absolute -left-[57px] top-0 flex h-10 w-10 items-center justify-center rounded-xl border-2 transition-all duration-300
                    ${completedSteps.includes(idx) 
                      ? 'bg-emerald-500 border-emerald-500 text-slate-900 rotate-[360deg]' 
                      : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-amber-500 hover:text-amber-500'}
                  `}
                >
                  {completedSteps.includes(idx) ? <CheckCircle size={20} /> : <span className="font-black text-sm">{idx + 1}</span>}
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Content */}
                  <div className={`${step.images.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                    <h4 className={`text-xl font-bold mb-4 transition-colors ${completedSteps.includes(idx) ? 'text-slate-500 line-through' : 'text-slate-100'}`}>
                      {step.title}
                    </h4>
                    
                    <div 
                      className="quest-description text-slate-300 text-base leading-relaxed mb-6 prose prose-invert max-w-none"
                      onClick={handleContentClick}
                      dangerouslySetInnerHTML={{ __html: step.description }} 
                    />
                  </div>

                  {/* Right: Gallery Rail */}
                  {step.images.length > 0 && (
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest px-1">
                        <span className="flex items-center gap-1.5"><ImageIcon size={12} /> {step.images.length} visuel{step.images.length > 1 ? 's' : ''}</span>
                        <span className="flex items-center gap-1">cliquer pour agrandir</span>
                      </div>
                      
                      <div className={`
                        grid gap-3
                        ${step.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}
                      `}>
                        {step.images.map((img, i) => (
                          <div 
                            key={i} 
                            className={`
                              relative group/img overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950 shadow-inner
                              ${step.images.length === 1 ? 'aspect-video' : 'aspect-square'}
                              cursor-zoom-in transition-all duration-300 hover:border-amber-500/50
                            `}
                            onClick={() => openGallery(step.images, i)}
                          >
                            <img 
                              src={img} 
                              alt={`Visuel ${i + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-end p-3">
                              <div className="p-1.5 bg-amber-500 rounded-lg text-slate-900 shadow-xl transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                                <Maximize2 size={16} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer - Credits */}
          {quest.credits && quest.credits.length > 0 && (
            <div className="mt-20 pt-8 border-t border-slate-700/50 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">
                <Award size={16} className="text-amber-500/50" /> Rédacteurs
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {quest.credits.map((credit, i) => (
                  <span key={i} className="text-sm italic text-slate-400 font-semibold bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Floating Notification for Coords */}
      {copyStatus && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-8 py-4 rounded-2xl font-black shadow-2xl shadow-cyan-500/40 animate-bounce z-[110] flex items-center gap-3 border-2 border-white/20">
          <Copy size={20} /> COORDONNÉES {copyStatus} COPIÉES !
        </div>
      )}

      {/* Image Gallery Modal */}
      {modalData && (
        <ImageModal 
          images={modalData.images}
          currentIndex={modalData.index}
          isOpen={true}
          onClose={() => setModalData(null)}
          onNext={() => setModalData(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
          onPrev={() => setModalData(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
        />
      )}
    </div>
  );
};

export default QuestCard;
