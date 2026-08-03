import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Trees, Utensils, Calendar, Award, Star, Compass, ChevronRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { ROOMS, AMENITIES, REVIEWS, ATTRACTIONS, MENU_ITEMS, GALLERY_ITEMS, HOTEL_INFO, ORIGINAL_IMAGES } from '../data/resortData';
import { RoomCard } from '../components/RoomCard';

export const HomePage: React.FC = () => {
  const featuredRooms = ROOMS.filter(r => r.featured);
  const homeGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="min-h-screen bg-cream text-espresso overflow-x-hidden">
      
      {/* CINEMATIC HERO SECTION WITH AUTOPLAY BACKGROUND VIDEO */}
      {/* Responsive: 100vh Desktop (h-screen), 80vh Tablet (md:h-[80vh]), 75vh Mobile (h-[75vh]) */}
      <section className="relative h-[75vh] md:h-[80vh] lg:h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
        
        {/* Background Video with Poster & Image Fallback */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            poster={ORIGINAL_IMAGES.heroBannerJpg || ORIGINAL_IMAGES.heroBanner}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          >
            <source src="./videos/hero_resort_bg.mp4" type="video/mp4" />
            <source src="./images/original/hero_resort_bg.mp4" type="video/mp4" />
            {/* Fallback image if browser blocks autoplay or video fails */}
            <img
              src={ORIGINAL_IMAGES.heroBannerJpg || ORIGINAL_IMAGES.heroBanner}
              alt="Tajpur Sagar Kinare Luxury Beach Resort Hero Poster"
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Cinematic Dark Gradient Overlay (Exact User Spec) */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.45) 100%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/50 text-gold-light text-xs font-poppins font-bold tracking-widest uppercase mb-6 shadow-md"
          >
            <Compass className="w-4 h-4 text-gold-light" />
            <span>Tajpur's Premier 5-Star Beach Sanctuary</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-[-0.02em] text-[#F8F6F2] leading-[1.05]"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.35)'
            }}
          >
            Experience Coastal <br />
            Luxury Beside <br />
            <span className="text-3xl sm:text-5xl md:text-[1.12em] font-bold text-[#F8F6F2]">
              Tajpur Beach
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-white/95 font-sans max-w-2xl mx-auto font-normal leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.35)'
            }}
          >
            Escape into nature, coastal comfort, and refined elegance. Whispering casuarina pine trails, 100% sweet water showers, and fresh Bengali seafood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/booking"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </Link>

            <Link
              to="/rooms"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-espresso font-poppins font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Resort Suites</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Quick Value Badge Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 sm:mt-12 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-gold-light font-poppins font-bold"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}
          >
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-gold-light" /> 100% Sweet Water Bath</span>
            <span className="hidden sm:inline opacity-50">•</span>
            <span className="flex items-center gap-1.5"><Trees className="w-4 h-4 text-gold-light" /> 300m Casuarina Pine Trail</span>
            <span className="hidden sm:inline opacity-50">•</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-gold-light" /> Fresh Coastal Seafood Grill</span>
          </motion.div>

        </div>
      </section>


      {/* RESORT INTRODUCTION - EDITORIAL STORY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-poppins font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-gold" />
              <span>Welcome to Sagar Kinare</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso leading-tight tracking-wide">
              A Refined Coastal Haven <br />
              <span className="text-gold italic">Where Ocean Meets Tranquility</span>
            </h2>

            <p className="text-sm sm:text-base text-taupe leading-relaxed font-sans font-normal">
              Located in the peaceful coastal hamlet of Tajpur, **Sagar Kinare Hotel & Resorts** offers an exclusive sanctuary designed for discerning travelers. Tucked between lush casuarina plantations and uncrowded crimson beach sands, our property combines modern luxury with authentic Bengal hospitality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-linen">
              <div className="p-5 rounded-2xl bg-white border border-linen shadow-luxury">
                <span className="font-serif text-3xl font-bold text-espresso block">4.8★</span>
                <span className="text-xs text-taupe font-poppins mt-1 block">Google Guest Rating</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-linen shadow-luxury">
                <span className="font-serif text-3xl font-bold text-espresso block">300m</span>
                <span className="text-xs text-taupe font-poppins mt-1 block">Direct Beach Pine Trail</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso text-cream font-poppins font-semibold text-xs uppercase tracking-wider hover:bg-gold transition-all"
              >
                <span>Read Our Full Story</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Luxury Composite Photo Grid - Real Sagar Kinare Property Photos */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={ORIGINAL_IMAGES.deluxeRoom}
                alt="Sagar Kinare Luxury Deluxe Suite"
                className="rounded-3xl shadow-luxury object-cover h-64 sm:h-80 w-full hover:scale-[1.02] transition-transform duration-500 border border-linen"
              />
              <img
                src={ORIGINAL_IMAGES.restaurantMain}
                alt="Sagar Kinare Coastal Seafood Dining"
                className="rounded-3xl shadow-luxury object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500 border border-linen"
              />
            </div>

            <div className="space-y-4 pt-8">
              <img
                src={ORIGINAL_IMAGES.beachPine1}
                alt="Tajpur Beach & Pine Trees"
                className="rounded-3xl shadow-luxury object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500 border border-linen"
              />
              <img
                src={ORIGINAL_IMAGES.bonfireNight}
                alt="Sagar Kinare Night Beach Bonfire"
                className="rounded-3xl shadow-luxury object-cover h-64 sm:h-80 w-full hover:scale-[1.02] transition-transform duration-500 border border-linen"
              />
            </div>
          </div>

        </div>
      </section>


      {/* 5-STAR RESORT AMENITIES HIGHLIGHT */}
      <section className="py-20 bg-cream-dark border-y border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block mb-2">Uncompromised Quality</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">Why Guests Prefer Sagar Kinare</h2>
            <p className="text-taupe text-sm mt-4 font-sans">Every element of our resort is designed to deliver effortless relaxation and total peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.slice(0, 4).map((amenity) => (
              <div
                key={amenity.id}
                className="p-7 rounded-3xl bg-white border border-linen shadow-luxury hover:border-gold transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-espresso mb-2">{amenity.title}</h3>
                <p className="text-xs text-taupe leading-relaxed font-sans">{amenity.description}</p>
                {amenity.highlightBadge && (
                  <span className="inline-block mt-4 text-[10px] uppercase font-poppins font-bold text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                    {amenity.highlightBadge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/amenities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all"
            >
              <span>Explore All Resort Facilities</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ACCOMMODATION SUITES PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block mb-2">Accommodations</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">Luxury Suites & Tariff</h2>
            <p className="text-taupe text-sm mt-3 max-w-xl font-sans">Designed with natural textures, sweet-water ensuite baths, split AC, and private sea breeze views.</p>
          </div>

          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso text-cream font-poppins font-semibold text-xs uppercase tracking-wider hover:bg-gold transition-all self-start md:self-auto"
          >
            <span>View All Accommodations</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>


      {/* SEAFOOD DINING PREVIEW */}
      <section className="py-20 bg-white border-y border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <img
                src={ORIGINAL_IMAGES.restaurantFood}
                alt="Fresh Pomfret Tawa Fry"
                className="rounded-3xl shadow-luxury border border-linen object-cover w-full h-[400px]"
              />
              <div 
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl border border-gold/30 text-white shadow-xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.92) 100%)'
                }}
              >
                <span className="text-gold-light text-xs font-poppins uppercase tracking-widest font-bold block">Chef's Signature</span>
                <h4 className="font-serif text-xl font-bold mt-1 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                  Tajpur Pomfret Tawa Fry & Gold Prawn Malai Curry
                </h4>
                <p className="text-xs text-white/90 mt-1 font-sans">Cooked with daily fresh catches directly from local coastal fishermen.</p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block">Gourmet Dining</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">The Casuarina Seafood Grill</h2>
              <p className="text-sm text-taupe leading-relaxed font-sans">
                Indulge in authentic Bengali fish curries, sizzling tandoori starters, and fresh seafood grilled over open charcoal flames during our seaside bonfire evenings.
              </p>

              <div className="space-y-3 pt-2">
                {MENU_ITEMS.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-cream border border-linen flex items-center justify-between shadow-sm">
                    <div>
                      <h5 className="font-serif font-bold text-espresso text-sm">{item.name}</h5>
                      <p className="text-xs text-taupe mt-0.5">{item.description}</p>
                    </div>
                    <span className="font-serif font-bold text-gold text-base ml-4">₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-espresso text-cream font-poppins font-semibold text-xs uppercase tracking-wider hover:bg-gold transition-all"
                >
                  <span>Explore Full Dining Menu</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VISUAL MASONRY GALLERY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block mb-2">Visual Journeys</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">Moments at Sagar Kinare</h2>
          <p className="text-taupe text-sm mt-3">From golden beach dawns to twilight bonfires, immerse yourself in our resort story.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeGallery.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden shadow-luxury border border-linen h-72">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)'
                }}
              >
                <span className="text-[10px] uppercase font-poppins text-gold-light font-bold tracking-wider">{item.category}</span>
                <h4 className="font-serif text-lg font-bold mt-1 text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>{item.title}</h4>
                <p className="text-xs text-white/90 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-espresso text-cream font-poppins font-semibold text-xs uppercase tracking-wider hover:bg-gold transition-all"
          >
            <span>View Full Masonry Gallery</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* NEARBY SIGHTSEEING */}
      <section className="py-20 bg-cream-dark border-y border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block mb-2">Coastal Explorations</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">Discover Tajpur & Nearby Attractions</h2>
            </div>
            <Link
              to="/attractions"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider hover:bg-gold-dark transition-all self-start md:self-auto shadow-goldGlow"
            >
              <span>Explore All Attractions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTRACTIONS.map((att) => (
              <div key={att.id} className="rounded-3xl bg-white border border-linen p-5 space-y-4 hover:border-gold transition-all shadow-luxury">
                <img
                  src={att.image}
                  alt={att.name}
                  className="w-full h-44 object-cover rounded-2xl border border-linen"
                />
                <div>
                  <div className="flex items-center justify-between text-xs text-gold font-poppins font-bold">
                    <span>{att.distance}</span>
                    <span>• {att.travelTime}</span>
                  </div>
                  <h4 className="font-serif font-bold text-espresso text-lg mt-1">{att.name}</h4>
                  <p className="text-xs text-taupe mt-2 leading-relaxed font-sans">{att.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* GUEST REVIEWS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-bold block mb-2">Verified Guest Feedback</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-wide">Guest Stories & Testimonials</h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-gold font-serif text-xl font-bold">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold" />
              ))}
            </div>
            <span>4.8 / 5.0 (250+ Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="p-8 rounded-3xl bg-white border border-linen shadow-luxury flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-poppins uppercase px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Guest
                  </span>
                </div>
                <p className="text-xs text-taupe italic leading-relaxed font-sans">"{rev.comment}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-linen">
                <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover border-2 border-gold" />
                <div>
                  <h5 className="font-serif font-bold text-espresso text-sm">{rev.author}</h5>
                  <span className="text-[11px] text-taupe block font-sans">{rev.location} • {rev.roomBooked}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FINAL CALL TO ACTION BANNER */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ORIGINAL_IMAGES.heroBanner}
            alt="Tajpur Beach Resort CTA"
            className="w-full h-full object-cover object-center"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 45%, rgba(15,15,15,0.55) 100%)'
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <span 
            className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            Ready for Your Beach Getaway?
          </span>
          
          <h2 
            className="font-serif text-4xl sm:text-6xl font-bold text-[#F8F6F2] max-w-4xl mx-auto leading-tight tracking-wide"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.35)'
            }}
          >
            Reserve Your Luxury Suite Beside Tajpur Beach Today
          </h2>

          <p 
            className="text-white/95 text-base max-w-xl mx-auto font-sans font-normal leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}
          >
            Guaranteed sweet water showers, peaceful casuarina pine trails, fresh seafood delicacies, and 24/7 power backup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gold text-white font-poppins font-bold text-sm uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online Instantly</span>
            </Link>

            <a
              href={`tel:${HOTEL_INFO.phonePrimary}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-espresso font-poppins font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Front Desk ({HOTEL_INFO.phonePrimary})</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
