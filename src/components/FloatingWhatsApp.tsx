import React from 'react';
import { MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/resortData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Sagar%20Kinare%20Concierge,%20I%20would%20like%20to%20inquire%20about%20room%20availability.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Direct WhatsApp Concierge Chat"
      className="fixed bottom-6 left-6 z-50 p-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
    </a>
  );
};
