import { motion } from 'framer-motion';
import React from 'react';
import { BLOGS } from '../data/resortData';
import { User, ArrowRight, Clock } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream pt-0 pb-20 text-espresso">
      
      {/* HERO BANNER WITH DARK OVERLAY */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" alt="Blogs Hero"
             className="w-full h-full object-cover object-center"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.60) 50%, rgba(15,15,15,0.75) 100%)'
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }} className="text-gold-light text-xs font-poppins uppercase tracking-widest font-extrabold block mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
            Coastal Journal
          </span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}>
            Tajpur Travel Guides & Stories
          </h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Discover insider tips on Tajpur red crab beach walks, best seafood seasons, and nearby day trips to Shankarpur & Mandarmani.
          </p>
        </div>
      </section>

      {/* BLOGS LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS.map((blog) => (
            <article key={blog.id} className="rounded-3xl bg-white border border-linen overflow-hidden shadow-luxury hover:border-gold transition-all flex flex-col justify-between">
              <div>
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-poppins text-gold font-bold">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-espresso">{blog.title}</h3>
                  <p className="text-xs text-taupe leading-relaxed font-sans">{blog.excerpt}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button className="text-xs font-poppins font-bold text-gold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#966E30]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
};
