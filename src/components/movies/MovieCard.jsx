import React, { useState } from 'react';
import { Star, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie, onBookTickets }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback demo poster if any image load issues arise
  const fallbackPoster = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&h=900&q=80';

  return (
    <div className="group relative glass-elevated rounded-3xl p-3 flex flex-col justify-between h-full">
      
      {/* Poster Image Container (Exact 2:3 Portrait Aspect Ratio) */}
      <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-[#FAF8FE] border border-white/80 shadow-xs">
        
        {/* Shimmer Placeholder while loading */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-white/60 to-purple-100/40 animate-pulse" />
        )}

        <img
          src={imageError ? fallbackPoster : (movie.poster || fallbackPoster)}
          alt={movie.title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        
        {/* Refined Glass Glint & Vignette Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />

        {/* Certificate Pill Badge */}
        {movie.certificate && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-wider">
            {movie.certificate}
          </div>
        )}

        {/* IMAX / Screen Badge if applicable */}
        {movie.screens?.[0]?.includes('IMAX') && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#6722A0]/85 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#F2CA50] tracking-wider">
            IMAX
          </div>
        )}
      </div>

      {/* Movie Details Info */}
      <div className="mt-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Movie Title */}
          <h3 className="font-display font-extrabold text-[15px] sm:text-base text-[#241532] tracking-tight truncate group-hover:text-[#6722A0] transition-colors" title={movie.title}>
            {movie.title}
          </h3>

          {/* Language & Genre */}
          <p className="text-xs text-[#746A7D] font-medium mt-0.5 truncate">
            {movie.language} • {movie.genre}
          </p>

          {/* Star Rating & Vote Count */}
          <div className="mt-2 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
            <span className="text-xs font-bold text-[#241532]">
              {movie.rating}
            </span>
            <span className="text-[11px] text-[#746A7D] font-normal">
              ({movie.votes})
            </span>
          </div>

          {/* Duration info */}
          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#746A7D]">
            <Clock className="w-3 h-3 text-[#746A7D]" />
            <span>{movie.duration}</span>
          </div>
        </div>

        {/* Book Tickets CTA Button */}
        <div className="mt-4 pt-1">
          <button
            type="button"
            onClick={() => onBookTickets(movie)}
            className="w-full py-2.5 px-4 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(103,34,160,0.22)] flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group-hover:shadow-[0_6px_20px_rgba(103,34,160,0.32)]"
          >
            <span>Book Tickets</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default MovieCard;
