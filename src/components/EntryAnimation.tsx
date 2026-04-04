import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function EntryAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // Draw path
    const timer2 = setTimeout(() => setStep(2), 3000); // Reveal logo
    const timer3 = setTimeout(() => setStep(3), 5000); // Reveal text
    const timer4 = setTimeout(() => onComplete(), 7500); // Finish

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-primary flex items-center justify-center overflow-hidden">
      {/* Flight Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <motion.path
          d="M -100 800 Q 400 200 1200 600"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: step >= 1 ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Plane following path */}
        {step >= 1 && (
          <motion.circle
            r="4"
            fill="#E53935"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            style={{ offsetPath: "path('M -100 800 Q 400 200 1200 600')" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(229,57,53,0.5)]">
                <Globe className="text-white w-10 h-10" />
              </div>
              <h1 className="text-4xl font-serif font-bold tracking-tighter text-white">
                GTS <span className="text-accent">.</span>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-secondary/60 font-serif italic text-xl tracking-widest"
            >
              <TranslatedText>{t.footer.entry}</TranslatedText>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-gold/5 pointer-events-none"
      />
    </div>
  );
}
