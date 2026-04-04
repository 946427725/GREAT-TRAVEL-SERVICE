import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-40 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 relative min-h-[300px] md:min-h-[600px] shadow-2xl group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d386.8826628516235!2d69.2215392913369!3d41.263896047335216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzUwLjIiTiA2OcKwMTMnMTguMiJF!5e0!3m2!1sru!2s!4v1775311981525!5m2!1sru!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-[50px] rounded-full" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-5xl font-serif text-white mb-8 md:mb-12 leading-tight">
                <TranslatedText>{t.location.title}</TranslatedText> <br />
                <span className="italic text-accent"><TranslatedText>{t.location.titleAccent}</TranslatedText></span>
              </h3>
              
              <div className="space-y-8 md:space-y-12">
                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-2 md:mb-3"><TranslatedText>{t.location.address}</TranslatedText></p>
                    <p className="text-white text-sm md:text-base font-light leading-relaxed max-w-[200px]">
                      <TranslatedText>{t.location.addressVal}</TranslatedText>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-2 md:mb-3"><TranslatedText>{t.location.hours}</TranslatedText></p>
                    <div className="text-white text-sm md:text-base space-y-2 font-light">
                      <p><TranslatedText>{t.location.monSat}</TranslatedText></p>
                      <p className="text-white/20 italic text-[10px] md:text-xs"><TranslatedText>{t.location.break}</TranslatedText></p>
                      <p className="text-accent font-bold"><TranslatedText>{t.location.sunday}</TranslatedText></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=41.263896,69.221539"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 md:mt-16 w-full group relative py-4 md:py-6 bg-accent text-white rounded-xl md:rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-2xl"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">
                <TranslatedText>{t.location.directions}</TranslatedText>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
