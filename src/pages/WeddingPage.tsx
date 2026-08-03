import { ORIGINAL_IMAGES } from '../data/resortData';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WeddingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-light pt-24 pb-20 text-charcoal">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-ocean-dark text-sand overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="Destination Beach Wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Coastal Romance</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Destination Beach Weddings</h1>
          <p className="text-sand/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Say your vows with the sea breeze softly rustling through whispering casuarina pine trees.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-gold-dark text-xs font-poppins uppercase tracking-widest font-semibold block">Intimate Coastal Ceremonies</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ocean">Your Dream Wedding at Sagar Kinare</h2>
            <p className="text-sm text-charcoal/80 leading-relaxed font-sans">
              From floral mandap setups under the palm canopy to gourmet Bengali wedding feasts and luxurious guest suite accommodations, our resort offers complete destination wedding planning.
            </p>

            <ul className="space-y-2.5 text-xs text-charcoal/80 font-poppins">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Beachfront & Lawn Mandap Floral Decorations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Gourmet Multi-Cuisine Wedding Catering (Bengali & North Indian)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Full Resort Buyout & Room Block Accommodations for 60+ Guests</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>24/7 Sweet Water Bath & Dedicated Chauffeur Pickup Services</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ocean text-gold font-poppins font-bold text-xs uppercase tracking-wider hover:bg-ocean-dark transition-all"
              >
                <span>Request Wedding Brochure</span>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={ORIGINAL_IMAGES.propertyOverview}
              alt="Beach Wedding Setup"
              className="rounded-3xl shadow-luxury border-2 border-gold/30 object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
