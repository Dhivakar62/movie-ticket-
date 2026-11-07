import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { CONCESSIONS } from '../data/movieData';
import BookingSummaryCard from '../components/booking/BookingSummaryCard';
import confetti from 'canvas-confetti';
import { ArrowLeft, Coffee, Plus, Minus, CreditCard, Smartphone, Building, ShieldCheck, Ticket, Check } from 'lucide-react';

export default function Checkout() {
  const navigate = useNavigate();
  const {
    selectedScreen,
    selectedDate,
    selectedTime,
    selectedSeats,
    selectedSnacks,
    updateSnackQty,
    finalizeMovieBooking
  } = useBooking();

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUXE10' || promoCode.trim().toUpperCase() === 'STITCH') {
      setPromoApplied(true);
      alert("Promo code applied successfully! 10% discount activated.");
    } else {
      alert("Invalid promo code. Try 'LUXE10' or 'STITCH'");
    }
  };

  const handleCompletePayment = () => {
    const booking = finalizeMovieBooking();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffffff', '#ffd700']
      });
    } catch (e) { /* ignore */ }

    navigate('/confirmation', { state: { booking } });
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Back to Seat Selection */}
      <div className="flex items-center justify-between pb-4 border-b border-[#21283a]">
        <Link
          to={`/movie/${selectedScreen.id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change Seats</span>
        </Link>
        <span className="text-[11px] font-mono text-gray-500">
          Booking Flow • Step 2: Concessions & Final Payment
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Concessions & Payment Options */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Review Selected Booking Strip */}
          <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-18 rounded-lg overflow-hidden bg-black border border-[#2b3548] flex-shrink-0">
                <img
                  src={selectedScreen.poster}
                  alt={selectedScreen.movieTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-wider">
                  {selectedScreen.screenNumber} • {selectedScreen.tier}
                </span>
                <h3 className="font-serif-luxury text-base font-bold text-white">
                  {selectedScreen.movieTitle}
                </h3>
                <p className="text-xs text-gray-400">
                  {selectedDate} at {selectedTime}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-[#22293a]">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Seats ({selectedSeats.length})</span>
              <span className="font-mono text-sm font-bold text-brand-gold">
                {selectedSeats.join(', ')}
              </span>
            </div>
          </div>

          {/* Gourmet Concessions & Snacks (matching Stitch Checkout) */}
          <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#21283a]">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif-luxury text-base font-bold text-white">
                  Gourmet Concessions & Treats
                </h3>
              </div>
              <span className="text-xs text-brand-gold font-semibold">Seat Delivery</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CONCESSIONS.map((snack) => {
                const qty = selectedSnacks[snack.id] || 0;
                return (
                  <div
                    key={snack.id}
                    className="p-3.5 rounded-xl bg-[#171d2a] border border-[#273145] flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-white truncate">
                        {snack.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 line-clamp-1">{snack.desc}</p>
                      <span className="text-xs font-bold text-brand-gold mt-0.5 block">
                        ₹{snack.price}
                      </span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2 bg-[#10141e] rounded-lg p-1 border border-[#2b364c]">
                      <button
                        onClick={() => updateSnackQty(snack.id, -1)}
                        className="w-6 h-6 rounded bg-[#1e2538] hover:bg-[#2c364e] text-white flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono text-xs font-bold text-white">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateSnackQty(snack.id, 1)}
                        className="w-6 h-6 rounded bg-brand-gold text-black flex items-center justify-center hover:bg-brand-goldLight transition-colors font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="bg-[#121622] rounded-2xl border border-[#262f44] p-5 sm:p-6 space-y-4">
            <h3 className="font-serif-luxury text-base font-bold text-white pb-3 border-b border-[#21283a] flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-gold" />
              <span>Select Payment Method (Simulated)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  paymentMethod === 'upi'
                    ? 'bg-brand-gold/15 border-brand-gold text-white shadow-gold-sm'
                    : 'bg-[#171d2a] border-[#293245] text-gray-400 hover:border-gray-500'
                }`}
              >
                <Smartphone className="w-5 h-5 text-brand-gold mb-1" />
                <span className="text-xs font-bold block text-white">UPI / QR Code</span>
                <span className="text-[10px] text-gray-500">GPay, PhonePe, Paytm</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-brand-gold/15 border-brand-gold text-white shadow-gold-sm'
                    : 'bg-[#171d2a] border-[#293245] text-gray-400 hover:border-gray-500'
                }`}
              >
                <CreditCard className="w-5 h-5 text-brand-gold mb-1" />
                <span className="text-xs font-bold block text-white">Credit / Debit Card</span>
                <span className="text-[10px] text-gray-500">Visa, Mastercard, Amex</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  paymentMethod === 'netbanking'
                    ? 'bg-brand-gold/15 border-brand-gold text-white shadow-gold-sm'
                    : 'bg-[#171d2a] border-[#293245] text-gray-400 hover:border-gray-500'
                }`}
              >
                <Building className="w-5 h-5 text-brand-gold mb-1" />
                <span className="text-xs font-bold block text-white">Net Banking</span>
                <span className="text-[10px] text-gray-500">All Major Banks</span>
              </button>
            </div>

            {/* Voucher Box */}
            <form onSubmit={handleApplyPromo} className="pt-3 flex gap-2">
              <input
                type="text"
                placeholder="Enter Promo Code (e.g. LUXE10)..."
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#171d2a] border border-[#293245] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 uppercase focus:outline-none focus:border-brand-gold"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#222a3d] hover:bg-brand-gold hover:text-black text-xs font-bold text-gray-200 transition-colors"
              >
                Apply
              </button>
            </form>
          </div>

        </div>

        {/* Right Sticky Checkout Summary */}
        <div className="lg:col-span-4 sticky top-24">
          <BookingSummaryCard isCheckoutPage={true} onCheckout={handleCompletePayment} />
        </div>

      </div>

    </div>
  );
}
