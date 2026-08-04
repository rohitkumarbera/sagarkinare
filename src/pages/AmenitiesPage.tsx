import { motion } from 'framer-motion';
import React from 'react';
import { AMENITIES } from '../data/resortData';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AmenitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream pt-0 pb-20 text-espresso">
      
      {/* HERO BANNER WITH DARK OVERLAY */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" alt="Amenities Hero"
             className="w-full h-full object-cover object-center"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)'
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
            Uncompromised Quality
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}>
            Resort Facilities & Amenities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Guaranteed 100% sweet water showers, direct casuarina pine beach trail, authentic seafood grill, and 24/7 power backup.
          </motion.p>
        </div>
      </section>

      {/* AMENITIES LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AMENITIES.map((amenity) => (
            <div key={amenity.id} className="p-8 rounded-3xl bg-white border border-linen shadow-luxury flex gap-6 items-start hover:border-gold transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-espresso">{amenity.title}</h3>
                  {amenity.highlightBadge && (
                    <span className="text-[10px] uppercase font-poppins font-bold text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                      {amenity.highlightBadge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-taupe leading-relaxed font-sans">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all"
          >
            <span>Book Stay at Sagar Kinare</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
