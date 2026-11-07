import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { PRIVATE_EVENT_TYPES, EVENT_ADDONS } from '../../data/eventData';
import EventSlotSelector from './EventSlotSelector';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Users, Heart, Check, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function EventBookingFlow() {
  const navigate = useNavigate();
  const {
    selectedEventType, setSelectedEventType,
    selectedEventPackage,
    selectedEventSlot,
    eventDate, setEventDate,
    eventGuests, setEventGuests,
    selectedEventAddons, toggleEventAddon,
    eventPackagePrice, eventAddonsTotal, eventGrandTotal,
    finalizeEventBooking
  } = useBooking();

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState(null);

  const handleConfirm = () => {
    if (!selectedEventSlot || !selectedEventSlot.isAvailableForEvent) {
      alert("Please select an available intermission break slot!");
      return;
    }

    const booking = finalizeEventBooking();
    setCreatedBooking(booking);
    setBookingSuccess(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffffff', '#e6a817', '#ffd700']
      });
    } catch (e) { /* ignore */ }
  };

  if (bookingSuccess && createdBooking) {
    return (
      <div className="bg-[#121622] rounded-3xl border border-brand-gold/50 p-6 sm:p-10 text-center max-w-2xl mx-auto shadow-2xl shadow-brand-gold/15 space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2 border-brand-gold text-brand-gold mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Booking Confirmed!</span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Your Private Cinema Celebration is Reserved
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Reference ID: <span className="font-mono font-bold text-brand-gold">{createdBooking.id}</span>
          </p>
        </div>

        <div className="bg-[#181e2b] rounded-2xl p-4 sm:p-6 border border-[#273145] text-left text-xs sm:text-sm space-y-3">
          <div className="flex justify-between border-b border-[#21293a] pb-2">
            <span className="text-gray-400">Event Type:</span>
            <span className="font-bold text-white">{createdBooking.eventName}</span>
          </div>
          <div className="flex justify-between border-b border-[#21293a] pb-2">
            <span className="text-gray-400">Package:</span>
            <span className="font-bold text-brand-gold">{createdBooking.package}</span>
          </div>
          <div className="flex justify-between border-b border-[#21293a] pb-2">
            <span className="text-gray-400">Date & Slot:</span>
            <span className="font-semibold text-white">{createdBooking.eventDate} ({createdBooking.eventTime})</span>
          </div>
          <div className="flex justify-between border-b border-[#21293a] pb-2">
            <span className="text-gray-400">Guest Count:</span>
            <span className="font-semibold text-white">{createdBooking.guests} Guests</span>
          </div>
          <div className="flex justify-between pt-1 text-base">
            <span className="text-gray-300 font-bold">Total Paid:</span>
            <span className="font-serif-luxury font-black text-brand-gold">₹{createdBooking.totalAmount} INR</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => navigate('/my-bookings')}
            className="px-6 py-3 rounded-xl bg-brand-gold text-black font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all"
          >
            View in My Bookings
          </button>
          <button
            onClick={() => {
              setBookingSuccess(false);
              navigate('/');
            }}
            className="px-6 py-3 rounded-xl bg-[#1b2232] text-gray-300 font-semibold text-xs uppercase tracking-wider hover:bg-[#252f44] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Form: Event Configuration */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Step 1: Event Type & Date */}
        <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 space-y-4">
          <h3 className="font-serif-luxury text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-[#202738]">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>1. Event Details & Date</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                Celebration Type
              </label>
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="w-full bg-[#181e2b] border border-[#2b354a] rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold"
              >
                {PRIVATE_EVENT_TYPES.map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-brand-gold" /> Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                min="2026-11-07"
                className="w-full bg-[#181e2b] border border-[#2b354a] rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-gold" /> Expected Number of Guests
              </label>
              <span className="text-xs font-bold text-brand-gold">{eventGuests} Guests</span>
            </div>
            <input
              type="range"
              min="2"
              max="60"
              value={eventGuests}
              onChange={(e) => setEventGuests(Number(e.target.value))}
              className="w-full accent-brand-gold cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>2 (Intimate)</span>
              <span>25 (Standard)</span>
              <span>60 (Max VIP Capacity)</span>
            </div>
          </div>
        </div>

        {/* Step 2: Available Break-time Slot Selection */}
        <EventSlotSelector />

        {/* Step 3: Bespoke Add-ons */}
        <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#202738]">
            <h3 className="font-serif-luxury text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>3. Bespoke Celebration Add-ons</span>
            </h3>
            <span className="text-xs text-brand-gold font-semibold">Optional Enhancements</span>
          </div>

          <div className="space-y-3">
            {EVENT_ADDONS.map((addon) => {
              const isChecked = selectedEventAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleEventAddon(addon.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-brand-gold/10 border-brand-gold'
                      : 'bg-[#181e2b] border-[#293245] hover:border-gray-500'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    isChecked ? 'bg-brand-gold text-black border-brand-gold' : 'border-gray-500 bg-[#121622]'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {addon.name}
                      </span>
                      <span className="text-xs font-bold text-brand-gold">
                        +₹{addon.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {addon.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right Column: Event Booking Summary */}
      <div className="lg:col-span-5 sticky top-24">
        <div className="bg-[#121622] rounded-2xl border border-brand-gold/40 p-5 sm:p-6 shadow-2xl shadow-black/80 space-y-5">
          
          <div className="pb-3 border-b border-[#21283a]">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Summary</span>
            <h3 className="font-serif-luxury text-lg font-bold text-white">
              Private Event Reservation
            </h3>
          </div>

          {/* Package details */}
          <div className="bg-[#181e2b] rounded-xl p-4 border border-[#273145] space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Chosen Plan:</span>
              <span className="font-bold text-brand-gold text-sm">{selectedEventPackage.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Date:</span>
              <span className="font-semibold text-white">{eventDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Break Slot:</span>
              <span className="font-semibold text-white truncate max-w-[180px] text-right">
                {selectedEventSlot?.timeRange || 'Select a slot'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Auditorium:</span>
              <span className="font-semibold text-white">Screen 03 (Platinum Hall)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Guest Count:</span>
              <span className="font-semibold text-white">{eventGuests} Guests</span>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-2 text-xs text-gray-400 pt-1 border-t border-[#21283a]">
            <div className="flex justify-between">
              <span>Package Base Fee</span>
              <span className="text-white font-medium">₹{eventPackagePrice.toLocaleString()}</span>
            </div>
            {eventAddonsTotal > 0 && (
              <div className="flex justify-between">
                <span>Selected Add-ons ({selectedEventAddons.length})</span>
                <span className="text-white font-medium">₹{eventAddonsTotal.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>VIP Theatre Cleaning & Sanitization</span>
              <span className="text-emerald-400 font-medium">Complimentary</span>
            </div>

            <div className="pt-3 border-t border-[#262f44] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Total Amount</span>
                <span className="text-xs text-brand-gold font-medium">Inclusive of All Luxury Services</span>
              </div>
              <span className="font-serif-luxury text-2xl font-black text-white">
                ₹{eventGrandTotal.toLocaleString()} <span className="text-xs font-sans text-brand-gold">INR</span>
              </span>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-md flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <span>Confirm & Reserve Screening</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>Dedicated Event Concierge Confirmation</span>
          </div>

        </div>
      </div>

    </div>
  );
}
