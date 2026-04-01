import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-7xl font-serif font-bold text-accent drop-shadow-[0_0_15px_rgba(229,57,53,0.3)]">
      {count}<TranslatedText>{suffix}</TranslatedText>
    </span>
  );
}

export default function TrustBlock() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = [
    { label: t.trust.stats.since, value: 2013, suffix: '' },
    { label: t.trust.stats.tourists, value: 1000, suffix: t.trust.stats.suffixTourists },
    { label: t.trust.stats.selection, value: 5, suffix: t.trust.stats.suffixMin },
    { label: t.trust.stats.deals, value: 24, suffix: t.trust.stats.suffixDeals },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 bg-primary relative overflow-hidden">
      {/* Background Text Parallax */}
      <motion.div 
        style={{ x, opacity }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none select-none"
      >
        <span className="text-[25vw] font-serif font-bold uppercase tracking-tighter">Great Travel Service GTS</span>
      </motion.div>

      {/* Floating Accents */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold"
            >
              <TranslatedText>{t.trust.badge}</TranslatedText>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-serif mt-4 mb-8 leading-tight"
            >
              <TranslatedText>{t.trust.title}</TranslatedText> <br />
              <TranslatedText className="italic text-gold">{t.trust.titleAccent}</TranslatedText>
            </motion.h2>
            <p className="text-secondary/50 leading-relaxed max-w-lg mb-12 font-light text-lg">
              <TranslatedText>{t.trust.desc}</TranslatedText>
            </p>

            <div className="grid grid-cols-2 gap-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/30 mt-3 font-bold">
                    <TranslatedText>{stat.label}</TranslatedText>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative group">
             <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8 }}
               className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl"
             >
               <img 
                 src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000" 
                 alt="Luxury Resort"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
             </motion.div>
             
             {/* Floating Badge */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] hidden md:block shadow-xl border border-white/10"
             >
               <p className="text-accent font-serif text-5xl italic mb-1">100%</p>
               <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
                 <TranslatedText>{t.trust.satisfaction}</TranslatedText>
               </p>
             </motion.div>

             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
