import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { REVIEWS, type Review } from '../data/resortData';
import { Star, CheckCircle2, Plus } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'All'>('All');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewRoom, setNewReviewRoom] = useState('Executive Deluxe Suite');
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);

  const filteredReviews = reviewsList.filter(r => {
    if (filterRating === 'All') return true;
    return r.rating === filterRating;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewComment) return;

    const newEntry: Review = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor,
      location: 'Verified Guest',
      rating: newReviewRating,
      comment: newReviewComment,
      date: 'Just now',
      roomBooked: newReviewRoom,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true,
    };

    setReviewsList([newEntry, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    alert('Thank you for sharing your review! It has been posted.');
  };

  return (
    <div className="min-h-screen bg-cream pt-0 pb-20 text-espresso">
      
      {/* HERO BANNER WITH DARK OVERLAY */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center pt-[140px] sm:pt-[160px] pb-16 sm:pb-20 text-white overflow-hidden border-b border-linen">
        <div className="absolute inset-0 z-0">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80" alt="Guest Reviews Hero"
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
            Verified Experiences
          </span>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-wide leading-tight" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.85), 0 2px 4px rgba(0,0,0,0.9)' }}>
            Guest Reviews & Testimonials
          </h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="text-white/95 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-sans font-medium leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Read authentic reviews from guests who experienced our 100% sweet water showers, beach pine trails, and seaside bonfire evenings.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Rating Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(['All', 5, 4] as const).map((r) => (
            <button
              key={r}
              onClick={() => setFilterRating(r)}
              className={`px-6 py-2 rounded-full text-xs font-poppins font-bold uppercase tracking-wider transition-all duration-300 ${
                filterRating === r
                  ? 'bg-gold text-white shadow-goldGlow'
                  : 'bg-white text-espresso border border-linen hover:border-gold'
              }`}
            >
              {r === 'All' ? 'All Reviews' : `${r} Star Ratings`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="p-8 rounded-3xl bg-white border border-linen shadow-luxury flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-poppins uppercase px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <p className="text-xs text-taupe italic leading-relaxed font-sans">"{rev.comment}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-linen">
                <img src={rev.avatar} alt={rev.author} className="w-10 h-10 rounded-full object-cover border-2 border-gold" />
                <div>
                  <h5 className="font-serif font-bold text-espresso text-sm">{rev.author}</h5>
                  <span className="text-[11px] text-taupe block font-sans">{rev.location} • {rev.roomBooked}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="p-8 rounded-3xl bg-white border border-linen shadow-luxury max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-gold text-xs font-poppins font-bold uppercase tracking-widest block mb-1">Share Your Experience</span>
            <h3 className="font-serif text-2xl font-bold text-espresso">Write a Review</h3>
          </div>

          <form onSubmit={handleAddReview} className="space-y-4 text-xs font-poppins">
            <div>
              <label className="block text-espresso font-bold uppercase mb-1">Your Name</label>
              <input
                type="text"
                required
                value={newReviewAuthor}
                onChange={(e) => setNewReviewAuthor(e.target.value)}
                placeholder="e.g. Rahul Sen"
                className="w-full p-3.5 rounded-xl border border-linen bg-cream text-espresso focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-espresso font-bold uppercase mb-1">Suite Stayed In</label>
              <select
                value={newReviewRoom}
                onChange={(e) => setNewReviewRoom(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-linen bg-cream text-espresso focus:outline-none focus:border-gold"
              >
                <option value="Executive Deluxe Suite">Executive Deluxe Suite</option>
                <option value="Premium AC Sea View Cottage">Premium AC Sea View Cottage</option>
                <option value="Family Suite">Family Suite</option>
                <option value="Standard Non-AC Room">Standard Non-AC Room</option>
              </select>
            </div>

            <div>
              <label className="block text-espresso font-bold uppercase mb-1">Rating</label>
              <select
                value={newReviewRating}
                onChange={(e) => setNewReviewRating(Number(e.target.value))}
                className="w-full p-3.5 rounded-xl border border-linen bg-cream text-espresso focus:outline-none focus:border-gold"
              >
                <option value={5}>5 Stars - Outstanding</option>
                <option value={4}>4 Stars - Very Good</option>
                <option value={3}>3 Stars - Average</option>
              </select>
            </div>

            <div>
              <label className="block text-espresso font-bold uppercase mb-1">Your Review</label>
              <textarea
                required
                rows={4}
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                placeholder="Share your stay experience, sweet water showers, seafood dining, and staff service..."
                className="w-full p-3.5 rounded-xl border border-linen bg-cream text-espresso focus:outline-none focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gold text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-goldGlow hover:bg-gold-dark transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Guest Review</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
