import { motion } from 'motion/react';
import { Flame, MapPin, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function HotTours() {
  const { t } = useLanguage();

  const tours = t.deals.tours.map((tour, i) => ({
    ...tour,
    id: i + 1,
    image: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      'https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    ][i],
    price: ['$1,299', '$899', '$1,450', '$950', '$750', '$1,100', '$1,350'][i],
    rating: [4.9, 4.8, 5.0, 4.7, 4.9, 4.8, 4.9][i]
  }));

  return (
    <section id="deals" className="bg-primary py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-6"
            >
              <TranslatedText>{t.deals.badge}</TranslatedText>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-7xl lg:text-8xl font-serif text-white leading-tight"
            >
              <TranslatedText>{t.deals.title}</TranslatedText> <br />
              <span className="italic text-gold"><TranslatedText>{t.deals.titleAccent}</TranslatedText></span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-accent/10 border border-accent/20 px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-md w-fit"
          >
            <Flame className="w-5 h-5 md:w-6 md:h-6 text-accent animate-bounce" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent">
              <TranslatedText>{t.deals.ending}</TranslatedText>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {tours.map((tour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 shadow-2xl border border-white/5 bg-white/5">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-700" />
                
                {/* Badges */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-col gap-3">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-accent text-white text-[9px] md:text-[10px] uppercase tracking-widest rounded-full font-bold shadow-xl">
                    <TranslatedText>{tour.badge}</TranslatedText>
                  </span>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full w-max border border-white/10">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-[9px] md:text-[10px] font-bold text-white">{tour.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                  <div className="flex items-center gap-2 text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    <TranslatedText>{tour.location}</TranslatedText>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif text-white mb-4 md:mb-6 group-hover:text-accent transition-colors duration-500 line-clamp-2">
                    <TranslatedText>{tour.title}</TranslatedText>
                  </h3>
                  
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1">
                        <TranslatedText>{t.deals.priceLabel}</TranslatedText>
                      </p>
                      <p className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">{tour.price}</p>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-white transition-all duration-500"
                    >
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-[-45deg] transition-transform duration-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
