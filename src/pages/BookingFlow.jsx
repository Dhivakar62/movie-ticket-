import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MULTIPLEX_SCREENS } from '../data/movieData';
import { useBooking } from '../context/BookingContext';
import ScreenChoiceSelector from '../components/booking/ScreenChoiceSelector';
import DateTimeSelector from '../components/booking/DateTimeSelector';
import TicketCounter from '../components/booking/TicketCounter';
import SeatMap from '../components/booking/SeatMap';
import BookingSummaryCard from '../components/booking/BookingSummaryCard';
import { Star, Clock, Globe, ArrowLeft, Tv, ShieldCheck } from 'lucide-react';

export default function BookingFlow() {
  const { id } = useParams();
  const { selectedScreen, setSelectedScreen } = useBooking();

  useEffect(() => {
    if (id) {
      const found = MULTIPLEX_SCREENS.find(s => s.id === id);
      if (found) setSelectedScreen(found);
    }
  }, [id, setSelectedScreen]);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Back button & Breadcrumbs */}
      <div className="flex items-center justify-between pb-4 border-b border-[#21283a]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Multiplex</span>
        </Link>
        <span className="text-[11px] font-mono text-gray-500">
          Booking Flow • Step 1: Seat & Time Selection
        </span>
      </div>

      {/* Selected Movie Hero Banner Card (matching Stitch Screen 3 top) */}
      <div className="bg-[#121622] rounded-3xl border border-brand-gold/30 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          
          {/* Poster */}
          <div className="w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-[#2b3548] flex-shrink-0 shadow-lg">
            <img
              src={selectedScreen.poster}
              alt={selectedScreen.movieTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-2.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Tv className="w-3.5 h-3.5" />
              <span>{selectedScreen.screenNumber} • {selectedScreen.tier}</span>
            </div>

            <h1 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white">
              {selectedScreen.movieTitle}
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              {selectedScreen.synopsis}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                <span className="font-bold text-white">{selectedScreen.rating}</span> / 5.0
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                {selectedScreen.duration}
              </span>
              <span>•</span>
              <span>Director: {selectedScreen.director}</span>
              <span>•</span>
              <span className="text-brand-gold font-semibold">{selectedScreen.format}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Flow Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Interactive Selection Panels */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Screen Choice Selector */}
          <ScreenChoiceSelector />

          {/* Date & Time Selector */}
          <DateTimeSelector />

          {/* Ticket Counter & Category Selector */}
          <TicketCounter />

          {/* Interactive Seat Map */}
          <SeatMap />

        </div>

        {/* Right Sticky Booking Summary */}
        <div className="lg:col-span-4 sticky top-24">
          <BookingSummaryCard />
        </div>

      </div>

    </div>
  );
}
