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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.deals, href: '#deals' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: Language[] = ['UZ', 'RU', 'EN'];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-8',
          isScrolled ? 'bg-primary/95 backdrop-blur-3xl border-b border-white/5 py-5' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://i.postimg.cc/GtVKhqLL/logo.jpg" 
                 alt="GTS Logo" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white leading-none">
                GTS <span className="text-accent">.</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">
                <TranslatedText>{t.nav.logoSubtitle}</TranslatedText>
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation (Visible only on lg+) */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={`${link.href}-${i}`}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all duration-300 relative group"
                >
                  <TranslatedText>{link.name}</TranslatedText>
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Desktop Language Switcher */}
            <div className="flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "relative z-10 px-4 py-2 text-[9px] font-bold tracking-widest transition-all duration-500 rounded-full",
                    language === lang ? "text-white" : "text-white/30 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{lang}</span>
                  {language === lang && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(229,57,53,0.4)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.a
              href={`tel:${t.nav.phone.replace(/\s+/g, '')}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full shadow-[0_0_20px_rgba(229,57,53,0.2)] transition-all group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                <TranslatedText>{t.nav.phone}</TranslatedText>
              </span>
            </motion.a>
          </div>

          {/* Mobile Toggle Button (Visible only below lg) */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-[110] w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                className="w-8 h-0.5 bg-white rounded-full transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay - Moved outside nav for global stacking context */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black lg:hidden flex flex-col w-full h-full"
            style={{ backgroundColor: '#0A0A0A', opacity: 1 }}
          >
            {/* Absolute solid background to block everything */}
            <div className="absolute inset-0 bg-[#0A0A0A] z-[-1]" />

            {/* Subtle Gradient/Glow Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-accent/10 blur-[120px] rounded-full" />
              <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full" />
            </div>

            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between px-6 py-8 relative z-20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10">
                   <img 
                     src="https://i.postimg.cc/GtVKhqLL/logo.jpg" 
                     alt="GTS Logo" 
                     className="w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <span className="text-lg font-serif font-bold text-white tracking-tighter">
                  GTS <span className="text-accent">.</span>
                </span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center"
                aria-label="Close Menu"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <motion.span 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    className="absolute w-8 h-0.5 bg-white rounded-full"
                  />
                  <motion.span 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -45 }}
                    className="absolute w-8 h-0.5 bg-white rounded-full"
                  />
                </div>
              </button>
            </div>

            {/* Center Navigation */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-20 py-8">
              <div className="flex flex-col items-center gap-8 md:gap-16">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.1 + i * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl md:text-6xl font-serif text-white hover:text-accent transition-colors duration-300 text-center tracking-tight"
                  >
                    <TranslatedText>{link.name}</TranslatedText>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Lower Section (Grouped) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="px-8 pb-12 md:pb-20 relative z-20 flex flex-col items-center gap-8 md:gap-12"
            >
              {/* CTA Button */}
              <a
                href={`tel:${t.nav.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-4 bg-accent text-white w-full max-w-sm py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(229,57,53,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <TranslatedText>{t.nav.call}</TranslatedText>
              </a>

              {/* Language Switcher */}
              <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 w-full max-w-[280px]">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={cn(
                      "relative z-10 flex-1 px-4 py-3 text-[10px] font-bold tracking-widest transition-all duration-500 rounded-full",
                      language === lang ? "text-white" : "text-white/30"
                    )}
                  >
                    <span className="relative z-10">{lang}</span>
                    {language === lang && (
                      <motion.div
                        layoutId="activeLanguageMobile"
                        className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(229,57,53,0.4)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-6">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/greattravelservice/' },
                  { icon: Send, href: 'https://t.me/greattravelservice' },
                  { icon: Facebook, href: 'https://www.facebook.com/greattravelservice/' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, color: '#E53935' }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 bg-white/5 text-white/60"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
