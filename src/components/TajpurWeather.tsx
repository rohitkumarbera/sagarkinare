import React from 'react';
import { Sun, Wind, Waves } from 'lucide-react';

export const TajpurWeather: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#1E1B18]/40 backdrop-blur-md border border-gold/30 text-xs text-[#F8F5F0] font-poppins shadow-sm">
      <div className="flex items-center gap-1 text-gold">
        <Sun className="w-3.5 h-3.5 animate-spin-slow" />
        <span className="font-semibold text-white">28°C</span>
      </div>
      <span className="text-gold/40">|</span>
      <div className="flex items-center gap-1 text-[#F8F5F0]/80 hidden sm:flex">
        <Wind className="w-3.5 h-3.5 text-gold/80" />
        <span>12 km/h Sea Breeze</span>
      </div>
      <span className="text-gold/40 hidden sm:inline">|</span>
      <div className="flex items-center gap-1 text-[#F8F5F0]/80">
        <Waves className="w-3.5 h-3.5 text-gold/80" />
        <span className="text-gold">Tajpur Beach</span>
      </div>
    </div>
  );
};
