import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Trees, Utensils, ArrowUp } from 'lucide-react';
import { HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-cream border-t-2 border-gold/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BRAND HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gold/20">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-gold/20">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">100% Sweet Water</h4>
              <p className="text-xs text-cream/70">Purified groundwater in all showers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-gold/20">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">Casuarina Pine Trail</h4>
              <p className="text-xs text-cream/70">300m direct shaded walk to beach</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-gold/20">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">The Casuarina Seafood Grill</h4>
              <p className="text-xs text-cream/70">Fresh Pomfret & Gold Prawn curries</p>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-gold/20">
          
          {/* Brand Story & Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ORIGINAL_IMAGES.logo}
                alt="Sagar Kinare Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-cream/80 leading-relaxed font-sans max-w-sm">
              Sagar Kinare Hotel & Resorts offers a 5-star coastal retreat nestled between whispering casuarina pine plantations and uncrowded crimson sands of Tajpur Beach.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase font-poppins font-bold text-gold tracking-widest block mb-2">Direct Resort Concierge</span>
              <div className="flex flex-wrap gap-3 text-xs font-poppins">
                <a href={`tel:${HOTEL_INFO.phonePrimary}`} className="text-white hover:text-gold transition-colors font-medium">
                  {HOTEL_INFO.phonePrimary}
                </a>
                <span className="text-gold/40">•</span>
                <a href={`tel:${HOTEL_INFO.phoneSecondary}`} className="text-white hover:text-gold transition-colors font-medium">
                  {HOTEL_INFO.phoneSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-gold text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs font-poppins text-cream/80">
              <li><Link to="/" className="hover:text-gold transition-colors">Home Sanctuary</Link></li>
              <li><Link to="/rooms" className="hover:text-gold transition-colors">Suites & Tariffs</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition-colors">Reservation Engine</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Resort Gallery</Link></li>
              <li><Link to="/amenities" className="hover:text-gold transition-colors">Resort Facilities</Link></li>
              <li><Link to="/restaurant" className="hover:text-gold transition-colors">Seafood Dining</Link></li>
            </ul>
          </div>

          {/* Luxury Experiences */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-gold text-sm tracking-wider uppercase">Experiences</h4>
            <ul className="space-y-2 text-xs font-poppins text-cream/80">
              <li><Link to="/events" className="hover:text-gold transition-colors">Night Bonfires & BBQ</Link></li>
              <li><Link to="/wedding" className="hover:text-gold transition-colors">Destination Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-gold transition-colors">Corporate Retreats</Link></li>
              <li><Link to="/offers" className="hover:text-gold transition-colors">Special Packages</Link></li>
              <li><Link to="/attractions" className="hover:text-gold transition-colors">Tajpur Red Crabs</Link></li>
              <li><Link to="/blogs" className="hover:text-gold transition-colors">Coastal Journal</Link></li>
            </ul>
          </div>

          {/* Address & Legal */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-gold text-sm tracking-wider uppercase">Location & Policies</h4>
            <p className="text-xs text-cream/70 leading-relaxed">
              Bodhra, Tajpur Beach, Purba Medinipur, West Bengal - 721423, India
            </p>
            <ul className="space-y-2 text-xs font-poppins text-cream/80 pt-2">
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ & Check-in Rules</Link></li>
              <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/cancellation" className="hover:text-gold transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/career" className="hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & SOCIAL MEDIA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-poppins text-cream/60">
          <p>© 2026 Sagar Kinare Hotel & Resorts. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={HOTEL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold hover:scale-110 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href={HOTEL_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold hover:scale-110 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/>
              </svg>
            </a>

            <a
              href={HOTEL_INFO.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="w-8 h-8 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold hover:scale-110 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gold hover:text-white transition-colors group ml-4"
            >
              <span>Back to Top</span>
              <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

