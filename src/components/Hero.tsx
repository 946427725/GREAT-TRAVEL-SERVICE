import { motion } from 'motion/react';
import { ArrowRight, Plane } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Beach"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
      </div>

      {/* Animated Flight Paths (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-20">
        <motion.path
          d="M -100 800 Q 400 200 1200 600"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M 1500 100 Q 800 600 0 300"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] text-gold">
            <TranslatedText>{t.hero.badge}</TranslatedText>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight"
        >
          <TranslatedText>{t.hero.title}</TranslatedText> <br />
          <TranslatedText className="text-accent italic">{t.hero.titleAccent}</TranslatedText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary/70 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          <TranslatedText>{t.hero.subtext}</TranslatedText>
          <br />
          <TranslatedText>{t.hero.subtext2}</TranslatedText>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-accent text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 inline-block"
          >
            <span className="relative z-10 font-medium flex items-center gap-2">
              <TranslatedText>{t.hero.ctaSelection}</TranslatedText> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a 
            href="#deals"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-sm transition-all inline-block"
          >
            <TranslatedText>{t.hero.ctaDeals}</TranslatedText>
          </a>
        </motion.div>
      </div>

      {/* Floating Airplane Animation */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 left-10 opacity-10 hidden lg:block"
      >
        <Plane size={120} />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <TranslatedText className="text-[10px] uppercase tracking-widest opacity-50">{t.hero.scroll}</TranslatedText>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
