import { motion, useScroll, useTransform } from 'motion/react';
import { Flame, MapPin, Star, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function HotTours() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const tours = t.deals.tours.map((tour, i) => ({
    ...tour,
    id: i + 1,
    image: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    ][i],
    price: ['$1,299', '$899', '$1,450', '$950', '$750'][i],
    rating: 4.9
  }));

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;
    const interval = setInterval(() => {
      if (!isPaused) {
        scrollAmount += step;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'auto'
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="deals" className="py-32 bg-primary overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            <TranslatedText>{t.deals.badge}</TranslatedText>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif mt-4"
          >
            <TranslatedText>{t.deals.title}</TranslatedText> <TranslatedText className="italic text-gold">{t.deals.titleAccent}</TranslatedText>
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
        >
          <Flame className="w-5 h-5 text-accent animate-pulse" />
          <TranslatedText className="text-[10px] font-bold uppercase tracking-widest text-accent">{t.deals.ending}</TranslatedText>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-8 overflow-x-auto pb-16 px-6 scrollbar-hide snap-x relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tours.map((tour, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[320px] md:min-w-[450px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 shadow-2xl border border-white/5">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1.5 bg-accent text-white text-[10px] uppercase tracking-widest rounded-full font-bold shadow-lg">
                  <TranslatedText>{tour.badge}</TranslatedText>
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                  <span className="text-[10px] font-bold text-white/90">{tour.rating}</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-accent transition-colors">
                  <TranslatedText>{tour.title}</TranslatedText>
                </h3>
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-light">
                  <MapPin className="w-3.5 h-3.5" />
                  <TranslatedText>{tour.location}</TranslatedText>
                </div>

                {/* Reveal CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 w-full py-4 bg-white text-primary rounded-2xl font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2"
                >
                  <TranslatedText>{t.deals.book}</TranslatedText> <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="absolute bottom-8 right-8 group-hover:opacity-0 transition-opacity">
                <p className="text-3xl font-serif text-accent drop-shadow-lg">{tour.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
