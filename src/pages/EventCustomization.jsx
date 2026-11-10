import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { EVENT_CATEGORIES } from '../data/eventsData';
import PageBackground from '../components/common/PageBackground';
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
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Celebration Background */}
      <PageBackground variant="events" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Step Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Step 5 • Event Personalization
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2 tracking-tight">
            Customize Your Celebration
          </h1>
          <p className="text-xs text-[#746A7D] mt-1">
            Personalize your screen message, decorations, music, and cake.
          </p>
        </motion.div>

        <form onSubmit={handleConfirm} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Custom Screen Message */}
            <div className="glass-reflective rounded-3xl p-6">
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
            <div className="glass-reflective rounded-3xl p-6 space-y-4">
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
                  Audio & Playlist Atmosphere
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
                  Special Requests / Butler Instructions
                </label>
                <textarea
                  rows="2"
                  value={formState.specialRequests}
                  onChange={(e) => setFormState({ ...formState, specialRequests: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                  placeholder="Any dietary restrictions, photography cues, or specific entrance timings..."
                />
              </div>
            </div>

            {/* Guest Count */}
            <div className="glass-reflective rounded-3xl p-6 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-sm text-[#241532]">Estimated Guest Count</h4>
                <p className="text-xs text-[#746A7D]">Up to 25 guests covered under standard package</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFormState((p) => ({ ...p, guestCount: Math.max(2, p.guestCount - 1) }))}
                  className="w-8 h-8 rounded-full border border-[#E8E1EF] bg-white font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                  -
                </button>
                <span className="font-display font-black text-base text-[#241532] w-6 text-center">
                  {formState.guestCount}
                </span>
                <button
                  type="button"
                  onClick={() => setFormState((p) => ({ ...p, guestCount: Math.min(100, p.guestCount + 1) }))}
                  className="w-8 h-8 rounded-full border border-[#E8E1EF] bg-white font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Summary (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-reflective rounded-3xl p-6 sm:p-7 sticky top-24">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4">
                Celebration Summary
              </h3>

              <div className="pb-4 border-b border-[#E8E1EF] space-y-1">
                <span className="text-[10px] font-bold text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-full uppercase">
                  {eventCategoryObj.title}
                </span>
                <h4 className="font-display font-black text-xl text-[#241532] mt-1">
                  {selectedEventPackage?.name || 'Gold Package'}
                </h4>
                <p className="text-xs text-[#746A7D]">
                  {selectedEventScreen} • {selectedEventDate}
                </p>
                <p className="text-xs font-bold text-[#6722A0]">
                  Slot: {selectedEventSlot}
                </p>
              </div>

              {/* Inclusions summary */}
              <div className="py-4 border-b border-[#E8E1EF] space-y-2 text-xs">
                <div className="flex justify-between text-[#746A7D]">
                  <span>Auditorium Access</span>
                  <span className="font-semibold text-[#241532]">45 mins break time</span>
                </div>
                <div className="flex justify-between text-[#746A7D]">
                  <span>Total Guests</span>
                  <span className="font-semibold text-[#241532]">{formState.guestCount} Persons</span>
                </div>
                <div className="flex justify-between text-[#746A7D]">
                  <span>Custom Screen Message</span>
                  <span className="font-semibold text-[#6722A0] truncate max-w-[150px]">{formState.customMessage}</span>
                </div>
              </div>

              {/* Price Calculation Lines */}
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
                  <span>Luxury Tax & Service Fee</span>
                  <span className="text-emerald-600 font-semibold">Included</span>
                </div>
                <div className="flex justify-between text-base font-black text-[#241532] pt-2">
                  <span>Grand Total</span>
                  <span className="text-[#6722A0]">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Button */}
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
          </motion.div>

        </form>

      </div>
    </div>
  );
};

export default EventCustomization;
