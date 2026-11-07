import React, { createContext, useContext, useState, useEffect } from 'react';
import { MULTIPLEX_SCREENS, CONCESSIONS } from '../data/movieData';
import { EVENT_PACKAGES, CINEMA_SCHEDULE_SLOTS, EVENT_ADDONS } from '../data/eventData';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  // Movie Booking State
  const [selectedScreen, setSelectedScreen] = useState(MULTIPLEX_SCREENS[0]);
  const [selectedDate, setSelectedDate] = useState("Today, 07 Nov");
  const [selectedTime, setSelectedTime] = useState(MULTIPLEX_SCREENS[0].timings[0]);
  const [selectedCategory, setSelectedCategory] = useState("gold"); // silver, gold, platinum
  const [ticketQuantity, setTicketQuantity] = useState(2);
  const [selectedSeats, setSelectedSeats] = useState(["G11", "G12"]);
  const [selectedSnacks, setSelectedSnacks] = useState({
    "snack-01": 1, // 1 Large Caramel Popcorn
    "snack-03": 2  // 2 Chilled Coke
  });

  // Event Booking State
  const [selectedEventType, setSelectedEventType] = useState("proposal");
  const [selectedEventPackage, setSelectedEventPackage] = useState(EVENT_PACKAGES[1]); // Gold package
  const [selectedEventSlot, setSelectedEventSlot] = useState(CINEMA_SCHEDULE_SLOTS[2]); // Break slot 01:30 PM
  const [eventDate, setEventDate] = useState("2026-11-15");
  const [eventGuests, setEventGuests] = useState(25);
  const [selectedEventAddons, setSelectedEventAddons] = useState(["addon-video", "addon-flowers"]);

  // User's Bookings History (Loaded from demo data or localStorage)
  const [myBookings, setMyBookings] = useState(() => {
    const saved = localStorage.getItem('luxe_my_bookings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      {
        id: "LX-94021",
        type: "movie",
        movieTitle: "Dune: Part Two",
        screenNumber: "Screen 01",
        tier: "Premium (Gold Class)",
        showDate: "Today, 07 Nov",
        showTime: "10:15 AM",
        seats: ["G11", "G12"],
        totalAmount: 950,
        status: "Confirmed",
        bookingDate: "2026-11-07",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LX-94021-DUNE2-G11-G12"
      },
      {
        id: "EV-81492",
        type: "event",
        eventName: "Anniversary Celebrations",
        package: "Gold Package",
        screenNumber: "Screen 03 (Platinum Hall)",
        eventDate: "15 Nov 2026",
        eventTime: "01:30 PM - 03:00 PM (Intermission Break)",
        guests: 25,
        totalAmount: 33000,
        status: "Confirmed",
        bookingDate: "2026-11-06",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=EV-81492-ANNIV-GOLD"
      }
    ];
  });

  // Save bookings to localStorage
  useEffect(() => {
    localStorage.setItem('luxe_my_bookings', JSON.stringify(myBookings));
  }, [myBookings]);

  // Seat Selection Handler
  const toggleSeat = (seatCode, category) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatCode)) {
        const next = prev.filter(s => s !== seatCode);
        setTicketQuantity(Math.max(1, next.length));
        return next;
      } else {
        const next = [...prev, seatCode];
        setTicketQuantity(next.length);
        if (category) setSelectedCategory(category);
        return next;
      }
    });
  };

  // Snack Counter Handler
  const updateSnackQty = (snackId, delta) => {
    setSelectedSnacks(prev => {
      const current = prev[snackId] || 0;
      const updated = Math.max(0, current + delta);
      const next = { ...prev };
      if (updated === 0) {
        delete next[snackId];
      } else {
        next[snackId] = updated;
      }
      return next;
    });
  };

  // Event Addon Toggle
  const toggleEventAddon = (addonId) => {
    setSelectedEventAddons(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  // Calculate Movie Price Breakdown
  const seatPricePerTicket = selectedScreen.pricing[selectedCategory] || 350;
  const ticketSubtotal = selectedSeats.length * seatPricePerTicket;
  
  const snacksSubtotal = Object.entries(selectedSnacks).reduce((sum, [id, qty]) => {
    const item = CONCESSIONS.find(c => c.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const convenienceFee = selectedSeats.length * 30; // 30 per seat
  const gstTax = Math.round((ticketSubtotal + convenienceFee) * 0.18);
  const movieGrandTotal = ticketSubtotal + snacksSubtotal + convenienceFee + gstTax;

  // Calculate Event Price Breakdown
  const eventPackagePrice = selectedEventPackage?.price || 25000;
  const eventAddonsTotal = selectedEventAddons.reduce((sum, id) => {
    const addon = EVENT_ADDONS.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const eventGrandTotal = eventPackagePrice + eventAddonsTotal;

  // Confirm Movie Booking
  const finalizeMovieBooking = () => {
    const bookingId = "LX-" + Math.floor(10000 + Math.random() * 90000);
    const newBooking = {
      id: bookingId,
      type: "movie",
      movieTitle: selectedScreen.movieTitle,
      screenNumber: selectedScreen.screenNumber,
      tier: `${selectedScreen.tier} (${selectedCategory.toUpperCase()} Class)`,
      showDate: selectedDate,
      showTime: selectedTime,
      seats: [...selectedSeats],
      totalAmount: movieGrandTotal,
      status: "Confirmed",
      bookingDate: new Date().toISOString().split('T')[0],
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingId}-${selectedScreen.screenNumber}`
    };
    setMyBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  // Confirm Event Booking
  const finalizeEventBooking = () => {
    const bookingId = "EV-" + Math.floor(10000 + Math.random() * 90000);
    const newBooking = {
      id: bookingId,
      type: "event",
      eventName: selectedEventType === 'proposal' ? 'Proposal Celebration' : 
                 selectedEventType === 'birthday' ? 'Birthday Celebration' : 
                 selectedEventType === 'anniversary' ? 'Anniversary Celebrations' : 'Special Private Screening',
      package: selectedEventPackage.name,
      screenNumber: selectedScreen.screenNumber,
      eventDate: eventDate,
      eventTime: selectedEventSlot.timeRange,
      guests: eventGuests,
      totalAmount: eventGrandTotal,
      status: "Confirmed",
      bookingDate: new Date().toISOString().split('T')[0],
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingId}-${selectedEventPackage.name}`
    };
    setMyBookings(prev => [newBooking, ...prev]);
    return newBooking;
  };

  return (
    <BookingContext.Provider value={{
      // Movie
      selectedScreen, setSelectedScreen,
      selectedDate, setSelectedDate,
      selectedTime, setSelectedTime,
      selectedCategory, setSelectedCategory,
      ticketQuantity, setTicketQuantity,
      selectedSeats, setSelectedSeats, toggleSeat,
      selectedSnacks, updateSnackQty,
      ticketSubtotal, snacksSubtotal, convenienceFee, gstTax, movieGrandTotal,
      finalizeMovieBooking,

      // Events
      selectedEventType, setSelectedEventType,
      selectedEventPackage, setSelectedEventPackage,
      selectedEventSlot, setSelectedEventSlot,
      eventDate, setEventDate,
      eventGuests, setEventGuests,
      selectedEventAddons, toggleEventAddon,
      eventPackagePrice, eventAddonsTotal, eventGrandTotal,
      finalizeEventBooking,

      // Bookings history
      myBookings
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
