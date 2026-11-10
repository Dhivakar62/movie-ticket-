import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { ShieldCheck, Tag, CreditCard, Smartphone, Building, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { 
    selectedMovie, 
    selectedScreen, 
    selectedDate, 
    selectedShowtime, 
    ticketQuantity, 
    selectedCategory, 
    selectedSeats, 
    customerInfo, 
    setCustomerInfo,
    baseTicketTotal,
    convenienceFee,
    discountAmount,
    finalMovieTotal,
    setAppliedPromo,
    appliedPromo,
    completeMovieBooking 
  } = useBooking();

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoMsg, setPromoMsg] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCodeInput) return;
    const clean = promoCodeInput.trim().toUpperCase();
    if (clean === 'DREAM50' || clean === 'WEEKEND20') {
      setAppliedPromo({ code: clean, discountValue: 50 });
      setPromoMsg('Promo code applied successfully! ₹50 off.');
    } else {
      setPromoMsg('Invalid promo code. Try DREAM50 or WEEKEND20.');
    }
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      completeMovieBooking(customerInfo);
      setIsProcessing(false);
      navigate('/booking/confirmation');
    }, 1200);
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Heading */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-3.5 py-1 rounded-full border border-[#E8E1EF]">
            Final Step • Checkout & Payment
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2">
            Review Booking & Confirm Payment
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Customer Details & Payment Options (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Customer Details Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/90 shadow-sm">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6722A0]" />
                <span>Ticket Delivery Information</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Payment Options */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/90 shadow-sm">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4 flex items-center justify-between">
                <span>Payment Method</span>
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Safe & Encrypted Demo
                </span>
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-[#F5F0FC] border-[#6722A0] text-[#6722A0] font-bold shadow-xs'
                      : 'bg-white border-[#E8E1EF] text-[#746A7D] hover:bg-[#FAF8FE]'
                  }`}
                >
                  <Smartphone className="w-5 h-5 mx-auto mb-1.5" />
                  <span className="text-xs block">UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-[#F5F0FC] border-[#6722A0] text-[#6722A0] font-bold shadow-xs'
                      : 'bg-white border-[#E8E1EF] text-[#746A7D] hover:bg-[#FAF8FE]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto mb-1.5" />
                  <span className="text-xs block">Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'netbanking'
                      ? 'bg-[#F5F0FC] border-[#6722A0] text-[#6722A0] font-bold shadow-xs'
                      : 'bg-white border-[#E8E1EF] text-[#746A7D] hover:bg-[#FAF8FE]'
                  }`}
                >
                  <Building className="w-5 h-5 mx-auto mb-1.5" />
                  <span className="text-xs block">Net Banking</span>
                </button>
              </div>

              {/* Payment Info Callout */}
              <div className="p-4 rounded-2xl bg-[#F8F4FD] border border-[#E8E1EF] text-xs text-[#746A7D]">
                <p>
                  This is a client-side frontend booking simulation. Clicking <strong>Pay & Confirm</strong> will simulate successful payment processing and issue your digital ticket.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/90 shadow-[0_12px_36px_rgba(103,34,160,0.08)] sticky top-24">
              
              <h3 className="font-display font-bold text-lg text-[#241532] mb-4">
                Booking Summary
              </h3>

              {/* Movie Mini Header */}
              <div className="flex items-start gap-3 pb-4 border-b border-[#E8E1EF]">
                <img
                  src={selectedMovie?.poster}
                  alt={selectedMovie?.title}
                  className="w-14 h-20 object-cover rounded-xl shadow-xs"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-[#241532] leading-tight">
                    {selectedMovie?.title}
                  </h4>
                  <p className="text-xs text-[#746A7D] mt-0.5">
                    {selectedMovie?.certificate} • {selectedMovie?.language}
                  </p>
                  <p className="text-xs font-semibold text-[#6722A0] mt-1">
                    {selectedScreen}
                  </p>
                </div>
              </div>

              {/* Booking Specifications */}
              <div className="py-4 border-b border-[#E8E1EF] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Date & Time</span>
                  <span className="font-bold text-[#241532]">{selectedDate} • {selectedShowtime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Category</span>
                  <span className="font-bold text-[#241532]">{selectedCategory?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#746A7D]">Selected Seats</span>
                  <span className="font-bold text-[#6722A0]">{selectedSeats.join(', ')} ({ticketQuantity} seats)</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="py-4 border-b border-[#E8E1EF]">
                <label className="text-xs font-semibold text-[#746A7D] block mb-1.5">Have a Promo Code?</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. DREAM50"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium uppercase outline-none focus:border-[#6722A0]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#F5F0FC] text-[#6722A0] text-xs font-bold hover:bg-[#6722A0] hover:text-white transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoMsg && (
                  <span className={`text-[11px] font-medium mt-1.5 block ${appliedPromo ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {promoMsg}
                  </span>
                )}
              </form>

              {/* Price Calculation Lines */}
              <div className="py-4 space-y-2 text-xs border-b border-[#E8E1EF]">
                <div className="flex justify-between text-[#746A7D]">
                  <span>Ticket Price ({ticketQuantity} × ₹{selectedCategory?.price || 250})</span>
                  <span>₹{baseTicketTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#746A7D]">
                  <span>Convenience Fee (incl. GST)</span>
                  <span>₹{convenienceFee.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount Applied</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-[#241532] pt-2">
                  <span>Total Amount</span>
                  <span className="text-[#6722A0] text-base">₹{finalMovieTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="mt-6">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handlePayNow}
                  className="w-full py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] disabled:opacity-70"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authorizing Payment...</span>
                    </div>
                  ) : (
                    <>
                      <span>Pay ₹{finalMovieTotal.toFixed(2)} & Confirm</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;
