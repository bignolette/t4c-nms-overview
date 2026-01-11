
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Quest } from '../data/quests';
import { findItemsInQuest, linkItemsInHtml, highlightKeywords, formatLists, cleanTitle, cleanHtml } from '../data/quest-item-link';
import { 
  ChevronDown, MapPin, Coins, Trophy, 
  Scroll, Users, CheckCircle, Copy, ImageIcon,
  Maximize2, Package, Sparkles, ArrowRight,
  Shield
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

  const progressPercentage = Math.round((completedSteps.length / quest.steps.length) * 100);
  const isComplete = progressPercentage === 100;

  return (
    <div className={`
      relative mb-8 rounded-2xl transition-all duration-500 overflow-hidden group
      ${isOpen 
        ? 'bg-slate-900/80 ring-1 ring-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.1)]' 
        : 'bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-600'}
    `}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      
      {/* Header Section */}
      <div 
        className="relative p-6 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-6">
          {/* Icon Badge */}
          <div className={`
            relative shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500
            ${isComplete 
              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/20' 
              : isOpen 
                ? 'bg-amber-500/10 border-amber-500/50 text-amber-500 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 border-slate-700 text-slate-500'}
          `}>
            {isComplete ? <CheckCircle size={28} /> : <Scroll size={28} />}
            
            {/* Completion Badge */}
            {completedSteps.length > 0 && !isComplete && (
              <div className="absolute -bottom-2 -right-2 bg-slate-900 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 shadow-sm">
                {progressPercentage}%
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className={`
                inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest border
                ${isComplete 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-slate-800/50 text-slate-400 border-slate-700'}
              `}>
                <MapPin size={10} /> {quest.zone}
              </span>
              {quest.gold && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-400/80 uppercase tracking-widest">
                  <Coins size={10} /> {quest.gold} PO
                </span>
              )}
            </div>
            
            <h3 className={`
              text-xl md:text-2xl font-black tracking-tight transition-colors duration-300
              ${isComplete ? 'text-emerald-400' : isOpen ? 'text-slate-100' : 'text-slate-200'}
            `}>
              {quest.title}
            </h3>

            {/* Micro-preview of next step if closed */}
            {!isOpen && !isComplete && (
              <p className="text-sm text-slate-500 mt-2 truncate font-medium">
                <span className="text-amber-500/70 mr-2">Objectif actuel :</span>
                {processedSteps[completedSteps.length]?.title || "Terminer la quête"}
              </p>
            )}
          </div>

          <div className={`
            p-2 rounded-full transition-all duration-300
            ${isOpen ? 'bg-slate-800 text-amber-500 rotate-180' : 'text-slate-600 hover:text-slate-400'}
          `}>
            <ChevronDown size={20} />
          </div>
        </div>
        
        {/* Progress Bar (Bottom of header) */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-4 fade-in duration-300">
          
          {/* Quick Stats / Loot Bar */}
          <div className="px-8 py-6 bg-slate-950/30 border-b border-slate-800/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* XP / Gold */}
            {(quest.gold || quest.rewards.length > 0) && (
              <div className="col-span-1 md:col-span-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <Trophy size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest mb-1">Récompenses</div>
                  <div className="text-xs text-slate-300 space-y-1">
                    {quest.gold && <div className="flex items-center gap-1.5"><Coins size={12} className="text-amber-400"/> {quest.gold} pièces d'or</div>}
                    {quest.rewards.map((r, i) => (
                      <div key={i} className="flex items-center gap-1.5"><Sparkles size={12} className="text-purple-400"/> {r}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Related Items */}
            {relatedItems.length > 0 && (
              <div className="col-span-1 md:col-span-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                  <Package size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-indigo-500/70 uppercase tracking-widest mb-1">Objets Requis / Cités</div>
                  <div className="flex flex-wrap gap-1.5">
                    {relatedItems.map((item, i) => (
                      <Link 
                        key={i} 
                        to={`/wiki/items?search=${encodeURIComponent(item)}`}
                        className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {quest.prerequisites.length > 0 && (
              <div className="col-span-1 md:col-span-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                 <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500">
                  <Shield size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-rose-500/70 uppercase tracking-widest mb-1">Prérequis</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {quest.prerequisites.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 mt-0.5">•</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
             
             {/* NPCs */}
             {quest.npcs.length > 0 && (
              <div className="col-span-1 md:col-span-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-blue-500/70 uppercase tracking-widest mb-1">Personnages</div>
                  <div className="flex flex-wrap gap-1.5">
                    {quest.npcs.map((npc, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {npc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Timeline Section */}
          <div className="p-8 relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-[54px] top-8 bottom-8 w-[2px] bg-slate-800">
              <div 
                className="w-full bg-gradient-to-b from-amber-500 to-amber-700 transition-all duration-700 ease-out"
                style={{ height: `${(completedSteps.length / Math.max(1, quest.steps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="space-y-12">
              {processedSteps.map((step, idx) => {
                const isStepComplete = completedSteps.includes(idx);
                const isNext = !isStepComplete && (idx === 0 || completedSteps.includes(idx - 1));

                return (
                  <div key={idx} className={`relative flex gap-8 group ${isStepComplete ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 shrink-0">
                      <button 
                        onClick={() => toggleStep(idx)}
                        className={`
                          w-14 h-14 flex items-center justify-center rounded-xl border-2 transform rotate-45 transition-all duration-300 shadow-xl
                          ${isStepComplete 
                            ? 'bg-amber-500 border-amber-400 text-slate-900 scale-90' 
                            : isNext 
                              ? 'bg-slate-900 border-amber-500/50 text-amber-500 scale-100 animate-pulse-slow' 
                              : 'bg-slate-950 border-slate-700 text-slate-600 scale-90'}
                        `}
                      >
                        <div className="-rotate-45 font-black text-lg">
                          {isStepComplete ? <CheckCircle size={24} /> : idx + 1}
                        </div>
                      </button>
                    </div>

                    {/* Content Card */}
                    <div className={`
                      flex-1 min-w-0 bg-slate-900/50 border rounded-2xl p-6 transition-all duration-300
                      ${isNext ? 'border-amber-500/30 ring-1 ring-amber-500/10 bg-gradient-to-br from-slate-900/50 to-amber-900/5' : 'border-slate-800'}
                    `}>
                      {/* Step Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-slate-800/50 pb-4">
                        <h4 className={`text-lg font-bold ${isStepComplete ? 'text-slate-500 line-through decoration-slate-600' : isNext ? 'text-amber-100' : 'text-slate-300'}`}>
                          {step.title}
                        </h4>
                        
                        {step.images.length > 0 && (
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800">
                            <ImageIcon size={12} /> {step.images.length} Image{step.images.length > 1 ? 's' : ''}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Narrative Content */}
                        <div className={`${step.images.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                           <div 
                            className={`
                              prose prose-invert prose-sm max-w-none 
                              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                              prose-strong:text-slate-100 prose-strong:font-black
                              prose-li:text-slate-300 prose-ul:my-2
                            `}
                            onClick={handleContentClick}
                            dangerouslySetInnerHTML={{ __html: step.description }} 
                          />
                        </div>

                        {/* Gallery Preview */}
                        {step.images.length > 0 && (
                          <div className="lg:col-span-4 space-y-3">
                            {step.images.map((img, i) => (
                              <div 
                                key={i}
                                onClick={() => openGallery(step.images, i)}
                                className="group/img relative aspect-video rounded-lg overflow-hidden border border-slate-700 bg-slate-950 cursor-zoom-in hover:border-amber-500/50 transition-all"
                              >
                                <img src={img} alt="" className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                  <Maximize2 className="text-white drop-shadow-md" size={20} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Step Footer Actions */}
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => toggleStep(idx)}
                          className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all
                            ${isStepComplete 
                              ? 'text-slate-500 hover:text-slate-300' 
                              : 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/20'}
                          `}
                        >
                          {isStepComplete ? 'Marquer comme inachevé' : 'Terminer l\'étape'}
                          {!isStepComplete && <ArrowRight size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Credits */}
          {quest.credits && quest.credits.length > 0 && (
             <div className="bg-slate-950/50 py-6 text-center border-t border-slate-800">
               <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] mb-2">Contributeurs</p>
               <div className="flex justify-center gap-2">
                 {quest.credits.map((c, i) => (
                   <span key={i} className="text-xs text-slate-500">{c}</span>
                 ))}
               </div>
             </div>
          )}
        </div>
      )}

      {/* Utilities */}
      {copyStatus && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-6 py-3 rounded-xl font-bold shadow-xl shadow-cyan-500/20 animate-bounce z-[110] flex items-center gap-3 border-2 border-white/10">
          <Copy size={18} /> {copyStatus}
        </div>
      )}

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
