import React, { useState } from 'react';
import { GALLERY_ITEMS, type GalleryItem, ORIGINAL_IMAGES } from '../data/resortData';
import { X, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Rooms', 'Beach', 'Garden', 'Restaurant', 'Bonfire', 'Sunset', 'Night View', 'Swimming Area'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative py-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="absolute inset-0 opacity-30">
          <img
            src={ORIGINAL_IMAGES.propertyOverview}
            alt="Tajpur Beach Sunset Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Visual Showcase</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Resort & Beach Gallery</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            Take a visual tour through our luxury suites, casuarina pine gardens, fresh seafood dining, and twilight beach bonfires.
          </p>
        </div>
      </section>

      {/* MASONRY GALLERY & CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#1E1B18] text-gold shadow-gold-glow border border-gold/40'
                  : 'bg-white text-[#1E1B18] hover:bg-[#EFEAE2] border border-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative rounded-3xl overflow-hidden shadow-luxury border border-gold/20 h-72 cursor-pointer bg-[#1E1B18]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/95 via-ocean-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-poppins text-gold font-semibold tracking-wider">{item.category}</span>
                  <h4 className="font-serif text-lg font-bold mt-1">{item.title}</h4>
                  <p className="text-xs text-[#F8F5F0]/80 mt-1">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 bg-[#1E1B18]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#1E1B18]-dark flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#1E1B18] border-2 border-gold/40 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-[#1E1B18] text-[#F8F5F0]">
              <span className="text-xs font-poppins uppercase tracking-widest text-gold font-semibold">{activeLightbox.category}</span>
              <h3 className="font-serif font-bold text-2xl text-white mt-1">{activeLightbox.title}</h3>
              <p className="text-xs text-[#F8F5F0]/80 mt-2 font-sans">{activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
