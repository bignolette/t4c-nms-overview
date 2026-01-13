import React, { useState, useEffect, useMemo } from 'react';
import type { Quest } from '../data/quests';
import { highlightKeywords, formatLists, cleanTitle, cleanHtml, formatAttention, formatRewards } from '../data/quest-item-link';
import { 
  ChevronDown, MapPin, Coins, Trophy, 
  Scroll, CheckCircle, Copy, ImageIcon,
  Maximize2, Sparkles, ArrowRight,
  Shield, Flame, Zap, User
} from 'lucide-react';
import ImageModal from './ImageModal';

interface QuestCardProps {
  quest: Quest;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  
  const [modalData, setModalData] = useState<{ images: string[], index: number } | null>(null);

  const processedSteps = useMemo(() => {
    return quest.steps.map(step => {
      const cleaned = cleanHtml(step.description);
      const withLists = formatLists(cleaned);
      const withAttention = formatAttention(withLists);
      const withRewards = formatRewards(withAttention);
      const withKeywords = highlightKeywords(withRewards);
      
      return {
        ...step,
        title: cleanTitle(step.title),
        description: withKeywords
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

  const progressPercentage = Math.round((completedSteps.length / quest.steps.length) * 100);
  const isComplete = progressPercentage === 100;

  return (
    <div className={`
      relative mb-6 rounded-3xl transition-all duration-500 overflow-hidden group
      ${isOpen 
        ? 'bg-slate-900/90 ring-1 ring-amber-500/40 shadow-[0_0_60px_-15px_rgba(245,158,11,0.15)] backdrop-blur-xl' 
        : 'bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 hover:border-slate-600/50'}
    `}>
      {/* Dynamic Glow Background */}
      <div className={`
        absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none transition-opacity duration-1000
        ${isComplete ? 'bg-emerald-500/10' : isOpen ? 'bg-amber-500/10' : 'bg-slate-500/5'}
      `} />
      
      {/* Header Section */}
      <div 
        className="relative p-6 md:p-8 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-6">
          {/* Icon Badge - RPG Style */}
          <div className={`
            relative shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500
            ${isComplete 
              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
              : isOpen 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                : 'bg-slate-800/50 border-slate-700 text-slate-500 group-hover:border-slate-600'}
          `}>
            {isComplete ? <CheckCircle size={32} /> : <Scroll size={32} />}
            
            {/* Animated Ring for open state */}
            {isOpen && !isComplete && (
              <div className="absolute inset-[-4px] border border-amber-500/20 rounded-[20px] animate-pulse" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`
                inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                ${isComplete 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-slate-800 text-slate-400 border-slate-700'}
              `}>
                <MapPin size={10} /> {quest.zone}
              </span>
              {isComplete && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest">
                  Terminée
                </span>
              )}
            </div>
            
            <h3 className={`
              text-xl md:text-3xl font-black tracking-tight transition-all duration-300
              ${isComplete ? 'text-emerald-400' : isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}
            `}>
              {quest.title}
            </h3>
          </div>

          <div className={`
            hidden sm:flex flex-col items-end gap-1 px-4 py-2 rounded-2xl transition-all duration-300
            ${isOpen ? 'bg-amber-500/10 text-amber-500' : 'text-slate-600'}
          `}>
            <div className="text-[10px] font-black uppercase tracking-tighter opacity-60">Progression</div>
            <div className="text-xl font-black font-mono leading-none">{progressPercentage}%</div>
          </div>

          <div className={`
            p-3 rounded-xl transition-all duration-300
            ${isOpen ? 'bg-amber-500 text-slate-900 shadow-lg' : 'bg-slate-800 text-slate-500 hover:text-slate-300'}
          `}>
            <ChevronDown size={24} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
        
        {/* Sleek Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-600 to-amber-400'}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-4 fade-in duration-500">
          
          {/* Quick Info Grid */}
          <div className="px-8 py-10 bg-slate-950/40 border-b border-slate-800/50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* XP / Gold / Rewards - Refined Design */}
            {(quest.gold || quest.rewards.length > 0) && (
              <div className="relative group/reward overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 flex items-start gap-4 transition-all hover:bg-emerald-500/10">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/reward:opacity-10 transition-opacity">
                  <Trophy size={80} />
                </div>
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 ring-1 ring-emerald-500/20">
                  <Trophy size={24} />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="text-[11px] font-black text-emerald-500/80 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    Butin & Récompenses <Sparkles size={12} />
                  </div>
                  <div className="space-y-3">
                    {quest.gold && (
                      <div className="flex items-center gap-3 text-base font-black text-amber-100 bg-amber-900/20 px-3 py-2 rounded-xl border border-amber-500/20 w-fit">
                        <Coins size={18} className="text-amber-400"/> 
                        <span>{quest.gold} <span className="text-[10px] text-amber-500/60 uppercase ml-1">Or</span></span>
                      </div>
                    )}
                    <div className="space-y-2">
                      {quest.rewards.map((r, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-200 bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Prerequisites - Refined Design */}
            {quest.prerequisites.length > 0 && (
              <div className="relative group/req overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-rose-500/5 to-transparent border border-rose-500/10 flex items-start gap-4 transition-all hover:bg-rose-500/10">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/req:opacity-10 transition-opacity">
                  <Shield size={80} />
                </div>
                <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500 ring-1 ring-rose-500/20">
                  <Shield size={24} />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="text-[11px] font-black text-rose-500/80 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    Conditions Requises <Flame size={12} />
                  </div>
                  <ul className="space-y-2">
                    {quest.prerequisites.map((req, i) => (
                      <li key={i} className="text-sm font-bold text-slate-200 flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                        <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* NPCs Involved - New Section */}
            {quest.npcs && quest.npcs.length > 0 && (
              <div className="relative group/npc overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 flex items-start gap-4 transition-all hover:bg-blue-500/10">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/npc:opacity-10 transition-opacity">
                  <User size={80} />
                </div>
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 ring-1 ring-blue-500/20">
                  <User size={24} />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="text-[11px] font-black text-blue-500/80 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    PNJs Clés <MapPin size={12} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quest.npcs.map((npc, i) => (
                      <span key={i} className="px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-800/50 text-sm font-bold text-slate-200 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {npc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Steps Section */}
          <div className="p-8 md:p-16 relative bg-slate-900/20">
            {/* Center Connection Line */}
            <div className="absolute left-[54px] md:left-[86px] top-12 bottom-12 w-[3px] bg-slate-800 rounded-full shadow-inner">
              <div 
                className="w-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                style={{ height: `${(completedSteps.length / Math.max(1, quest.steps.length)) * 100}%` }}
              />
            </div>

            <div className="space-y-24">
              {processedSteps.map((step, idx) => {
                const isStepComplete = completedSteps.includes(idx);
                const isNext = !isStepComplete && (idx === 0 || completedSteps.includes(idx - 1));

                return (
                  <div key={idx} className={`relative flex gap-10 md:gap-16 group ${isStepComplete ? 'opacity-50' : ''}`}>
                    
                    {/* Step Orb */}
                    <div className="relative z-10 shrink-0">
                      <button 
                        onClick={() => toggleStep(idx)}
                        className={`
                          w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border-2 transform rotate-45 transition-all duration-500 shadow-2xl
                          ${isStepComplete 
                            ? 'bg-emerald-500 border-emerald-400 text-slate-900' 
                            : isNext 
                              ? 'bg-amber-500 border-white text-slate-900 scale-110 shadow-amber-500/40' 
                              : 'bg-slate-900 border-slate-700 text-slate-500'}
                        `}>
                        <div className="-rotate-45 font-black text-xl md:text-3xl">
                          {isStepComplete ? <CheckCircle size={32} /> : idx + 1}
                        </div>
                        {isNext && (
                          <div className="absolute inset-0 rounded-2xl border-4 border-white/30 animate-ping" />
                        )}
                      </button>
                    </div>

                    {/* Step Card */}
                    <div className={`
                      flex-1 min-w-0 rounded-[40px] p-8 md:p-12 transition-all duration-500 border-2
                      ${isNext 
                        ? 'bg-slate-800/80 border-amber-500/50 shadow-2xl shadow-amber-500/10' 
                        : isStepComplete 
                          ? 'bg-slate-900/20 border-slate-800'
                          : 'bg-slate-900/40 border-slate-800'}
                    `}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div className="flex items-center gap-4">
                          {isNext && <Zap size={24} className="text-amber-500 animate-pulse" />}
                          <h4 className={`text-2xl md:text-4xl font-black tracking-tight ${isStepComplete ? 'text-slate-500 line-through' : isNext ? 'text-white' : 'text-slate-300'}`}>
                            {step.title}
                          </h4>
                        </div>
                        
                        {step.images.length > 0 && (
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-950 px-5 py-2 rounded-full border border-slate-800 shadow-inner">
                            <ImageIcon size={14} /> {step.images.length} ARCHIVE{step.images.length > 1 ? 'S' : ''}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className={`${step.images.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                           <div 
                            className={`
                              prose prose-invert prose-lg max-w-none 
                              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                              prose-strong:text-amber-200 prose-strong:font-black
                              prose-li:text-slate-300 prose-ul:my-6
                              prose-b:text-amber-200
                            `}
                            onClick={handleContentClick}
                            dangerouslySetInnerHTML={{ __html: step.description }} 
                          />
                        </div>

                        {step.images.length > 0 && (
                          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                            {step.images.map((img, i) => (
                              <div 
                                key={i}
                                onClick={() => setModalData({ images: step.images, index: i })}
                                className="group/img relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 cursor-zoom-in hover:border-amber-500/50 transition-all shadow-xl"
                              >
                                <img src={img} alt="" className="w-full h-full object-cover opacity-70 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                                  <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
                                    <Maximize2 size={14} /> Agrandir l'image
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-800/50 flex justify-end">
                        <button
                          onClick={() => toggleStep(idx)}
                          className={`
                            flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg
                            ${isStepComplete 
                              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white' 
                              : 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-amber-500/20 active:scale-95'}
                          `}>
                          {isStepComplete ? 'Inachevé' : 'Terminer l\'étape'}
                          {!isStepComplete && <ArrowRight size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Contribution Footer */}
          {quest.credits && quest.credits.length > 0 && (
             <div className="bg-slate-950 py-8 text-center border-t border-slate-800">
               <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] mb-4">Crédits & Contributions</div>
               <div className="flex flex-wrap justify-center gap-3">
                 {quest.credits.map((c, i) => (
                   <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-500">{c}</span>
                 ))}
               </div>
             </div>
          )}
        </div>
      )}

      {/* Feedback Toast */}
      {copyStatus && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-8 py-4 rounded-2xl font-black shadow-[0_20px_50px_rgba(6,182,212,0.3)] animate-in slide-in-from-bottom-10 fade-in z-[110] flex items-center gap-4 border-2 border-white/20">
          <div className="p-2 bg-white/20 rounded-lg"><Copy size={20} /></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase opacity-70 leading-none mb-1">Coordonnées copiées</span>
            <span className="text-sm font-mono tracking-wider">{copyStatus}</span>
          </div>
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
