import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIConcierge } from './components/AIConcierge';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { BookingPage } from './pages/BookingPage';
import { GalleryPage } from './pages/GalleryPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { AttractionsPage } from './pages/AttractionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { OffersPage } from './pages/OffersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { EventsPage } from './pages/EventsPage';
import { WeddingPage } from './pages/WeddingPage';
import { CorporatePage } from './pages/CorporatePage';
import { BlogsPage } from './pages/BlogsPage';
import { CareerPage } from './pages/CareerPage';
import { PoliciesPage } from './pages/PoliciesPage';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="flex flex-col min-h-screen bg-[#F8F5F0]">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/wedding" element={<WeddingPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/privacy" element={<PoliciesPage initialTab="privacy" />} />
            <Route path="/terms" element={<PoliciesPage initialTab="terms" />} />
            <Route path="/cancellation" element={<PoliciesPage initialTab="cancellation" />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Utilities */}
        <AIConcierge />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
