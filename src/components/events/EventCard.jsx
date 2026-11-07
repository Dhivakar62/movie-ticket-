import React from 'react';
import { Heart, Gift, Sparkles, Film, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function EventCard({ event, onSelect }) {
  const { selectedEventType, setSelectedEventType } = useBooking();
  const isSelected = selectedEventType === event.id;

  const handleSelect = () => {
    setSelectedEventType(event.id);
    if (onSelect) onSelect();
  };

  return (
    <div
      onClick={handleSelect}
      className={`rounded-2xl p-4 transition-all duration-300 cursor-pointer border flex flex-col justify-between group ${
        isSelected
          ? 'bg-[#181e2b] border-brand-gold shadow-xl shadow-brand-gold/15'
          : 'bg-[#121622] border-[#252e42] hover:border-gray-500 hover:shadow-lg'
      }`}
    >
      <div>
        {/* Event Thumbnail */}
        <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0a0d14] relative mb-3.5 border border-[#262f44]">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-brand-gold border border-brand-gold/30">
            {event.badge}
          </div>
        </div>

        {/* Content */}
        <h4 className="font-serif-luxury text-base font-bold text-white group-hover:text-brand-gold transition-colors">
          {event.name}
        </h4>
        <p className="text-xs text-brand-gold font-medium mt-0.5">{event.tagline}</p>
        <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
          {event.description}
        </p>
      </div>

      {/* Button */}
      <div className="pt-4 mt-4 border-t border-[#1f2638] flex items-center justify-between">
        <span className="text-[11px] text-gray-400">
          Starts from <span className="font-bold text-white">₹15,000</span>
        </span>
        <button
          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
            isSelected
              ? 'bg-brand-gold text-black'
              : 'bg-[#1b2232] text-gray-300 hover:bg-brand-gold hover:text-black border border-[#2a344a]'
          }`}
        >
          <span>{isSelected ? 'Selected' : 'Book Event'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
