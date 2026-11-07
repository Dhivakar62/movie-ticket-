import React, { useState } from 'react';
import MovieCard from '../components/movies/MovieCard';
import { NOW_SHOWING_MOVIES, POPULAR_MOVIES, COMING_SOON_MOVIES } from '../data/movieData';
import { Film, Sparkles, Flame, Clock } from 'lucide-react';

export default function Movies() {
  const [activeGenre, setActiveGenre] = useState('ALL');

  const genres = ['ALL', 'SCI-FI', 'ACTION', 'DRAMA', 'ADVENTURE'];

  const filterList = (list) => {
    if (activeGenre === 'ALL') return list;
    return list.filter(m => m.genre.toUpperCase().includes(activeGenre));
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#212738] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">
            <Film className="w-3.5 h-3.5" />
            <span>Curated Filmography</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-black text-white">
            Now Showing & <span className="gold-text-gradient">Premieres</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
            Select your preferred movie and proceed directly to screen choice and row-wise recliner seat selection.
          </p>
        </div>

        {/* Genre Filter Tabs */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-[#273044]">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                activeGenre === g
                  ? 'bg-brand-gold text-black shadow-sm font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Row 1: Now Showing */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-brand-gold" />
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Now Showing
            </h2>
          </div>
          <span className="text-xs text-brand-gold font-semibold">4 Blockbusters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterList(NOW_SHOWING_MOVIES).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Row 2: Popular Screenings */}
      <section className="space-y-6 pt-6 border-t border-[#1c2232]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Popular Screenings
            </h2>
          </div>
          <span className="text-xs text-brand-gold font-semibold">Audience Favorites</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterList(POPULAR_MOVIES).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Row 3: Coming Soon */}
      <section className="space-y-6 pt-6 border-t border-[#1c2232]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Coming Soon
            </h2>
          </div>
          <span className="text-xs text-amber-400 font-semibold">Future Premieres</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMING_SOON_MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isComingSoon={true} />
          ))}
        </div>
      </section>

    </div>
  );
}
