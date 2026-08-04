import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const CareerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const positions = [
    { title: "Front Desk & Guest Concierge", type: "Full-Time", experience: "2+ Years in Hotel Industry", location: "Tajpur Resort" },
    { title: "Sous Chef (Seafood Specialist)", type: "Full-Time", experience: "3+ Years in Bengali / Tandoori Cooking", location: "The Casuarina Seafood Grill" },
    { title: "Housekeeping Supervisor", type: "Full-Time", experience: "1+ Year in Luxury Hospitality", location: "Tajpur Resort" },
    { title: "Beach Activity & Bonfire Coordinator", type: "Full-Time / Seasonal", experience: "Freshers Welcome", location: "Tajpur Resort" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Join Our Team</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Careers at Sagar Kinare</motion.h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Build a rewarding career in luxury hospitality beside the sea.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* OPEN POSITIONS */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#1E1B18] text-center mb-8">Current Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((pos, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-3">
                <span className="px-3 py-1 rounded-full bg-gold/10 text-[#966E30] text-[10px] uppercase font-poppins font-bold border border-gold/30">
                  {pos.type}
                </span>
                <h4 className="font-serif font-bold text-xl text-[#1E1B18]">{pos.title}</h4>
                <div className="text-xs text-[#1E1B18]/70 font-poppins space-y-1">
                  <p>• Experience: {pos.experience}</p>
                  <p>• Location: {pos.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION FORM */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-6">
          <div className="border-b border-[#E9E2D8] pb-3 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">Apply Online</h3>
            <p className="text-xs text-[#1E1B18]/60 mt-1 font-poppins">Submit your details to join our team.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
            <div>
              <label className="block font-semibold mb-1">Full Name *</label>
              <input type="text" required placeholder="Subhabrata Mukherjee" className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-2.5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Phone Number *</label>
                <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-2.5" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Position Applying For</label>
                <select className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-2.5">
                  {positions.map((p, i) => <option key={i}>{p.title}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Experience & Resume Link</label>
              <textarea rows={3} placeholder="Briefly describe your experience..." className="w-full bg-[#F8F5F0] border border-gold/30 rounded-xl p-2.5" />
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#1E1B18] text-gold font-bold uppercase tracking-wider hover:bg-[#1E1B18] transition-all flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Submit Application</span>
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-green-50 text-green-700 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! We will review your application and contact you soon.</span>
              </div>
            )}
          </form>
        </div>

      </section>

    </div>
  );
};
