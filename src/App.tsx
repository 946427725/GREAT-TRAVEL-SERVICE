import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustBlock from './components/TrustBlock';
import HotTours from './components/HotTours';
import BookingForm from './components/BookingForm';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-primary selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <TrustBlock />
        <HotTours />
        <BookingForm />
        <Location />
      </main>

      <Footer />

      {/* Background Ambient Glows - Reactive to Mouse */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <motion.div 
          animate={{
            x: (mousePos.x - window.innerWidth / 2) * 0.05,
            y: (mousePos.y - window.innerHeight / 2) * 0.05,
          }}
          className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{
            x: (mousePos.x - window.innerWidth / 2) * -0.03,
            y: (mousePos.y - window.innerHeight / 2) * -0.03,
          }}
          className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-gold/5 blur-[120px] rounded-full" 
        />
      </div>
    </div>
  );
}
