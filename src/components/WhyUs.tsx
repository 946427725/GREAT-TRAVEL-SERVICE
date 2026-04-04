import { motion } from 'motion/react';
import { Shield, Zap, Globe, Star } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t.whyUs.items[0].title,
      desc: t.whyUs.items[0].desc,
    },
    {
      icon: Zap,
      title: t.whyUs.items[1].title,
      desc: t.whyUs.items[1].desc,
    },
    {
      icon: Globe,
      title: t.whyUs.items[2].title,
      desc: t.whyUs.items[2].desc,
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-6">
              <TranslatedText>{t.whyUs.badge}</TranslatedText>
            </span>
            <h2 className="text-3xl md:text-8xl font-serif text-white leading-tight mb-8 md:mb-12">
              <TranslatedText>{t.whyUs.title}</TranslatedText> <br />
              <span className="italic text-gold"><TranslatedText>{t.whyUs.titleAccent}</TranslatedText></span>
            </h2>

            <div className="space-y-8 md:space-y-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 md:gap-8 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 md:mb-3 group-hover:text-accent transition-colors">
                      <TranslatedText>{feature.title}</TranslatedText>
                    </h3>
                    <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md">
                      <TranslatedText>{feature.desc}</TranslatedText>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000" 
                alt={t.whyUs.imgAlt}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            </motion.div>

            {/* Floating Review Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-[240px] md:max-w-xs"
            >
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-primary font-serif italic text-base md:text-lg mb-3 md:mb-4">
                "<TranslatedText>{t.whyUs.quote}</TranslatedText>"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20" />
                <div>
                  <p className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest">
                    <TranslatedText>{t.whyUs.author}</TranslatedText>
                  </p>
                  <p className="text-primary/40 text-[8px] md:text-[10px] uppercase tracking-widest">
                    <TranslatedText>{t.whyUs.authorTitle}</TranslatedText>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
