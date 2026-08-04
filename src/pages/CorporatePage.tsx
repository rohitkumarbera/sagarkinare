import { motion } from 'framer-motion';
import React from 'react';
import { Briefcase, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CorporatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Business & Leadership Stays</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Corporate Retreats & Offsites</motion.h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Recharge your executive team with seaside workation facilities, high-speed Wi-Fi, team building beach lawn activities, and group dining.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">High-Speed Connectivity</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed font-sans">
              Seamless Wi-Fi across all suites and garden lounges for remote strategy meetings and video calls.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">Team Building & Sports</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed font-sans">
              Beach volleyball, lawn cricket, evening bonfires, and group barbecue setups for team bonding.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">Special Corporate Tariffs</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed font-sans">
              Discounted group tariffs for company bookings including meal plans and station pickup services.
            </p>
          </div>

        </div>

        <div className="p-8 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-gold/30 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-white">Inquire Special Group Rates</h3>
          <p className="text-xs text-[#F8F5F0]/80 max-w-xl mx-auto">Get a customized corporate package quotation for your team stay.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-[#1E1B18]-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
          >
            <span>Request Corporate Proposal</span>
          </Link>
        </div>
      </section>

    </div>
  );
};
