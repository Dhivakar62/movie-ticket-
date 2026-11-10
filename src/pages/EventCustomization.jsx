import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { EVENT_CATEGORIES } from '../data/eventsData';
import { Sparkles, Heart, Check, ArrowRight, ArrowLeft, ShieldCheck, Cake, Music, Palette } from 'lucide-react';

const EventCustomization = () => {
  const navigate = useNavigate();
  const { 
    selectedEventCategory, 
    selectedEventScreen, 
    selectedEventDate, 
    selectedEventSlot, 
    selectedEventPackage, 
    eventCustomization, 
    setEventCustomization,
    customerInfo,
    setCustomerInfo,
    completeEventBooking
  } = useBooking();

  const eventCategoryObj = EVENT_CATEGORIES.find((c) => c.id === selectedEventCategory) || EVENT_CATEGORIES[0];

  const cakeOptions = [
    'Red Velvet with Cream Cheese',
    'Belgian Dark Chocolate Truffle',
    'Butterscotch Crunch',
    'Fresh Seasonal Fruit Delight',
    'No Cake Required',
  ];

  const decorOptions = [
    'Romantic Red Roses & Candlelight Pathway',
    'Fairy Light Canopy & Pastel Balloons',
    'Golden Glamour & Champagne Elegance',
    'Neon Marquee Lights & Photo Backdrop',
  ];

  const musicOptions = [
    'Acoustic Romantic Melodies',
    'Soft Jazz & Cinematic Instrumentals',
    'Bollywood Love Anthems',
    'Upbeat Celebration Hits',
  ];

  const [formState, setFormState] = useState({
    guestCount: eventCustomization.guestCount || 15,
    cakePreference: eventCustomization.cakePreference || cakeOptions[0],
    decorationPreference: eventCustomization.decorationPreference || decorOptions[0],
    customMessage: eventCustomization.customMessage || 'Will you marry me, Priya?',
    musicPreference: eventCustomization.musicPreference || musicOptions[0],
    specialRequests: eventCustomization.specialRequests || 'Candlelight walkway along the carpet aisle',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEventCustomization(formState);
    setTimeout(() => {
      completeEventBooking(formState);
      setIsSubmitting(false);
      navigate('/events/confirmation');
    }, 1000);
  };

  const packagePrice = selectedEventPackage?.price || 9999;
  const extraGuestFee = formState.guestCount > 25 ? (formState.guestCount - 25) * 200 : 0;
  const finalTotal = packagePrice + extraGuestFee;

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Step Indicator */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-3.5 py-1 rounded-full border border-[#E8E1EF]">
            Step 5 • Event Personalization
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2">
            Customize Your Celebration
          </h1>
          <p className="text-xs text-[#746A7D] mt-1">
            Personalize your screen message, decorations, music, and cake.
          </p>
        </div>

        <form onSubmit={handleConfirm} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Custom Screen Message */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/90 shadow-sm">
              <h3 className="font-display font-bold text-base text-[#241532] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#6722A0]" />
                <span>Illuminated Screen Message</span>
              </h3>
              <p className="text-xs text-[#746A7D] mb-3">
                This exact text will be displayed in high definition on the cinema screen when your guests walk in.
              </p>
              <input
                type="text"
                required
                value={formState.customMessage}
                onChange={(e) => setFormState({ ...formState, customMessage: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-sm font-semibold text-[#6722A0] outline-none focus:border-[#6722A0]"
                placeholder="e.g. Will you marry me, Priya? / Happy 25th Anniversary!"
              />
            </div>

            {/* Cake & Decoration Preferences */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/90 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-base text-[#241532] mb-2 flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#6722A0]" />
                <span>Atmosphere & Cake Options</span>
              </h3>

              <div>
                <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                  Decoration Ambience
                </label>
                <select
                  value={formState.decorationPreference}
                  onChange={(e) => setFormState({ ...formState, decorationPreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
                >
                  {decorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                  Celebration Cake Flavour
                </label>
                <select
                  value={formState.cakePreference}
                  onChange={(e) => setFormState({ ...formState, cakePreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
                >
                  {cakeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                  Music / Audio Vibe
                </label>
                <select
                  value={formState.musicPreference}
                  onChange={(e) => setFormState({ ...formState, musicPreference: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
                >
                  {musicOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                  Estimated Number of Guests
                </label>
                <input
                  type="number"
                  min="2"
                  max="100"
                  value={formState.guestCount}
                  onChange={(e) => setFormState({ ...formState, guestCount: parseInt(e.target.value, 10) || 2 })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                  Special Arrangements / Requests
                </label>
                <textarea
                  rows="2"
                  value={formState.specialRequests}
                  onChange={(e) => setFormState({ ...formState, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                  placeholder="e.g. Please dim lights exactly at 12:45 PM before video starts."
                />
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/90 shadow-sm">
              <h3 className="font-display font-bold text-base text-[#241532] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6722A0]" />
                <span>Contact Organizer</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">Organizer Name</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 shadow-[0_12px_36px_rgba(103,34,160,0.08)] sticky top-24">
              <h3 className="font-display font-bold text-lg text-[#241532] mb-4">
                Event Booking Summary
              </h3>

              <div className="py-3 border-b border-[#E8E1EF] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Event Type</span>
                  <span className="font-bold text-[#6722A0]">{eventCategoryObj.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Selected Package</span>
                  <span className="font-bold text-[#241532]">{selectedEventPackage?.name || 'Gold Package'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Auditorium</span>
                  <span className="font-bold text-[#241532]">{selectedEventScreen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Date & Break Slot</span>
                  <span className="font-bold text-[#241532]">{selectedEventDate} • {selectedEventSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Guests</span>
                  <span className="font-bold text-[#241532]">{formState.guestCount} Persons</span>
                </div>
              </div>

              {/* Message preview */}
              <div className="py-4 border-b border-[#E8E1EF]">
                <span className="text-[11px] font-bold text-[#746A7D] uppercase tracking-wider block mb-1">Screen Text Preview</span>
                <div className="p-3 rounded-xl bg-[#FAF5FF] border border-[#E8E1EF] text-center">
                  <span className="font-display font-bold text-xs text-[#6722A0] italic">
                    "{formState.customMessage}"
                  </span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="py-4 space-y-2 text-xs border-b border-[#E8E1EF]">
                <div className="flex justify-between text-[#746A7D]">
                  <span>Package Base Price</span>
                  <span>₹{packagePrice.toLocaleString()}</span>
                </div>
                {extraGuestFee > 0 && (
                  <div className="flex justify-between text-[#746A7D]">
                    <span>Extra Guests ({formState.guestCount - 25} × ₹200)</span>
                    <span>₹{extraGuestFee.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#746A7D]">
                  <span>Hall Sanitation & Setup</span>
                  <span className="text-emerald-600 font-semibold">Included FREE</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#241532] pt-2">
                  <span>Total Amount</span>
                  <span className="text-[#6722A0] text-base">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Reserving Private Suite...</span>
                    </div>
                  ) : (
                    <>
                      <span>Confirm & Book Event</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/events/packages')}
                  className="text-xs text-[#746A7D] hover:text-[#241532] flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Change Package</span>
                </button>
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default EventCustomization;
