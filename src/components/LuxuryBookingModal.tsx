import React, { useState } from 'react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          className="bg-[#F8F5F0] border border-[#E9E2D8] rounded-[28px] max-w-4xl w-full max-h-[92vh] flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden text-[#1E1B18] relative"
        >

          {/* MODAL TOP BAR WITH STEP PROGRESS INDICATOR */}
          <div className="bg-white px-6 py-4 border-b border-[#E9E2D8] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep((step - 1) as any)}
                  className="p-1.5 rounded-full hover:bg-cream text-espresso transition-colors"
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
                className="ml-3 w-8 h-8 rounded-full bg-cream border border-linen flex items-center justify-center text-espresso hover:bg-gold hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MODAL BODY */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">

            {/* STEP 1: DATES & GUEST PARAMETERS */}
            {step === 1 && (
              <form onSubmit={handleCheckAvailability} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Check In */}
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1 shadow-sm">
                    <label className="block text-[11px] font-poppins uppercase font-bold text-gold">Check-In Date</label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent font-serif font-bold text-base text-espresso focus:outline-none"
                    />
                  </div>

                  {/* Check Out */}
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1 shadow-sm">
                    <label className="block text-[11px] font-poppins uppercase font-bold text-gold">Check-Out Date</label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent font-serif font-bold text-base text-espresso focus:outline-none"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Adults */}
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1 shadow-sm">
                    <label className="block text-[11px] font-poppins uppercase font-bold text-gold">Adults (12+ yrs)</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-transparent font-poppins font-bold text-sm text-espresso focus:outline-none"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults (Family)</option>
                    </select>
                  </div>

                  {/* Children */}
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1 shadow-sm">
                    <label className="block text-[11px] font-poppins uppercase font-bold text-gold">Children (below 12)</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-transparent font-poppins font-bold text-sm text-espresso focus:outline-none"
                    >
                      <option value="0">None</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>

                  {/* Preferred Room Type */}
                  <div className="p-4 rounded-2xl bg-white border border-linen space-y-1 shadow-sm">
                    <label className="block text-[11px] font-poppins uppercase font-bold text-gold">Preferred Category</label>
                    <select
                      value={roomFilter}
                      onChange={(e) => setRoomFilter(e.target.value)}
                      className="w-full bg-transparent font-poppins font-bold text-sm text-espresso focus:outline-none"
                    >
                      <option value="all">All Available Suites</option>
                      <option value="deluxe-ac">Executive Deluxe Suite</option>
                      <option value="premium-ac-cottage">Premium AC Cottage</option>
                      <option value="executive-family-suite">Family Suite</option>
                      <option value="standard-non-ac">Standard Non-AC Cottage</option>
                    </select>
                  </div>
                </div>

                {/* Optional Promo Code Bar */}
                <div className="p-4 rounded-2xl bg-white border border-linen flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex-1">
                    <label className="block text-[10px] font-poppins uppercase font-bold text-taupe">Promo Code (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. LUXBEACH20"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-transparent text-xs font-poppins font-semibold text-espresso focus:outline-none uppercase"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 rounded-full bg-gold/15 text-gold-dark font-poppins font-bold text-xs hover:bg-gold hover:text-white transition-all"
                  >
                    Apply
                  </button>
                </div>

                {appliedDiscount > 0 && (
                  <div className="p-3 rounded-xl bg-green-50 text-green-700 text-xs font-poppins font-semibold border border-green-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>20% Direct Booking Discount Applied!</span>
                  </div>
                )}

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Check Available Suites</span>
                </button>
              </form>
            )}

            {/* STEP 2: DISPLAY ELEGANT ROOM CARDS */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-poppins text-taupe">
                  <span>Available for {checkIn} to {checkOut} ({adults} Guests)</span>
                  <button onClick={() => setStep(1)} className="text-gold font-bold underline">Change Dates</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ROOMS.filter(r => roomFilter === 'all' || r.id === roomFilter).map((room) => (
                    <div key={room.id} className="rounded-3xl bg-white border border-linen overflow-hidden shadow-luxury p-5 space-y-4 flex flex-col justify-between hover:border-gold transition-all">
                      <div className="space-y-3">
                        <div className="relative h-44 rounded-2xl overflow-hidden">
                          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                          <span className="absolute top-3 left-3 bg-espresso/90 text-gold text-[10px] font-poppins font-bold uppercase px-3 py-1 rounded-full border border-gold/30">
                            {room.view}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-serif font-bold text-espresso text-lg">{room.name}</h4>
                          <p className="text-xs text-taupe mt-1 leading-relaxed font-sans">{room.tagline}</p>
                        </div>

                        <div className="flex items-center justify-between text-xs font-poppins text-taupe pt-2 border-t border-linen">
                          <span className="flex items-center gap-1 font-semibold">
                            <Users className="w-3.5 h-3.5 text-gold" /> {room.capacity}
                          </span>
                          <span className="flex items-center gap-1 font-semibold">
                            <BedDouble className="w-3.5 h-3.5 text-gold" /> {room.bedType}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-linen">
                        <div>
                          <span className="text-[10px] font-poppins text-taupe block">Per Night</span>
                          <span className="font-serif text-xl font-bold text-gold">₹{room.price}</span>
                        </div>

                        <button
                          onClick={() => handleSelectRoom(room)}
                          className="px-6 py-2.5 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center gap-1.5"
                        >
                          <span>Select Room</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: CLEAN GUEST DETAILS */}
            {step === 3 && selectedRoom && (
              <form onSubmit={handleConfirmReservation} className="space-y-6">
                
                {/* Selected Suite Summary Pill */}
                <div className="p-4 rounded-2xl bg-white border border-linen flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-16 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-espresso text-base">{selectedRoom.name}</h4>
                      <p className="text-xs text-taupe font-poppins">{checkIn} to {checkOut} • 2 Nights</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-taupe font-poppins block">Total Estimated</span>
                    <span className="font-serif font-bold text-xl text-gold">₹{finalPrice || selectedRoom.price * 2}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-poppins font-bold uppercase text-espresso mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Roy"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-linen bg-white text-xs font-poppins text-espresso focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-poppins font-bold uppercase text-espresso mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@example.com"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full p-3.5 rounded-2xl border border-linen bg-white text-xs font-poppins text-espresso focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-bold uppercase text-espresso mb-1">Phone Number (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98300 00000"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full p-3.5 rounded-2xl border border-linen bg-white text-xs font-poppins text-espresso focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-poppins font-bold uppercase text-espresso mb-1">Special Requests (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Late arrival, high floor, anniversary surprise..."
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-linen bg-white text-xs font-poppins text-espresso focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Reservation (Pay at Hotel / Direct)</span>
                </button>
              </form>
            )}

            {/* STEP 4: LUXURY BOOKING CONFIRMATION SCREEN */}
            {step === 4 && selectedRoom && (
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mx-auto">
                  <Check className="w-8 h-8 text-gold" />
                </div>

                <div>
                  <span className="text-xs font-poppins uppercase tracking-widest font-bold text-gold block">Reservation Confirmed</span>
                  <h3 className="font-serif text-3xl font-bold text-espresso mt-1">Thank You, {guestName || 'Valued Guest'}!</h3>
                  <p className="text-xs text-taupe mt-2">Your luxury suite at Tajpur Beach is reserved under Reference <strong>#{bookingRef}</strong></p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-linen max-w-md mx-auto text-left space-y-3 shadow-luxury text-xs font-poppins">
                  <div className="flex justify-between border-b border-linen pb-2">
                    <span className="text-taupe">Suite Category</span>
                    <span className="font-bold text-espresso">{selectedRoom.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-linen pb-2">
                    <span className="text-taupe">Dates</span>
                    <span className="font-bold text-espresso">{checkIn} to {checkOut}</span>
                  </div>
                  <div className="flex justify-between border-b border-linen pb-2">
                    <span className="text-taupe">Guests</span>
                    <span className="font-bold text-espresso">{adults} Adults, {children} Children</span>
                  </div>
                  <div className="flex justify-between text-sm pt-1">
                    <span className="font-bold text-espresso">Total Amount</span>
                    <span className="font-serif font-bold text-gold text-lg">₹{finalPrice || selectedRoom.price * 2}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-poppins font-bold">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>100% Sweet Water Bath Guaranteed</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetFlow}
                    className="px-8 py-3 rounded-full bg-espresso text-cream font-poppins font-bold text-xs uppercase tracking-wider hover:bg-gold transition-all"
                  >
                    Done & Close
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
