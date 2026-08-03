import React, { useState } from 'react';
import { ShieldCheck, Users, BedDouble, ChevronRight } from 'lucide-react';
import type { Room } from '../data/resortData';
import { LuxuryBookingModal } from './LuxuryBookingModal';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-3xl bg-white border border-linen overflow-hidden shadow-luxury hover:border-gold transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5">
        <div>
          {/* Room Cover Image */}
          <div className="relative h-64 overflow-hidden">
            <picture className="w-full h-full block">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-80" />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-espresso/90 backdrop-blur-md text-gold text-[10px] font-poppins uppercase font-bold tracking-wider border border-gold/30">
                {room.view}
              </span>

              {room.sweetWater && (
                <span className="px-3 py-1 rounded-full bg-gold/90 text-white text-[10px] font-poppins uppercase font-bold tracking-wider shadow-goldGlow flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Sweet Water
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
              <div>
                <span className="text-[11px] font-poppins text-cream/80 block">Starting From</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-gold-light">₹{room.price}</span>
                  <span className="text-xs text-cream/70 font-poppins">/ night</span>
                  {room.originalPrice && (
                    <span className="text-xs text-cream/50 line-through font-poppins">₹{room.originalPrice}</span>
                  )}
                </div>
              </div>

              <span className="text-xs font-poppins font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-cream">
                {room.capacity}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-gold transition-colors duration-300">
                {room.name}
              </h3>
              <p className="text-xs text-taupe mt-1.5 line-clamp-2 leading-relaxed font-sans font-light">
                {room.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-poppins text-taupe pt-2 border-t border-linen">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold" />
                <span>{room.capacity}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-gold" />
                <span>{room.bedType}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 pt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3 rounded-full bg-gold text-white text-center font-poppins font-bold text-xs uppercase tracking-wider hover:bg-gold-dark transition-all duration-300 shadow-goldGlow flex items-center justify-center gap-1.5 group-hover:shadow-lg"
          >
            <span>Reserve Suite</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <LuxuryBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRoomId={room.id}
      />
    </>
  );
};
