import React, { useState } from 'react';
import ScreenCard from './ScreenCard';
import { MULTIPLEX_SCREENS } from '../../data/movieData';
import { Film, Sparkles, Filter } from 'lucide-react';

export default function MultiplexGrid() {
  const [filterTier, setFilterTier] = useState('ALL');

  const filteredScreens = filterTier === 'ALL'
    ? MULTIPLEX_SCREENS
    : MULTIPLEX_SCREENS.filter(s => s.tier.toUpperCase() === filterTier);

  return (
    <section id="screens" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#212738] gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Auditoriums</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white">
            Multi-plex Screen <span className="gold-text-gradient">Experience</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
            Explore 9 world-class cinema screens featuring 4K Laser projection, 70mm IMAX format, and personalized recliner comfort.
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-[#273044]">
          {['ALL', 'PREMIUM', 'GOLD', 'PLATINUM'].map((tier) => (
            <button
              key={tier}
              onClick={() => setFilterTier(tier)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                filterTier === tier
                  ? 'bg-brand-gold text-black shadow-sm font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tier === 'ALL' ? 'All (9)' : tier}
            </button>
          ))}
        </div>
      </div>

      {/* 3x3 Multiplex Grid (matching Stitch Screen 1) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreens.map((screen) => (
          <ScreenCard key={screen.id} screen={screen} />
        ))}
      </div>

    </section>
  );
}
