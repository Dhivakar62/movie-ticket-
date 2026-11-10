import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { ArrowLeft, ArrowRight, Check, AlertCircle } from 'lucide-react';

const SeatSelection = () => {
  const navigate = useNavigate();
  const { 
    selectedMovie, 
    selectedScreen, 
    selectedDate, 
    selectedShowtime, 
    ticketQuantity, 
    selectedCategory, 
    selectedSeats, 
    setSelectedSeats 
  } = useBooking();

  // Seat matrix definition
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  // 16 columns split by aisles: Left (1-3), Center (4-13), Right (14-16)
  const leftBlock = [1, 2, 3];
  const centerBlock = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const rightBlock = [14, 15, 16];

  // Occupied seats matching realistic showcase
  const initialOccupied = [
    'A1', 'A2', 'A15', 'A16',
    'B4', 'B5', 'B12',
    'C1', 'C2', 'C13', 'C14',
    'D5', 'D6', 'D10',
    'E2', 'E3', 'E14', 'E15',
    'F7', 'F8'
  ];

  const [currentSelected, setCurrentSelected] = useState(() => {
    return selectedSeats && selectedSeats.length > 0 ? selectedSeats : ['C7', 'C8', 'C9', 'C10'];
  });

  const [notification, setNotification] = useState('');

  const isSeatOccupied = (seatId) => initialOccupied.includes(seatId);
  const isSeatSelected = (seatId) => currentSelected.includes(seatId);

  // Mandatory Automatic Adjacent Seat Selection Algorithm
  const handleSeatClick = (row, col) => {
    const seatId = `${row}${col}`;

    if (isSeatOccupied(seatId)) {
      setNotification(`Seat ${seatId} is already occupied.`);
      setTimeout(() => setNotification(''), 2500);
      return;
    }

    // If seat is already selected, deselect it
    if (isSeatSelected(seatId)) {
      const updated = currentSelected.filter((s) => s !== seatId);
      setCurrentSelected(updated);
      return;
    }

    // Determine which block this seat belongs to (Never cross an aisle!)
    let activeBlock = [];
    if (leftBlock.includes(col)) activeBlock = leftBlock;
    else if (centerBlock.includes(col)) activeBlock = centerBlock;
    else if (rightBlock.includes(col)) activeBlock = rightBlock;

    const remainingNeeded = ticketQuantity - currentSelected.length;

    // If user has already reached ticket quantity, clicking a new seat replaces with a fresh adjacent block
    if (remainingNeeded <= 0) {
      // Create new selection starting at this seat
      const startIndex = activeBlock.indexOf(col);
      const newSelection = [];

      for (let i = startIndex; i < activeBlock.length && newSelection.length < ticketQuantity; i++) {
        const checkSeat = `${row}${activeBlock[i]}`;
        if (!isSeatOccupied(checkSeat)) {
          newSelection.push(checkSeat);
        } else {
          break; // Stop at occupied seat (partial adjacent rule)
        }
      }

      setCurrentSelected(newSelection);
      if (newSelection.length < ticketQuantity) {
        setNotification(`Selected ${newSelection.length}/${ticketQuantity} adjacent seats. Please select ${ticketQuantity - newSelection.length} more.`);
      }
      return;
    }

    // User still needs seats: Try to auto-select consecutive seats in this block
    const startIndex = activeBlock.indexOf(col);
    const adjacentFound = [];

    for (let i = startIndex; i < activeBlock.length && adjacentFound.length < remainingNeeded; i++) {
      const checkSeat = `${row}${activeBlock[i]}`;
      if (!isSeatOccupied(checkSeat) && !currentSelected.includes(checkSeat)) {
        adjacentFound.push(checkSeat);
      } else {
        break; // Stop if gap or occupied
      }
    }

    const updated = [...currentSelected, ...adjacentFound];
    setCurrentSelected(updated);

    if (updated.length < ticketQuantity) {
      setNotification(`Selected ${updated.length}/${ticketQuantity} seats. Please pick ${ticketQuantity - updated.length} more.`);
    } else {
      setNotification('');
    }
  };

  const handleContinue = () => {
    setSelectedSeats(currentSelected);
    navigate('/booking/checkout');
  };

  const isSelectionComplete = currentSelected.length === ticketQuantity;
  const currentPrice = selectedCategory?.price || 250;
  const totalAmount = currentSelected.length * currentPrice;

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Steps directly matching reference */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl py-3 px-4 sm:px-6 border border-[#E8E1EF] shadow-xs mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-[#746A7D] overflow-x-auto no-scrollbar gap-4">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Movie</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold">2</span>
              <span>Screen</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold">3</span>
              <span>Date</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold">4</span>
              <span>Show Time</span>
            </span>
            <span className="text-[#E8E1EF]">• • •</span>
            <span className="flex items-center gap-1.5 text-[#6722A0] font-bold">
              <span className="w-5 h-5 rounded-full bg-[#6722A0] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">5</span>
              <span>Seats</span>
            </span>
          </div>
        </div>

        {/* Notification Banner if partial selection */}
        {notification && (
          <div className="mb-6 p-3 rounded-2xl bg-[#FFF8E7] border border-[#EAB308]/40 text-xs text-[#92400E] flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-[#D97706] flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Main Seat Map Arena */}
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/90 shadow-[0_16px_40px_rgba(103,34,160,0.06)]">
          
          {/* Legend Matching Reference: Available (Green), Selected (Dark Plum/Purple), Occupied (Gray) */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 pb-6 border-b border-[#E8E1EF] text-xs font-semibold text-[#746A7D]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-[#22C55E] shadow-xs"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-[#321044] shadow-xs"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-[#D1D5DB]"></div>
              <span>Occupied</span>
            </div>
          </div>

          {/* Curved Screen Arc Indicator */}
          <div className="relative my-8 sm:my-10 text-center">
            {/* Screen Arc SVG */}
            <svg viewBox="0 0 500 50" className="w-3/4 max-w-md mx-auto text-[#241532] fill-none">
              <path d="M 20 40 Q 250 5 480 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#746A7D] uppercase block -mt-2">
              SCREEN
            </span>
          </div>

          {/* Seat Rows Grid */}
          <div className="space-y-3 max-w-2xl mx-auto overflow-x-auto pb-4 no-scrollbar">
            {rows.map((row) => (
              <div key={row} className="flex items-center justify-center gap-2 sm:gap-3 min-w-[500px]">
                {/* Row Label Left */}
                <span className="w-5 text-center text-xs font-bold text-[#746A7D]">{row}</span>

                {/* Left Block (Seats 1-3) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {leftBlock.map((col) => {
                    const seatId = `${row}${col}`;
                    const occupied = isSeatOccupied(seatId);
                    const selected = isSeatSelected(seatId);
                    return (
                      <button
                        key={seatId}
                        type="button"
                        onClick={() => handleSeatClick(row, col)}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md text-[10px] font-bold transition-all flex items-center justify-center ${
                          selected
                            ? 'bg-[#321044] text-white shadow-md scale-105'
                            : occupied
                            ? 'bg-[#D1D5DB] text-gray-500 cursor-not-allowed'
                            : 'bg-[#22C55E] text-white hover:bg-emerald-600 cursor-pointer shadow-xs'
                        }`}
                        title={seatId}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>

                {/* Left Aisle Space */}
                <div className="w-4 sm:w-6"></div>

                {/* Center Block (Seats 4-13) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {centerBlock.map((col) => {
                    const seatId = `${row}${col}`;
                    const occupied = isSeatOccupied(seatId);
                    const selected = isSeatSelected(seatId);
                    return (
                      <button
                        key={seatId}
                        type="button"
                        onClick={() => handleSeatClick(row, col)}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md text-[10px] font-bold transition-all flex items-center justify-center ${
                          selected
                            ? 'bg-[#321044] text-white shadow-md scale-105'
                            : occupied
                            ? 'bg-[#D1D5DB] text-gray-500 cursor-not-allowed'
                            : 'bg-[#22C55E] text-white hover:bg-emerald-600 cursor-pointer shadow-xs'
                        }`}
                        title={seatId}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>

                {/* Right Aisle Space */}
                <div className="w-4 sm:w-6"></div>

                {/* Right Block (Seats 14-16) */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {rightBlock.map((col) => {
                    const seatId = `${row}${col}`;
                    const occupied = isSeatOccupied(seatId);
                    const selected = isSeatSelected(seatId);
                    return (
                      <button
                        key={seatId}
                        type="button"
                        onClick={() => handleSeatClick(row, col)}
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md text-[10px] font-bold transition-all flex items-center justify-center ${
                          selected
                            ? 'bg-[#321044] text-white shadow-md scale-105'
                            : occupied
                            ? 'bg-[#D1D5DB] text-gray-500 cursor-not-allowed'
                            : 'bg-[#22C55E] text-white hover:bg-emerald-600 cursor-pointer shadow-xs'
                        }`}
                        title={seatId}
                      >
                        {col}
                      </button>
                    );
                  })}
                </div>

                {/* Row Label Right */}
                <span className="w-5 text-center text-xs font-bold text-[#746A7D]">{row}</span>
              </div>
            ))}
          </div>

          {/* Bottom Bar directly matching reference: Back, 4/4 Selected, Continue */}
          <div className="mt-8 pt-6 border-t border-[#E8E1EF] flex items-center justify-between">
            <button
              onClick={() => navigate('/booking/tickets')}
              className="px-5 py-2.5 rounded-full border border-[#E8E1EF] text-xs font-semibold text-[#241532] hover:bg-[#F5F0FC] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="text-center">
              <span className="font-display font-black text-sm sm:text-base text-[#241532] block">
                {currentSelected.length} / {ticketQuantity} Selected
              </span>
              <span className="text-[11px] text-[#746A7D] block">
                {currentSelected.length > 0 ? currentSelected.join(', ') : 'No seats chosen'} • ₹{totalAmount}
              </span>
            </div>

            <button
              disabled={!isSelectionComplete}
              onClick={handleContinue}
              className={`px-7 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isSelectionComplete
                  ? 'bg-[#6722A0] hover:bg-[#521782] text-white shadow-md hover:scale-[1.02]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SeatSelection;
