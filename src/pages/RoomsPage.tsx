import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROOMS, ORIGINAL_IMAGES } from '../data/resortData';
import { RoomCard } from '../components/RoomCard';
import { ShieldCheck } from 'lucide-react';

export const RoomsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AC' | 'Family' | 'Non-AC'>('All');

  const filteredRooms = ROOMS.filter(r => {
    if (filter === 'AC') return r.ac && !r.id.includes('family');
    if (filter === 'Family') return r.id.includes('family');
    if (filter === 'Non-AC') return !r.ac;
    return true;
  });

  return (
    <div className="min-h-screen bg-cream pt-0 pb-20 text-espresso">
      
      {/* STAGGERED CINEMATIC SUBPAGE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={ORIGINAL_IMAGES.deluxeRoom}
            alt="Rooms & Tariffs Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Dark Overlay for 100% Crisp Heading Visibility */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)'
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block mb-2"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            Luxury Accommodations
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight"
            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}
          >
            Rooms & Tariff Details
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            Designed for ultimate tranquility with natural wood accents, private sea breeze balconies, and 100% sweet water showers.
          </motion.p>

          {/* Sweet Water Highlight Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/50 text-gold-light text-xs font-poppins font-bold shadow-md"
          >
            <ShieldCheck className="w-4 h-4 text-gold-light" />
            <span>Guaranteed 24/7 Pure Sweet Water in All Room Showers & Taps</span>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS & ROOM GRID WITH SCROLL REVEAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {(['All', 'AC', 'Family', 'Non-AC'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab
                  ? 'bg-espresso text-gold shadow-goldGlow border border-gold/50 scale-105'
                  : 'bg-white text-taupe hover:text-espresso border border-linen hover:border-gold'
              }`}
            >
              {tab === 'All' ? 'All Suites' : tab === 'AC' ? 'Deluxe AC' : tab === 'Family' ? 'Family Suites' : 'Standard Non-AC'}
            </button>
          ))}
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </motion.div>
      </section>

    </div>
  );
};
