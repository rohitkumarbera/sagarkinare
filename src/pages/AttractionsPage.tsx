import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ATTRACTIONS, ORIGINAL_IMAGES } from '../data/resortData';
import { Navigation, CheckCircle2 } from 'lucide-react';
import { LuxuryBookingModal } from '../components/LuxuryBookingModal';

export const AttractionsPage: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-[#B88A44]/30">
        <div className="absolute inset-0 opacity-30">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src={ORIGINAL_IMAGES.propertyOverview} alt="Nearby Attractions"
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#B88A44] text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Coastal Exploration</span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Tajpur & Coastal Sightseeing</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Discover crimson red crab beaches, high-thrill water sports in Mandarmani, colorful trawler harbors in Shankarpur, and Digha sea promenades.
          </p>
        </div>
      </section>

      {/* ATTRACTIONS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ATTRACTIONS.map((att) => (
            <div key={att.id} className="rounded-3xl bg-white border border-[#B88A44]/30 shadow-luxury overflow-hidden flex flex-col sm:flex-row hover:border-[#B88A44] transition-all duration-300">
              <img src={att.image} alt={att.name} className="w-full sm:w-1/2 h-64 sm:h-auto object-cover" />
              <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#966E30] font-poppins font-bold">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B88A44]/10 border border-[#B88A44]/30">{att.distance}</span>
                    <span>• {att.travelTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1B18] mt-2">{att.name}</h3>
                  <p className="text-xs text-[#5F5A54] leading-relaxed font-sans mt-2">{att.description}</p>
                </div>

                <div className="pt-3 border-t border-[#E9E2D8] space-y-1">
                  <span className="text-[10px] font-poppins uppercase text-[#966E30] font-bold">Key Highlights:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {att.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-poppins bg-[#F8F5F0] px-2 py-0.5 rounded-md text-[#1E1B18] border border-[#B88A44]/20 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#B88A44]" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOW TO REACH SAGAR KINARE - FIXED DARK CONTAINER (#1E1B18) WITH HIGH CONTRAST WHITE/GOLD TEXT */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-[#B88A44]/40 shadow-luxury space-y-6">
          <div className="flex items-center gap-3 border-b border-[#B88A44]/30 pb-4">
            <Navigation className="w-6 h-6 text-[#B88A44]" />
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-wide">How to Reach Sagar Kinare Tajpur</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-[#25211D] border border-[#B88A44]/30 space-y-2">
              <span className="font-poppins font-bold text-[#D8B87A] text-sm block">By Road from Kolkata (170 km)</span>
              <p className="text-[#F8F5F0]/90 leading-relaxed">Drive via NH16 → Kolaghat → Nandakumar → Contai → Balisai → Turn left towards Tajpur Beach. Approx. 3.5 hours drive.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#25211D] border border-[#B88A44]/30 space-y-2">
              <span className="font-poppins font-bold text-[#D8B87A] text-sm block">By Train (Ramnagar / Digha Station)</span>
              <p className="text-[#F8F5F0]/90 leading-relaxed">Board Tamralipta Express or Kandari Express from Howrah to Ramnagar (12 km) or Digha (18 km). Resort pickup available on request.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#25211D] border border-[#B88A44]/30 space-y-2">
              <span className="font-poppins font-bold text-[#D8B87A] text-sm block">Station Pickup & Transfers</span>
              <p className="text-[#F8F5F0]/90 leading-relaxed">We arrange private AC car transfers directly from Balisai, Ramnagar, or Digha station right to the resort gates.</p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B88A44] text-white font-poppins font-bold text-xs uppercase tracking-wider hover:bg-[#966E30] transition-all shadow-goldGlow"
            >
              <span>Contact Concierge / Book Station Pickup</span>
            </button>
          </div>
        </div>

      </section>

      {/* LUXURY RESERVATION ENGINE MODAL */}
      <LuxuryBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

    </div>
  );
};
