export const formatRewards = (html: string): string => {
  if (!html) return html;

  const rewardPattern = /(?:<p>|<br\s*\/?>|<li>|^)\s*(?:<u>|<b>|<strong>)?\s*(Récompense|Gain|Butin)\s*[:!]\s*(.*?)(?:<\/p>|<br\s*\/?>|<\/li>|$)/gi;

  return html.replace(rewardPattern, (_match, type, content) => {
    return `
      <div class="my-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 shadow-lg animate-in fade-in slide-in-from-right-2 duration-300">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-emerald-500">🏆</span>
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">${type}</span>
        </div>
        <div class="text-base font-bold text-slate-100 flex flex-wrap gap-2">
          ${content}
        </div>
      </div>
    `;
  });
};

export const formatAttention = (html: string): string => {
  if (!html) return html;

  // Pattern to find "Attention", "Important", or "Note" at the start of a paragraph or after a break
  // Also handles "<u>ATTENTION</u>", "<b>Attention</b>", etc.
  const attentionPattern = /(?:<p>|<br\s*\/?>|<li>|^)\s*(?:<u>|<b>|<strong>)?\s*(Attention|IMPORTANT|Note|Remarque|Tip|<u>ATTENTION<\/u>)\s*(?:#\d+)?\s*[:!]\s*(.*?)(?:<\/p>|<br\s*\/?>|<\/li>|$)/gi;

  return html.replace(attentionPattern, (_match, type, content) => {
    const icon = type.toLowerCase().includes('attention') ? '⚠️' : 'ℹ️';
    const bgColor = type.toLowerCase().includes('attention') ? 'bg-rose-500/10' : 'bg-blue-500/10';
    const borderColor = type.toLowerCase().includes('attention') ? 'border-rose-500/30' : 'border-blue-500/30';
    const textColor = type.toLowerCase().includes('attention') ? 'text-rose-300' : 'text-blue-300';
    const titleColor = type.toLowerCase().includes('attention') ? 'text-rose-500' : 'text-blue-500';

    return `
      <div class="my-6 p-4 rounded-xl border-l-4 ${bgColor} ${borderColor} shadow-lg animate-in fade-in slide-in-from-left-2 duration-300">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-lg">${icon}</span>
          <span class="text-[10px] font-black uppercase tracking-[0.2em] ${titleColor}">${type}</span>
        </div>
        <div class="text-sm font-medium ${textColor} leading-relaxed italic">
          ${content}
        </div>
      </div>
    `;
  });
};

export const highlightKeywords = (html: string): string => {
  if (!html) return html;

  let processed = html;
  
  // 1. Remove existing keyword spans to start clean
  processed = processed.replace(/<span class=['"]npc-keyword['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-amber-500['"]>(.*?)<\/span>/gi, '$1');
  processed = processed.replace(/<span class=['"]text-slate-100 font-bold['"]>(.*?)<\/span>/gi, '$1');

  // 2. Bold triggers without quotes: "Vous avez dit : <b>Keyword</b>"
  processed = processed.replace(/Vous avez dit\s*:\s*<(b|strong)>([^<]+)<\/\1>/gi, (_match, _tag, text) => {
    return `Vous avez dit : <span class='npc-keyword'><span class='text-amber-500'>"</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>"</span></span>`;
  });

  // 3. Quoted triggers
  const triggerPattern = /(parlez(?:[- ]lui)?|dites(?:[- ](?:lui|directement|une (?:derni[èe]re )?fois))?|r[ée]pondez(?:[- ]lui)?|r[ée]pondre|dire|mots?[- ]cl[ée]s?|demandez(?:[- ]lui)?|tapez|entrez|prononcez|puis|ou(?: (?:simplement|m[êe]me|encore))?)\s*[:,-]?\s*((?:[«"“][^"»”]+[»"”][\s,:;-]*(?:\b(?:ou|et|soit|sinon|simplement|m[êe]me|bien|alors|puis|encore)\b[\s,:;-]*)*)+)/gi;

  return processed.replace(triggerPattern, (_match, trigger, content) => {
    const styledContent = content.replace(/([«"“])([^"»”]+)([»"”])/g, (_m: string, q1: string, text: string, q2: string) => {
      return `<span class='npc-keyword'><span class='text-amber-500'>${q1}</span><span class='text-slate-100 font-bold'>${text}</span><span class='text-amber-500'>${q2}</span></span>`;
    });

    return `${trigger} ${styledContent}`;
  });
};

export const cleanTitle = (title: string): string => {
  if (!title) return title;
  return title.replace(/^-\d*\s*/, '');
};

export const cleanHtml = (html: string): string => {
  if (!html) return html;
  let cleaned = html;

  cleaned = cleaned.replace(/<\/?(?:big|small|font|center|div|style)[^>]*>/gi, '');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])\s+[^>]+>/gi, '<$1>');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');
  cleaned = cleaned.replace(/<(p|b|i|strong|em|u|h[1-6])>\s*(?:&nbsp;)*\s*<\/\1>/gi, '');

  return cleaned.trim();
};

export const formatLists = (html: string): string => {
  if (!html) return html;
  
  let text = html.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/p>/gi, '</p>\n');

  const listPattern = /(?:^|\n)\s*-\s+(.+)/g;
  if (!text.match(listPattern)) return html;

  text = text.replace(listPattern, (match, content) => {
    const prefix = match.startsWith('\n') ? '\n' : '';
    return `${prefix}<li>${content}</li>`;
  });

  text = text.replace(/((?:<li>.+<\/li>\s*)+)/g, '<ul class="list-disc pl-6 space-y-1 my-3 text-slate-300 marker:text-amber-500">$1</ul>');
  text = text.replace(/\n/g, '<br />');

  return text;
};
