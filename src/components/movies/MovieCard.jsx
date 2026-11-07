import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Globe, Ticket, Play } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { MULTIPLEX_SCREENS } from '../../data/movieData';

export default function MovieCard({ movie, isComingSoon = false }) {
  const navigate = useNavigate();
  const { setSelectedScreen } = useBooking();

  const handleBook = () => {
    if (isComingSoon) return;
    const matchedScreen = MULTIPLEX_SCREENS.find(s => s.id === movie.screenId) || MULTIPLEX_SCREENS[0];
    setSelectedScreen(matchedScreen);
    navigate(`/movie/${matchedScreen.id}`);
  };

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#262f44] hover:border-brand-gold/60 p-3.5 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/15 group flex flex-col justify-between">
      
      {/* Poster Image Container */}
      <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0d1017] border border-[#2a344a] relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating or Coming Soon Badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold border border-white/10">
          {isComingSoon ? (
            <span className="text-amber-400 font-semibold">{movie.releaseDate}</span>
          ) : (
            <>
              <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
              <span className="text-white">{movie.rating}</span>
            </>
          )}
        </div>

        {/* Format Badge */}
        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-brand-gold/90 text-black text-[9px] font-extrabold uppercase tracking-wider">
          {movie.format || 'Dolby Atmos'}
        </div>
      </div>

      {/* Movie Details */}
      <div className="pt-3.5 space-y-2">
        <h4 className="font-serif-luxury text-sm sm:text-base font-bold text-white group-hover:text-brand-gold transition-colors truncate" title={movie.title}>
          {movie.title}
        </h4>
        
        <p className="text-xs text-gray-400 truncate">
          {movie.genre}
        </p>

        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-[#21283a]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-brand-gold" />
            {movie.duration || 'TBA'}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-brand-gold" />
            {movie.language || 'English'}
          </span>
        </div>

        {/* Button */}
        <div className="pt-2">
          {isComingSoon ? (
            <button
              onClick={() => alert(`You have subscribed to notifications for ${movie.title}!`)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-[#1a2232] hover:bg-[#253046] border border-[#2f3b54] transition-all flex items-center justify-center gap-1.5"
            >
              <Play className="w-3 h-3 text-brand-gold" />
              <span>Watch Teaser</span>
            </button>
          ) : (
            <button
              onClick={handleBook}
              className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-sm flex items-center justify-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Book Ticket</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
