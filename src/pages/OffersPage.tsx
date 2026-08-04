import React, { useState } from 'react';
import { OFFERS } from '../data/resortData';
import { Check, ArrowRight } from 'lucide-react';
import { LuxuryBookingModal } from '../components/LuxuryBookingModal';

export const OffersPage: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream pt-0 pb-20 text-espresso">
      
      {/* HERO BANNER WITH DARK OVERLAY */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80"
            alt="Offers Hero"
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
          <span className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
            Exclusive Packages
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}>
            Special Deals & Resort Offers
          </h1>
          <p className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Book direct for exclusive discounts, complimentary breakfast, bonfire access, and sweet water room upgrades.
          </p>
        </div>
      </section>

      {/* OFFERS LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="p-8 rounded-3xl bg-white border border-linen shadow-luxury space-y-6 flex flex-col justify-between hover:border-gold transition-all">
              <div className="space-y-3">
                <span className="px-3.5 py-1 rounded-full bg-gold/15 text-[#966E30] font-poppins font-bold text-xs uppercase tracking-wider inline-block">
                  Code: {offer.code}
                </span>
                <h3 className="font-serif font-bold text-2xl text-espresso">{offer.title}</h3>
                <p className="text-xs text-taupe leading-relaxed font-sans">{offer.description}</p>

                <div className="pt-2 space-y-1.5 text-xs font-poppins text-espresso">
                  {offer.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full py-3.5 rounded-full bg-gold text-white text-center font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
              >
                <span>Apply Offer & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* LUXURY RESERVATION ENGINE MODAL */}
      <LuxuryBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

    </div>
  );
};
