import { motion, AnimatePresence } from 'motion/react';
import { Hotel, Plane, ShieldCheck, Car, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'hotels',
      title: t.services.hotels.title,
      icon: Hotel,
      description: t.services.hotels.desc,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600',
    },
    {
      id: 'flights',
      title: t.services.flights.title,
      icon: Plane,
      description: t.services.flights.desc,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1600',
    },
    {
      id: 'visas',
      title: t.services.visas.title,
      icon: ShieldCheck,
      description: t.services.visas.desc,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600',
    },
    {
      id: 'transfers',
      title: t.services.transfers.title,
      icon: Car,
      description: t.services.transfers.desc,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1600',
    }
  ];

  return (
    <section id="services" className="bg-primary py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-6">
            <TranslatedText>{t.services.badge}</TranslatedText>
          </span>
          <h2 className="text-3xl md:text-8xl font-serif text-white leading-tight">
            <TranslatedText>{t.services.title}</TranslatedText>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={cn(
              "group relative min-h-[400px] md:h-[80vh] w-full flex items-center overflow-hidden border-t border-white/5 py-12 md:py-0",
              i === services.length - 1 && "border-b"
            )}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Solid Overlay for Readability - Ensures images are visible but text is clear */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent opacity-80" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center backdrop-blur-md group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <service.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <span className="text-white/10 md:text-white/20 text-4xl md:text-8xl font-serif font-bold">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl md:text-7xl font-serif text-white mb-4 md:mb-6 group-hover:text-accent transition-colors duration-500">
                  <TranslatedText>{service.title}</TranslatedText>
                </h3>
                <p className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-xl">
                  <TranslatedText>{service.description}</TranslatedText>
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500 cursor-pointer self-start md:self-center"
              >
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:rotate-[-45deg] transition-transform duration-500" />
              </motion.div>
            </div>

            {/* Hover Reveal Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
