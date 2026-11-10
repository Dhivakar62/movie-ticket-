import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENT_CATEGORIES } from '../data/eventsData';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { Heart, Sparkles, Check, ArrowRight } from 'lucide-react';

const EventCategorySelection = () => {
  const navigate = useNavigate();
  const { selectedEventCategory, setSelectedEventCategory } = useBooking();

  const handleSelect = (catId) => {
    setSelectedEventCategory(catId);
    navigate('/events/slots');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Celebration Background */}
      <PageBackground variant="events" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Step Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Step 1 • Event Theme
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2 tracking-tight">
            Select Your Event Category
          </h1>
          <p className="text-xs text-[#746A7D] mt-1">
            Choose the type of celebration you want to curate inside DreamCine's luxury cinema halls.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENT_CATEGORIES.map((cat, index) => {
            const isSelected = selectedEventCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => setSelectedEventCategory(cat.id)}
                className={`rounded-3xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FAF5FF] via-white to-white border-[#6722A0] shadow-[0_16px_40px_rgba(103,34,160,0.15)] ring-2 ring-[#6722A0]/20'
                    : 'glass-reflective border-white/90 shadow-sm hover:border-[#6722A0]/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Category Image */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-white/80 shadow-xs">
                    <img src={cat.heroBanner || cat.image} alt={cat.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-white">
                      From ₹{cat.startingPrice.toLocaleString()}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#241532]">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6722A0] mt-0.5">
                    {cat.headline}
                  </p>
                  <p className="text-xs text-[#746A7D] mt-2 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#E8E1EF] space-y-1.5">
                    {cat.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#746A7D]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-[#746A7D]">Ideal for: {cat.idealFor}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(cat.id);
                    }}
                    className={`px-6 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#6722A0] text-white shadow-md'
                        : 'bg-[#F5F0FC] text-[#6722A0] hover:bg-[#6722A0] hover:text-white'
                    }`}
                  >
                    <span>{isSelected ? 'Proceed with This' : 'Select'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default EventCategorySelection;
