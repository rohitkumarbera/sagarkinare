import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/resortData';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block mb-2">24/7 Resort Concierge</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Contact & Location</motion.h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto mt-3 font-sans font-light">
            We are always here to assist with room reservations, custom bonfire packages, and station transfer inquiries.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-[#1E1B18] text-lg">Phone Numbers</h4>
            <div className="text-xs text-[#1E1B18]/80 space-y-1 font-poppins">
              <p><a href={`tel:${HOTEL_INFO.phonePrimary}`} className="hover:text-[#966E30] font-bold">{HOTEL_INFO.phonePrimary}</a> (Primary)</p>
              <p><a href={`tel:${HOTEL_INFO.phoneSecondary}`} className="hover:text-[#966E30]">{HOTEL_INFO.phoneSecondary}</a> (Secondary)</p>
              {HOTEL_INFO.phoneOther.map((num, i) => (
                <p key={i}><a href={`tel:${num}`} className="hover:text-[#966E30]">{num}</a></p>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-[#1E1B18] text-lg">Email & Messaging</h4>
            <div className="text-xs text-[#1E1B18]/80 space-y-2 font-poppins">
              <p><a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#966E30] font-bold">{HOTEL_INFO.email}</a></p>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors text-[11px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Direct</span>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-[#1E1B18] text-lg">Property Address</h4>
            <p className="text-xs text-[#1E1B18]/80 leading-relaxed font-sans">
              {HOTEL_INFO.address}
            </p>
            <span className="inline-block text-[11px] text-[#966E30] font-poppins font-bold">300m from Tajpur Beach Shore</span>
          </div>

        </div>

        {/* INQUIRY FORM & GOOGLE MAPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-6">
            <div className="border-b border-[#E9E2D8] pb-3">
              <span className="text-[#966E30] text-xs font-poppins uppercase tracking-widest font-semibold block">Send a Message</span>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">Inquire & Request Callback</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
              <div>
                <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  placeholder="Subhabrata Mukherjee"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 95931 65851"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Inquiry Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl px-3.5 py-2.5 font-sans focus:outline-none focus:border-gold"
                >
                  <option>General Room Tariff Query</option>
                  <option>Station Pickup Request</option>
                  <option>Beach Bonfire & BBQ Setup</option>
                  <option>Destination Beach Wedding Inquiry</option>
                  <option>Corporate Group Booking</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#1E1B18]/80 mb-1.5">Message / Details</label>
                <textarea
                  rows={4}
                  placeholder="How can our front desk assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-3 font-sans focus:outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#1E1B18] text-gold font-poppins font-bold text-xs uppercase tracking-wider hover:bg-[#1E1B18] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-poppins flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Thank you! Your message has been sent to our concierge team. We will call you back shortly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Embedded Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-luxury border-2 border-gold/30 h-[500px]">
            <iframe
              title="Sagar Kinare Location Map"
              src={HOTEL_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </section>

    </div>
  );
};
