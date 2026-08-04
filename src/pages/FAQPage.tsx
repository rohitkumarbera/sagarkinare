import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FAQS } from '../data/resortData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const categories = ['All', 'Booking & Tariff', 'Check-in & Rules', 'Dining & Food', 'Beach & Location'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-0 pb-20 text-[#1E1B18]">
      
      {/* UNIQUE HERO BANNER */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 bg-[#1E1B18] text-[#F8F5F0] overflow-hidden border-b-2 border-gold/30">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold text-xs font-poppins uppercase tracking-widest font-semibold block">Guest Assistance</span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif font-extrabold tracking-wide text-white text-4xl sm:text-6xl font-bold text-white" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)" }}>Frequently Asked Questions</h1>
          <p className="text-[#F8F5F0]/80 text-xs sm:text-sm max-w-xl mx-auto font-sans font-light">
            Everything you need to know about stay tariffs, sweet water guarantees, check-in policies, and beach access.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative pt-4">
            <input
              type="text"
              placeholder="Search questions (e.g. sweet water, check-in, food)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/90 text-[#1E1B18] placeholder-charcoal/50 rounded-full px-5 py-3 text-xs font-poppins pl-11 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Search className="w-4 h-4 text-[#1E1B18]/60 absolute left-4 top-7" />
          </div>
        </div>
      </section>

      {/* CATEGORIES & ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1E1B18] text-gold shadow-gold-glow border border-gold/40'
                  : 'bg-white text-[#1E1B18] hover:bg-[#EFEAE2] border border-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-gold/30 shadow-luxury overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-[#1E1B18] text-base hover:text-[#966E30]"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`} />
              </button>

              {openFaq === faq.id && (
                <div className="px-5 pb-5 text-xs text-[#1E1B18]/80 font-sans leading-relaxed border-t border-[#E9E2D8] pt-3">
                  <p>{faq.answer}</p>
                  <span className="inline-block mt-3 text-[10px] font-poppins font-bold text-gold uppercase px-2 py-0.5 rounded bg-[#1E1B18]">
                    Category: {faq.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* STILL HAVE QUESTIONS CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-[#1E1B18] text-[#F8F5F0] border-2 border-gold/30 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-gold mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-white">Have Additional Questions?</h3>
          <p className="text-xs text-[#F8F5F0]/80 max-w-md mx-auto font-sans">
            Our 24/7 Front Desk concierge is available to answer any specific query regarding your upcoming stay.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gold text-[#1E1B18]-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Contact Concierge
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
};
