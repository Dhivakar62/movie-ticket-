import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function DateTimeSelector() {
  const { selectedScreen, selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useBooking();

  const dates = [
    { label: "Today", date: "07 Nov", full: "Today, 07 Nov" },
    { label: "Tomorrow", date: "08 Nov", full: "Tomorrow, 08 Nov" },
    { label: "Sun", date: "09 Nov", full: "Sun, 09 Nov" },
    { label: "Mon", date: "10 Nov", full: "Mon, 10 Nov" },
    { label: "Tue", date: "11 Nov", full: "Tue, 11 Nov" }
  ];

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#242c3d] p-4 sm:p-5 space-y-4">
      {/* Date Choice */}
      <div>
        <h3 className="font-serif-luxury text-sm font-bold text-white flex items-center gap-2 mb-2.5">
          <Calendar className="w-4 h-4 text-brand-gold" />
          <span>Select Date</span>
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {dates.map((d) => {
            const isSelected = selectedDate === d.full;
            return (
              <button
                key={d.full}
                onClick={() => setSelectedDate(d.full)}
                className={`py-2 px-1 rounded-xl text-center border transition-all ${
                  isSelected
                    ? 'bg-brand-gold text-black border-brand-gold font-bold shadow-gold-sm'
                    : 'bg-[#181e2b] border-[#293245] text-gray-300 hover:border-gray-500'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider block opacity-80">{d.label}</span>
                <span className="text-xs sm:text-sm font-bold block">{d.date}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Show Time Choice */}
      <div className="pt-2 border-t border-[#21283a]">
        <h3 className="font-serif-luxury text-sm font-bold text-white flex items-center gap-2 mb-2.5">
          <Clock className="w-4 h-4 text-brand-gold" />
          <span>Select Showtime</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {selectedScreen.timings.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-goldLight to-brand-gold text-black border-brand-gold font-bold shadow-gold-sm'
                    : 'bg-[#181e2b] border-[#293245] text-gray-300 hover:border-gray-500 hover:text-white'
                }`}
              >
                {time}
                <span className="block text-[9px] font-normal opacity-70">Dolby 7.1</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
