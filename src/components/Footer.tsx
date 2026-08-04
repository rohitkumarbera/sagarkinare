import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Trees, Utensils, ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';
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
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={HOTEL_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold hover:scale-110 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={HOTEL_INFO.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="w-8 h-8 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold hover:scale-110 transition-all"
            >
              <Youtube className="w-4 h-4" />
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
