import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ROOMS } from '../data/resortData';
import { CheckCircle2, Phone, Sparkles, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialRoomId = searchParams.get('room') || ROOMS[0].id;

  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId);
  const [checkInDate, setCheckInDate] = useState('2026-08-05');
  const [checkOutDate, setCheckOutDate] = useState('2026-08-07');
  const [guests, setGuests] = useState(2);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  
  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'hotel' | 'upi' | 'card'>('hotel');

  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const nights = Math.max(1, Math.round((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 3600 * 24)));

  const basePrice = selectedRoom.price * nights;
  const discountAmount = Math.round((basePrice * discountPercent) / 100);
  const gstAmount = Math.round((basePrice - discountAmount) * 0.12); // 12% GST
  const totalPrice = basePrice - discountAmount + gstAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.toUpperCase() === 'LUXBEACH20') {
      setDiscountPercent(20);
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === 'TAJPURWEEKEND') {
      setDiscountPercent(15);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid promo code. Try LUXBEACH20 or TAJPURWEEKEND');
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'SKT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsBooked(true);

    // Launch Confetti
    // confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-20 text-[#1E1B18]">
      
      {/* HERO BANNER */}
      <section className="relative py-16 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">Direct Reservation Engine</span>
          <h1 className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-5xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Book Your Luxury Stay</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-poppins">
            Instant confirmation • Zero booking fees • 100% Sweet Water Guarantee
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {!isBooked ? (
          <form onSubmit={handleConfirmBooking} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT 2 COLS: ROOM & GUEST SELECTION */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Step 1: Room Selection */}
              <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-5">
                <div className="flex items-center gap-2 text-[#1E1B18] font-serif font-bold text-xl border-b border-[#E9E2D8] pb-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-[#1E1B18]-dark text-xs flex items-center justify-center font-poppins">1</span>
                  <span>Select Accommodation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ROOMS.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                        selectedRoomId === room.id
                          ? 'border-gold bg-[#1E1B18]/5 shadow-gold-glow'
                          : 'border-[#E9E2D8] hover:border-gold/50 bg-white'
                      }`}
                    >
                      <div className="flex gap-3">
                        <img src={room.image} alt={room.name} className="w-16 h-16 rounded-xl object-cover" />
                        <div>
                          <h4 className="font-serif font-bold text-[#1E1B18] text-sm leading-tight">{room.name}</h4>
                          <span className="text-[11px] text-[#1E1B18]/60 block mt-1">{room.capacity}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between border-t border-[#E9E2D8] pt-2">
                        <span className="font-serif font-bold text-[#966E30] text-base">₹{room.price}/night</span>
                        <span className={`text-[10px] font-poppins font-bold px-2 py-0.5 rounded-full ${selectedRoomId === room.id ? 'bg-gold text-[#1E1B18]-dark' : 'text-[#1E1B18]/40'}`}>
                          {selectedRoomId === room.id ? 'Selected' : 'Choose'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Stay Dates & Guests */}
              <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-5">
                <div className="flex items-center gap-2 text-[#1E1B18] font-serif font-bold text-xl border-b border-[#E9E2D8] pb-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-[#1E1B18]-dark text-xs flex items-center justify-center font-poppins">2</span>
                  <span>Dates & Guest Count</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-poppins">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18]/80 mb-1.5">Check-In Date</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      required
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 text-xs font-sans text-[#1E1B18] font-semibold focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18]/80 mb-1.5">Check-Out Date</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      required
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 text-xs font-sans text-[#1E1B18] font-semibold focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B18]/80 mb-1.5">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 text-xs font-sans text-[#1E1B18] font-semibold focus:outline-none focus:border-gold"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults (+ Extra Bed)</option>
                      <option value={4}>4 Adults (Family Suite)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Information */}
              <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-5">
                <div className="flex items-center gap-2 text-[#1E1B18] font-serif font-bold text-xl border-b border-[#E9E2D8] pb-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-[#1E1B18]-dark text-xs flex items-center justify-center font-poppins">3</span>
                  <span>Primary Guest Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-poppins text-xs">
                  <div>
                    <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Subhabrata Mukherjee"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      required
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      required
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      required
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Special Requests (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Evening beach bonfire setup, ground floor room, vegetarian meals..."
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-3 font-sans focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Payment Method */}
              <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-5">
                <div className="flex items-center gap-2 text-[#1E1B18] font-serif font-bold text-xl border-b border-[#E9E2D8] pb-3">
                  <span className="w-7 h-7 rounded-full bg-gold text-[#1E1B18]-dark text-xs flex items-center justify-center font-poppins">4</span>
                  <span>Payment Preference</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-poppins text-xs">
                  <div
                    onClick={() => setPaymentMethod('hotel')}
                    className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'hotel' ? 'border-gold bg-[#1E1B18]/5 shadow-sm' : 'border-[#E9E2D8]'
                    }`}
                  >
                    <span className="font-bold text-[#1E1B18]">Pay at Resort</span>
                    <span className="text-[10px] text-[#1E1B18]/60 mt-1">Pay during Check-in</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'upi' ? 'border-gold bg-[#1E1B18]/5 shadow-sm' : 'border-[#E9E2D8]'
                    }`}
                  >
                    <span className="font-bold text-[#1E1B18]">UPI / GPay / PhonePe</span>
                    <span className="text-[10px] text-[#1E1B18]/60 mt-1">Instant Instant Transfer</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-2xl border cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'card' ? 'border-gold bg-[#1E1B18]/5 shadow-sm' : 'border-[#E9E2D8]'
                    }`}
                  >
                    <span className="font-bold text-[#1E1B18]">Credit / Debit Card</span>
                    <span className="text-[10px] text-[#1E1B18]/60 mt-1">Visa / MasterCard</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COL: BOOKING SUMMARY SIDEBAR */}
            <div className="space-y-6">
              
              <div className="p-6 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-gold/40 shadow-luxury space-y-5 sticky top-28">
                <h3 className="font-serif font-bold text-white text-xl border-b border-gold/20 pb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span>Reservation Summary</span>
                </h3>

                {/* Selected Room Preview */}
                <div className="flex gap-3 text-xs">
                  <img src={selectedRoom.image} alt={selectedRoom.name} className="w-20 h-20 rounded-xl object-cover border border-gold/30" />
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm">{selectedRoom.name}</h4>
                    <span className="text-[11px] text-gold block mt-0.5">{nights} Night(s) Stay</span>
                    <span className="text-[10px] text-[#F8F5F0]/70 block mt-1">100% Sweet Water Bath</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2 border-t border-gold/20">
                  <label className="block text-[11px] font-poppins text-gold font-semibold mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Have a Promo Code?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. LUXBEACH20"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-[#1E1B18]/70 border border-gold/30 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-sand/40 focus:outline-none focus:border-gold w-full font-poppins"
                    />
                    <button
                      onClick={handleApplyPromo}
                      type="button"
                      className="px-3.5 bg-gold text-[#1E1B18]-dark font-poppins font-bold text-xs rounded-xl hover:brightness-110"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && <span className="text-[11px] text-green-400 font-poppins mt-1 block">✨ Code Applied: {discountPercent}% Discount!</span>}
                  {promoError && <span className="text-[11px] text-red-400 font-poppins mt-1 block">{promoError}</span>}
                </div>

                {/* Detailed Breakdown */}
                <div className="space-y-2 text-xs font-poppins pt-3 border-t border-gold/20">
                  <div className="flex justify-between text-[#F8F5F0]/80">
                    <span>Room Tariff ({nights} nights)</span>
                    <span>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#F8F5F0]/80">
                    <span>Taxes & GST (12%)</span>
                    <span>+ ₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-base font-serif font-bold text-gold pt-3 border-t border-gold/30">
                    <span>Total Amount</span>
                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-gold-shimmer to-gold-dark text-[#1E1B18]-dark font-poppins font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm Reservation</span>
                </button>

                <p className="text-[10px] text-[#F8F5F0]/60 text-center font-poppins">
                  🔒 Safe & Secure 256-Bit SSL Encrypted Reservation
                </p>
              </div>

            </div>

          </form>
        ) : (
          /* CONFIRMATION SUCCESS STATE */
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border-2 border-gold shadow-luxury text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center text-green-600 mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[#966E30] text-xs font-poppins uppercase tracking-widest font-bold block">Reservation Confirmed</span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18]">
              Thank You, {guestName}!
            </h2>

            <p className="text-xs sm:text-sm text-[#1E1B18]/80 font-sans leading-relaxed">
              Your stay at **Sagar Kinare Resort & Spa** is successfully reserved. A confirmation SMS & email has been dispatched to **{guestEmail}**.
            </p>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-gold/30 text-left font-poppins text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#E9E2D8] pb-2">
                <span className="text-[#1E1B18]/60">Booking Reference</span>
                <span className="font-bold text-[#1E1B18]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E2D8] pb-2">
                <span className="text-[#1E1B18]/60">Selected Suite</span>
                <span className="font-bold text-[#1E1B18]">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E9E2D8] pb-2">
                <span className="text-[#1E1B18]/60">Check-In / Out</span>
                <span className="font-bold text-[#1E1B18]">{checkInDate} → {checkOutDate}</span>
              </div>
              <div className="flex justify-between font-serif text-sm font-bold text-[#1E1B18] pt-1">
                <span>Total Amount</span>
                <span className="text-[#966E30]">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 font-poppins">
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1E1B18] text-gold font-semibold text-xs uppercase tracking-wider hover:bg-[#1E1B18] transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
              
              <a
                href="tel:+919593165851"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold text-[#1E1B18]-dark font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge</span>
              </a>
            </div>

          </div>
        )}

      </section>

    </div>
  );
};
