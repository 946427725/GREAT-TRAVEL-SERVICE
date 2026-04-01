import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe, Instagram, Send, Facebook } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../lib/LanguageContext';
import { Language } from '../lib/translations';
import TranslatedText from './TranslatedText';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.deals, href: '#deals' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: Language[] = ['UZ', 'RU', 'EN'];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10">
             <img 
               src="https://i.postimg.cc/GtVKhqLL/logo.jpg" 
               alt="GTS Logo" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <span className="text-xl font-serif font-bold tracking-tighter">
            GTS <span className="text-accent">.</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={`${link.href}-${i}`}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
            >
              <TranslatedText>{link.name}</TranslatedText>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1 relative group">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  "relative z-10 px-4 py-1.5 text-[11px] font-bold tracking-widest transition-all duration-500 rounded-full",
                  language === lang ? "text-white" : "text-[#888] hover:text-white hover:scale-105"
                )}
              >
                <span className="relative z-10">{lang}</span>
                {language === lang && (
                  <motion.div
                    layoutId="activeLanguage"
                    className="absolute inset-0 bg-gradient-to-r from-accent/40 to-accent/60 border border-accent/30 rounded-full shadow-[0_0_20px_rgba(229,57,53,0.2),inset_0_0_10px_rgba(255,255,255,0.1)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.a
            href="tel:+998909964343"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all group"
          >
            <Phone className="w-4 h-4 text-accent group-hover:animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider">+998 90 996-43-43</span>
          </motion.a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Mobile Language Switcher */}
              <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5 mb-8 relative">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      "relative z-10 px-6 py-3 text-sm font-bold tracking-widest transition-all duration-500 rounded-full",
                      language === lang ? "text-white" : "text-[#888] hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{lang}</span>
                    {language === lang && (
                      <motion.div
                        layoutId="activeLanguageMobile"
                        className="absolute inset-0 bg-gradient-to-r from-accent/40 to-accent/60 border border-accent/30 rounded-full shadow-[0_0_20px_rgba(229,57,53,0.2),inset_0_0_10px_rgba(255,255,255,0.1)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif hover:text-accent transition-colors"
                >
                  <TranslatedText>{link.name}</TranslatedText>
                </motion.a>
              ))}

              <motion.a
                href="tel:+998909964343"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center gap-3 bg-accent px-8 py-4 rounded-full text-white font-bold uppercase tracking-widest text-sm"
              >
                <Phone className="w-5 h-5" />
                <TranslatedText>{t.nav.call}</TranslatedText>
              </motion.a>

              <div className="flex gap-6 mt-12">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/greattravelservice/' },
                  { icon: Send, href: 'https://t.me/greattravelservice' },
                  { icon: Facebook, href: 'https://www.facebook.com/greattravelservice/' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
