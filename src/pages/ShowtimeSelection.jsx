import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { Calendar, Clock, Film, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const ShowtimeSelection = () => {
  const navigate = useNavigate();
  const { 
    selectedMovie, 
    selectedScreen, 
    selectedDate, 
    setSelectedDate, 
    selectedShowtime, 
    setSelectedShowtime 
  } = useBooking();

  const dates = [
    { label: 'Today', day: '10 Nov', full: 'Today, 10 Nov' },
    { label: 'Tomorrow', day: '11 Nov', full: 'Tomorrow, 11 Nov' },
    { label: 'Wed', day: '12 Nov', full: 'Wed, 12 Nov' },
    { label: 'Thu', day: '13 Nov', full: 'Thu, 13 Nov' },
    { label: 'Fri', day: '14 Nov', full: 'Fri, 14 Nov' },
    { label: 'Sat', day: '15 Nov', full: 'Sat, 15 Nov' },
    { label: 'Sun', day: '16 Nov', full: 'Sun, 16 Nov' },
  ];

  const showtimeSlots = [
    { time: '10:00 AM', slot: 'Morning', type: '4K Laser Atmos', price: '₹150 - ₹400' },
    { time: '01:45 PM', slot: 'Matinee', type: '4K Laser Atmos', price: '₹150 - ₹400' },
    { time: '05:30 PM', slot: 'Evening', type: '4K Laser Atmos', price: '₹150 - ₹400' },
    { time: '07:00 PM', slot: 'Prime Evening', type: 'IMAX Special', price: '₹150 - ₹400' },
    { time: '09:15 PM', slot: 'Night', type: 'Dolby Atmos', price: '₹150 - ₹400' },
    { time: '10:45 PM', slot: 'Late Night', type: 'Late Premiere', price: '₹150 - ₹400' },
  ];

  const handleSelectShowtime = (time) => {
    setSelectedShowtime(time);
    navigate('/booking/tickets');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Step Indicator */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-3.5 py-1.5 rounded-full border border-[#E8E1EF]">
            Step 2 • Date & Showtimes
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#241532] mt-3">
            Select Date & Showtime
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-1">
            {selectedMovie?.title || 'Kalki 2898 AD'} • {selectedScreen || 'Screen 1 (IMAX 4K Laser)'}
          </p>
        </div>

        {/* Selected Movie Summary Bar */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/90 shadow-sm flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3.5">
            <img
              src={selectedMovie?.poster}
              alt={selectedMovie?.title}
              className="w-12 h-16 object-cover rounded-lg shadow-xs"
            />
            <div>
              <h3 className="font-display font-bold text-base text-[#241532]">{selectedMovie?.title}</h3>
              <p className="text-xs text-[#746A7D]">
                {selectedMovie?.language} • {selectedMovie?.genre} • {selectedMovie?.certificate} • {selectedMovie?.duration}
              </p>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[11px] text-[#746A7D] block">Auditorium</span>
            <span className="text-xs font-bold text-[#6722A0]">{selectedScreen}</span>
          </div>
        </div>

        {/* Horizontal Date Selector */}
        <div className="mb-8">
          <h3 className="font-display font-bold text-sm text-[#241532] mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#6722A0]" />
            <span>Choose Date</span>
          </h3>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
            {dates.map((d) => {
              const isSelected = selectedDate === d.full;
              return (
                <button
                  key={d.full}
                  onClick={() => setSelectedDate(d.full)}
                  className={`flex flex-col items-center justify-center min-w-[85px] py-3 px-3 rounded-2xl text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#6722A0] text-white shadow-md scale-105'
                      : 'bg-white/80 hover:bg-[#F5F0FC] text-[#241532] border border-[#E8E1EF]'
                  }`}
                >
                  <span className={`text-[11px] font-semibold ${isSelected ? 'text-white/80' : 'text-[#746A7D]'}`}>
                    {d.label}
                  </span>
                  <span className="text-sm font-extrabold mt-0.5">
                    {d.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showtimes Grid */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-[0_12px_36px_rgba(103,34,160,0.06)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-base text-[#241532] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#6722A0]" />
              <span>Available Showtimes for {selectedDate}</span>
            </h3>
            <span className="text-xs text-[#746A7D]">Tap a time to continue</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {showtimeSlots.map((st) => {
              const isSelected = selectedShowtime === st.time;
              return (
                <button
                  key={st.time}
                  onClick={() => handleSelectShowtime(st.time)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#6722A0] border-[#6722A0] text-white shadow-md'
                      : 'bg-white/90 border-[#E8E1EF] hover:border-[#6722A0] hover:bg-[#F5F0FC]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-lg tracking-tight">
                      {st.time}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#F5F0FC] text-[#6722A0]'
                    }`}>
                      {st.slot}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className={isSelected ? 'text-white/80' : 'text-[#746A7D]'}>
                      {st.type}
                    </span>
                    <span className={`font-semibold ${isSelected ? 'text-[#F2CA50]' : 'text-[#6722A0]'}`}>
                      {st.price}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#E8E1EF] flex items-center justify-between">
            <div className="text-xs text-[#746A7D]">
              Selected: <strong className="text-[#241532]">{selectedDate} at {selectedShowtime}</strong>
            </div>

            <button
              onClick={() => navigate('/booking/tickets')}
              className="px-7 py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Continue to Tickets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShowtimeSelection;
