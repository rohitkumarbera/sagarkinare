import React, { useState } from 'react';
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
    <div className="min-h-screen bg-cream pt-24 pb-20 text-espresso">
      
      {/* HIGH CONTRAST SUBPAGE HERO BANNER */}
      <section className="relative py-24 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <img
            src={ORIGINAL_IMAGES.deluxeRoom}
            alt="Rooms & Tariffs Hero"
            className="w-full h-full object-cover object-center"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
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
          <span 
            className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block mb-2"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            Luxury Accommodations
          </span>
          <h1 
            className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight"
            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}
          >
            Rooms & Tariff Details
          </h1>
          <p 
            className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            Designed for ultimate tranquility with natural wood accents, private sea breeze balconies, and 100% sweet water showers.
          </p>

          {/* Sweet Water Highlight Bar */}
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/50 text-gold-light text-xs font-poppins font-bold shadow-md">
            <ShieldCheck className="w-4 h-4 text-gold-light" />
            <span>Guaranteed 24/7 Pure Sweet Water in All Room Showers & Taps</span>
          </div>
        </div>
      </section>

      {/* FILTER TABS & ROOM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['All', 'AC', 'Family', 'Non-AC'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab
                  ? 'bg-gold text-white shadow-goldGlow'
                  : 'bg-white text-espresso border border-linen hover:border-gold'
              }`}
            >
              {tab === 'All' ? 'All Accommodations' : `${tab} Suites`}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

      </section>
    </div>
  );
};
