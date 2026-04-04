import { Instagram, Facebook, Send, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary pt-20 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-20 md:mb-40">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8 md:mb-12 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10 transition-transform duration-700 group-hover:rotate-[360deg] shadow-2xl">
                <img 
                  src="https://i.postimg.cc/GtVKhqLL/logo.jpg" 
                  alt="GTS Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-white leading-none">
                  GTS <span className="text-accent">.</span>
                </span>
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">
                  <TranslatedText>{t.footer.companyName}</TranslatedText>
                </span>
              </div>
            </div>
            <p className="text-white/30 text-lg md:text-xl font-serif italic leading-relaxed mb-8 md:mb-12 max-w-md">
              <TranslatedText>{t.footer.about}</TranslatedText>
            </p>
            <div className="flex gap-4 md:gap-8">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/greattravelservice/' },
                { icon: Send, href: 'https://t.me/greattravelservice' },
                { icon: Facebook, href: 'https://www.facebook.com/greattravelservice/' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all duration-500 bg-white/5 backdrop-blur-2xl"
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold mb-8 md:mb-12 text-white/20">
              <TranslatedText>{t.footer.services}</TranslatedText>
            </h4>
            <ul className="space-y-4 md:space-y-6 text-white/40 text-sm font-medium">
              {['hotels', 'flights', 'visas', 'transfers'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-accent transition-all duration-500 flex items-center gap-4 group">
                    <span className="w-0 group-hover:w-6 h-[1px] bg-accent transition-all duration-500" />
                    <TranslatedText>{t.footer.serviceItems[item as keyof typeof t.footer.serviceItems]}</TranslatedText>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold mb-8 md:mb-12 text-white/20">
              <TranslatedText>{t.footer.company}</TranslatedText>
            </h4>
            <ul className="space-y-4 md:space-y-6 text-white/40 text-sm font-medium">
              {[
                { key: 'about', href: '#about' },
                { key: 'deals', href: '#deals' },
                { key: 'contact', href: '#contact' },
                { key: 'privacy', href: '#' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="hover:text-accent transition-all duration-500 flex items-center gap-4 group">
                    <span className="w-0 group-hover:w-6 h-[1px] bg-accent transition-all duration-500" />
                    <TranslatedText>{t.footer.companyItems[item.key as keyof typeof t.footer.companyItems]}</TranslatedText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-0 right-0 opacity-[0.02] pointer-events-none select-none overflow-hidden translate-y-1/2">
          <h2 className="text-[40vw] md:text-[30vw] font-serif font-bold whitespace-nowrap text-center">
            <TranslatedText>{t.footer.bgText}</TranslatedText>
          </h2>
        </div>

        <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative z-10">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold text-center md:text-left">
            © {currentYear} <TranslatedText>{t.footer.companyName}</TranslatedText>. <TranslatedText>{t.footer.rights}</TranslatedText>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
             <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 flex items-center gap-3 font-bold text-center">
               <TranslatedText>{t.footer.designedFor}</TranslatedText> <span className="text-accent tracking-[0.6em]"><TranslatedText>{t.footer.luxury}</TranslatedText></span>
             </p>
             <button 
               onClick={scrollToTop}
               className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-accent hover:border-accent transition-all duration-500 hover:scale-110 active:scale-95"
             >
               <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
