import { motion } from 'motion/react';
import { ArrowRight, Plane } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

const FlightPaths = () => {
  const paths = [
    { d: "M-100,200 Q400,50 900,300 T1500,100", duration: 8, delay: 0 },
    { d: "M-200,500 Q300,200 800,600 T1600,400", duration: 10, delay: 2 },
    { d: "M1400,800 Q900,400 400,700 T-200,300", duration: 12, delay: 1 },
    { d: "M1600,100 Q1000,500 400,200 T-100,600", duration: 9, delay: 3 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {paths.map((path, i) => (
          <g key={i}>
            <motion.path
              d={path.d}
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.g
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path("${path.d}")`,
                offsetRotate: "auto",
              }}
            >
              <Plane className="w-4 h-4 text-accent fill-accent rotate-90" />
            </motion.g>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      {/* Background with subtle motion */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
          alt={t.hero.imgAlt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/40 to-primary" />
      </div>

      {/* Flight Paths Overlay */}
      <FlightPaths />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] inline-block mb-4">
            <TranslatedText>{t.hero.badge}</TranslatedText>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight text-white">
            <TranslatedText>{t.hero.title}</TranslatedText> <br />
            <span className="italic text-gold drop-shadow-2xl">
              <TranslatedText>{t.hero.titleAccent}</TranslatedText>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-2xl text-white/60 mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4 md:px-0"
        >
          <TranslatedText>{t.hero.subtext2}</TranslatedText>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto sm:max-w-none"
        >
          <a 
            href="#contact"
            className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-accent text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(229,57,53,0.3)] flex items-center justify-center"
          >
            <span className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-3">
              <TranslatedText>{t.hero.ctaSelection}</TranslatedText> <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          
          <a 
            href="#deals"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent hover:bg-white/5 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center"
          >
            <TranslatedText>{t.hero.ctaDeals}</TranslatedText>
          </a>
        </motion.div>
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.8em] text-white/30 font-bold">
          <TranslatedText>{t.hero.scroll}</TranslatedText>
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
