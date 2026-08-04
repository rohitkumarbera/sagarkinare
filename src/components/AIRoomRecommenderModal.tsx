import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import { ROOMS, type Room } from '../data/resortData';
import { Link } from 'react-router-dom';

interface AIRoomRecommenderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIRoomRecommenderModal: React.FC<AIRoomRecommenderModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [acPreference, setAcPreference] = useState<'AC' | 'Non-AC'>('AC');
  const [recommendedRoom, setRecommendedRoom] = useState<Room | null>(null);

  const handleRecommend = () => {
    if (guests === '4' || guests === '3+') {
      setRecommendedRoom(ROOMS.find(r => r.id === 'executive-family-suite') || ROOMS[0]);
    } else if (acPreference === 'Non-AC') {
      setRecommendedRoom(ROOMS.find(r => r.id === 'standard-non-ac') || ROOMS[3]);
    } else {
      setRecommendedRoom(ROOMS.find(r => r.id === 'deluxe-ac') || ROOMS[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B18]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-cream border border-gold/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#1E1B18]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#1E1B18]/60 hover:text-[#1E1B18] p-2 rounded-full hover:bg-gold/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-gold font-poppins text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>AI Room Recommendation Engine</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">Find Your Perfect Suite</h3>
          <p className="text-xs text-[#1E1B18]/70 mt-1 font-sans">
            Input your preferences to match with our 100% sweet water luxury accommodations.
          </p>

          {!recommendedRoom ? (
            <div className="space-y-6 mt-6">
              <div>
                <label className="block text-xs font-poppins font-bold uppercase text-[#1E1B18] mb-2">Number of Guests</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['2', '3+', '4'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGuests(g)}
                      className={`py-3 rounded-2xl border text-xs font-poppins font-semibold transition-all ${
                        guests === g
                          ? 'bg-[#1E1B18] text-gold border-gold shadow-goldGlow'
                          : 'bg-white text-[#1E1B18] border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      {g === '4' ? '4 Guests (Family)' : `${g} Guests`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-poppins font-bold uppercase text-[#1E1B18] mb-2">Climate Preference</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['AC', 'Non-AC'] as const).map((ac) => (
                    <button
                      key={ac}
                      onClick={() => setAcPreference(ac)}
                      className={`py-3 rounded-2xl border text-xs font-poppins font-semibold transition-all ${
                        acPreference === ac
                          ? 'bg-[#1E1B18] text-gold border-gold shadow-goldGlow'
                          : 'bg-white text-[#1E1B18] border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      {ac === 'AC' ? 'Air Conditioned Suite' : 'Standard Non-AC Cottage'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRecommend}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-gold-shimmer to-gold-dark text-[#1E1B18]-dark font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Match Recommended Suite</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6 mt-6">
              <div className="p-4 rounded-3xl bg-white border border-gold/30 shadow-luxury space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img src={recommendedRoom.image} alt={recommendedRoom.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#1E1B18] text-gold text-[10px] uppercase font-poppins font-bold px-3 py-1 rounded-full border border-gold/40">
                    AI Top Match
                  </span>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-[#1E1B18] text-xl">{recommendedRoom.name}</h4>
                  <p className="text-xs text-[#1E1B18]/70 mt-1">{recommendedRoom.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gold/20">
                  <div>
                    <span className="text-xs text-[#1E1B18]/60 block font-poppins">Tariff / Night</span>
                    <span className="font-serif text-2xl font-bold text-[#1E1B18]">₹{recommendedRoom.price}</span>
                  </div>

                  <span className="text-xs font-poppins text-[#966E30] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-gold" /> 100% Sweet Water Bath
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setRecommendedRoom(null)}
                  className="px-5 py-3 rounded-full border border-gold/30 text-[#1E1B18] text-xs font-poppins font-semibold hover:bg-gold/10"
                >
                  Reset Preference
                </button>

                <Link
                  to={`/booking?room=${recommendedRoom.id}`}
                  onClick={onClose}
                  className="flex-1 py-3.5 rounded-full bg-[#1E1B18] text-gold text-center font-poppins font-bold text-xs uppercase tracking-wider hover:bg-[#1E1B18] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book Recommended Suite</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
