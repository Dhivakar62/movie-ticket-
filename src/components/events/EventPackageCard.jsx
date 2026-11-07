import React from 'react';
import { Crown, Check, Sparkles } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function EventPackageCard({ pkg }) {
  const { selectedEventPackage, setSelectedEventPackage } = useBooking();
  const isSelected = selectedEventPackage?.id === pkg.id;

  return (
    <div
      onClick={() => setSelectedEventPackage(pkg)}
      className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
        isSelected
          ? 'bg-gradient-to-b from-[#1c2232] to-[#121622] border-2 border-brand-gold shadow-2xl shadow-brand-gold/20 scale-[1.02]'
          : pkg.highlighted
          ? 'bg-[#151a26] border border-brand-gold/40 hover:border-brand-gold'
          : 'bg-[#121622] border border-[#262f44] hover:border-gray-500'
      }`}
    >
      {/* Featured Badge */}
      {pkg.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 text-black text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>RECOMMENDED</span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isSelected ? 'bg-brand-gold text-black' : 'bg-[#1e2536] text-brand-gold'
            }`}>
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-base font-bold text-white">
                {pkg.name}
              </h3>
              <p className="text-[11px] text-gray-400">{pkg.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-5 pb-4 border-b border-[#21293a]">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-luxury text-3xl font-black text-white">
              {pkg.priceFormatted}
            </span>
            <span className="text-xs text-gray-400 font-sans">/ Event</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-brand-gold mt-1">
            <span>{pkg.guestLimit}</span> • <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Feature List */}
        <ul className="mt-5 space-y-2.5 text-xs text-gray-300">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Select Button */}
      <div className="mt-6 pt-4 border-t border-[#21293a]">
        <button
          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            isSelected
              ? 'bg-brand-gold text-black shadow-gold-sm'
              : 'bg-[#1e2538] text-gray-200 hover:bg-[#28324a] hover:text-white border border-[#2e3952]'
          }`}
        >
          {isSelected ? '✓ Selected Plan' : 'Select Plan'}
        </button>
      </div>

    </div>
  );
}
