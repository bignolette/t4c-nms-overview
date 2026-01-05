import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MONSTERS = [
  'Agmorkian 001_4K.png', 'Atrocity Boss 001_4K.png', 'Baltazar 001_4K.png', 'Beholder 001_4K.png',
  'Cerberus 001_4K.png', 'Dark Dragon Green 001_4K.png', 'Demon 001_4K.png', 'Draconian 001_4K.png',
  'Ghost 001_4K.png', 'Golem 001_4K.png', 'Kraaniana 001_4K.png', 'Lich 001_4K.png',
  'Minotaur 001_4K.png', 'Pegasus 001_4K.png', 'Skeleton King 001_4K.png', 'Unicorn 001_4K.png',
  'Taunting Horror 001_4K.png', 'Skeleton 001_4K.png', 'Scorpion 001_4K.png', 'Morg 001_4K.png'
];

const MonsterBackground = () => {
  const [currentMonster, setCurrentMonster] = useState(() => 
    MONSTERS[Math.floor(Math.random() * MONSTERS.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonster(prev => {
        let next;
        do {
          next = MONSTERS[Math.floor(Math.random() * MONSTERS.length)];
        } while (next === prev);
        return next;
      });
    }, 10000); // 10 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-[5] flex items-center justify-center p-8 md:p-24">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentMonster}
          src={`/t4c-nms-overview/img/monstres/${currentMonster}`}
          alt=""
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(30px) saturate(0.5)' }}
          animate={{ opacity: 0.5, scale: 1, filter: 'blur(0px) saturate(1.6)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(30px) saturate(0.5)' }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="w-auto h-auto max-w-full max-h-full object-contain brightness-110 contrast-125 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        />
      </AnimatePresence>
    </div>
  );
};

export default MonsterBackground;