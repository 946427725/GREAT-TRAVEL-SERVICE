import { motion } from 'motion/react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function UzbekistanTours() {
  const { t } = useLanguage();

  return (
    <section id="uzbekistan" className="bg-primary py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-6"
            >
              <TranslatedText>{t.uzbekistan.badge}</TranslatedText>
            </motion.span>
            
            <div className="relative inline-block">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6"
              >
                <TranslatedText>{t.uzbekistan.title}</TranslatedText>{' '}
                <span className="italic text-gold"><TranslatedText>{t.uzbekistan.titleAccent}</TranslatedText></span>
              </motion.h2>
              
              {/* Animated Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-accent to-transparent absolute -bottom-2 left-0"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl font-light mt-8 max-w-2xl"
            >
              <TranslatedText>{t.uzbekistan.subtitle}</TranslatedText>
            </motion.p>
          </div>

          {/* Trust Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-white font-serif text-xl leading-none mb-1">
                <TranslatedText>{t.uzbekistan.trust}</TranslatedText>
              </p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Trusted Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {t.uzbekistan.tours.map((tour, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-white/5 bg-white/5">
                {/* Image with Zoom Effect */}
                <img 
                  src={tour.img} 
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                      <Clock className="w-4 h-4" />
                      <TranslatedText>{tour.duration}</TranslatedText>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight group-hover:text-accent transition-colors duration-500">
                      <TranslatedText>{tour.name}</TranslatedText>
                    </h3>
                    
                    <p className="text-white/60 text-sm font-light mb-8 line-clamp-2 group-hover:text-white/80 transition-colors duration-500">
                      <TranslatedText>{tour.desc}</TranslatedText>
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Starting Price</p>
                        <p className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500">
                          <TranslatedText>{tour.price}</TranslatedText>
                        </p>
                      </div>
                      
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-bold group/btn"
                      >
                        <TranslatedText>{t.uzbekistan.viewDetails}</TranslatedText>
                        <ArrowRight className="w-4 h-4 text-accent group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
