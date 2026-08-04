import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, ShieldCheck, ChevronRight, Check, Sparkles, BedDouble, ArrowLeft } from 'lucide-react';
import { ROOMS, type Room } from '../data/resortData';

interface LuxuryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const LuxuryBookingModal: React.FC<LuxuryBookingModalProps> = ({ isOpen, onClose, initialRoomId }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1 State: Dates & Guests
  const [checkIn, setCheckIn] = useState('2026-08-10');
  const [checkOut, setCheckOut] = useState('2026-08-12');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [roomFilter, setRoomFilter] = useState<string>(initialRoomId || 'all');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Step 2 State: Selected Suite
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(
    ROOMS.find(r => r.id === initialRoomId) || null
  );

  // Step 3 State: Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  // Step 4 State: Confirmation
  const [bookingRef, setBookingRef] = useState('');

  // Disable page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape Keypress to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        resetFlow();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'LUXBEACH20' || promoCode.trim().toUpperCase() === 'LEELA20') {
      setAppliedDiscount(20);
    } else {
      alert('Invalid promo code. Try LUXBEACH20');
    }
  };

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setStep(3);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'SKT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(4);
  };

  const resetFlow = () => {
    setStep(1);
    setSelectedRoom(null);
    onClose();
  };

  const finalPrice = selectedRoom
    ? Math.round(selectedRoom.price * (1 - appliedDiscount / 100)) * 2 // 2 nights
    : 0;

  return (
    <AnimatePresence>
      {/* FULL SCREEN SEMI-TRANSPARENT BLURRED BACKDROP (z-index: 10000) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={resetFlow}
        className="fixed inset-0 z-[10000] cursor-pointer"
        style={{
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      {/* CENTERED BOOKING MODAL CONTAINER (z-index: 10001) */}
      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6 overflow-y-auto pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-[#F8F5F0] border border-[#E9E2D8] rounded-[28px] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.35)] overflow-hidden text-[#1E1B18] relative pointer-events-auto"
        >

          {/* MODAL TOP BAR WITH STEP PROGRESS INDICATOR */}
          <div className="bg-white px-6 py-4 border-b border-[#E9E2D8] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep((step - 1) as any)}
                  className="p-1.5 rounded-full hover:bg-cream text-espresso transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <span className="text-[10px] font-poppins uppercase tracking-widest font-bold text-gold block">
                  Step {step} of 4 • Sagar Kinare Tajpur
                </span>
                <h3 className="font-serif font-bold text-lg text-espresso">
                  {step === 1 && 'Select Dates & Guests'}
                  {step === 2 && 'Choose Your Suite'}
                  {step === 3 && 'Guest Information'}
                  {step === 4 && 'Reservation Confirmed'}
                </h3>
              </div>
            </div>

            {/* Step Progress Dots */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step
                      ? 'w-6 bg-gold shadow-goldGlow'
                      : i < step
                      ? 'w-2 bg-gold/50'
                      : 'w-2 bg-linen'
                  }`}
                />
              ))}

              <button
                onClick={resetFlow}
                className="ml-4 p-2 rounded-full hover:bg-cream text-taupe hover:text-espresso transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MODAL SCROLLABLE BODY CONTENT */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">

            {/* STEP 1: DATES & GUESTS PARAMETERS */}
            {step === 1 && (
              <form onSubmit={handleCheckAvailability} className="space-y-6">
                <div className="p-4 rounded-2xl bg-white border border-linen flex items-center justify-between text-xs font-poppins text-espresso">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>100% Sweet Water Bath Guarantee Included</span>
                  </div>
                  <span className="text-gold font-bold">Best Rate Direct</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Check-in Date</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                      required
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Check-out Date</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Adults (12+ yrs)</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults (Family Suite)</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Children (0-11 yrs)</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Preferred Category</label>
                    <select
                      value={roomFilter}
                      onChange={(e) => setRoomFilter(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                    >
                      <option value="all">All Suites & Tariffs</option>
                      {ROOMS.map(r => (
                        <option key={r.id} value={r.id}>{r.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* PROMO CODE SECTION */}
                <div className="p-4 rounded-2xl bg-white border border-linen flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <div>
                      <span className="text-xs font-poppins font-bold text-espresso block">Have a Promo Code?</span>
                      <span className="text-[10px] text-taupe">Use code LUXBEACH20 for 20% off direct bookings</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="e.g. LUXBEACH20"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins uppercase font-semibold text-espresso focus:outline-none focus:border-gold w-full sm:w-36"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 rounded-xl bg-espresso text-cream text-xs font-poppins font-semibold hover:bg-gold transition-colors whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {appliedDiscount > 0 && (
                  <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-poppins font-semibold flex items-center justify-between">
                    <span>🎉 20% Direct Discount Promo Code Applied!</span>
                    <Check className="w-4 h-4" />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <span>Check Available Suites & Rates</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2: SUITE SELECTION CARDS */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-poppins text-taupe pb-2 border-b border-linen">
                  <span>Available Suites ({checkIn} to {checkOut})</span>
                  <span>{adults} Adults, {children} Children</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ROOMS.filter(r => roomFilter === 'all' || r.id === roomFilter).map((room) => {
                    const discountedPrice = Math.round(room.price * (1 - appliedDiscount / 100));

                    return (
                      <div
                        key={room.id}
                        className={`p-5 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md ${
                          selectedRoom?.id === room.id ? 'border-gold ring-2 ring-gold/20' : 'border-linen hover:border-gold'
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="relative h-44 rounded-xl overflow-hidden">
                            <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold text-[10px] font-poppins font-bold uppercase">
                              {room.view}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-serif font-bold text-base text-espresso">{room.name}</h4>
                            <p className="text-xs text-taupe mt-1 line-clamp-2">{room.tagline}</p>
                          </div>

                          <div className="flex items-center gap-3 text-[11px] font-poppins text-taupe pt-2 border-t border-linen">
                            <span className="flex items-center gap-1"><Users className="w-3 h-3 text-gold" /> {room.capacity}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><BedDouble className="w-3 h-3 text-gold" /> {room.bedType}</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-linen flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-taupe block font-poppins">Rate per Night</span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="font-serif font-bold text-xl text-gold">₹{discountedPrice}</span>
                              {appliedDiscount > 0 && (
                                <span className="text-xs text-taupe line-through">₹{room.price}</span>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={() => handleSelectRoom(room)}
                            className="px-5 py-2.5 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider hover:bg-gold-dark transition-colors shadow-sm"
                          >
                            Select Room
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: GUEST INFORMATION FORM */}
            {step === 3 && selectedRoom && (
              <form onSubmit={handleConfirmReservation} className="space-y-6">
                
                {/* Summary Box */}
                <div className="p-4 rounded-2xl bg-white border border-gold/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-espresso">{selectedRoom.name}</h4>
                      <p className="text-xs text-taupe">{checkIn} to {checkOut} (2 Nights)</p>
                      <span className="text-[10px] font-poppins font-bold text-gold uppercase">{selectedRoom.view}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-taupe block font-poppins">Total Estimated Tariff</span>
                    <span className="font-serif font-bold text-2xl text-gold">₹{finalPrice}</span>
                    <span className="text-[10px] text-green-700 block font-poppins font-semibold">Taxes Included</span>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Guest Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                      <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Email Address</label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                        required
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                      <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">WhatsApp Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1.5">
                    <label className="text-[10px] font-poppins uppercase tracking-wider text-taupe font-bold block">Special Requests (Optional)</label>
                    <textarea
                      placeholder="e.g. Ground floor preferred, late arrival at 4 PM"
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full bg-cream border border-linen rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-espresso focus:outline-none focus:border-gold h-20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Confirm Reservation (Pay Direct / At Hotel)</span>
                </button>
              </form>
            )}

            {/* STEP 4: CONFIRMATION RECEIPT */}
            {step === 4 && selectedRoom && (
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-gold text-xs font-poppins uppercase font-bold tracking-widest block">Booking Confirmation</span>
                  <h3 className="font-serif font-bold text-2xl text-espresso">Reservation Request Received!</h3>
                  <p className="text-xs text-taupe max-w-md mx-auto">
                    Thank you, <strong className="text-espresso">{guestName}</strong>. Your luxury suite request has been sent directly to Sagar Kinare Front Desk.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-linen max-w-md mx-auto text-left space-y-3 text-xs font-poppins shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-linen">
                    <span className="text-taupe font-bold">Booking Reference:</span>
                    <span className="font-mono font-bold text-gold text-sm">{bookingRef}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-taupe">Selected Suite:</span>
                    <span className="font-semibold text-espresso">{selectedRoom.name}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-taupe">Dates:</span>
                    <span className="font-semibold text-espresso">{checkIn} to {checkOut}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-taupe">Estimated Total:</span>
                    <span className="font-serif font-bold text-gold text-base">₹{finalPrice}</span>
                  </div>

                  <div className="pt-2 border-t border-linen text-[11px] text-taupe flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Includes 100% Sweet Water Bath & 24/7 Power Backup</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={resetFlow}
                    className="px-8 py-3.5 rounded-full bg-espresso text-cream font-poppins font-semibold text-xs uppercase tracking-wider hover:bg-gold transition-all"
                  >
                    Return to Home Page
                  </button>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
