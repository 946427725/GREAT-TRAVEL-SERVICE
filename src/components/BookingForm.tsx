import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Send, Zap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function BookingForm() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, destination }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setPhone('');
        setDestination('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-40 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-8">
              <TranslatedText>{t.nav.contact}</TranslatedText>
            </span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] mb-8 md:mb-12 max-w-full break-words">
              <TranslatedText>{t.booking.title}</TranslatedText>
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 md:mb-6">
                  <TranslatedText>{t.booking.callLabel}</TranslatedText>
                </p>
                <a 
                  href={`tel:${t.nav.phone.replace(/\s+/g, '')}`} 
                  className="text-xl md:text-6xl font-serif text-white hover:text-accent transition-colors duration-500 flex items-center gap-4 md:gap-6 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <TranslatedText>{t.nav.phone}</TranslatedText>
                </a>
              </div>

              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 md:mb-6">
                  <TranslatedText>{t.booking.telegramLabel}</TranslatedText>
                </p>
                <a 
                  href="https://t.me/greattravelservice" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-6xl font-serif text-white hover:text-[#0088cc] transition-colors duration-500 flex items-center gap-4 md:gap-6 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/20 flex items-center justify-center group-hover:bg-[#0088cc] group-hover:border-[#0088cc] transition-all duration-500">
                    <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  @greattravelservice
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] backdrop-blur-2xl relative overflow-hidden z-10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4">
                <TranslatedText>{t.booking.desc}</TranslatedText>
              </h3>
              <p className="text-white/40 text-xs md:text-sm font-light mb-8 md:mb-12">
                <TranslatedText>{t.booking.formDesc}</TranslatedText>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 ml-4">
                    <TranslatedText>{t.booking.name}</TranslatedText>
                  </label>
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.booking.placeholderName}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 text-white text-sm md:text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-500 placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 ml-4">
                    <TranslatedText>{t.booking.phone}</TranslatedText>
                  </label>
                  <input 
                    required
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.booking.phonePlaceholder}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 text-white text-sm md:text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-500 placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 ml-4">
                    <TranslatedText>{t.booking.destination}</TranslatedText>
                  </label>
                  <textarea 
                    required
                    rows={3}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={t.booking.placeholderDest}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 text-white text-sm md:text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-500 placeholder:text-white/10 resize-none"
                  />
                </div>

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full group relative bg-accent text-white py-5 md:py-8 rounded-2xl md:rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 shadow-[0_20px_40px_-15px_rgba(229,57,53,0.4)] disabled:opacity-70"
                >
                  <span className="relative z-10 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs flex items-center gap-4">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                        <TranslatedText>{t.booking.loading}</TranslatedText>
                      </>
                    ) : (
                      <>
                        <TranslatedText>{t.booking.cta}</TranslatedText>
                        <Zap className="w-5 h-5 md:w-6 md:h-6 fill-white group-hover:animate-bounce" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-green-500 justify-center text-sm font-bold"
                    >
                      <CheckCircle2 size={20} />
                      <TranslatedText>{t.booking.success}</TranslatedText>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-accent justify-center text-sm font-bold"
                    >
                      <AlertCircle size={20} />
                      <TranslatedText>{t.booking.error}</TranslatedText>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
