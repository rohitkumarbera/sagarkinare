import React, { useState } from 'react';
import { MENU_ITEMS, ORIGINAL_IMAGES } from '../data/resortData';
import { Utensils, Flame, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RestaurantPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Bengali Seafood', 'North Indian', 'Chinese Delicacies', 'Bonfire BBQ'];

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-sand-light pt-24 pb-20 text-charcoal">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-ocean-dark text-sand overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="The Casuarina Seafood Grill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Gourmet Dining Experience</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>The Casuarina Seafood Grill</h1>
          <p className="text-sand/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Indulge in authentic Bengal coastal catches, silver pomfret tawa fry, jumbo prawn malai curry, and seaside bonfire barbecue grills.
          </p>
        </div>
      </section>

      {/* DINING TIMINGS & CHEF HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-gold-dark font-bold">Breakfast</span>
              <h4 className="font-serif font-bold text-ocean text-lg">7:30 AM – 10:30 AM</h4>
              <p className="text-[11px] text-charcoal/60">Complimentary with AC Suites</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-gold-dark font-bold">Lunch</span>
              <h4 className="font-serif font-bold text-ocean text-lg">12:30 PM – 3:30 PM</h4>
              <p className="text-[11px] text-charcoal/60">Fresh Catch Seafood Thali</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-poppins uppercase text-gold-dark font-bold">Dinner & Bonfire BBQ</span>
              <h4 className="font-serif font-bold text-ocean text-lg">7:30 PM – 10:30 PM</h4>
              <p className="text-[11px] text-charcoal/60">Live Charcoal Grills</p>
            </div>
          </div>
        </div>

        {/* MENU CATEGORIES & ITEMS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-gold-dark text-xs font-poppins uppercase tracking-widest font-semibold block mb-1">Curated Culinary Selection</span>
            <h2 className="font-serif text-3xl font-bold text-ocean">Our Gourmet Menu Highlights</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-ocean text-gold shadow-gold-glow border border-gold/40'
                    : 'bg-white text-charcoal hover:bg-sand-dark border border-gold/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury flex gap-5 items-center hover:border-gold transition-colors">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover border border-gold/20 flex-shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-ocean text-base">{item.name}</h4>
                    <span className="font-serif font-bold text-gold-dark text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-charcoal/70 font-sans leading-relaxed">{item.description}</p>
                  {item.isChefSpecial && (
                    <span className="inline-block text-[10px] font-poppins uppercase font-bold text-gold bg-ocean px-2.5 py-0.5 rounded-full mt-2">
                      Chef Special
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CANDLELIGHT DINNER & BONFIRE CTA */}
        <div className="p-8 rounded-3xl bg-ocean-dark text-sand border-2 border-gold/40 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Romantic Experiences</span>
            <h3 className="font-serif text-2xl font-bold text-white">Book a Private Candlelight Beach Dinner</h3>
            <p className="text-xs text-sand/80 max-w-xl">Includes private garden/beach seating setup, rose petal decor, mocktails, and customized 4-course seafood menu.</p>
          </div>

          <Link
            to="/booking"
            className="px-8 py-3.5 rounded-full bg-gold text-ocean-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex-shrink-0 shadow-gold-glow"
          >
            <span>Reserve Table / Add to Booking</span>
          </Link>
        </div>

      </section>

    </div>
  );
};
