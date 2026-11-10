import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useBooking } from '../context/BookingContext';
import { CheckCircle2, Heart, Sparkles, QrCode, Home, Calendar, Users, Download, ArrowRight } from 'lucide-react';

const EventConfirmation = () => {
  const navigate = useNavigate();
  const { confirmedEventBooking, selectedEventCategory, selectedEventPackage, selectedEventScreen, selectedEventDate, selectedEventSlot, eventCustomization } = useBooking();

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#EC4899', '#9B4BC5', '#6722A0', '#F2CA50'],
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const eventData = confirmedEventBooking || {
    bookingId: 'EV-441890',
    eventCategoryTitle: 'Proposal Celebration',
    packageName: selectedEventPackage?.name || 'Gold Package',
    screen: selectedEventScreen || 'Screen 1',
    date: selectedEventDate || 'Today, 10 Nov',
    slot: selectedEventSlot || '12:30 PM - 1:15 PM',
    guestCount: eventCustomization?.guestCount || 15,
    customMessage: eventCustomization?.customMessage || 'Will you marry me, Priya?',
    totalAmount: selectedEventPackage?.price || 9999,
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Success Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-16 h-16 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center mx-auto mb-3 shadow-md"
          >
            <Heart className="w-9 h-9 fill-[#EC4899]" />
          </motion.div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532]">
            Celebration Reserved!
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-1">
            Your private cinema hall is confirmed. Our event manager will connect with you shortly.
          </p>
        </div>

        {/* Digital Event Pass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl overflow-hidden border border-[#E8E1EF] shadow-[0_20px_50px_rgba(103,34,160,0.1)] relative"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#9B4BC5] via-[#EC4899] to-[#EAB308] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-base block leading-none">VIP Event Pass</span>
                <span className="text-[10px] text-white/90 block mt-0.5">Ref: {eventData.bookingId}</span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/25 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
              Reserved
            </span>
          </div>

          {/* Pass Body Content */}
          <div className="p-6 sm:p-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EC4899] bg-[#FDF1F7] px-2.5 py-0.5 rounded-full">
                {eventData.eventCategoryTitle}
              </span>
              <h3 className="font-display font-black text-2xl text-[#241532] mt-1.5">
                {eventData.packageName}
              </h3>
              <p className="text-xs text-[#746A7D] mt-0.5">
                Auditorium {eventData.screen} (Private Intermission Slot)
              </p>
            </div>

            {/* Screen Message Quote */}
            <div className="my-5 p-3.5 rounded-2xl bg-[#FAF5FF] border border-[#E8E1EF] text-center">
              <span className="text-[10px] font-bold text-[#746A7D] uppercase tracking-wider block mb-0.5">Illuminated Screen Message</span>
              <span className="font-display font-extrabold text-sm text-[#6722A0] italic">
                "{eventData.customMessage}"
              </span>
            </div>

            {/* Timing & Details Grid */}
            <div className="py-4 border-y border-dashed border-[#E8E1EF] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#746A7D] block">Date</span>
                <span className="font-bold text-[#241532] mt-0.5 block">{eventData.date}</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Break Time Slot</span>
                <span className="font-bold text-[#241532] mt-0.5 block">{eventData.slot}</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Guests</span>
                <span className="font-bold text-[#6722A0] mt-0.5 block">{eventData.guestCount} Invitees</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Total Amount</span>
                <span className="font-bold text-[#241532] mt-0.5 block">₹{eventData.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* QR Verification Bar */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-[#F5F0FC] border border-[#E8E1EF] p-2 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-full h-full text-[#321044]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241532] block">VIP Coordinator Pass</span>
                  <span className="text-[11px] text-[#746A7D] block">Show to theater manager on arrival</span>
                </div>
              </div>

              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-[#F5F0FC] hover:bg-[#E9E5FA] text-[#6722A0] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Pass</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#E8E1EF] hover:border-[#6722A0] bg-white text-xs font-semibold text-[#241532] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigate('/my-bookings')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
          >
            <Users className="w-3.5 h-3.5" />
            <span>View in My Bookings</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventConfirmation;
