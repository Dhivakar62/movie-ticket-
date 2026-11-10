import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { Ticket, PartyPopper, Calendar, Clock, Film, QrCode, X, Download, ArrowRight } from 'lucide-react';

const MyBookings = () => {
  const navigate = useNavigate();
  const { bookingsList, eventsList } = useBooking();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'confirmed' | 'completed' | 'cancelled'
  const [selectedTicketModal, setSelectedTicketModal] = useState(null);

  // Combine items
  const allItems = [
    ...bookingsList.map((b) => ({ ...b, itemKind: 'movie' })),
    ...eventsList.map((e) => ({ ...e, itemKind: 'event', movieTitle: e.eventCategoryTitle, seats: [`${e.guestCount} Guests`] })),
  ];

  const filteredItems = allItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.status === activeTab;
  });

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Executive Dashboard Background */}
      <PageBackground variant="dashboard" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] tracking-tight">
              My Bookings & Reservations
            </h1>
            <p className="text-xs text-[#746A7D] mt-0.5">
              Manage your movie ticket passes and private celebration suites.
            </p>
          </div>

          <button
            onClick={() => navigate('/movies')}
            className="px-5 py-2.5 rounded-full bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] transition-all shadow-md hover:scale-[1.02] cursor-pointer"
          >
            Book Another Movie
          </button>
        </motion.div>

        {/* Tabs: All, Upcoming, Completed, Cancelled */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex items-center gap-2 border-b border-[#E8E1EF] pb-4 mb-8 overflow-x-auto no-scrollbar"
        >
          {[
            { id: 'all', label: `All (${allItems.length})` },
            { id: 'confirmed', label: 'Upcoming' },
            { id: 'completed', label: 'Completed' },
            { id: 'cancelled', label: 'Cancelled' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#6722A0] text-white shadow-xs'
                  : 'glass-frosted hover:bg-white text-[#241532]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Bookings List */}
        {filteredItems.length > 0 ? (
          <div className="space-y-4">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.bookingId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-reflective rounded-3xl p-5 sm:p-6 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {item.itemKind === 'movie' ? (
                    <img
                      src={item.poster}
                      alt={item.movieTitle}
                      className="w-16 h-22 object-cover rounded-xl shadow-xs flex-shrink-0 border border-white/80"
                    />
                  ) : (
                    <div className="w-16 h-20 rounded-xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                      <PartyPopper className="w-8 h-8" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                        item.status === 'confirmed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'completed'
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {item.status === 'confirmed' ? 'Upcoming' : item.status}
                      </span>
                      <span className="text-[11px] text-[#746A7D]">ID: {item.bookingId}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-[#241532] mt-1">
                      {item.movieTitle || item.eventCategoryTitle}
                    </h3>
                    <p className="text-xs text-[#746A7D] mt-0.5">
                      {item.screen} • {item.date} at {item.time || item.slot}
                    </p>
                    <p className="text-xs font-semibold text-[#6722A0] mt-1">
                      {item.itemKind === 'movie' ? `Seats: ${item.seats?.join(', ')} (${item.category})` : `${item.packageName} • ${item.guestCount} Guests`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right hidden sm:block mr-2">
                    <span className="text-[11px] text-[#746A7D] block">Total Paid</span>
                    <span className="font-display font-bold text-sm text-[#241532]">
                      ₹{item.totalAmount}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedTicketModal(item)}
                    className="px-5 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer flex items-center gap-1.5 hover:scale-[1.02]"
                  >
                    <span>View Pass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center glass-frosted rounded-3xl max-w-md mx-auto p-8">
            <Ticket className="w-12 h-12 text-[#9B4BC5] mx-auto mb-3 opacity-60" />
            <h3 className="font-display font-bold text-lg text-[#241532]">No bookings found</h3>
            <p className="text-xs text-[#746A7D] mt-1">
              You have no {activeTab !== 'all' ? activeTab : ''} bookings at the moment.
            </p>
            <button
              onClick={() => navigate('/movies')}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] shadow-sm transition-all"
            >
              Explore Movies Now
            </button>
          </div>
        )}
      </div>

      {/* Ticket Details Modal */}
      {selectedTicketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative border border-white/80 shadow-2xl">
            <button
              onClick={() => setSelectedTicketModal(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center pb-4 border-b border-[#E8E1EF]">
              <span className="text-[10px] font-bold text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-full uppercase">
                {selectedTicketModal.category || selectedTicketModal.packageName}
              </span>
              <h3 className="font-display font-black text-xl text-[#241532] mt-1.5">
                {selectedTicketModal.movieTitle}
              </h3>
              <p className="text-xs text-[#746A7D] mt-0.5">
                {selectedTicketModal.screen}
              </p>
            </div>

            <div className="py-4 space-y-2 text-xs border-b border-[#E8E1EF]">
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Schedule</span>
                <span className="font-bold text-[#241532]">{selectedTicketModal.date} • {selectedTicketModal.time || selectedTicketModal.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Seats / Guests</span>
                <span className="font-bold text-[#6722A0]">{selectedTicketModal.seats?.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Booking ID</span>
                <span className="font-mono font-bold text-[#241532]">{selectedTicketModal.bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Amount</span>
                <span className="font-bold text-[#241532]">₹{selectedTicketModal.totalAmount}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <div className="w-24 h-24 p-2 bg-[#F5F0FC] rounded-2xl border border-[#E8E1EF] flex items-center justify-center mb-2">
                <QrCode className="w-full h-full text-[#321044]" />
              </div>
              <span className="text-[11px] text-[#746A7D]">Show this digital barcode upon entry</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyBookings;
