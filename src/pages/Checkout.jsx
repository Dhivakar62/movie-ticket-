import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
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
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Clean Pearl Checkout Background */}
      <PageBackground variant="checkout" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Page Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Final Step • Checkout & Payment
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2 tracking-tight">
            Review Booking & Confirm Payment
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Customer Details & Payment Options (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Customer Details Card */}
            <div className="glass-reflective rounded-3xl p-6">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6722A0]" />
                <span>Ticket Delivery Information</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-[#746A7D] block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/80 text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0] focus:ring-1 focus:ring-[#6722A0]"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-[#746A7D] block mb-1">Email (e-Ticket PDF will be sent here)</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/80 text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0] focus:ring-1 focus:ring-[#6722A0]"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#746A7D] block mb-1">Mobile Number (SMS verification)</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/80 text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0] focus:ring-1 focus:ring-[#6722A0]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="glass-reflective rounded-3xl p-6">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4 flex items-center justify-between">
                <span>Select Payment Method</span>
                <span className="text-[11px] text-[#746A7D] flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-bit SSL Encrypted</span>
                </span>
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: Smartphone },
                  { id: 'card', label: 'Credit/Debit', icon: CreditCard },
                  { id: 'netbanking', label: 'Net Banking', icon: Building },
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className={`py-3 px-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#6722A0] text-white border-[#6722A0] shadow-sm'
                          : 'bg-white/80 hover:bg-[#F5F0FC] text-[#241532] border-[#E8E1EF]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold">{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* UPI Options */}
              {paymentMethod === 'upi' && (
                <div className="p-4 rounded-2xl bg-white/70 border border-[#E8E1EF] space-y-3">
                  <span className="text-xs font-semibold text-[#241532] block">Popular UPI Apps</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E1EF] font-bold text-[#241532]">Google Pay</span>
                    <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E1EF] font-bold text-[#241532]">PhonePe</span>
                    <span className="px-3 py-1.5 rounded-full bg-white border border-[#E8E1EF] font-bold text-[#241532]">Paytm</span>
                  </div>
                </div>
              )}

              {/* Card Options */}
              {paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-white/70 border border-[#E8E1EF] space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#746A7D] block mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8921"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs outline-none focus:border-[#6722A0]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-3.5 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs outline-none focus:border-[#6722A0]"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength="4"
                      className="px-3.5 py-2 rounded-xl border border-[#E8E1EF] bg-white text-xs outline-none focus:border-[#6722A0]"
                    />
                  </div>
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div className="p-4 rounded-2xl bg-white/70 border border-[#E8E1EF]">
                  <span className="text-xs font-semibold text-[#241532] block mb-2">Supported Banks</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span className="p-2 rounded-lg bg-white border border-[#E8E1EF] text-center font-bold">HDFC Bank</span>
                    <span className="p-2 rounded-lg bg-white border border-[#E8E1EF] text-center font-bold">ICICI Bank</span>
                    <span className="p-2 rounded-lg bg-white border border-[#E8E1EF] text-center font-bold">State Bank of India</span>
                    <span className="p-2 rounded-lg bg-white border border-[#E8E1EF] text-center font-bold">Axis Bank</span>
                  </div>
                </div>
              )}
            </div>

          </motion.div>

          {/* Right Column: Order Summary & Coupon Engine (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-reflective rounded-3xl p-6 sm:p-7 sticky top-24">
              <h3 className="font-display font-bold text-base text-[#241532] mb-4">
                Booking Summary
              </h3>

              {/* Movie info */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#E8E1EF]">
                <img
                  src={selectedMovie?.poster}
                  alt={selectedMovie?.title}
                  className="w-14 h-20 object-cover rounded-xl shadow-xs border border-white/80"
                />
                <div>
                  <h4 className="font-display font-extrabold text-sm text-[#241532]">{selectedMovie?.title}</h4>
                  <p className="text-[11px] text-[#746A7D] mt-0.5">{selectedScreen}</p>
                  <p className="text-[11px] text-[#746A7D]">{selectedDate} • {selectedShowtime}</p>
                  <p className="text-[11px] font-bold text-[#6722A0] mt-1">Seats: {selectedSeats?.join(', ')}</p>
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="py-4 border-b border-[#E8E1EF]">
                <label className="text-[11px] font-bold text-[#746A7D] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#6722A0]" />
                  <span>Promo / Gift Voucher</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Enter DREAM50 or WEEKEND20"
                    className="flex-1 px-3.5 py-2 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-semibold outline-none focus:border-[#6722A0]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] cursor-pointer"
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
                  className="w-full py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-xs shadow-[0_6px_20px_rgba(103,34,160,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] disabled:opacity-70"
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
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;
