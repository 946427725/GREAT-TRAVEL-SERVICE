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
    <footer className="bg-primary border-t border-white/5 pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10 transition-transform duration-500 group-hover:rotate-[360deg]">
                <img 
                  src="https://i.postimg.cc/GtVKhqLL/logo.jpg" 
                  alt="GTS Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter">
                GTS <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-secondary/40 text-sm leading-relaxed mb-10 font-light max-w-xs">
              <TranslatedText>{t.footer.about}</TranslatedText>
            </p>
            <div className="flex gap-5">
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
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-secondary/60 hover:text-accent hover:border-accent/30 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-secondary/30">
              <TranslatedText>{t.footer.services}</TranslatedText>
            </h4>
            <ul className="space-y-5 text-secondary/50 text-sm font-medium">
              {['hotels', 'flights', 'visas', 'transfers'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                    <TranslatedText>{t.footer.serviceItems[item as keyof typeof t.footer.serviceItems]}</TranslatedText>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-secondary/30">
              <TranslatedText>{t.footer.company}</TranslatedText>
            </h4>
            <ul className="space-y-5 text-secondary/50 text-sm font-medium">
              {[
                { key: 'about', href: '#about' },
                { key: 'deals', href: '#deals' },
                { key: 'contact', href: '#contact' },
                { key: 'privacy', href: '#' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                    <TranslatedText>{t.footer.companyItems[item.key as keyof typeof t.footer.companyItems]}</TranslatedText>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-secondary/30">
              <TranslatedText>{t.footer.newsletter}</TranslatedText>
            </h4>
            <p className="text-secondary/40 text-sm mb-8 font-light leading-relaxed">
              <TranslatedText>{t.footer.newsletterDesc}</TranslatedText>
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 placeholder:text-white/10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-accent/20">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/20 font-bold">
            © {currentYear} GREAT TRAVEL SERVICE. <TranslatedText>{t.footer.rights}</TranslatedText>
          </p>
          <div className="flex items-center gap-8">
             <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/20 flex items-center gap-2 font-bold">
               <TranslatedText>{t.footer.designedFor}</TranslatedText> <TranslatedText className="text-accent">{t.footer.luxury}</TranslatedText>
             </p>
             <button 
               onClick={scrollToTop}
               className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary/40 hover:text-accent hover:border-accent transition-all duration-300"
             >
               <ArrowUpRight className="w-4 h-4 -rotate-45" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
