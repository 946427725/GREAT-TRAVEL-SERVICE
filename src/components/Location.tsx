import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 bg-primary relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 rounded-[4rem] overflow-hidden border border-white/10 relative min-h-[500px] shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7901690006506!2d69.2469774751857!3d41.26990440327548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a84fda899dd%3A0xa12eb495ab29dda!2z0Y3RgtCw0LYgMSwgS2ljaGlrIFhhbHFhIFlvJ2xpIDIwLCAxMDAwMjIsINCi0L5zaGtlbnQsIFRvc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1775059849142!5m2!1sru!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[4rem] flex flex-col justify-between border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 blur-[50px] rounded-full" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-serif mb-10 leading-tight">
                <TranslatedText>{t.location.title}</TranslatedText> <br />
                <TranslatedText className="italic text-accent">{t.location.titleAccent}</TranslatedText>
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <TranslatedText className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">{t.location.address}</TranslatedText>
                    <p className="text-sm font-medium leading-relaxed">
                      <TranslatedText>{t.location.addressVal}</TranslatedText>
                    </p>
                  </div>
                </div>

                <a href="tel:+998909964343" className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 relative">
                    <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    <div className="absolute inset-0 rounded-2xl bg-accent/20 animate-ping pointer-events-none" />
                  </div>
                  <div>
                    <TranslatedText className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">{t.location.phone}</TranslatedText>
                    <p className="text-lg font-serif font-bold group-hover:text-accent transition-colors">+998 90 996-43-43</p>
                  </div>
                </a>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Clock className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <TranslatedText className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2">{t.location.hours}</TranslatedText>
                    <div className="text-sm space-y-2 font-medium">
                      <p><TranslatedText>{t.location.monSat}</TranslatedText></p>
                      <p className="text-white/30 italic text-xs"><TranslatedText>{t.location.break}</TranslatedText></p>
                      <TranslatedText className="text-accent font-bold">{t.location.sunday}</TranslatedText>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-12 w-full group relative py-5 bg-white/5 border border-white/10 text-white rounded-2xl overflow-hidden transition-all hover:bg-accent hover:border-accent hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-[10px]">
                <TranslatedText>{t.location.directions}</TranslatedText>
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
