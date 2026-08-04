import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[10002] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#B88A44] via-[#E4C88E] to-[#B88A44] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(228,200,142,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
