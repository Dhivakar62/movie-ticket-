import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
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
      bgImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'gold',
      name: 'Gold Class',
      price: 250,
      icon: Crown,
      isPopular: true,
      features: ['Premium Seating', 'Better View', 'Enhanced Ergonomic Comfort'],
      bgImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'platinum',
      name: 'Platinum Class',
      price: 400,
      icon: Diamond,
      features: ['Luxury Seating', 'Exclusive View', 'Full Leather Recliners & Food Service'],
      bgImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
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

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header directly matching reference */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-3.5 py-1 rounded-full border border-[#E8E1EF]">
              Step 3 • Category & Quantity
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#241532] mt-2">
              Choose Ticket Category
            </h1>
            <p className="text-xs text-[#746A7D]">
              {selectedMovie?.title} • {selectedScreen} • {selectedDate} ({selectedShowtime})
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#EAB308]/20 to-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shadow-sm">
            <Crown className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* 3 Categories Cards Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory?.id === cat.id;
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-3xl p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FFF9EE] via-white to-white border-[#EAB308] shadow-[0_16px_40px_rgba(234,179,8,0.2)]'
                    : 'bg-white/80 border-[#E8E1EF] shadow-sm hover:border-[#6722A0]/40'
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
                  <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4">
                    <img src={cat.bgImage} alt={cat.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
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
        </div>

        {/* Ticket Quantity Selection Panel */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-[0_12px_36px_rgba(103,34,160,0.06)]">
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
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Continue to Seat Selection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketSelection;
