import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/resortData';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Sagar Kinare Tajpur Beach Resort & Spa. I am your 24/7 AI Concierge. How may I assist your stay today?',
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
      let replyText = "I'd be delighted to assist you with that! For direct personal bookings or custom arrangements, please call our front desk directly at " + HOTEL_INFO.phonePrimary + ".";
      let actions = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('tariff') || lower.includes('price') || lower.includes('room') || lower.includes('suite') || lower.includes('tariffs')) {
        replyText = `Our luxury suites start from ₹${ROOMS[3].price}/night for Standard Non-AC Cottages up to ₹${ROOMS[1].price}/night for Executive Family Suites. All suites feature 100% sweet groundwater baths, AC, and sea breeze access!`;
        actions = [
          { label: 'Book Executive Suite', action: 'book-suite' },
          { label: 'View All Tariffs', action: 'view-tariffs' }
        ];
      } else if (lower.includes('sweet') || lower.includes('water') || lower.includes('shower') || lower.includes('sweetwater')) {
        replyText = "100% Sweet Water Guarantee: Sagar Kinare is famous in Tajpur for supplying purified 100% sweet groundwater across all guest room showers and taps. No salty or sticky coastal bath water!";
      } else if (lower.includes('food') || lower.includes('menu') || lower.includes('dining') || lower.includes('seafood') || lower.includes('fish')) {
        replyText = "The Casuarina Seafood Grill serves fresh Pomfret Tawa Fry (₹420), Gold Prawn Malai Curry (₹450), Hilsa Fish Thali (₹550), and seaside tandoori charcoal barbecues!";
      } else if (lower.includes('crab') || lower.includes('beach') || lower.includes('crabs')) {
        replyText = "Tajpur Beach features millions of vibrant red crabs running across virgin sands! Our resort offers a shaded 300-meter Casuarina Pine Trail leading directly to the beach in 5 minutes.";
      } else if (lower.includes('check') || lower.includes('time')) {
        replyText = "Check-in time is 12:00 PM and Check-out time is 11:00 AM. Early check-in or late check-out is subject to availability.";
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
    }, 600);
  };

  return (
    <>
      {/* ALWAYS VISIBLE FLOATING AI BUTTON - SPECIFICATION COMPLIANT */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-3 px-5 py-3.5 rounded-full shadow-[0_20_50px_rgba(0,0,0,0.25)] border border-white/15 transition-all duration-500 group ${
            pulse ? 'ring-4 ring-gold/40 scale-105 shadow-goldGlow' : ''
          }`}
          style={{
            backgroundColor: 'rgba(15,23,42,0.92)',
            backdropFilter: 'blur(16px)',
          }}
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
            {/* DIM BACKDROP PAGE WITH BACKDROP BLUR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/35 backdrop-blur-[4px]"
            />

            {/* AI CHAT WINDOW - SOLID NON-TRANSPARENT BACKGROUND (#F8F6F2) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 bottom-6 right-4 sm:right-6 w-[calc(100%-32px)] sm:w-[380px] md:w-[420px] h-[600px] max-h-[90vh] bg-[#F8F6F2] border border-[#E6DED2] rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden text-espresso"
            >
              
              {/* HEADER (#FFFFFF) */}
              <div className="bg-white p-5 border-b border-[#E6DED2] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-[#C8A45A]">
                    <Bot className="w-5 h-5 text-[#C8A45A]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1E1B18]">Sagar Kinare AI Concierge</h3>
                    <span className="text-xs font-poppins text-[#8A6D3B] flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45A]" /> 100% Sweet Water Assistant
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'bn' : language === 'bn' ? 'hi' : 'en')}
                    className="p-2 rounded-full hover:bg-cream transition-colors text-taupe text-xs font-poppins font-bold flex items-center gap-1"
                    title="Change Language"
                  >
                    <Globe className="w-4 h-4 text-gold" />
                    <span className="uppercase">{language}</span>
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-full bg-cream border border-linen flex items-center justify-center text-espresso hover:bg-gold hover:text-white transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* MESSAGES BODY */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 font-sans bg-[#F8F6F2]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-end gap-2 max-w-[85%]">
                      {msg.sender === 'bot' && (
                        <div className="w-7 h-7 rounded-full bg-white border border-[#E6DED2] flex items-center justify-center text-gold shrink-0 mb-1">
                          <Bot className="w-4 h-4 text-gold" />
                        </div>
                      )}

                      <div
                        className={`p-4 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#B88A44] text-white rounded-br-none shadow-goldGlow'
                            : 'bg-white text-[#1E1B18] border border-[#E6DED2] rounded-bl-none shadow-sm'
                        }`}
                      >
                        <p className="whitespace-pre-line font-medium">{msg.text}</p>
                        <span
                          className={`text-[9px] block mt-1 text-right ${
                            msg.sender === 'user' ? 'text-white/80' : 'text-taupe'
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
                            onClick={() => handleSend(qa.label)}
                            className="text-[11px] font-poppins font-semibold bg-white border border-[#E6DED2] text-[#1E1B18] hover:border-gold hover:text-gold px-3 py-1.5 rounded-full transition-all shadow-sm flex items-center gap-1"
                          >
                            <span>{qa.label}</span>
                            <ChevronRight className="w-3 h-3 text-gold" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-taupe text-xs font-poppins pl-2">
                    <Bot className="w-4 h-4 text-gold animate-bounce" />
                    <span>AI Concierge is typing...</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* INPUT BAR */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="bg-white p-4 border-t border-[#E6DED2] flex items-center gap-3 shadow-md"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about tariffs, sweet water, dining..."
                  className="flex-1 bg-white border border-[#DDD5C8] rounded-full px-4 py-3 text-xs text-[#1E1B18] placeholder-[#777777] focus:outline-none focus:border-[#C8A45A] transition-colors"
                />

                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#C8A45A] text-white flex items-center justify-center hover:bg-[#A9792F] transition-all shadow-goldGlow shrink-0"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
