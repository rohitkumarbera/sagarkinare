import { ORIGINAL_IMAGES } from '../data/resortData';
import React from 'react';
import { Flame, Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="Beach Bonfire Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Resort Celebrations</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Events, Bonfires & Parties</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Celebrate under the stars with live wood bonfires, barbecue stations, acoustic music, and lawn parties.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">Night Beach Bonfire & BBQ</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed">
              Gather around wood fires under starry coastal skies. Live chicken & fish barbecue prepared fresh by our chef.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">Birthday & Anniversary Bashes</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed">
              Special garden lawn setups, balloon decor, custom seafood menus, and music arrangements for your loved ones.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E1B18]">Festive Get-Togethers</h3>
            <p className="text-xs text-[#1E1B18]/70 leading-relaxed">
              Durga Puja, New Year, and Holi coastal party specials with live Bengali acoustic music performances.
            </p>
          </div>

        </div>

        <div className="p-8 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-gold/30 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-white">Plan Your Custom Resort Event</h3>
          <p className="text-xs text-[#F8F5F0]/80 max-w-xl mx-auto">Contact our events coordinator to organize private group gatherings and bonfires.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-[#1E1B18]-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
          >
            <span>Inquire Event Package</span>
          </Link>
        </div>
      </section>

    </div>
  );
};
