import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, Globe, ShieldCheck, ChevronRight, PhoneCall, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/resortData';
import { LuxuryBookingModal } from './LuxuryBookingModal';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
}

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [language, setLanguage] = useState<'en' | 'bn' | 'hi'>('en');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard Escape Key Close Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Sagar Kinare Tajpur Beach Resort & Spa. I am your 24/7 AI Concierge. How may I assist your luxury stay today?',
      timestamp: 'Just now',
      quickActions: [
        { label: '🏨 Check Suite Tariffs', action: 'tariffs' },
        { label: '🌊 Sweet Water Guarantee', action: 'sweetwater' },
        { label: '🍤 Seafood Grill Menu', action: 'dining' },
        { label: '🏖️ Tajpur Red Crabs', action: 'crabs' },
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText = "";
      let actions: { label: string; action: string }[] | undefined = undefined;

      if (lower.includes('tariff') || lower.includes('price') || lower.includes('room') || lower.includes('suite') || lower.includes('tariffs') || lower.includes('book')) {
        replyText = `Our luxury accommodations feature 4 distinct suite categories:\n\n• Deluxe AC Double Bed Suite — ₹2,800/night\n• Executive Family Suite (4 Pax) — ₹3,800/night\n• Super Deluxe Sea Breeze Suite — ₹3,200/night\n• Standard Non-AC Cottage — ₹1,800/night\n\nAll suites include guaranteed 100% sweet groundwater showers, complimentary breakfast, high-speed Wi-Fi, and 24/7 room service.`;
        actions = [
          { label: 'Book Your Stay Now', action: 'book-now' },
          { label: '🌊 Sweet Water Details', action: 'sweetwater' },
        ];
      } else if (lower.includes('sweet') || lower.includes('water') || lower.includes('shower') || lower.includes('sweetwater')) {
        replyText = `✨ Guaranteed 100% Sweet Groundwater:\nSagar Kinare is the premier resort in Tajpur with deep-bore sweet water purification. Unlike other coastal hotels with salty or sticky water, all our room showers, washbasins, and taps supply 100% pure sweet water 24 hours a day!`;
      } else if (lower.includes('food') || lower.includes('menu') || lower.includes('dining') || lower.includes('seafood') || lower.includes('fish') || lower.includes('restaurant')) {
        replyText = `🍤 The Casuarina Seafood Grill Specialty Highlights:\n\n• Fresh Pomfret Tawa Fry — ₹420\n• Gold Prawn Malai Curry — ₹450\n• Bay of Bengal Hilsa Thali — ₹550\n• Beachside Candlelight Barbecue — ₹1,200 (For Couples)\n\nWe serve fresh local catch sourced daily directly from Mandarmani & Tajpur fishermen!`;
      } else if (lower.includes('crab') || lower.includes('beach') || lower.includes('crabs') || lower.includes('distance')) {
        replyText = `🏖️ Tajpur Red Crab Beach Trail:\nOur resort is located just 300 meters from Tajpur Beach. Enjoy a shaded 5-minute walk through our whispering Casuarina Pine Trail directly onto pristine crimson sands filled with millions of famous Tajpur red crabs!`;
      } else if (lower.includes('check') || lower.includes('time') || lower.includes('hours')) {
        replyText = `⏰ Check-In & Check-Out Timings:\n\n• Standard Check-In: 12:00 PM\n• Standard Check-Out: 11:00 AM\n\nEarly check-in and late check-out options are available upon request based on suite availability.`;
      } else if (lower.includes('phone') || lower.includes('contact') || lower.includes('call') || lower.includes('number')) {
        replyText = `📞 Front Desk Direct Contact:\nPrimary Desk: ${HOTEL_INFO.phonePrimary}\nSecondary Line: ${HOTEL_INFO.phoneSecondary}\nEmail: ${HOTEL_INFO.email}\nAddress: Tajpur Beach Road, Purba Medinipur, West Bengal 721423.`;
      } else {
        replyText = `Thank you for reaching out! For instant reservations, custom group dining, or special beach event setups, please call our front desk directly at ${HOTEL_INFO.phonePrimary}.\n\n(Note: Live external AI API endpoints such as OpenAI, Gemini, Claude, or n8n can also be connected here for open-ended queries.)`;
        actions = [
          { label: '🏨 Check Suite Tariffs', action: 'tariffs' },
          { label: '📞 Call Front Desk', action: 'call' },
        ];
      }

      // Handle Quick Action Trigger
      if (textToSend === 'Book Your Stay Now') {
        setIsBookingModalOpen(true);
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickActions: actions,
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* ALWAYS VISIBLE FLOATING AI LAUNCHER BUTTON */}
      <div className="fixed bottom-6 right-6 z-[9995]">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-3 px-5 py-3.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/15 transition-all duration-500 group ${
            pulse ? 'ring-4 ring-gold/40 scale-105 shadow-goldGlow' : ''
          }`}
          style={{
            backgroundColor: 'rgba(15,23,42,0.92)',
            backdropFilter: 'blur(16px)',
          }}
          aria-label="Open Sagar Kinare AI Concierge"
        >
          <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-[#C8A45A] group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-[#C8A45A]" />
          </div>

          <div className="text-left hidden sm:block">
            <span className="font-serif font-bold text-sm text-white block leading-tight">AI Concierge</span>
            <span className="text-[10px] font-poppins text-white/75 block">24/7 Resort Assistant</span>
          </div>

          <span className="relative flex h-3 w-3 sm:ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A45A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8A45A]"></span>
          </span>
        </motion.button>
      </div>

      {/* AI CHAT WINDOW & BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* DIM BACKDROP PAGE WITH BACKDROP BLUR - HIGHER THAN STICKY HEADER (z-[9990]) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[10002] bg-black/55 backdrop-blur-md"
            />

            {/* AI CHAT WINDOW CONTAINER (Higher than Backdrop z-[10002] & Header z-[9990]) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[10003] bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] md:w-[420px] h-[calc(100vh-80px)] sm:h-[min(720px,calc(100vh-120px))] bg-[#F8F5F0] border border-[#E6DED2] rounded-t-[24px] sm:rounded-[24px] shadow-[0_30px_90px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden text-[#1E1B18]"
            >
              
              {/* CHAT HEADER */}
              <div className="bg-white px-5 py-4 border-b border-[#E6DED2] flex items-center justify-between shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-[#C8A45A]">
                    <Bot className="w-5 h-5 text-[#C8A45A]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1E1B18] leading-tight">Sagar Kinare AI Concierge</h3>
                    <span className="text-[11px] font-poppins text-[#8A6D3B] flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45A]" /> 100% Sweet Water Assistant
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'bn' : language === 'bn' ? 'hi' : 'en')}
                    className="px-2.5 py-1 rounded-full hover:bg-[#F8F5F0] transition-colors text-taupe text-xs font-poppins font-bold flex items-center gap-1 border border-linen"
                    title="Change Language"
                  >
                    <Globe className="w-3.5 h-3.5 text-gold" />
                    <span className="uppercase">{language}</span>
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-[#F8F5F0] border border-linen flex items-center justify-center text-[#1E1B18] hover:bg-gold hover:text-white transition-all"
                    aria-label="Close Chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* MESSAGES BODY (SCROLLABLE) */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans bg-[#F8F5F0]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-end gap-2 max-w-[88%] sm:max-w-[85%]">
                      {msg.sender === 'bot' && (
                        <div className="w-7 h-7 rounded-full bg-white border border-[#E6DED2] flex items-center justify-center text-gold shrink-0 mb-1 shadow-sm">
                          <Bot className="w-4 h-4 text-gold" />
                        </div>
                      )}

                      <div
                        className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#C8A45A] text-white rounded-br-none shadow-md font-medium'
                            : 'bg-white text-[#1E1B18] border border-[#E6DED2] rounded-bl-none shadow-sm font-medium'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                        <span
                          className={`text-[9px] block mt-1.5 text-right ${
                            msg.sender === 'user' ? 'text-white/80' : 'text-[#888888]'
                          }`}
                        >
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Quick Action Chips */}
                    {msg.quickActions && (
                      <div className="flex flex-wrap gap-2 mt-3 pl-9">
                        {msg.quickActions.map((qa, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (qa.action === 'book-now') {
                                setIsBookingModalOpen(true);
                              } else if (qa.action === 'call') {
                                window.location.href = `tel:${HOTEL_INFO.phonePrimary}`;
                              } else {
                                handleSend(qa.label);
                              }
                            }}
                            className="text-[11px] font-poppins font-semibold bg-white border border-[#E6DED2] text-[#1E1B18] hover:border-gold hover:text-gold px-3 py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1"
                          >
                            {qa.action === 'book-now' && <Calendar className="w-3 h-3 text-gold" />}
                            {qa.action === 'call' && <PhoneCall className="w-3 h-3 text-gold" />}
                            <span>{qa.label}</span>
                            <ChevronRight className="w-3 h-3 text-gold" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Animated 3-Dots Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-taupe text-xs font-poppins pl-1 py-1">
                    <div className="w-7 h-7 rounded-full bg-white border border-[#E6DED2] flex items-center justify-center text-gold shrink-0 shadow-sm">
                      <Bot className="w-4 h-4 text-gold" />
                    </div>
                    <div className="bg-white border border-[#E6DED2] px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 bg-[#C8A45A] rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-[#C8A45A] rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-[#C8A45A] rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* INPUT BAR (STICKY AT BOTTOM) */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="bg-white p-3 border-t border-[#E6DED2] flex items-center gap-2 shadow-md shrink-0"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about tariffs, sweet water, dining..."
                  className="flex-1 bg-[#F8F5F0] border border-[#DDD5C8] rounded-full px-4 py-2.5 text-xs text-[#1E1B18] placeholder-[#888888] focus:outline-none focus:border-[#C8A45A] focus:ring-1 focus:ring-[#C8A45A] transition-colors"
                />

                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-full bg-[#C8A45A] text-white flex items-center justify-center hover:bg-[#B88A44] disabled:opacity-50 disabled:hover:bg-[#C8A45A] transition-all shadow-md shrink-0"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Booking Modal Direct Launcher */}
      <LuxuryBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
