import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { CheckCircle2, Heart, Sparkles, QrCode, Home, Calendar, Users, Download, ArrowRight } from 'lucide-react';

const EventConfirmation = () => {
  const navigate = useNavigate();
  const { confirmedEventBooking, selectedEventCategory, selectedEventPackage, selectedEventScreen, selectedEventDate, selectedEventSlot, eventCustomization } = useBooking();

  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
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
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Celebration Background */}
      <PageBackground variant="events" />

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
            className="w-16 h-16 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center mx-auto mb-3 shadow-md border border-white"
          >
            <Heart className="w-9 h-9 fill-[#EC4899]" />
          </motion.div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] tracking-tight">
            Celebration Reserved!
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-1">
            Your private cinema hall is confirmed. Our event manager will connect with you shortly.
          </p>
        </motion.div>

        {/* Digital VIP Event Pass */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/90 shadow-[0_24px_60px_rgba(244,63,94,0.15)] relative"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#EC4899] via-[#852ECA] to-[#6722A0] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-base block leading-none">VIP Event Pass</span>
                <span className="text-[10px] text-white/80 block mt-0.5">Ref: {eventData.bookingId}</span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
              VIP Confirmed
            </span>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            <div className="pb-5 border-b border-[#E8E1EF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EC4899] bg-pink-50 px-2.5 py-0.5 rounded-full">
                {eventData.eventCategoryTitle}
              </span>
              <h3 className="font-display font-black text-xl text-[#241532] mt-1.5">
                {eventData.packageName}
              </h3>
              <p className="text-xs text-[#746A7D] mt-0.5">
                {eventData.screen} • {eventData.date}
              </p>
              <p className="text-xs font-bold text-[#6722A0] mt-1">
                Break Time Slot: {eventData.slot}
              </p>
            </div>

            {/* Custom Screen Message Callout */}
            <div className="my-5 p-3.5 rounded-2xl bg-[#FAF5FF] border border-[#6722A0]/20 text-center">
              <span className="text-[10px] font-bold uppercase text-[#746A7D] block">Illuminated Screen Message</span>
              <span className="font-display font-extrabold text-sm text-[#6722A0] mt-1 block">
                "{eventData.customMessage}"
              </span>
            </div>

            {/* Inclusions summary */}
            <div className="py-4 border-b border-dashed border-[#E8E1EF] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#746A7D] block">Guest Limit</span>
                <span className="font-bold text-[#241532] mt-0.5 block">{eventData.guestCount} Guests</span>
              </div>
              <div>
                <span className="text-[#746A7D] block">Amount Paid</span>
                <span className="font-bold text-[#241532] mt-0.5 block">₹{eventData.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Simulated QR Code Pass */}
            <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-[#FDF1F7] border border-[#E8E1EF] p-2 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-full h-full text-[#321044]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#241532] block">VIP Concierge Check-in</span>
                  <span className="text-[11px] text-[#746A7D] block">Show pass to Event Butler</span>
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
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/80 hover:border-[#6722A0] bg-white/80 backdrop-blur-md text-xs font-semibold text-[#241532] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigate('/my-bookings')}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(103,34,160,0.25)] transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>View in My Bookings</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventConfirmation;
