import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';
import { TajpurWeather } from './TajpurWeather';
import { LuxuryBookingModal } from './LuxuryBookingModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        
        {/* CLEAN LUXURY TOP BAR (#1F1A17 Background, #F8F6F2 Text, #B88A44 Accent) */}
        <div className={`bg-[#1F1A17] text-[#F8F6F2] transition-all duration-300 ${isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-[52px] flex items-center opacity-100 border-b border-gold/15'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-poppins tracking-wide">
            
            {/* LEFT: Phone & Email */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${HOTEL_INFO.phonePrimary}`}
                className="flex items-center gap-2 text-[#F8F6F2] hover:text-[#B88A44] transition-colors duration-300 group font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88A44] group-hover:scale-110 transition-transform duration-300" />
                <span>{HOTEL_INFO.phonePrimary}</span>
              </a>

              <span className="text-[#B88A44]/30 hidden md:inline">•</span>

              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="hidden md:flex items-center gap-2 text-[#F8F6F2] hover:text-[#B88A44] transition-colors duration-300 group font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#B88A44] group-hover:scale-110 transition-transform duration-300" />
                <span>{HOTEL_INFO.email}</span>
              </a>
            </div>

            {/* CENTER: 100% Sweet Water Guarantee (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-2 text-[#F8F6F2]/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#B88A44]" />
              <span className="tracking-wider">100% Sweet Water Guarantee</span>
            </div>

            {/* RIGHT: Weather & Tajpur Beach Location (Hidden on Mobile) */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-[#F8F6F2]/80 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Tajpur Beach</span>
              </div>

              <span className="text-[#B88A44]/30">•</span>

              <TajpurWeather />
            </div>

            {/* Mobile Right: Direct Book Now Launcher Modal */}
            <div className="flex sm:hidden items-center gap-3">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#B88A44] hover:text-white transition-colors"
              >
                Book Now
              </button>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className={`transition-all duration-300 ${isScrolled ? 'glass-header-scrolled text-espresso py-2.5' : 'bg-[#F8F5F0]/95 backdrop-blur-md text-espresso py-3 border-b border-linen'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* OFFICIAL SAGAR KINARE LOGO (Crisp, High-Resolution, 60-70px Desktop / 45-50px Mobile) */}
            <Link to="/" className="flex items-center gap-3 group py-0.5">
              <img
                src={ORIGINAL_IMAGES.logo}
                alt="Sagar Kinare Tajpur Beach Resort & Spa Logo"
                className="h-11 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-poppins text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative py-1 ${
                    isActive(link.path) ? 'text-gold font-bold' : 'text-espresso/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Refined Gold Button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-7 py-2.5 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-espresso p-2 hover:text-gold transition-colors duration-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream border-b border-linen px-4 pt-4 pb-6 space-y-3 animate-fade-in text-espresso shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-poppins uppercase tracking-wider font-medium transition-colors duration-300 ${
                  isActive(link.path) ? 'text-gold font-bold pl-2 border-l-2 border-gold' : 'text-espresso/80 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-linen">
              <button
                onClick={() => { setIsBookingModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-full bg-gold text-white text-center font-poppins font-bold text-xs uppercase tracking-wider block shadow-goldGlow"
              >
                Book Your Stay
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
