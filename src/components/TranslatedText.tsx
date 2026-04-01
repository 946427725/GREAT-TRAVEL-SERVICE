import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

interface TranslatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function TranslatedText({ children, className }: TranslatedTextProps) {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={`${language}-${String(children)}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={className}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}
