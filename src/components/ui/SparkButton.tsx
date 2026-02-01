import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SparkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const SparkButton: React.FC<SparkButtonProps> = ({ children, onClick, color = "#f59e0b", className = "", ...props }) => {
  const [sparks, setSparks] = useState<{id: number, x: number, y: number, angle: number}[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disabled) return;
    
    // Get click position relative to button center for a nice radial burst from center or click?
    // Let's do click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      x, 
      y,
      angle: (i / 12) * 360 + Math.random() * 30
    }));

    setSparks(prev => [...prev, ...newSparks]);
    
    // Cleanup
    setTimeout(() => {
        setSparks(prev => prev.filter(s => !newSparks.includes(s))); // Simple cleanup logic
    }, 700);

    if (onClick) onClick(e);
  };

  return (
    <button className={`relative overflow-visible ${className}`} onClick={handleClick} {...props}>
      {children}
      <AnimatePresence>
        {sparks.map(spark => (
           <motion.div
             key={spark.id}
             initial={{ x: spark.x, y: spark.y, opacity: 1, scale: 0.8 }}
             animate={{ 
                 x: spark.x + Math.cos(spark.angle * Math.PI / 180) * 30, 
                 y: spark.y + Math.sin(spark.angle * Math.PI / 180) * 30, 
                 opacity: 0, 
                 scale: 0 
             }}
             transition={{ duration: 0.4, ease: "easeOut" }}
             className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
             style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
           />
        ))}
      </AnimatePresence>
    </button>
  );
};

export default SparkButton;