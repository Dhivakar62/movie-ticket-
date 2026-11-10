import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { getBreakTimeSlots, EVENT_CATEGORIES } from '../data/eventsData';
import { SCREENS_DATA } from '../data/screensData';
import PageBackground from '../components/common/PageBackground';
import { Calendar, Clock, AlertCircle, ArrowLeft, ArrowRight, Check, Film, Sparkles } from 'lucide-react';

const EventSlotSelection = () => {
  const navigate = useNavigate();
  const { 
    selectedEventCategory, 
    selectedEventScreen, 
    setSelectedEventScreen,
    selectedEventDate, 
    setSelectedEventDate,
    selectedEventSlot, 
    setSelectedEventSlot 
  } = useBooking();

  const dates = ['Today, 10 Nov', 'Tomorrow, 11 Nov', 'Wed, 12 Nov', 'Thu, 13 Nov', 'Fri, 14 Nov', 'Weekend, 15 Nov'];
  const eventCategoryObj = EVENT_CATEGORIES.find((c) => c.id === selectedEventCategory) || EVENT_CATEGORIES[0];

  const slots = getBreakTimeSlots(selectedEventScreen, selectedEventDate);

  const handleNext = () => {
    navigate('/events/packages');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Event Slots Background */}
      <PageBackground variant="event-slots" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Step Indicator directly matching reference: (1) Event -> (2) Date -> (3) Time -> (4) Guests -> (5) Package */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-reflective rounded-2xl py-3 px-4 sm:px-6 mb-8"
        >
          <div className="flex items-center justify-between text-xs font-semibold text-[#746A7D] overflow-x-auto no-scrollbar gap-4">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Event</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-[#6722A0] font-bold">
              <span className="w-5 h-5 rounded-full bg-[#6722A0] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">2</span>
              <span>Date</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-[#6722A0] font-bold">
              <span className="w-5 h-5 rounded-full bg-[#6722A0] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">3</span>
              <span>Time</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">4</span>
              <span>Guests</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">5</span>
              <span>Package</span>
            </span>
          </div>
        </motion.div>

        {/* Card Arena Matching Reference */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-reflective rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          
          {/* Header Title with Popcorn graphic in corner */}
          <div className="flex items-start justify-between pb-6 border-b border-[#E8E1EF]">
            <div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] tracking-tight">
                Book Your Event
              </h1>
              <h2 className="font-display font-bold text-base text-[#6722A0] mt-1">
                Select Break Time Slot
              </h2>
              <p className="text-xs text-[#746A7D] mt-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Private Events are available only during break time between screenings.</span>
              </p>
            </div>

            {/* Popcorn bucket graphic */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EC4899]/20 via-[#FEF3C7] to-[#EAB308]/30 text-[#EC4899] shadow-md border border-white">
              <Sparkles className="w-7 h-7 text-[#EAB308]" />
            </div>
          </div>

          {/* Date & Screen Selectors Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div>
              <label className="text-xs font-bold text-[#746A7D] uppercase tracking-wider block mb-2">
                Auditorium Screen
              </label>
              <select
                value={selectedEventScreen}
                onChange={(e) => setSelectedEventScreen(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
              >
                {SCREENS_DATA.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.format} • {s.capacity} seats)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#746A7D] uppercase tracking-wider block mb-2">
                Celebration Date
              </label>
              <select
                value={selectedEventDate}
                onChange={(e) => setSelectedEventDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
              >
                {dates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Break Slots Grid Directly Matching Reference */}
          <div className="my-8">
            <h3 className="text-xs font-bold text-[#241532] uppercase tracking-wider mb-4">
              Available Intermission Intervals on {selectedEventScreen}:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {slots.map((slot) => {
                const isAvailable = slot.status === 'available';
                const timeText = slot.timeRange || slot.label;
                const isSelected = selectedEventSlot === timeText;
                return (
                  <div
                    key={slot.id}
                    onClick={() => {
                      if (isAvailable) setSelectedEventSlot(timeText);
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      !isAvailable
                        ? 'bg-gray-100/80 border-gray-200 text-gray-400 cursor-not-allowed opacity-75'
                        : isSelected
                        ? 'bg-[#FAF5FF] border-[#6722A0] ring-2 ring-[#6722A0]/30 cursor-pointer shadow-md'
                        : 'bg-white/90 border-emerald-300 hover:border-emerald-500 cursor-pointer shadow-xs hover:scale-[1.02]'
                    }`}
                  >
                    <span className="font-display font-extrabold text-sm block text-[#241532]">
                      {timeText}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block mt-2 ${
                        !isAvailable
                          ? 'bg-gray-200 text-gray-500'
                          : isSelected
                          ? 'bg-[#6722A0] text-white shadow-xs'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {isAvailable ? 'Available' : 'Booked'}
                    </span>

                    <span className="text-[10px] text-[#746A7D] block mt-2">
                      Between: {slot.precedingMovie?.split('(')[0]} & {slot.subsequentMovie?.split('(')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Back & Next Button */}
          <div className="pt-6 border-t border-[#E8E1EF] flex items-center justify-between">
            <button
              onClick={() => navigate('/events/categories')}
              className="px-5 py-2.5 rounded-full border border-[#E8E1EF] text-xs font-semibold text-[#241532] hover:bg-[#F5F0FC] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              className="px-7 py-2.5 rounded-full bg-[#321044] hover:bg-[#20072d] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default EventSlotSelection;
