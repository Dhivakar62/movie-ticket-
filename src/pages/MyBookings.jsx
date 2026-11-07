import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import DigitalTicketModal from '../components/common/DigitalTicketModal';
import { Ticket, Calendar, Clock, Crown, Sparkles, QrCode, ArrowRight, Film, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MyBookings() {
  const { myBookings } = useBooking();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [activeTab, setActiveTab] = useState('ALL');

  const movieBookings = myBookings.filter(b => b.type === 'movie');
  const eventBookings = myBookings.filter(b => b.type === 'event');

  const displayedBookings = activeTab === 'ALL'
    ? myBookings
    : activeTab === 'MOVIES'
    ? movieBookings
    : eventBookings;

  return (
    <div className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#21283a] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">
            <Ticket className="w-3.5 h-3.5" />
            <span>Admission Central</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-white">
            Customer <span className="gold-text-gradient">Dashboard</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Manage your movie tickets, access digital admission QR codes, and review private event reservations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-[#273044]">
          {[
            { id: 'ALL', label: `All (${myBookings.length})` },
            { id: 'MOVIES', label: `Movies (${movieBookings.length})` },
            { id: 'EVENTS', label: `Events (${eventBookings.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-gold text-black shadow-sm font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      {displayedBookings.length === 0 ? (
        <div className="bg-[#121622] rounded-3xl border border-[#222a3d] p-12 text-center max-w-md mx-auto space-y-4">
          <Ticket className="w-12 h-12 text-gray-600 mx-auto" />
          <h3 className="font-serif-luxury text-lg font-bold text-white">No Bookings Found</h3>
          <p className="text-xs text-gray-400">You haven't reserved any movie tickets or private screenings yet.</p>
          <Link
            to="/"
            className="inline-block px-6 py-2.5 bg-brand-gold text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-goldLight transition-colors"
          >
            Explore Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedBookings.map((b) => (
            <div
              key={b.id}
              className="bg-[#121622] rounded-2xl border border-[#242c3d] hover:border-brand-gold/50 p-5 transition-all hover:shadow-xl hover:shadow-brand-gold/10 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#1f2638]">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${b.type === 'movie' ? 'bg-brand-gold' : 'bg-purple-400'}`} />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                    {b.type === 'movie' ? 'Movie Ticket' : 'Private Screening'}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-brand-gold">{b.id}</span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                  {b.movieTitle || b.eventName}
                </h3>
                <p className="text-xs text-brand-gold font-medium mt-0.5">
                  {b.screenNumber} • {b.tier || b.package}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4 bg-[#171d2a] p-3 rounded-xl border border-[#232b3c] text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Date</span>
                    <span className="font-semibold text-white">{b.showDate || b.eventDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Time</span>
                    <span className="font-semibold text-white">{b.showTime || b.eventTime}</span>
                  </div>
                  {b.seats && (
                    <div className="col-span-2 pt-1 border-t border-[#202738] flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">Seats:</span>
                      <span className="font-mono font-bold text-brand-gold">{b.seats.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#1f2638] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">Total Paid</span>
                  <span className="font-serif-luxury text-sm font-bold text-white">₹{b.totalAmount} INR</span>
                </div>

                <button
                  onClick={() => setSelectedTicket(b)}
                  className="px-4 py-2 rounded-xl bg-brand-gold text-black font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all flex items-center gap-1.5 shadow-gold-sm"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>View Pass</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Ticket Modal */}
      {selectedTicket && (
        <DigitalTicketModal
          booking={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}

    </div>
  );
}
