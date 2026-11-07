import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { Crown, Sparkles, Check } from 'lucide-react';

export default function SeatMap() {
  const { selectedSeats, toggleSeat, selectedScreen, selectedCategory } = useBooking();

  // Pre-determined occupied seats to make demo ultra-realistic
  const occupiedSeats = new Set([
    "K4", "K5", "J7", "J8",
    "H5", "H6", "G7", "G8", "G9", "F11", "F12", "E3", "E4", "E15",
    "D8", "D9", "C10", "C11", "B4", "B5", "A6", "A7"
  ]);

  // Layout configuration
  const rows = [
    { row: "K", category: "platinum", count: 14, label: "Platinum VIP Recliner" },
    { row: "J", category: "platinum", count: 14, label: "Platinum VIP Recliner" },
    { row: "H", category: "gold", count: 18, label: "Gold Prime Club" },
    { row: "G", category: "gold", count: 18, label: "Gold Prime Club" },
    { row: "F", category: "gold", count: 18, label: "Gold Prime Club" },
    { row: "E", category: "gold", count: 18, label: "Gold Prime Club" },
    { row: "D", category: "silver", count: 18, label: "Silver Executive" },
    { row: "C", category: "silver", count: 18, label: "Silver Executive" },
    { row: "B", category: "silver", count: 18, label: "Silver Executive" },
    { row: "A", category: "silver", count: 18, label: "Silver Executive" },
  ];

  return (
    <div className="bg-[#10141e] rounded-2xl border border-[#232b3d] p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-gold/10 blur-[50px] pointer-events-none" />

      {/* Screen Title & Info */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1f2638]">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Interactive Layout</span>
          <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>{selectedScreen.screenNumber} Seat Map</span>
            <span className="text-xs px-2 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              {selectedScreen.format}
            </span>
          </h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-400 block">Selected Seats</span>
          <span className="font-mono text-xs sm:text-sm font-bold text-brand-gold">
            {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
          </span>
        </div>
      </div>

      {/* Curved Screen Graphic (matching Stitch Screen 3) */}
      <div className="w-full max-w-xl mx-auto mb-10 text-center">
        <div className="relative">
          {/* Curved white/gold cinema screen */}
          <div className="w-full h-4 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-[50%] blur-[1px] opacity-80" />
          <div className="w-4/5 mx-auto h-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-[50%] -mt-1.5 shadow-[0_5px_25px_rgba(212,175,55,0.6)]" />
          <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mt-2">
            All Eyes This Way • Cinema Screen
          </span>
        </div>
      </div>

      {/* Cinema Seating Grid */}
      <div className="overflow-x-auto pb-4 pt-2">
        <div className="min-w-[620px] max-w-2xl mx-auto space-y-2">
          
          {rows.map(({ row, category, count }, rowIndex) => {
            const isCategoryDivider = rowIndex === 2 || rowIndex === 6;

            return (
              <React.Fragment key={row}>
                {isCategoryDivider && (
                  <div className="pt-3 pb-1 flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold/70">
                      {rowIndex === 2 ? '--- Gold Tier (₹' + selectedScreen.pricing.gold + ') ---' : '--- Silver Tier (₹' + selectedScreen.pricing.silver + ') ---'}
                    </span>
                    <div className="flex-1 h-px bg-[#202738]" />
                  </div>
                )}

                <div className="flex items-center justify-center gap-2">
                  {/* Left Row Label */}
                  <span className="w-5 text-center font-mono text-xs font-bold text-gray-400">
                    {row}
                  </span>

                  {/* Seat Row */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: count }, (_, i) => i + 1).map((seatNum) => {
                      const seatCode = `${row}${seatNum}`;
                      const isOccupied = occupiedSeats.has(seatCode);
                      const isSelected = selectedSeats.includes(seatCode);

                      // Aisle split
                      const isAisleSplit = (count === 18 && seatNum === 9) || (count === 14 && seatNum === 7);

                      return (
                        <React.Fragment key={seatCode}>
                          <button
                            type="button"
                            disabled={isOccupied}
                            onClick={() => toggleSeat(seatCode, category)}
                            title={`Seat ${seatCode} (${category.toUpperCase()} - ₹${selectedScreen.pricing[category]})`}
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md text-[10px] font-mono font-bold transition-all flex items-center justify-center relative ${
                              isOccupied
                                ? 'bg-[#151923] text-gray-600 border border-[#202736] cursor-not-allowed opacity-60'
                                : isSelected
                                ? 'bg-gradient-to-br from-brand-goldLight to-brand-gold text-black border-2 border-white shadow-[0_0_12px_rgba(212,175,55,0.7)] scale-110 z-10'
                                : category === 'platinum'
                                ? 'bg-[#1a202d] text-purple-300 border border-purple-500/30 hover:border-brand-gold hover:scale-105'
                                : category === 'gold'
                                ? 'bg-[#171d2a] text-amber-200 border border-amber-500/25 hover:border-brand-gold hover:scale-105'
                                : 'bg-[#151924] text-gray-300 border border-[#293245] hover:border-brand-gold hover:scale-105'
                            }`}
                          >
                            {isSelected ? (
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            ) : (
                              <span>{seatNum}</span>
                            )}
                          </button>

                          {/* Aisle Spacer */}
                          {isAisleSplit && <div className="w-5" />}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Right Row Label */}
                  <span className="w-5 text-center font-mono text-xs font-bold text-gray-400">
                    {row}
                  </span>
                </div>
              </React.Fragment>
            );
          })}

        </div>
      </div>

      {/* Legend Bar (matching Stitch Screen 3 bottom) */}
      <div className="mt-8 pt-4 border-t border-[#1f2638] flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#151924] border border-[#293245]" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#151923] border border-[#202736] opacity-60" />
          <span>Occupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-brand-gold text-black flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="text-brand-gold font-bold">Selected</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-gray-500 pl-4 border-l border-gray-800">
          <span className="text-purple-400 font-semibold">Platinum: ₹{selectedScreen.pricing.platinum}</span> • 
          <span className="text-amber-400 font-semibold">Gold: ₹{selectedScreen.pricing.gold}</span> • 
          <span className="text-gray-300 font-semibold">Silver: ₹{selectedScreen.pricing.silver}</span>
        </div>
      </div>

    </div>
  );
}
