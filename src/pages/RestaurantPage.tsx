import React, { useState } from 'react';
import { MENU_ITEMS, ORIGINAL_IMAGES } from '../data/resortData';
import { Utensils, Flame, Clock } from 'lucide-react';
import { LuxuryBookingModal } from '../components/LuxuryBookingModal';

export const RestaurantPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = ['All', 'Bengali Seafood', 'North Indian', 'Chinese Delicacies', 'Bonfire BBQ'];

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-[#B88A44]/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="The Casuarina Seafood Grill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#B88A44] text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Gourmet Dining Experience</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>The Casuarina Seafood Grill</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Indulge in authentic Bengal coastal catches, silver pomfret tawa fry, jumbo prawn malai curry, and seaside bonfire barbecue grills.
          </p>
        </div>
      </section>

      {/* DINING TIMINGS & CHEF HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#B88A44]/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B88A44]/10 border border-[#B88A44]/30 flex items-center justify-center text-[#B88A44] flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-[#966E30] font-bold">Breakfast</span>
              <h4 className="font-serif font-bold text-[#1E1B18] text-lg">7:30 AM – 10:30 AM</h4>
              <p className="text-[11px] text-[#5F5A54]">Complimentary with AC Suites</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#B88A44]/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B88A44]/10 border border-[#B88A44]/30 flex items-center justify-center text-[#B88A44] flex-shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-[#966E30] font-bold">Lunch</span>
              <h4 className="font-serif font-bold text-[#1E1B18] text-lg">12:30 PM – 3:30 PM</h4>
              <p className="text-[11px] text-[#5F5A54]">Fresh Catch Seafood Thali</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#B88A44]/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B88A44]/10 border border-[#B88A44]/30 flex items-center justify-center text-[#B88A44] flex-shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-[#966E30] font-bold">Dinner & Bonfire BBQ</span>
              <h4 className="font-serif font-bold text-[#1E1B18] text-lg">7:30 PM – 10:30 PM</h4>
              <p className="text-[11px] text-[#5F5A54]">Live Charcoal Grills</p>
            </div>
          </div>
        </div>

        {/* MENU CATEGORIES & ITEMS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#966E30] text-xs font-poppins uppercase tracking-widest font-semibold block mb-1">Curated Culinary Selection</span>
            <h2 className="font-serif text-3xl font-bold text-[#1E1B18]">Our Gourmet Menu Highlights</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#1E1B18] text-[#B88A44] border border-[#B88A44]/40 shadow-md'
                    : 'bg-white text-[#1E1B18] hover:bg-[#EFEAE2] border border-[#B88A44]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-white border border-[#B88A44]/30 shadow-luxury flex gap-5 items-center hover:border-[#B88A44] transition-colors">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover border border-[#B88A44]/20 flex-shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-[#1E1B18] text-base">{item.name}</h4>
                    <span className="font-serif font-bold text-[#966E30] text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-[#5F5A54] font-sans leading-relaxed">{item.description}</p>
                  {item.isChefSpecial && (
                    <span className="inline-block text-[10px] font-poppins uppercase font-bold text-[#B88A44] bg-[#1E1B18] px-2.5 py-0.5 rounded-full mt-2">
                      Chef Special
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CANDLELIGHT DINNER & BONFIRE CTA - FIXED DARK CONTAINER (#1E1B18) WITH HIGH CONTRAST WHITE/GOLD TEXT */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-[#B88A44]/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-[#D8B87A] text-xs font-poppins uppercase tracking-widest font-extrabold block">Romantic Experiences</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">Book a Private Candlelight Beach Dinner</h3>
            <p className="text-xs sm:text-sm text-[#F8F5F0]/90 max-w-xl font-sans leading-relaxed">
              Includes private garden/beach seating setup, rose petal decor, mocktails, and customized 4-course seafood menu.
            </p>
          </div>

          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#B88A44] text-white font-poppins font-bold text-xs uppercase tracking-wider hover:bg-[#966E30] transition-all flex-shrink-0 shadow-goldGlow z-10"
          >
            <span>Reserve Table / Add to Booking</span>
          </button>
        </div>

      </section>

      {/* LUXURY RESERVATION ENGINE MODAL */}
      <LuxuryBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

    </div>
  );
};
