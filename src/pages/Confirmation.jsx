import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Crown, CheckCircle2, QrCode, Download, Calendar, Ticket, ArrowRight } from 'lucide-react';

export default function Confirmation() {
  const location = useLocation();
  const { myBookings } = useBooking();

  const booking = location.state?.booking || myBookings[0];

  if (!booking) {
    return (
      <div className="py-20 text-center max-w-lg mx-auto px-4">
        <h2 className="text-xl font-bold text-white">No Active Booking Found</h2>
        <Link to="/" className="mt-4 inline-block px-6 py-2.5 bg-brand-gold text-black font-bold rounded-xl text-xs">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 max-w-2xl mx-auto px-4 sm:px-6 space-y-8 animate-fadeIn">
      
      {/* Success Badge */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2 border-brand-gold text-brand-gold mx-auto flex items-center justify-center shadow-gold-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Payment Verified</span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white">
          Ticket Confirmed!
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Your admission pass has been issued and stored in your customer dashboard.
        </p>
      </div>

      {/* Digital Luxury Ticket (matching Stitch Screen 6) */}
      <div className="bg-gradient-to-b from-[#181f2e] via-[#121622] to-[#0c0f17] rounded-3xl border border-brand-gold/60 p-6 sm:p-8 shadow-2xl shadow-brand-gold/20 space-y-6 relative overflow-hidden">
        
        {/* Ticket Header */}
        <div className="flex items-center justify-between pb-4 border-b border-dashed border-[#2d3850]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-brand-gold text-black flex items-center justify-center font-bold">
              <Crown className="w-4 h-4" />
            </div>
            <span className="font-serif-luxury text-lg font-black text-white">
              LUXE <span className="text-brand-gold text-xs font-sans tracking-widest">CINEMAS</span>
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-brand-gold">
            {booking.id}
          </span>
        </div>

        {/* Details Grid */}
        <div className="space-y-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Movie Title</span>
            <h2 className="font-serif-luxury text-xl font-extrabold text-white">
              {booking.movieTitle || booking.eventName}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#181d28] p-3.5 rounded-xl border border-[#273042] text-xs">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Screen</span>
              <span className="font-bold text-white">{booking.screenNumber}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Class</span>
              <span className="font-bold text-brand-gold">{booking.tier || booking.package}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Date</span>
              <span className="font-bold text-white">{booking.showDate || booking.eventDate}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Showtime</span>
              <span className="font-bold text-white">{booking.showTime || booking.eventTime}</span>
            </div>
          </div>

          {booking.seats && (
            <div className="bg-[#181d28] p-3.5 rounded-xl border border-[#273042] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Seats Reserved</span>
                <span className="font-mono text-base font-bold text-brand-gold">
                  {booking.seats.join(', ')}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Amount Paid</span>
                <span className="font-serif-luxury text-base font-black text-white">₹{booking.totalAmount} INR</span>
              </div>
            </div>
          )}
        </div>

        {/* QR Code Bar */}
        <div className="pt-2 text-center border-t border-dashed border-[#2d3850]">
          <div className="inline-block p-3 rounded-2xl bg-white shadow-xl mt-3">
            <img
              src={booking.qrCode || `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${booking.id}`}
              alt="Admission QR Code"
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="text-[10px] text-gray-400 mt-2 font-mono">
            Scan at Hall Usher Gate for Direct Entry
          </p>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={() => alert("Digital Ticket Pass downloaded as PDF!")}
          className="flex-1 py-3.5 rounded-xl font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-sm flex items-center justify-center gap-2 text-xs"
        >
          <Download className="w-4 h-4" />
          <span>Download Pass (PDF)</span>
        </button>

        <Link
          to="/my-bookings"
          className="flex-1 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-gray-200 bg-[#1a2130] hover:bg-[#253046] border border-[#2e3b54] transition-all flex items-center justify-center gap-2 text-xs text-center"
        >
          <span>View My Bookings</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
