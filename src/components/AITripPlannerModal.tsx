import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AITripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AITripPlannerModal: React.FC<AITripPlannerModalProps> = ({ isOpen, onClose }) => {
  const [duration, setDuration] = useState<'2 Days' | '3 Days' | '4 Days'>('2 Days');
  const [vibe, setVibe] = useState<'Romantic Escape' | 'Family Relaxation' | 'Seafood & Adventure' | 'Wellness Retreat'>('Romantic Escape');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<any[] | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (duration === '2 Days') {
        setGeneratedItinerary([
          {
            day: "Day 1: Arrival & Coastal Magic",
            schedule: [
              { time: "12:00 PM", title: "Resort Check-In & Sweet Water Refresh", desc: "Welcome drink at reception and check-in to your Deluxe AC Suite." },
              { time: "01:30 PM", title: "Gourmet Coastal Lunch", desc: "Savor fresh Pomfret Tawa Fry & Gold Prawn Malai Curry at The Casuarina Grill." },
              { time: "04:30 PM", title: "Casuarina Pine Trail & Red Crab Beach Walk", desc: "A 5-minute shaded stroll to Tajpur Beach to watch the crimson red crab colonies." },
              { time: "07:30 PM", title: "Beachside Wood Bonfire & Acoustic Grill", desc: "Private evening bonfire under the stars with smoked tandoori appetizers." }
            ]
          },
          {
            day: "Day 2: Sunrise & Serenity",
            schedule: [
              { time: "06:00 AM", title: "Tajpur Beach Sunrise & Shell Collection", desc: "Experience the tranquil early morning ocean breeze and shell hunting." },
              { time: "08:30 AM", title: "Complimentary Buffet Breakfast", desc: "Fresh luchi-aloodum, South Indian delicacies, and fresh coconut water." },
              { time: "10:30 AM", title: "Mandarmani Water Sports Excursion (Optional)", desc: "Quick 20-min drive to Mandarmani for parasailing or jet ski thrilling rides." },
              { time: "11:00 AM", title: "Sweet Water Shower & Express Check-Out", desc: "Relaxing shower with purified groundwater before departure." }
            ]
          }
        ]);
      } else {
        setGeneratedItinerary([
          {
            day: "Day 1: Arrival & Casuarina Sanctuary",
            schedule: [
              { time: "12:00 PM", title: "VIP Welcome & Room Check-In", desc: "Check-in with welcome coconut water and room tour." },
              { time: "02:00 PM", title: "Bengali Seafood Thali Lunch", desc: "Authentic Hilsa & Crab delicacies served at The Casuarina Grill." },
              { time: "05:00 PM", title: "Golden Hour Pine Walk", desc: "Walk through whispering pine plantations directly onto Tajpur shoreline." },
              { time: "08:00 PM", title: "Starry Night Bonfire & Live Barbecue", desc: "Smokey BBQ chicken and acoustic music around private garden bonfire." }
            ]
          },
          {
            day: "Day 2: Coastal Exploration & Shankarpur Harbor",
            schedule: [
              { time: "08:30 AM", title: "Lawn Garden Breakfast", desc: "Al-fresco breakfast overlooking manicured tropical lawns." },
              { time: "10:00 AM", title: "Shankarpur Fishing Harbor Visit", desc: "Watch wooden trawlers dock with morning catches." },
              { time: "03:00 PM", title: "Resort Lawn Relaxation & High Tea", desc: "Leisure afternoon tea with warm herbal infusions." },
              { time: "07:00 PM", title: "Private Candlelight Beach Dinner", desc: "Curated multi-course dinner with marine mocktails." }
            ]
          },
          {
            day: "Day 3: Wellness & Farewell",
            schedule: [
              { time: "07:00 AM", title: "Morning Yoga & Ocean Meditation", desc: "Guided relaxation on the quiet resort lawn." },
              { time: "09:00 AM", title: "Farewell Breakfast & Souvenir Gift", desc: "Complimentary breakfast & handmade seashell souvenir." },
              { time: "11:00 AM", title: "Check-Out & Station Transfer", desc: "Chauffeur transfer to Ramnagar/Balisai railway station." }
            ]
          }
        ]);
      }
      setIsGenerating(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B18]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-cream border border-gold/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#1E1B18]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#1E1B18]/60 hover:text-[#1E1B18] p-2 rounded-full hover:bg-gold/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-gold font-poppins text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>AI Concierge Intelligence</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">Custom Tajpur AI Itinerary Planner</h3>
          <p className="text-xs text-[#1E1B18]/70 mt-1 font-sans">
            Curate your dream coastal vacation with personalized timings, seafood recommendations, and red crab beach trails.
          </p>

          {!generatedItinerary ? (
            <div className="space-y-6 mt-6">
              <div>
                <label className="block text-xs font-poppins font-bold uppercase text-[#1E1B18] mb-2">Select Duration</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['2 Days', '3 Days', '4 Days'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-3 rounded-2xl border text-xs font-poppins font-semibold transition-all ${
                        duration === d
                          ? 'bg-[#1E1B18] text-gold border-gold shadow-goldGlow'
                          : 'bg-white text-[#1E1B18] border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-poppins font-bold uppercase text-[#1E1B18] mb-2">Select Vacation Vibe</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Romantic Escape', 'Family Relaxation', 'Seafood & Adventure', 'Wellness Retreat'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setVibe(v)}
                      className={`p-3 rounded-2xl border text-xs font-poppins font-semibold text-left transition-all ${
                        vibe === v
                          ? 'bg-[#1E1B18] text-gold border-gold shadow-goldGlow'
                          : 'bg-white text-[#1E1B18] border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-gold-shimmer to-gold-dark text-[#1E1B18]-dark font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <span>Generating AI Itinerary...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Personalized Itinerary</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6 mt-6">
              <div className="p-4 rounded-2xl bg-[#1E1B18]/10 border border-gold/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-poppins uppercase text-[#966E30] font-bold">Selected Plan</span>
                  <h4 className="font-serif font-bold text-[#1E1B18] text-base">{duration} • {vibe}</h4>
                </div>
                <button
                  onClick={() => setGeneratedItinerary(null)}
                  className="text-xs text-[#1E1B18] underline font-poppins font-semibold hover:text-[#966E30]"
                >
                  Change Vibe
                </button>
              </div>

              <div className="space-y-4">
                {generatedItinerary.map((dItem, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-gold/20 space-y-3 shadow-sm">
                    <h4 className="font-serif font-bold text-[#1E1B18] text-sm border-b border-gold/20 pb-2">{dItem.day}</h4>
                    <div className="space-y-2">
                      {dItem.schedule.map((sItem: any, sIdx: number) => (
                        <div key={sIdx} className="flex items-start gap-3 text-xs">
                          <span className="px-2 py-0.5 rounded bg-gold/10 text-[#966E30] font-poppins font-bold min-w-[70px] text-center">
                            {sItem.time}
                          </span>
                          <div>
                            <h5 className="font-semibold text-[#1E1B18]">{sItem.title}</h5>
                            <p className="text-[#1E1B18]/70 font-sans mt-0.5">{sItem.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/booking"
                  onClick={onClose}
                  className="flex-1 py-3.5 rounded-full bg-[#1E1B18] text-gold text-center font-poppins font-bold text-xs uppercase tracking-wider hover:bg-[#1E1B18] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book Stay For This Trip</span>
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
