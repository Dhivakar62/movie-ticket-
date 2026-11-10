import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SCREENS_DATA } from '../data/screensData';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { Users, Sparkles, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const ScreenSelection = () => {
  const navigate = useNavigate();
  const { selectedMovie, setSelectedScreen } = useBooking();

  const handleSelectScreen = (screen) => {
    setSelectedScreen(screen.name + ' (' + screen.format + ')');
    navigate('/booking/showtime');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Auditorium Inspired Background */}
      <PageBackground variant="screens" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Breadcrumbs / Title */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
            Step 1 • Cinema Environments
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#241532] mt-3 tracking-tight">
            Choose Your Screen Experience
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-2">
            Selected movie: <strong className="text-[#6722A0]">{selectedMovie?.title || 'Kalki 2898 AD'}</strong>. Each screen offers distinct visual, sound, and comfort tiers.
          </p>
        </motion.div>

        {/* 4 Screens Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SCREENS_DATA.map((screen) => (
            <motion.div
              key={screen.id}
              variants={cardVariants}
              className="glass-reflective rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Screen Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {screen.badge}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#241532] mt-1">
                      {screen.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#746A7D]">{screen.format}</p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white text-[#241532] text-xs font-bold shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#6722A0]" />
                    <span>{screen.capacity} Seats</span>
                  </div>
                </div>

                {/* Screen Visual Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-white/80 shadow-xs">
                  <img
                    src={screen.image}
                    alt={screen.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F2CA50]" />
                      Now Playing: {screen.currentMovie}
                    </span>
                  </div>
                </div>

                {/* Facilities List */}
                <div className="space-y-2 mb-6">
                  {screen.facilities.map((fac, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#746A7D]">
                      <div className="w-4 h-4 rounded-full bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E8E1EF] flex items-center justify-between">
                <div className="text-xs text-[#746A7D]">
                  <span className="block font-medium">Next showtime:</span>
                  <span className="font-bold text-[#6722A0]">{screen.showtimes[0]}</span>
                </div>

                <button
                  onClick={() => handleSelectScreen(screen)}
                  className="px-6 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(103,34,160,0.25)] flex items-center gap-1.5 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                >
                  <span>Select {screen.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default ScreenSelection;
