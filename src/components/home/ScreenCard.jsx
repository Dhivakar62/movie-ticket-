import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Film, Crown, Sparkles, Tv, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function ScreenCard({ screen }) {
  const navigate = useNavigate();
  const { setSelectedScreen, setSelectedTime } = useBooking();
  const [activeTiming, setActiveTiming] = useState(screen.timings[0]);

  const handleBooking = () => {
    setSelectedScreen(screen);
    setSelectedTime(activeTiming);
    navigate(`/movie/${screen.id}`);
  };

  const getTierBadgeColor = (tier) => {
    switch (tier.toLowerCase()) {
      case 'platinum':
        return 'bg-gradient-to-r from-purple-900/40 to-indigo-900/40 text-purple-200 border-purple-500/40';
      case 'gold':
        return 'bg-brand-gold/15 text-brand-gold border-brand-gold/40';
      default:
        return 'bg-amber-900/20 text-amber-200 border-amber-500/30';
    }
  };

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#262e40] hover:border-brand-gold/50 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/10 group flex flex-col justify-between">
      
      {/* Top Header: Screen Number + Tier Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-[#212738]">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">Multiplex</span>
          <h3 className="font-serif-luxury text-base font-bold text-white group-hover:text-brand-gold transition-colors">
            {screen.screenNumber}
          </h3>
        </div>
        <div className={`px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 ${getTierBadgeColor(screen.tier)}`}>
          <Crown className="w-3 h-3" />
          <span>{screen.tier}</span>
        </div>
      </div>

      {/* Center Content: Poster + Movie Details */}
      <div className="py-4 flex gap-3.5">
        
        {/* Movie Poster Thumbnail */}
        <div className="w-20 h-28 rounded-xl overflow-hidden bg-[#0d1017] border border-[#2c354a] flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300">
          <img
            src={screen.poster}
            alt={screen.movieTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 left-1 px-1 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[8px] font-bold text-brand-gold flex items-center gap-0.5">
            <Star className="w-2 h-2 fill-brand-gold" />
            {screen.rating}
          </div>
        </div>

        {/* Movie Meta Information */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="inline-block px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[9px] font-bold uppercase tracking-wider">
            Now Showing
          </div>
          <h4 className="font-serif-luxury text-sm font-bold text-white truncate" title={screen.movieTitle}>
            {screen.movieTitle}
          </h4>
          <p className="text-[11px] text-gray-400 truncate">{screen.genre}</p>
          <div className="flex items-center gap-3 text-[10px] text-gray-400 pt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-brand-gold" />
              {screen.duration}
            </span>
            <span className="flex items-center gap-1">
              <Tv className="w-3 h-3 text-brand-gold" />
              {screen.format}
            </span>
          </div>
        </div>

      </div>

      {/* Show Timings */}
      <div className="space-y-1.5 pt-2 border-t border-[#212738]">
        <div className="flex items-center justify-between text-[10px] text-gray-400">
          <span>Show Timings</span>
          <span className="text-brand-gold font-medium">Selected: {activeTiming}</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {screen.timings.map((time) => {
            const isSelected = activeTiming === time;
            return (
              <button
                key={time}
                onClick={() => setActiveTiming(time)}
                className={`py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-gold text-black shadow-sm font-bold'
                    : 'bg-[#191f2c] text-gray-300 hover:bg-[#252e42] hover:text-white border border-[#262f44]'
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="pt-3 mt-3 border-t border-[#212738] grid grid-cols-2 gap-2">
        <button
          onClick={handleBooking}
          className="w-full py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-[#1a2130] hover:bg-[#232c40] border border-[#2d3850] transition-colors"
        >
          Details
        </button>
        <button
          onClick={handleBooking}
          className="w-full py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-sm flex items-center justify-center gap-1.5"
        >
          <span>Book</span>
        </button>
      </div>

    </div>
  );
}
