import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Calendar, ShieldCheck, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
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
              <div className="hidden sm:flex items-center gap-1.5 text-[#F8F6F2]/80 font-medium mr-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45A]" />
                <span>Tajpur Beach</span>
              </div>

              <span className="hidden sm:inline text-[#C8A45A]/40">•</span>

              <div className="flex items-center gap-3">
                <a
                  href={HOTEL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Instagram"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={HOTEL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Facebook"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={HOTEL_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sagar Kinare Youtube"
                  className="p-1 rounded-full text-[#F8F6F2] hover:text-[#C8A45A] hover:scale-110 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
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
                  className={`font-poppins text-[11px] xl:text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative py-1.5 whitespace-nowrap drop-shadow-sm ${
                    isActive(link.path)
                      ? 'text-[#C8A45A] font-bold'
                      : 'text-white hover:text-[#C8A45A]'
                  }`}
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45A] rounded-full" />
                  )}
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
