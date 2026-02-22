import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

interface ScrollProgressProps {
  scrollRef: RefObject<HTMLDivElement>;
}

const ScrollProgress = ({ scrollRef }: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [scrollRef]);

  if (progress <= 0) return null;

  return (
    <div className="sticky top-0 z-30 h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
