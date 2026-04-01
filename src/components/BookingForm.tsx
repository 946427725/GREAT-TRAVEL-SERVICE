import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import TranslatedText from './TranslatedText';

export default function BookingForm() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const filteredDestinations = t.booking.destinations.filter(d => 
    d.toLowerCase().includes(destination.toLowerCase())
  );

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
    <section id="contact" className="py-32 px-6 bg-primary relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto glass p-8 md:p-20 rounded-[4rem] relative overflow-hidden border border-white/5 shadow-2xl">
        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
        
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            <TranslatedText>{t.booking.title}</TranslatedText>
          </motion.h2>
          <p className="text-secondary/50 font-light text-lg">
            <TranslatedText>{t.booking.desc}</TranslatedText>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 ml-4">
              <TranslatedText>{t.booking.name}</TranslatedText>
            </label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.booking.placeholderName}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 placeholder:text-white/10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 ml-4">
              <TranslatedText>{t.booking.phone}</TranslatedText>
            </label>
            <input 
              required
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 000-00-00"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 placeholder:text-white/10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 space-y-3 relative"
          >
            <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 ml-4">
              <TranslatedText>{t.booking.destination}</TranslatedText>
            </label>
            <input 
              required
              type="text" 
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={t.booking.placeholderDest}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 placeholder:text-white/10"
            />
            
            <AnimatePresence>
              {showSuggestions && destination && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-4 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden z-50 shadow-2xl"
                >
                  {filteredDestinations.map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setDestination(d);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-8 py-4 hover:bg-accent hover:text-white transition-all text-sm font-medium"
                    >
                      {d}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 mt-6"
          >
            <button 
              disabled={status === 'loading'}
              type="submit"
              className="w-full group relative bg-accent text-white py-6 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 shadow-[0_20px_40px_-15px_rgba(229,57,53,0.4)] disabled:opacity-70"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <TranslatedText>{t.booking.loading}</TranslatedText>
                  </>
                ) : (
                  <>
                    <TranslatedText>{t.booking.cta}</TranslatedText>
                    <Zap className="w-5 h-5 fill-white group-hover:animate-bounce" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </motion.div>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="md:col-span-2 flex items-center gap-2 text-green-500 justify-center text-sm font-medium mt-4"
              >
                <CheckCircle2 size={18} />
                <TranslatedText>{t.booking.success}</TranslatedText>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="md:col-span-2 flex items-center gap-2 text-accent justify-center text-sm font-medium mt-4"
              >
                <AlertCircle size={18} />
                <TranslatedText>{t.booking.error}</TranslatedText>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
