import React from 'react';
import { Users, Crown, Shield } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function TicketCounter() {
  const { 
    selectedScreen, 
    selectedCategory, 
    setSelectedCategory,
    ticketQuantity, 
    setTicketQuantity,
    selectedSeats,
    setSelectedSeats
  } = useBooking();

  const categories = [
    { id: "silver", name: "Silver", price: selectedScreen.pricing.silver, desc: "Front Rows (A-D)" },
    { id: "gold", name: "Gold", price: selectedScreen.pricing.gold, desc: "Prime Club (E-H)" },
    { id: "platinum", name: "Platinum", price: selectedScreen.pricing.platinum, desc: "VIP Recliner (J-K)" }
  ];

  const handleQtyChange = (qty) => {
    setTicketQuantity(qty);
    // If fewer seats are selected than quantity, keep selected; if more, trim
    if (selectedSeats.length > qty) {
      setSelectedSeats(selectedSeats.slice(0, qty));
    }
  };

  return (
    <div className="bg-[#121622] rounded-2xl border border-[#242c3d] p-4 sm:p-5 space-y-4">
      {/* Category Selection */}
      <div>
        <h3 className="font-serif-luxury text-sm font-bold text-white flex items-center gap-2 mb-2.5">
          <Crown className="w-4 h-4 text-brand-gold" />
          <span>Ticket Category</span>
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-brand-gold/15 border-brand-gold shadow-gold-sm text-white'
                    : 'bg-[#181e2b] border-[#293245] text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? 'text-brand-gold' : 'text-gray-300'}`}>
                    {cat.name}
                  </span>
                  <span className="text-xs font-black text-white">
                    ₹{cat.price}
                  </span>
                </div>
                <span className="block text-[9px] text-gray-500 mt-1 truncate">
                  {cat.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Number of Tickets */}
      <div className="pt-2 border-t border-[#21283a]">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            <span>Number of Tickets</span>
          </h4>
          <span className="text-xs font-bold text-brand-gold">
            {ticketQuantity} {ticketQuantity === 1 ? 'Seat' : 'Seats'}
          </span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => {
            const isSelected = ticketQuantity === num;
            return (
              <button
                key={num}
                onClick={() => handleQtyChange(num)}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-brand-gold text-black shadow-gold-sm font-extrabold'
                    : 'bg-[#181e2b] border border-[#293245] text-gray-300 hover:border-gray-500'
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
