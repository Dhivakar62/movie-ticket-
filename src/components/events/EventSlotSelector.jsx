import React from 'react';
import { CINEMA_SCHEDULE_SLOTS } from '../../data/eventData';
import { Clock, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function EventSlotSelector() {
  const { selectedEventSlot, setSelectedEventSlot } = useBooking();

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#21283a] gap-2">
        <div>
          <h3 className="font-serif-luxury text-base font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span>Available Intermission Break Slots</span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Strict cinema schedule: Private events are hosted only during designated breaks between movie screenings.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 font-semibold">
          <AlertCircle className="w-3 h-3" />
          <span>Active shows locked</span>
        </div>
      </div>

      {/* Slots List */}
      <div className="space-y-2.5">
        {CINEMA_SCHEDULE_SLOTS.map((slot) => {
          const isSelected = selectedEventSlot?.id === slot.id;
          const isAvailable = slot.isAvailableForEvent;

          return (
            <div
              key={slot.id}
              onClick={() => {
                if (isAvailable) setSelectedEventSlot(slot);
              }}
              className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                !isAvailable
                  ? 'bg-[#0f121a]/60 border-[#1f2536] opacity-60 cursor-not-allowed'
                  : isSelected
                  ? 'bg-gradient-to-r from-brand-gold/20 to-[#1b2232] border-brand-gold shadow-gold-sm cursor-pointer'
                  : 'bg-[#171d2b] border-[#293245] hover:border-gray-500 cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  !isAvailable
                    ? 'bg-red-950/40 text-red-400 border border-red-500/30'
                    : isSelected
                    ? 'bg-brand-gold text-black font-bold'
                    : 'bg-[#222a3d] text-brand-gold'
                }`}>
                  {!isAvailable ? <Lock className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">
                      {slot.timeRange}
                    </span>
                    <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
                      !isAvailable
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                        : 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30'
                    }`}>
                      {slot.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {slot.note}
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="text-right sm:text-right flex items-center sm:block">
                {!isAvailable ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/90 block">
                    Movie In Progress (Unavailable)
                  </span>
                ) : isSelected ? (
                  <span className="text-xs font-bold text-brand-gold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Selected
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400 hover:text-brand-gold transition-colors block">
                    Click to Reserve
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
