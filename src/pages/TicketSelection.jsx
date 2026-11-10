import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import PageBackground from '../components/common/PageBackground';
import screenDolby from '../assets/images/screen_dolby.jpg';
import screenGold from '../assets/images/screen_gold.jpg';
import screenExecutive from '../assets/images/screen_executive.jpg';
import { Crown, Check, ArrowRight, Sparkles, Diamond, Shield } from 'lucide-react';

const TicketSelection = () => {
  const navigate = useNavigate();
  const { 
    selectedMovie, 
    selectedScreen, 
    selectedDate, 
    selectedShowtime, 
    ticketQuantity, 
    setTicketQuantity, 
    selectedCategory, 
    setSelectedCategory 
  } = useBooking();

  const [customQty, setCustomQty] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const categories = [
    {
      id: 'silver',
      name: 'Silver Class',
      price: 150,
      icon: Shield,
      features: ['Standard Seating', 'Good View', 'Dolby Digital Sound'],
      bgImage: screenDolby,
    },
    {
      id: 'gold',
      name: 'Gold Class',
      price: 250,
      icon: Crown,
      isPopular: true,
      features: ['Premium Seating', 'Better View', 'Enhanced Ergonomic Comfort'],
      bgImage: screenGold,
    },
    {
      id: 'platinum',
      name: 'Platinum Class',
      price: 400,
      icon: Diamond,
      features: ['Luxury Seating', 'Exclusive View', 'Full Leather Recliners & Service'],
      bgImage: screenExecutive,
    },
  ];

  const quantities = [1, 2, 3, 4, 5, 6];

  const handleQtyClick = (q) => {
    setIsCustom(false);
    setTicketQuantity(q);
  };

  const handleCustomChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setCustomQty(e.target.value);
    if (!isNaN(val) && val > 0 && val <= 20) {
      setTicketQuantity(val);
    }
  };

  const currentPrice = selectedCategory?.price || 250;
  const totalPrice = ticketQuantity * currentPrice;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Royal Tickets Background */}
      <PageBackground variant="tickets" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header directly matching reference */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
              Step 3 • Category & Quantity
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2 tracking-tight">
              Choose Ticket Category
            </h1>
            <p className="text-xs text-[#746A7D]">
              {selectedMovie?.title} • {selectedScreen} • {selectedDate} ({selectedShowtime})
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#EAB308]/20 via-[#FEF3C7] to-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shadow-md border border-white/80">
            <Crown className="w-6 h-6 fill-current" />
          </div>
        </motion.div>

        {/* 3 Categories Cards Matching Reference */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory?.id === cat.id;
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-3xl p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FFF9EE] via-white to-white border-[#EAB308] shadow-[0_18px_45px_rgba(234,179,8,0.22)] ring-2 ring-[#EAB308]/40'
                    : 'glass-reflective border-white/90 shadow-sm hover:border-[#6722A0]/40'
                }`}
              >
                {/* Popular Crown Badge for Gold */}
                {cat.id === 'gold' && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EAB308] text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-white" />
                    <span>RECOMMENDED</span>
                  </div>
                )}

                <div>
                  {/* Category Image Preview */}
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4 border border-white/80 shadow-xs">
                    <img src={cat.bgImage} alt={cat.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <div className="flex items-center gap-1.5 text-white">
                        <Icon className="w-4 h-4 text-[#F2CA50]" />
                        <span className="font-display font-bold text-sm">{cat.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-2">
                    <span className="font-display font-black text-3xl text-[#241532]">
                      ₹{cat.price}
                    </span>
                    <span className="text-xs text-[#746A7D] block -mt-1">per person</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-4 space-y-2 border-t border-[#E8E1EF] pt-4">
                    {cat.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#746A7D]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select / Selected Button */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#321044] text-white shadow-md'
                        : 'bg-[#F5F0FC] text-[#6722A0] hover:bg-[#6722A0] hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ticket Quantity Selection Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="glass-reflective rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-bold text-base text-[#241532]">Select Number of Tickets</h3>
              <p className="text-xs text-[#746A7D]">Automatic adjacent seats will be reserved based on this quantity</p>
            </div>

            <div className="flex items-center gap-2">
              {quantities.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQtyClick(q)}
                  className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    !isCustom && ticketQuantity === q
                      ? 'bg-[#6722A0] text-white shadow-md scale-105'
                      : 'bg-[#F5F0FC] text-[#241532] hover:bg-[#E9E5FA] border border-[#E8E1EF]'
                  }`}
                >
                  {q}
                </button>
              ))}

              {/* Custom input */}
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="20"
                  placeholder="Custom"
                  value={customQty}
                  onChange={handleCustomChange}
                  onFocus={() => setIsCustom(true)}
                  className={`w-20 px-2.5 py-1.5 rounded-full text-xs text-center border font-semibold outline-none transition-all ${
                    isCustom
                      ? 'border-[#6722A0] bg-[#F5F0FC] text-[#6722A0]'
                      : 'border-[#E8E1EF] bg-white text-[#241532]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Pricing Summary Row & Proceed CTA */}
          <div className="pt-6 border-t border-[#E8E1EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#746A7D]">Booking Summary:</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-display font-black text-2xl text-[#241532]">
                  ₹{totalPrice}
                </span>
                <span className="text-xs text-[#746A7D]">
                  ({ticketQuantity} tickets × ₹{currentPrice} for {selectedCategory?.name})
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/booking/seats')}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-[0_6px_20px_rgba(103,34,160,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Continue to Seat Selection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TicketSelection;
