import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENT_CATEGORIES, EVENT_PACKAGES } from '../data/eventsData';
import { useBooking } from '../context/BookingContext';
import { Heart, Sparkles, ArrowRight, Calendar, Users, Music, Gift, Check, ShieldCheck } from 'lucide-react';
import eventMarryMe from '../assets/images/event_marryme_hd.png';

const Events = () => {
  const navigate = useNavigate();
  const { setSelectedEventCategory } = useBooking();

  const handleSelectCategory = (categoryId) => {
    setSelectedEventCategory(categoryId);
    navigate('/events/slots');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#EC4899]/6 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#9B4BC5]/6 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section Directly Matching Reference Bottom-Left Preview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(103,34,160,0.12)] bg-[#1a0c24] text-white mb-14"
        >
          {/* Hero MarryMe Cinema Image */}
          <div className="absolute inset-0">
            <img
              src={eventMarryMe}
              alt="Romantic Private Cinema Hall with Marry Me Neon Lights"
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c24] via-[#1a0c24]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c24] via-transparent to-black/20" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-end">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-[#F3D9ED] mb-4 w-fit">
              <Heart className="w-3.5 h-3.5 text-[#EC4899] fill-[#EC4899]" />
              <span>Private Celebrations & Intermission Suites</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[52px] leading-[1.08] tracking-tight text-white drop-shadow-md">
              Your Moments<br />
              <span className="text-[#F3D9ED] bg-gradient-to-r from-[#F3D9ED] via-white to-[#FCE7DF] bg-clip-text text-transparent">
                Deserve the Big Screen
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-white/90 font-normal max-w-md leading-relaxed">
              Celebrate your special occasions in our premium cinema hall during scheduled break-time slots.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate('/events/categories')}
                className="px-8 py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-xs shadow-[0_6px_20px_rgba(103,34,160,0.4)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Event Category Cards Row Matching Reference Bottom Bar */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#241532]">
              Choose Your Celebration
            </h2>
            <p className="text-xs text-[#746A7D] mt-1">
              Select an event format to view available cinema screens and break-time intervals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENT_CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleSelectCategory(cat.id)}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-[#E8E1EF] shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                      From ₹{cat.startingPrice.toLocaleString()}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#241532] group-hover:text-[#6722A0] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-[#746A7D] mt-1 line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E8E1EF] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#6722A0]">Book Slot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6722A0] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits of Private Cinema Celebrations */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-[0_12px_36px_rgba(103,34,160,0.04)] mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#241532]">Dedicated Cinema Hall</h4>
                <p className="text-xs text-[#746A7D] mt-1">
                  Enjoy the entire auditorium exclusively with your loved ones and invitees during intermission break slots.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#241532]">Custom Screen Messages</h4>
                <p className="text-xs text-[#746A7D] mt-1">
                  Project your personal videos, photos, and illuminated marquee words on the giant 4K laser canvas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#241532]">Artisan Treats & Butler</h4>
                <p className="text-xs text-[#746A7D] mt-1">
                  Celebration cake, gourmet snacks, and dedicated coordinator hospitality throughout your experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Packages Preview */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#241532]">
              Celebration Packages
            </h2>
            <p className="text-xs text-[#746A7D] mt-1">
              Select a package to personalize with custom screen graphics and gourmet treats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-[#FFF9EE] via-white to-white border-[#EAB308] shadow-[0_16px_40px_rgba(234,179,8,0.15)] scale-[1.02]'
                    : 'bg-white/80 border-[#E8E1EF] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                    <span className="font-display font-black text-2xl text-[#241532]">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-[#241532] mt-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#746A7D] mt-1 mb-4">
                    {pkg.tagline}
                  </p>

                  <div className="space-y-2 border-t border-[#E8E1EF] pt-4">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#746A7D]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      navigate('/events/slots');
                    }}
                    className="w-full py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Book {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Events;
