import React from 'react';
import { MULTIPLEX_SCREENS } from '../../data/movieData';
import { Tv, Crown, Check } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function ScreenChoiceSelector() {
  const { selectedScreen, setSelectedScreen } = useBooking();

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#242c3d] p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <Tv className="w-4 h-4 text-brand-gold" />
          <span>Screen Choice</span>
        </h3>
        <span className="text-[11px] text-brand-gold font-medium">
          {selectedScreen.tier} Experience
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
        {MULTIPLEX_SCREENS.slice(0, 3).map((screen) => {
          const isSelected = selectedScreen.id === screen.id;
          return (
            <button
              key={screen.id}
              onClick={() => setSelectedScreen(screen)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-brand-gold/20 to-[#1b2232] border-brand-gold shadow-gold-sm'
                  : 'bg-[#181e2b] border-[#293245] hover:border-gray-500'
              }`}
            >
              {isSelected && (
                <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-brand-gold text-black flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              )}
              
              <div>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-semibold">
                  Auditorium
                </span>
                <p className="font-serif-luxury text-xs sm:text-sm font-bold text-white">
                  {screen.screenNumber}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px]">
                <span className="text-brand-gold font-semibold">{screen.tier}</span>
                <span className="text-gray-400">{screen.format.split(' ')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
