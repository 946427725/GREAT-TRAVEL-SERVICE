import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { Plane } from 'lucide-react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isCTA = target.tagName === 'BUTTON' || target.closest('.cta-hover');
      const isInteractive = target.tagName === 'A' || target.closest('.interactive-hover');
      
      setIsHoveringCTA(!!isCTA);
      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Glow Effect */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHoveringInteractive || isHoveringCTA ? 150 : 0,
          height: isHoveringInteractive || isHoveringCTA ? 150 : 0,
          backgroundColor: isHoveringCTA ? 'rgba(229, 57, 53, 0.15)' : 'rgba(212, 175, 55, 0.1)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 150 }}
      />

      {/* Main Cursor */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        {isHoveringCTA ? (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            className="text-accent"
          >
            <Plane size={32} fill="currentColor" />
          </motion.div>
        ) : (
          <motion.div
            className="w-4 h-4 rounded-full border border-white/30 backdrop-blur-sm"
            animate={{
              scale: isHoveringInteractive ? 4 : 1,
              borderColor: isHoveringInteractive ? 'rgba(229, 57, 53, 0.5)' : 'rgba(255, 255, 255, 0.3)',
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
