import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import avatarPriya from '../assets/images/avatar_priya_unsplash.jpg';
import posterKalki from '../assets/images/movie_kalki_poster.jpg';
import { 
  LayoutDashboard, 
  Ticket, 
  PartyPopper, 
  Tag, 
  User, 
  LogOut, 
  Calendar, 
  Clock, 
  Film, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  QrCode,
  X
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { bookingsList, eventsList, resetDemoData } = useBooking();

  const [activeNav, setActiveNav] = useState('dashboard'); // 'dashboard' | 'bookings' | 'events' | 'offers' | 'profile'
  const [selectedTicketModal, setSelectedTicketModal] = useState(null);

  const upcomingMovies = bookingsList.filter((b) => b.status === 'confirmed');
  const upcomingEvents = eventsList.filter((e) => e.status === 'confirmed');

  return (
    <div className="w-full min-h-[calc(100vh-74px)] flex flex-col md:flex-row relative">
      
      {/* Left Sidebar directly matching reference bottom-right screen */}
      <aside className="w-full md:w-64 bg-[#321044] text-white p-6 flex flex-col justify-between flex-shrink-0 z-20 shadow-xl">
        <div>
          {/* Logo inside Sidebar */}
          <div className="flex items-center gap-2.5 mb-8 pb-6 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6722A0] to-[#9B4BC5] flex items-center justify-center text-white shadow-xs">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.5v15a1 1 0 001.55.83l12-7.5a1 1 0 000-1.66l-12-7.5A1 1 0 007 4.5z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-tight block leading-none">
                Dream<span className="text-[#9B4BC5]">Cine</span>
              </span>
              <span className="text-[9px] text-white/60 tracking-wider uppercase block mt-0.5">
                Movies & Events
              </span>
            </div>
          </div>

          {/* Navigation Links directly matching reference */}
          <nav className="space-y-1.5 text-xs font-semibold">
            <button
              onClick={() => setActiveNav('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-left cursor-pointer ${
                activeNav === 'dashboard'
                  ? 'bg-[#6722A0] text-white shadow-sm'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate('/my-bookings')}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all text-left cursor-pointer"
            >
              <Ticket className="w-4 h-4" />
              <span>My Bookings</span>
            </button>

            <button
              onClick={() => navigate('/my-bookings')}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all text-left cursor-pointer"
            >
              <PartyPopper className="w-4 h-4" />
              <span>My Events</span>
            </button>

            <button
              onClick={() => navigate('/offers')}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all text-left cursor-pointer"
            >
              <Tag className="w-4 h-4" />
              <span>Offers</span>
            </button>

            <button
              onClick={() => setActiveNav('profile')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-left cursor-pointer ${
                activeNav === 'profile'
                  ? 'bg-[#6722A0] text-white shadow-sm'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </nav>
        </div>

        {/* Logout / Reset Demo */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={() => {
              resetDemoData();
              navigate('/');
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area directly matching reference bottom-right screen */}
      <main className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto relative">
        {/* Dedicated Modern Dashboard Background */}
        <PageBackground variant="dashboard" />

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Header Row: Welcome Back Priya! + Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] tracking-tight">
                Welcome Back, Priya!
              </h1>
              <p className="text-xs sm:text-sm text-[#746A7D] mt-0.5">
                Your entertainment journey continues...
              </p>
            </div>

            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
              <img
                src={avatarPriya}
                alt="Priya Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Quick Stats Cards Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10"
          >
            {/* Stat 1: Upcoming Movies */}
            <div className="glass-reflective rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#746A7D] font-medium block">Upcoming Movies</span>
                <span className="font-display font-extrabold text-xl text-[#241532] block">
                  {upcomingMovies.length} Booking{upcomingMovies.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            {/* Stat 2: Upcoming Events */}
            <div className="glass-reflective rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#746A7D] font-medium block">Upcoming Events</span>
                <span className="font-display font-extrabold text-xl text-[#241532] block">
                  {upcomingEvents.length} Event{upcomingEvents.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* "Your Upcoming Bookings" Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mb-10"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg text-[#241532]">
                Your Upcoming Bookings
              </h2>
              <button
                onClick={() => navigate('/my-bookings')}
                className="text-xs font-semibold text-[#6722A0] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Upcoming Movies Ticket Cards */}
            <div className="space-y-4">
              {upcomingMovies.map((b) => (
                <div
                  key={b.bookingId}
                  className="glass-reflective rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={b.poster || posterKalki}
                      alt={b.movieTitle}
                      className="w-16 h-20 object-cover rounded-xl shadow-xs flex-shrink-0 border border-white/80"
                    />
                    <div>
                      <h3 className="font-display font-bold text-base text-[#241532]">
                        {b.movieTitle}
                      </h3>
                      <p className="text-xs text-[#746A7D] mt-0.5">
                        {b.date} • {b.time}
                      </p>
                      <p className="text-xs font-semibold text-[#6722A0] mt-1">
                        {b.screen} • Seats: {b.seats.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      onClick={() => setSelectedTicketModal(b)}
                      className="px-5 py-2 rounded-full bg-[#321044] hover:bg-[#20072d] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer hover:scale-[1.03]"
                    >
                      <span>View Ticket</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* "Your Upcoming Events" Section */}
          {upcomingEvents.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-lg text-[#241532]">
                  Your Upcoming Private Celebrations
                </h2>
                <button
                  onClick={() => navigate('/my-bookings')}
                  className="text-xs font-semibold text-[#6722A0] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((e) => (
                  <div
                    key={e.bookingId}
                    className="glass-reflective rounded-3xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-[#EC4899] bg-pink-50 px-2 py-0.5 rounded-full">
                          {e.eventCategoryTitle}
                        </span>
                        <h3 className="font-display font-bold text-base text-[#241532] mt-0.5">
                          {e.packageName}
                        </h3>
                        <p className="text-xs text-[#746A7D]">
                          {e.screen} • {e.date} ({e.slot})
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate('/events/confirmation')}
                      className="px-5 py-2 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer hover:scale-[1.03]"
                    >
                      <span>View Event Pass</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </main>

      {/* Modal View for Ticket */}
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
                {selectedTicketModal.category}
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
                <span className="text-[#746A7D]">Date & Time</span>
                <span className="font-bold text-[#241532]">{selectedTicketModal.date} • {selectedTicketModal.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Seats</span>
                <span className="font-bold text-[#6722A0]">{selectedTicketModal.seats.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746A7D]">Booking ID</span>
                <span className="font-mono font-bold text-[#241532]">{selectedTicketModal.bookingId}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <div className="w-24 h-24 p-2 bg-[#F5F0FC] rounded-2xl border border-[#E8E1EF] flex items-center justify-center mb-2">
                <QrCode className="w-full h-full text-[#321044]" />
              </div>
              <span className="text-[11px] text-[#746A7D]">Scan at cinema hall entrance</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
