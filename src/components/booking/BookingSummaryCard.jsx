import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Film, Calendar, Clock, Ticket, ArrowRight, ShieldCheck } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function BookingSummaryCard({ isCheckoutPage = false, onCheckout }) {
  const navigate = useNavigate();
  const {
    selectedScreen,
    selectedDate,
    selectedTime,
    selectedCategory,
    selectedSeats,
    ticketSubtotal,
    snacksSubtotal,
    convenienceFee,
    gstTax,
    movieGrandTotal
  } = useBooking();

  const handleAction = () => {
    if (isCheckoutPage) {
      if (onCheckout) onCheckout();
    } else {
      if (selectedSeats.length === 0) {
        alert("Please select at least 1 seat to proceed!");
        return;
      }
      navigate('/checkout');
    }
  };

  return (
    <div className="bg-[#121622] rounded-2xl border border-brand-gold/30 p-5 shadow-2xl shadow-black/80 space-y-5 sticky top-24">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#21283a]">
        <h3 className="font-serif-luxury text-base font-bold text-white flex items-center gap-2">
          <Ticket className="w-4 h-4 text-brand-gold" />
          <span>Booking Summary</span>
        </h3>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold border border-brand-gold/20 font-bold">
          {selectedScreen.screenNumber}
        </span>
      </div>

      {/* Selected Movie Info */}
      <div className="flex gap-3.5 items-center">
        <div className="w-14 h-18 rounded-lg overflow-hidden bg-black border border-[#2b3448] flex-shrink-0">
          <img
            src={selectedScreen.poster}
            alt={selectedScreen.movieTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-serif-luxury text-sm font-bold text-white truncate">
            {selectedScreen.movieTitle}
          </h4>
          <p className="text-xs text-gray-400">{selectedScreen.genre}</p>
          <p className="text-[11px] text-brand-gold font-medium mt-0.5">
            {selectedScreen.format} • {selectedCategory.toUpperCase()} Tier
          </p>
        </div>
      </div>

      {/* Timing and Seats */}
      <div className="bg-[#181e2b] rounded-xl p-3 border border-[#262f42] space-y-2 text-xs">
        <div className="flex items-center justify-between text-gray-300">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-brand-gold" />
            Date:
          </span>
          <span className="font-semibold text-white">{selectedDate}</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            Showtime:
          </span>
          <span className="font-semibold text-white">{selectedTime}</span>
        </div>
        <div className="flex items-center justify-between text-gray-300 pt-1 border-t border-[#22293a]">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Ticket className="w-3.5 h-3.5 text-brand-gold" />
            Seats ({selectedSeats.length}):
          </span>
          <span className="font-mono font-bold text-brand-gold">
            {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}
          </span>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 text-xs text-gray-400 pt-2 border-t border-[#21283a]">
        <div className="flex justify-between">
          <span>Tickets Subtotal</span>
          <span className="text-white font-medium">₹{ticketSubtotal}</span>
        </div>
        {snacksSubtotal > 0 && (
          <div className="flex justify-between">
            <span>F&B / Concessions</span>
            <span className="text-white font-medium">₹{snacksSubtotal}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Convenience Fee</span>
          <span className="text-white font-medium">₹{convenienceFee}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span className="text-white font-medium">₹{gstTax}</span>
        </div>
        
        {/* Total Highlight */}
        <div className="pt-3 border-t border-[#262f44] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Total Amount</span>
            <span className="text-xs text-brand-gold">All Inclusive</span>
          </div>
          <span className="font-serif-luxury text-xl sm:text-2xl font-black text-white">
            ₹{movieGrandTotal} <span className="text-xs font-sans text-brand-gold">INR</span>
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleAction}
        disabled={selectedSeats.length === 0}
        className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-gold-md flex items-center justify-center gap-2 text-xs sm:text-sm"
      >
        <span>{isCheckoutPage ? 'Pay & Confirm Booking' : 'Proceed to Checkout'}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
        <span>100% Secure Simulated Transaction</span>
      </div>

    </div>
  );
}
