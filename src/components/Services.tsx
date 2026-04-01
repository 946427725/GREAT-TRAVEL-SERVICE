import { motion, AnimatePresence } from 'motion/react';
import { Hotel, Plane, ShieldCheck, Car } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useLanguage();

  const services = [
    {
      id: 'hotels',
      title: t.services.hotels.title,
      icon: Hotel,
      description: t.services.hotels.desc,
      details: t.services.hotels.details,
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(96,165,250,0.3)]'
    },
    {
      id: 'flights',
      title: t.services.flights.title,
      icon: Plane,
      description: t.services.flights.desc,
      details: t.services.flights.details,
      color: 'bg-accent/10',
      iconColor: 'text-accent',
      glow: 'shadow-[0_0_30px_-10px_rgba(229,57,53,0.3)]'
    },
    {
      id: 'visas',
      title: t.services.visas.title,
      icon: ShieldCheck,
      description: t.services.visas.desc,
      details: t.services.visas.details,
      color: 'bg-green-500/10',
      iconColor: 'text-green-400',
      glow: 'shadow-[0_0_30px_-10px_rgba(74,222,128,0.3)]'
    },
    {
      id: 'transfers',
      title: t.services.transfers.title,
      icon: Car,
      description: t.services.transfers.desc,
      details: t.services.transfers.details,
      color: 'bg-gold/10',
      iconColor: 'text-gold',
      glow: 'shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-primary relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            <TranslatedText>{t.services.badge}</TranslatedText>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif mt-4"
          >
            <TranslatedText>{t.services.title}</TranslatedText>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
              className={cn(
                "glass p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 group relative overflow-hidden border border-white/5",
                expandedId === service.id ? "lg:col-span-2 ring-1 ring-accent/30" : "hover:border-accent/20",
                service.glow
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110", 
                service.color
              )}>
                <service.icon className={cn("w-8 h-8", service.iconColor)} />
              </div>

              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">
                <TranslatedText>{service.title}</TranslatedText>
              </h3>
              <p className="text-secondary/50 text-sm leading-relaxed mb-6 font-light">
                <TranslatedText>{service.description}</TranslatedText>
              </p>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-6 border-t border-white/5"
                  >
                    <p className="text-secondary/80 text-sm italic leading-relaxed">
                      <TranslatedText>{service.details}</TranslatedText>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-accent mt-4">
                <span className="group-hover:mr-2 transition-all">
                  <TranslatedText>{expandedId === service.id ? t.services.showLess : t.services.learnMore}</TranslatedText>
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </div>
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
