import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Hotel, Plane, ShieldCheck, Car, Star, MapPin, Globe, Instagram, Facebook, Send, Zap, Flame, ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { id: 'sky', title: 'Sky', color: 'from-blue-900/20 to-blue-400/10' },
  { id: 'city', title: 'City', color: 'from-slate-900/40 to-slate-800/20' },
  { id: 'beach', title: 'Beach', color: 'from-orange-900/20 to-orange-400/10' },
  { id: 'hotel', title: 'Hotel', color: 'from-gold/5 to-primary' },
];

export default function JourneyEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger for scene changes
    const sections = gsap.utils.toArray('.scene-section');
    sections.forEach((section: any, i: number) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveScene(i),
        onEnterBack: () => setActiveScene(i),
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-primary">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("absolute inset-0 bg-gradient-to-b", scenes[activeScene].color)}
          />
        </AnimatePresence>
        
        {/* Animated Clouds/Particles for Sky Scene */}
        {activeScene === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            className="absolute inset-0 overflow-hidden"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [-200, 2000],
                  y: [Math.random() * 500, Math.random() * 500]
                }}
                transition={{ 
                  duration: 20 + Math.random() * 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 5
                }}
                className="absolute w-64 h-32 bg-white/10 blur-3xl rounded-full"
              />
            ))}
          </motion.div>
        )}

        {/* City Lights for City Scene */}
        {activeScene === 1 && (
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-10 z-50 flex flex-col gap-4">
        {scenes.map((scene, i) => (
          <div key={scene.id} className="flex items-center gap-4 group cursor-pointer">
            <motion.div
              animate={{
                width: activeScene === i ? 40 : 10,
                backgroundColor: activeScene === i ? '#E53935' : 'rgba(255,255,255,0.2)',
              }}
              className="h-1 rounded-full transition-all"
            />
            <span className={cn(
              "text-[10px] uppercase tracking-widest transition-all opacity-0 group-hover:opacity-100",
              activeScene === i ? "opacity-100 text-accent" : "text-white/40"
            )}>
              {scene.title}
            </span>
          </div>
        ))}
      </nav>

      {/* SCENE 1: SKY (Services) */}
      <section className="scene-section h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium mb-4 block">The Journey Engine</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Your Journey <br />
              <span className="text-accent italic">Begins in the Sky</span>
            </h2>
            <p className="text-secondary/60 max-w-md leading-relaxed">
              Experience travel without limits. From the first flight to the final transfer, we manage every detail with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Hotel, label: 'Hotels', delay: 0.2 },
              { icon: Plane, label: 'Flights', delay: 0.4 },
              { icon: ShieldCheck, label: 'Visas', delay: 0.6 },
              { icon: Car, label: 'Transfers', delay: 0.8 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 interactive-hover"
              >
                <item.icon className="w-8 h-8 text-accent" />
                <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 2: CITY (Facts & Flights) */}
      <section className="scene-section h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2 glass rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-serif mb-4">Global Reach</h3>
                <p className="text-secondary/60 max-w-sm">Connecting you to the world's most vibrant cities since 2013.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { val: '2013', label: 'Since' },
                  { val: '1000+', label: 'Tourists' },
                  { val: '5 min', label: 'Selection' },
                  { val: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-serif text-accent">{stat.val}</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Animated Flight Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <motion.path
                  d="M 100 300 Q 400 100 800 300"
                  stroke="white"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-accent rounded-[3rem] p-12 flex flex-col justify-between text-white cta-hover"
            >
              <Plane size={48} className="mb-8" />
              <div>
                <h4 className="text-3xl font-serif mb-4 italic">Next Flight?</h4>
                <p className="text-white/80 text-sm mb-8">Book your premium flight experience today.</p>
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group">
                  Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCENE 3: BEACH (Hot Tours) */}
      <section className="scene-section h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium mb-4 block">Hot Deals</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold italic">Ocean Escape</h2>
            </motion.div>
            <div className="flex items-center gap-2 text-accent animate-pulse">
              <Flame size={24} />
              <span className="text-xs uppercase tracking-widest font-bold">Limited Offers</span>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x">
            {[
              { title: 'Maldives', price: '$1,299', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800' },
              { title: 'Bali', price: '$750', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800' },
              { title: 'Dubai', price: '$899', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
            ].map((tour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-[3rem] overflow-hidden relative group snap-center interactive-hover"
              >
                <img src={tour.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="text-3xl font-serif text-white mb-2">{tour.title}</h4>
                  <p className="text-accent text-2xl font-serif">{tour.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 4: HOTEL LUXURY (Booking & Contact) */}
      <section className="scene-section h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Luxury <br />
              <span className="italic text-gold">Awaits</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <MapPin className="text-accent" />
                <span className="text-secondary/60">Tashkent, Kichik xalqa yoli 20</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-accent" />
                <span className="text-secondary/60 font-bold">+998 90 996-43-43</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Send, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: '#E53935' }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-colors interactive-hover"
                  href="#"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[3rem] relative overflow-hidden"
          >
            <h3 className="text-3xl font-serif mb-8 text-center">Fast Selection</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" />
              <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 group cta-hover">
                Get Selection <Zap size={20} className="fill-white" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP PREVIEW (Reimagined) */}
      <section className="py-24 px-6">
        <div 
          onClick={() => setIsMapOpen(true)}
          className="max-w-7xl mx-auto h-[400px] rounded-[3rem] overflow-hidden relative cursor-pointer group interactive-hover"
        >
          <div className="absolute inset-0 bg-accent/20 z-10 group-hover:bg-accent/10 transition-colors flex items-center justify-center">
            <div className="glass p-6 rounded-full flex items-center gap-3">
              <MapPin className="text-accent" />
              <span className="text-sm font-bold uppercase tracking-widest">Expand Map</span>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Fullscreen Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-primary p-6 md:p-12 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-serif">Our Location</h3>
              <button 
                onClick={() => setIsMapOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 rounded-[3rem] overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7901690006506!2d69.2469774751857!3d41.26990440327548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a84fda899dd%3A0xa12eb495ab29dda!2z0Y3RgtCw0LYgMSwgS2ljaGlrIFhhbHFhIFlvJ2xpIDIwLCAxMDAwMjIsINCi0L5zaGtlbnQsIFRvc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1775059849142!5m2!1sru!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">© 2026 GREAT TRAVEL SERVICE. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
