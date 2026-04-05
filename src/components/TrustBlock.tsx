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

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    { label: t.trust.stats.since, value: 2013, suffix: '' },
    { label: t.trust.stats.tourists, value: 10000, suffix: t.trust.stats.suffixTourists },
    { label: t.trust.stats.selection, value: 5, suffix: t.trust.stats.suffixMin },
  ];

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-40 bg-primary relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-0">
        <motion.h2 
          style={{ x }}
          className="text-[40vw] md:text-[30vw] font-serif font-bold whitespace-nowrap"
        >
          <TranslatedText>{t.trust.bgText}</TranslatedText>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-8"
          >
            <TranslatedText>{t.trust.badge}</TranslatedText>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-9xl font-serif text-white leading-tight max-w-4xl"
          >
            <TranslatedText>{t.trust.title}</TranslatedText> <br />
            <span className="italic text-gold"><TranslatedText>{t.trust.titleAccent}</TranslatedText></span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6 md:mb-8">
                <Counter value={stat.value} suffix={stat.suffix} />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-accent absolute -bottom-4 left-0"
                />
              </div>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold group-hover:text-accent transition-colors duration-500">
                <TranslatedText>{stat.label}</TranslatedText>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Impact Image */}
        <motion.div 
          style={{ scale }}
          className="mt-20 md:mt-40 relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
            alt={t.trust.imgAlt}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-white text-xl md:text-5xl font-serif italic mb-4 md:mb-6 leading-relaxed">
                "<TranslatedText>{t.trust.quote}</TranslatedText>"
              </p>
              <div className="w-12 md:w-20 h-[1px] bg-gold mx-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
