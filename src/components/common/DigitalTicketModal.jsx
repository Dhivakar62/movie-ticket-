import React from 'react';
import { X, Crown, QrCode, Download, Calendar, Ticket, CheckCircle2 } from 'lucide-react';

export default function DigitalTicketModal({ booking, onClose }) {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#181e2b] via-[#121622] to-[#0c0f17] rounded-3xl border border-brand-gold/60 p-6 sm:p-7 shadow-2xl shadow-brand-gold/20 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center pb-4 border-b border-dashed border-[#2b354a]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">
            <Crown className="w-3.5 h-3.5" />
            <span>Digital Admission Pass</span>
          </div>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-black text-white">
            LUXE <span className="gold-text-gradient">CINEMAS</span>
          </h2>
          <p className="text-[11px] text-gray-400 tracking-wider">Pass ID: {booking.id}</p>
        </div>

        {/* Ticket Details */}
        <div className="space-y-4 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Title</span>
            <h3 className="font-serif-luxury text-lg font-bold text-white">
              {booking.movieTitle || booking.eventName}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#181d28] p-3 rounded-xl border border-[#273042]">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Auditorium</span>
              <span className="font-bold text-white text-xs sm:text-sm">{booking.screenNumber}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Class / Tier</span>
              <span className="font-bold text-brand-gold text-xs sm:text-sm">{booking.tier || booking.package}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Date</span>
              <span className="font-bold text-white text-xs">{booking.showDate || booking.eventDate}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Showtime / Slot</span>
              <span className="font-bold text-white text-xs">{booking.showTime || booking.eventTime}</span>
            </div>
          </div>

          {booking.seats && (
            <div className="bg-[#181d28] p-3 rounded-xl border border-[#273042] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Assigned Seats</span>
                <span className="font-mono text-sm font-bold text-brand-gold">
                  {booking.seats.join(', ')}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Total Paid</span>
                <span className="font-serif-luxury text-sm font-bold text-white">₹{booking.totalAmount} INR</span>
              </div>
            </div>
          )}
        </div>

        {/* QR Code Graphic */}
        <div className="pt-2 text-center">
          <div className="inline-block p-3 rounded-2xl bg-white shadow-xl">
            <img
              src={booking.qrCode || `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${booking.id}`}
              alt="Admission QR Code"
              className="w-28 h-28 object-contain"
            />
          </div>
          <p className="text-[10px] text-gray-400 mt-2 font-mono">
            Scan at Hall Usher Gate for Direct Entry
          </p>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-[#262f44] flex gap-3">
          <button
            onClick={() => alert("Downloading ticket PDF...")}
            className="flex-1 py-3 rounded-xl bg-brand-gold text-black font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all flex items-center justify-center gap-1.5 shadow-gold-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Pass</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl bg-[#1b2232] text-gray-300 font-semibold text-xs uppercase tracking-wider hover:bg-[#252f44] transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
