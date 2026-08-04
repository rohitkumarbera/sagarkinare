import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface PoliciesPageProps {
  initialTab?: 'privacy' | 'terms' | 'cancellation';
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cancellation'>(initialTab);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Legal & Resort Guidelines</span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Resort Policies & Guidelines</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Transparent policies regarding guest check-in, sweet water usage, booking cancellations, and privacy safety.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* TABS */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-2.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#1E1B18] text-gold border border-gold/40 shadow-gold-glow'
                : 'bg-white text-[#1E1B18] border border-gold/20'
            }`}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-2.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'terms'
                ? 'bg-[#1E1B18] text-gold border border-gold/40 shadow-gold-glow'
                : 'bg-white text-[#1E1B18] border border-gold/20'
            }`}
          >
            Terms of Service
          </button>

          <button
            onClick={() => setActiveTab('cancellation')}
            className={`px-6 py-2.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'cancellation'
                ? 'bg-[#1E1B18] text-gold border border-gold/40 shadow-gold-glow'
                : 'bg-white text-[#1E1B18] border border-gold/20'
            }`}
          >
            Cancellation Policy
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gold/30 shadow-luxury font-sans text-xs sm:text-sm leading-relaxed space-y-6">
          
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-2xl text-[#1E1B18] border-b border-[#E9E2D8] pb-3">Privacy Policy</h2>
              <p>At Sagar Kinare Hotel & Resorts, guest privacy and data confidentiality are of paramount importance.</p>
              <h4 className="font-serif font-bold text-[#1E1B18] text-base mt-4">1. Personal Information Collection</h4>
              <p>We collect standard guest details (Name, Government ID, Phone Number, Email Address) solely for mandatory police check-in compliance and reservation processing.</p>
              <h4 className="font-serif font-bold text-[#1E1B18] text-base mt-4">2. Data Protection</h4>
              <p>All online reservation details submitted via our website are encrypted using 256-Bit SSL protocols. We never share or sell guest data to third-party advertisers.</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-2xl text-[#1E1B18] border-b border-[#E9E2D8] pb-3">Terms of Service & Rules</h2>
              <p>By booking a stay at Sagar Kinare Tajpur, guests agree to abide by the following resort rules:</p>
              <h4 className="font-serif font-bold text-[#1E1B18] text-base mt-4">1. Check-In & Verification</h4>
              <p>Check-in time is 12:00 PM (Noon) and Check-out is 11:00 AM. Government-issued photo IDs (Aadhaar / Voter ID / Passport) are mandatory for all adult guests.</p>
              <h4 className="font-serif font-bold text-[#1E1B18] text-base mt-4">2. Outside Food Policy</h4>
              <p>To ensure hygiene, vector control, and room cleanliness, outside cooked food is strictly prohibited inside resort rooms and premises. Fresh food is cooked on order at our in-house restaurant.</p>
              <h4 className="font-serif font-bold text-[#1E1B18] text-base mt-4">3. Property & Environment</h4>
              <p>Littering along the casuarina beach trail is forbidden. Please respect the peaceful environment of Tajpur Beach.</p>
            </div>
          )}

          {activeTab === 'cancellation' && (
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-2xl text-[#1E1B18] border-b border-[#E9E2D8] pb-3">Cancellation & Refund Policy</h2>
              <p>We understand travel plans can change. Our cancellation guidelines are structured as follows:</p>
              <ul className="space-y-3 font-poppins text-xs pt-2">
                <li className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
                  <span className="font-bold block">7+ Days Prior to Check-In:</span>
                  <span>100% Full Refund (Minus bank processing charges).</span>
                </li>
                <li className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800">
                  <span className="font-bold block">3 to 7 Days Prior to Check-In:</span>
                  <span>50% Refund of total tariff amount.</span>
                </li>
                <li className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  <span className="font-bold block">Within 72 Hours of Check-In:</span>
                  <span>Non-refundable. However, dates can be rescheduled subject to management discretion.</span>
                </li>
              </ul>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};
