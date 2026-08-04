import { ORIGINAL_IMAGES } from '../data/resortData';
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="About Sagar Kinare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Our Legacy & Heritage</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>About Sagar Kinare</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Founded with a passion for preserving Tajpur's natural coastal serenity while delivering world-class luxury hospitality.
          </p>
        </div>
      </section>

      {/* STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#966E30] text-xs font-poppins uppercase tracking-widest font-semibold block">Founded in Tajpur</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18]">Crafting Memorable Coastal Escapes</h2>
            <p className="text-sm text-[#1E1B18]/80 leading-relaxed font-sans">
              Sagar Kinare was born out of a desire to create a true luxury haven on Tajpur's pristine coastline. Located in Bodhra, our resort was designed to harmonize with the whispering casuarina pine plantations while offering modern amenities rarely found in beach retreats.
            </p>
            <p className="text-sm text-[#1E1B18]/80 leading-relaxed font-sans">
              Our hallmark feature—the **100% Sweet Water Guarantee**—reflects our commitment to guest comfort. We invested heavily in deep groundwater purification infrastructure so our guests never have to experience saline tap water.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E9E2D8]">
              <div className="p-4 rounded-2xl bg-white border border-gold/20">
                <h4 className="font-serif font-bold text-[#1E1B18] text-lg">Our Vision</h4>
                <p className="text-xs text-[#1E1B18]/60 mt-1">To set the benchmark for luxury eco-resorts along Bengal's Bay of Bengal coastline.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gold/20">
                <h4 className="font-serif font-bold text-[#1E1B18] text-lg">Our Mission</h4>
                <p className="text-xs text-[#1E1B18]/60 mt-1">Delivering heartfelt hospitality, sustainable nature conservation, and gourmet dining.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={ORIGINAL_IMAGES.propertyOverview}
              alt="Resort Lawns"
              className="rounded-3xl shadow-luxury border-2 border-gold/30 object-cover w-full h-[450px]"
            />
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#1E1B18] text-[#F8F5F0] border border-gold/40 max-w-xs shadow-2xl hidden sm:block">
              <span className="text-gold text-xs font-poppins font-bold uppercase block">Owner's Message</span>
              <p className="text-xs italic text-[#F8F5F0]/90 mt-1">"At Sagar Kinare, every guest arrives as a visitor and leaves as part of our coastal family."</p>
            </div>
          </div>
        </div>

        {/* JOURNEY TIMELINE */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#966E30] text-xs font-poppins uppercase tracking-widest font-semibold block mb-1">Evolution of Excellence</span>
            <h3 className="font-serif text-3xl font-bold text-[#1E1B18]">Our Growth Journey</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-gold/20 space-y-2">
              <span className="font-serif font-bold text-[#966E30] text-2xl">2018</span>
              <h5 className="font-serif font-bold text-[#1E1B18] text-base">Foundation</h5>
              <p className="text-xs text-[#1E1B18]/70">Acquisition of prime beachfront land nestled next to Tajpur casuarina forest.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-gold/20 space-y-2">
              <span className="font-serif font-bold text-[#966E30] text-2xl">2021</span>
              <h5 className="font-serif font-bold text-[#1E1B18] text-base">Resort Opening</h5>
              <p className="text-xs text-[#1E1B18]/70">Inauguration of AC suites, garden lawns, and The Casuarina Seafood Grill.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-gold/20 space-y-2">
              <span className="font-serif font-bold text-[#966E30] text-2xl">2024</span>
              <h5 className="font-serif font-bold text-[#1E1B18] text-base">Sweet Water System</h5>
              <p className="text-xs text-[#1E1B18]/70">Installation of industrial groundwater purification providing 100% non-saline water.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-gold/20 space-y-2">
              <span className="font-serif font-bold text-[#966E30] text-2xl">2026</span>
              <h5 className="font-serif font-bold text-[#1E1B18] text-base">5-Star Redesign</h5>
              <p className="text-xs text-[#1E1B18]/70">Complete digital & architectural upgrade into a world-class luxury resort.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
