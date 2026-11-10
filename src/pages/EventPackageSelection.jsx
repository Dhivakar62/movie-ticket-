import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EVENT_PACKAGES } from '../data/eventsData';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import { Check, ArrowRight, ArrowLeft, Crown, Sparkles, Diamond, Shield } from 'lucide-react';

const EventPackageSelection = () => {
  const navigate = useNavigate();
  const { 
    selectedEventCategory, 
    selectedEventScreen, 
    selectedEventDate, 
    selectedEventSlot, 
    selectedEventPackage, 
    setSelectedEventPackage 
  } = useBooking();

  const handleSelectPackage = (pkg) => {
    setSelectedEventPackage(pkg);
    navigate('/events/customize');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Celebration Background */}
      <PageBackground variant="events" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Step Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Step 4 • Celebration Packages
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2 tracking-tight">
            Choose Your Event Package
          </h1>
          <p className="text-xs text-[#746A7D] mt-1">
            Slot: <strong className="text-[#6722A0]">{selectedEventDate} ({selectedEventSlot})</strong> on {selectedEventScreen}
          </p>
        </motion.div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {EVENT_PACKAGES.map((pkg) => {
            const isSelected = selectedEventPackage?.id === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedEventPackage(pkg)}
                className={`relative rounded-3xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FFF9EE] via-white to-white border-[#EAB308] shadow-[0_16px_40px_rgba(234,179,8,0.2)] ring-2 ring-[#EAB308]/30'
                    : 'glass-reflective border-white/90 shadow-sm hover:border-[#6722A0]/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EAB308] text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-white" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 border border-white/80 shadow-xs">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                      {pkg.badge}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#241532]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#746A7D] mt-1 mb-4">
                    {pkg.tagline}
                  </p>

                  <div className="text-center py-3 bg-white/70 rounded-2xl border border-[#E8E1EF] mb-4">
                    <span className="font-display font-black text-3xl text-[#241532]">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#746A7D] block -mt-1">all-inclusive</span>
                  </div>

                  <div className="space-y-2 border-t border-[#E8E1EF] pt-4">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#746A7D]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPackage(pkg);
                    }}
                    className={`w-full py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#321044] text-white shadow-md'
                        : 'bg-[#F5F0FC] text-[#6722A0] hover:bg-[#6722A0] hover:text-white'
                    }`}
                  >
                    <span>{isSelected ? 'Customize Package' : 'Select Package'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/events/slots')}
            className="px-5 py-2 rounded-full border border-white/80 bg-white/70 backdrop-blur-md text-xs font-semibold text-[#241532] hover:bg-white flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Slots</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventPackageSelection;
