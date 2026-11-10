import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { CheckCircle2, Download, Home, Ticket, QrCode, Film, Calendar, Clock, MapPin } from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { confirmedBooking, selectedMovie, selectedScreen, selectedDate, selectedShowtime, selectedSeats, selectedCategory, finalMovieTotal } = useBooking();

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6722A0', '#9B4BC5', '#EAB308', '#F3D9ED', '#3B82F6'],
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const booking = confirmedBooking || {
    bookingId: 'DC-892419',
    movieTitle: selectedMovie?.title || 'Kalki 2898 AD',
    poster: selectedMovie?.poster,
    screen: selectedScreen || 'Screen 1 (IMAX 4K Laser)',
    date: selectedDate || 'Today, 10 Nov',
    time: selectedShowtime || '07:00 PM',
    seats: selectedSeats && selectedSeats.length > 0 ? selectedSeats : ['A3', 'A4', 'A5', 'A6'],
    ticketCount: selectedSeats?.length || 4,
    category: selectedCategory?.name || 'Gold Class',
    totalAmount: finalMovieTotal || 1141.60,
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Celebration Background */}
      <PageBackground variant="checkout" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Success Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14 }}
            className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md"
          >
            <CheckCircle2 className="w-9 h-9" />
          </motion.div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] tracking-tight">
            Booking Confirmed!
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-1">
            Your e-tickets have been sent to your email and WhatsApp.
          </p>
        </motion.div>

        {/* Digital Ticket Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/90 shadow-[0_24px_60px_rgba(103,34,160,0.15)] relative"
        >
          {/* Ticket Header Banner */}
          <div className="bg-gradient-to-r from-[#6722A0] via-[#852ECA] to-[#9B4BC5] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Film className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-base block leading-none">DreamCine Pass</span>
                <span className="text-[10px] text-white/80 block mt-0.5">Booking ID: {booking.bookingId}</span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
              Confirmed
            </span>
          </div>

          {/* Ticket Body Content */}
          <div className="p-6 sm:p-8">
            
            {/* Movie Info */}
            <div className="flex items-start gap-4 pb-6 border-b border-[#E8E1EF]">
              <img
                src={booking.poster}
                alt={booking.movieTitle}
                className="w-16 h-24 object-cover rounded-xl shadow-xs border border-white/80"
              />
              <div>
                <h3 className="font-display font-black text-xl text-[#241532] leading-tight">
                  {booking.movieTitle}
                </h3>
                <p className="text-xs text-[#746A7D] mt-1">
                  {booking.screen}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F5F0FC] text-[#6722A0] text-xs font-bold">
                  <span>{booking.category}</span>
                </div>
              </div>
            </div>

            {/* Timing & Seats Grid */}
            <div className="py-6 border-b border-dashed border-[#E8E1EF] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#746A7D] block">Date</span>
                <span className="font-bold text-[#241532] mt-0.5 block">{booking.date}</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Showtime</span>
                <span className="font-bold text-[#241532] mt-0.5 block">{booking.time}</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Seats ({booking.ticketCount})</span>
                <span className="font-bold text-[#6722A0] mt-0.5 block">{booking.seats.join(', ')}</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Amount Paid</span>
                <span className="font-bold text-[#241532] mt-0.5 block">₹{booking.totalAmount}</span>
              </div>
            </div>

            {/* Simulated QR Code Pass */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-[#F5F0FC] border border-[#E8E1EF] p-2 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-full h-full text-[#321044]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241532] block">Scan at Entrance</span>
                  <span className="text-[11px] text-[#746A7D] block">Show this QR on arrival</span>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-[#F5F0FC] hover:bg-[#E9E5FA] text-[#6722A0] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Ticket</span>
              </button>
            </div>

          </div>

          {/* Notch Cuts on Left and Right sides for classic cinema ticket look */}
          <div className="absolute left-[-10px] top-[148px] w-5 h-5 rounded-full bg-[#FAF8FE] border-r border-[#E8E1EF]" />
          <div className="absolute right-[-10px] top-[148px] w-5 h-5 rounded-full bg-[#FAF8FE] border-l border-[#E8E1EF]" />
        </motion.div>

        {/* Action Buttons Below Ticket */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/80 hover:border-[#6722A0] bg-white/80 backdrop-blur-md text-xs font-semibold text-[#241532] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigate('/my-bookings')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(103,34,160,0.25)] transition-all cursor-pointer"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Go to My Bookings</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingConfirmation;
