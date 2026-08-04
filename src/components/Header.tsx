import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';
import { LuxuryBookingModal } from './LuxuryBookingModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Suites & Tariffs', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Dining', path: '/restaurant' },
    { name: 'Attractions', path: '/attractions' },
    { name: 'Our Story', path: '/about' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
        
        {/* CLEAN LUXURY TOP INFORMATION BAR (#1F1A17 Background) */}
        <div 
          className={`bg-[#1F1A17] text-[#F8F6F2] transition-all duration-300 ${
            isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-[44px] flex items-center opacity-100 border-b border-white/10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-[11px] font-poppins tracking-wide">
            
            {/* LEFT: Phone & Email */}
            <div className="flex items-center gap-5">
              <a
                href={`tel:${HOTEL_INFO.phonePrimary}`}
                className="flex items-center gap-1.5 text-[#F8F6F2] hover:text-[#C8A45A] transition-colors duration-300 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A45A]" />
                <span>{HOTEL_INFO.phonePrimary}</span>
              </a>

              <span className="text-[#C8A45A]/40 hidden md:inline">•</span>

              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="hidden md:flex items-center gap-1.5 text-[#F8F6F2] hover:text-[#C8A45A] transition-colors duration-300 font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#C8A45A]" />
                <span>{HOTEL_INFO.email}</span>
              </a>
            </div>

            {/* CENTER: 100% Sweet Water Guarantee */}
            <div className="hidden lg:flex items-center gap-1.5 text-[#F8F6F2]/90 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45A]" />
              <span className="tracking-wider">100% Sweet Water Guarantee</span>
            </div>

            {/* RIGHT: Social Media Links (Instagram, Facebook, Youtube) */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5 text-[#F8F6F2]/80 font-medium mr-1">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45A]" />
                <span>Tajpur Beach</span>
              </div>

              <span className="hidden sm:inline text-[#C8A45A]/40">•</span>

              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={HOTEL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Instagram"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={HOTEL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Facebook"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/>
                  </svg>
                </a>

                {/* Youtube */}
                <a
                  href={HOTEL_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Youtube"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Right: Direct Book Now Launcher Modal */}
            <div className="flex sm:hidden items-center gap-3">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#C8A45A] hover:text-white transition-colors"
              >
                Book Now
              </button>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR (Transparent over Hero on load, Solid #1E1B18 on scroll > 80px) */}
        <div 
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#1E1B18]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] py-0'
              : 'border-b border-white/10 py-0'
          }`}
          style={{
            background: isScrolled
              ? 'rgba(30, 27, 24, 0.96)'
              : 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0) 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between gap-4">
            
            {/* LEFT: UNCROPPED OFFICIAL SAGAR KINARE LOGO */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="block py-1">
                <img
                  src={ORIGINAL_IMAGES.logo}
                  alt="Sagar Hotel & Resort, Tajpur Logo"
                  className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto max-h-[58px] object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-md"
                />
              </Link>
            </div>

            {/* CENTER: PERFECTLY CENTERED NAVIGATION MENU (Gap: 24-28px, Text: #FFFFFF, Hover: #C8A45A) */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-grow px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-poppins text-[11px] xl:text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative py-1.5 whitespace-nowrap drop-shadow-sm group ${
                    isActive(link.path)
                      ? 'text-[#C8A45A] font-bold'
                      : 'text-white hover:text-[#C8A45A]'
                  }`}
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45A] rounded-full transition-transform duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* RIGHT: LUXURY GOLD "BOOK NOW" BUTTON (Fully Visible, No Clipping) */}
            <div className="hidden sm:flex items-center flex-shrink-0">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#C8A45A] hover:bg-[#B88A44] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-goldGlow hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-[#C8A45A] transition-colors duration-300 flex-shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1E1B18] border-b border-white/10 px-6 pt-4 pb-6 space-y-3 animate-fade-in text-white shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2.5 text-xs font-poppins uppercase tracking-wider font-semibold transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#C8A45A] font-bold pl-3 border-l-2 border-[#C8A45A]'
                    : 'text-white/90 hover:text-[#C8A45A]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => { setIsBookingModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full py-3.5 rounded-full bg-[#C8A45A] hover:bg-[#B88A44] text-white text-center font-poppins font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        )}

      </header>

      {/* LUXURY RESERVATION ENGINE MODAL */}
      <LuxuryBookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
};
