import React from 'react';
import { ATTRACTIONS, ORIGINAL_IMAGES } from '../data/resortData';
import { Navigation, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AttractionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-light pt-24 pb-20 text-charcoal">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-ocean-dark text-sand overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="Nearby Attractions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Coastal Exploration</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Tajpur & Coastal Sightseeing</h1>
          <p className="text-sand/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Discover crimson red crab beaches, high-thrill water sports in Mandarmani, colorful trawler harbors in Shankarpur, and Digha sea promenades.
          </p>
        </div>
      </section>

      {/* ATTRACTIONS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ATTRACTIONS.map((att) => (
            <div key={att.id} className="rounded-3xl bg-white border border-gold/30 shadow-luxury overflow-hidden flex flex-col sm:flex-row hover:border-gold transition-all duration-300">
              <img src={att.image} alt={att.name} className="w-full sm:w-1/2 h-64 sm:h-auto object-cover" />
              <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gold-dark font-poppins font-bold">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/30">{att.distance}</span>
                    <span>• {att.travelTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-ocean mt-2">{att.name}</h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-sans mt-2">{att.description}</p>
                </div>

                <div className="pt-3 border-t border-sand-dark space-y-1">
                  <span className="text-[10px] font-poppins uppercase text-gold-dark font-bold">Key Highlights:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {att.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-poppins bg-sand-light px-2 py-0.5 rounded-md text-charcoal/80 border border-gold/20 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-gold" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOW TO REACH SAGAR KINARE */}
        <div className="p-8 rounded-3xl bg-ocean text-sand border-2 border-gold/30 space-y-6">
          <div className="flex items-center gap-3 border-b border-gold/20 pb-4">
            <Navigation className="w-6 h-6 text-gold" />
            <h3 className="font-serif font-bold text-2xl text-white">How to Reach Sagar Kinare Tajpur</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-ocean-dark/60 border border-gold/20">
              <span className="font-poppins font-bold text-gold text-sm block mb-1">By Road from Kolkata (170 km)</span>
              <p className="text-sand/80 leading-relaxed">Drive via NH16 → Kolaghat → Nandakumar → Contai → Balisai → Turn left towards Tajpur Beach. Approx. 3.5 hours drive.</p>
            </div>

            <div className="p-4 rounded-2xl bg-ocean-dark/60 border border-gold/20">
              <span className="font-poppins font-bold text-gold text-sm block mb-1">By Train (Ramnagar / Digha Station)</span>
              <p className="text-sand/80 leading-relaxed">Board Tamralipta Express or Kandari Express from Howrah to Ramnagar (12 km) or Digha (18 km). Resort pickup available on request.</p>
            </div>

            <div className="p-4 rounded-2xl bg-ocean-dark/60 border border-gold/20">
              <span className="font-poppins font-bold text-gold text-sm block mb-1">Station Pickup & Transfers</span>
              <p className="text-sand/80 leading-relaxed">We arrange private AC car transfers directly from Balisai, Ramnagar, or Digha station right to the resort gates.</p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-ocean-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              <span>Contact Concierge for Route Guidance</span>
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
};
