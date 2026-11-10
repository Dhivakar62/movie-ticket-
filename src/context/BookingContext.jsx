import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOVIES_DATA } from '../data/moviesData';
import { EVENT_CATEGORIES, EVENT_PACKAGES } from '../data/eventsData';
import posterKalki from '../assets/images/poster_kalki.png';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // -------------------------------------------------------------
  // MOVIE BOOKING STATE
  // -------------------------------------------------------------
  const [selectedMovie, setSelectedMovie] = useState(MOVIES_DATA[0]); // Kalki 2898 AD by default
  const [selectedScreen, setSelectedScreen] = useState('Screen 1 (IMAX 4K Laser)');
  const [selectedDate, setSelectedDate] = useState('Today, 10 Nov');
  const [selectedShowtime, setSelectedShowtime] = useState('07:00 PM');
  const [ticketQuantity, setTicketQuantity] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState({ id: 'gold', name: 'Gold Class', price: 250 });
  const [selectedSeats, setSelectedSeats] = useState(['A3', 'A4', 'A5', 'A6']);
  const [appliedPromo, setAppliedPromo] = useState(null);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
  });

  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // -------------------------------------------------------------
  // EVENT BOOKING STATE
  // -------------------------------------------------------------
  const [selectedEventCategory, setSelectedEventCategory] = useState('proposal');
  const [selectedEventScreen, setSelectedEventScreen] = useState('Screen 1');
  const [selectedEventDate, setSelectedEventDate] = useState('Today, 10 Nov');
  const [selectedEventSlot, setSelectedEventSlot] = useState('12:30 PM - 1:15 PM');
  const [selectedEventPackage, setSelectedEventPackage] = useState(EVENT_PACKAGES[1]); // Gold package
  
  const [eventCustomization, setEventCustomization] = useState({
    guestCount: 15,
    cakePreference: 'Red Velvet with Cream Cheese',
    decorationPreference: 'Romantic Red Roses & Fairy Lights',
    customMessage: 'Will you marry me, Priya?',
    musicPreference: 'Acoustic Romantic Melodies',
    specialRequests: 'Candlelight walkway along the carpet aisle',
  });

  const [confirmedEventBooking, setConfirmedEventBooking] = useState(null);

  // -------------------------------------------------------------
  // PERSISTED BOOKINGS HISTORY (For Dashboard & My Bookings)
  // -------------------------------------------------------------
  const defaultBookings = [
    {
      bookingId: 'DC-892419',
      type: 'movie',
      movieTitle: 'Kalki 2898 AD',
      poster: posterKalki,
      screen: 'Screen 1',
      date: 'Sun, 27 Apr',
      time: '07:00 PM',
      category: 'Gold Class',
      seats: ['A3', 'A4', 'A5', 'A6'],
      ticketCount: 4,
      ticketPrice: 250,
      convenienceFee: 141.60,
      totalAmount: 1141.60,
      status: 'confirmed',
      bookedAt: '2026-11-10T10:00:00Z',
    },
    {
      bookingId: 'DC-771240',
      type: 'movie',
      movieTitle: 'Inside Out 2',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=300&q=80',
      screen: 'Screen 4',
      date: '15 Oct 2026',
      time: '04:30 PM',
      category: 'Silver Class',
      seats: ['D8', 'D9'],
      ticketCount: 2,
      ticketPrice: 150,
      convenienceFee: 50.00,
      totalAmount: 350.00,
      status: 'completed',
      bookedAt: '2026-10-15T09:00:00Z',
    },
  ];

  const defaultEvents = [
    {
      bookingId: 'EV-441890',
      type: 'event',
      eventCategoryTitle: 'Proposal Celebration',
      packageName: 'Gold Package',
      screen: 'Screen 1',
      date: 'Today, 10 Nov',
      slot: '12:30 PM - 1:15 PM',
      guestCount: 15,
      totalAmount: 9999,
      status: 'confirmed',
      bookedAt: '2026-11-09T14:00:00Z',
    },
  ];

  const [bookingsList, setBookingsList] = useState(() => {
    try {
      const saved = localStorage.getItem('dreamcine_bookings');
      return saved ? JSON.parse(saved) : defaultBookings;
    } catch {
      return defaultBookings;
    }
  });

  const [eventsList, setEventsList] = useState(() => {
    try {
      const saved = localStorage.getItem('dreamcine_events');
      return saved ? JSON.parse(saved) : defaultEvents;
    } catch {
      return defaultEvents;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dreamcine_bookings', JSON.stringify(bookingsList));
    } catch (e) {
      console.error(e);
    }
  }, [bookingsList]);

  useEffect(() => {
    try {
      localStorage.setItem('dreamcine_events', JSON.stringify(eventsList));
    } catch (e) {
      console.error(e);
    }
  }, [eventsList]);

  // -------------------------------------------------------------
  // CALCULATIONS & ACTIONS
  // -------------------------------------------------------------
  const baseTicketTotal = ticketQuantity * (selectedCategory?.price || 250);
  const convenienceFee = Math.round(ticketQuantity * 35.40 * 100) / 100;
  const discountAmount = appliedPromo ? appliedPromo.discountValue || 50 : 0;
  const finalMovieTotal = Math.max(0, baseTicketTotal + convenienceFee - discountAmount);

  // Complete Movie Booking Action
  const completeMovieBooking = (overrideCustomer) => {
    const newId = `DC-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking = {
      bookingId: newId,
      type: 'movie',
      movieTitle: selectedMovie?.title || 'Kalki 2898 AD',
      poster: selectedMovie?.poster || posterKalki,
      screen: selectedScreen,
      date: selectedDate,
      time: selectedShowtime,
      category: selectedCategory?.name || 'Gold Class',
      seats: [...selectedSeats],
      ticketCount: ticketQuantity,
      ticketPrice: selectedCategory?.price || 250,
      convenienceFee,
      discountAmount,
      totalAmount: finalMovieTotal,
      customer: overrideCustomer || customerInfo,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
    };

    setConfirmedBooking(newBooking);
    setBookingsList((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  // Complete Event Booking Action
  const completeEventBooking = (overrideCustomization) => {
    const newId = `EV-${Math.floor(100000 + Math.random() * 900000)}`;
    const eventCategoryObj = EVENT_CATEGORIES.find((c) => c.id === selectedEventCategory) || EVENT_CATEGORIES[0];
    const newEventBooking = {
      bookingId: newId,
      type: 'event',
      eventCategoryTitle: eventCategoryObj.title,
      packageName: selectedEventPackage?.name || 'Gold Package',
      screen: selectedEventScreen,
      date: selectedEventDate,
      slot: selectedEventSlot,
      guestCount: (overrideCustomization || eventCustomization).guestCount,
      customization: overrideCustomization || eventCustomization,
      totalAmount: selectedEventPackage?.price || 9999,
      customer: customerInfo,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
    };

    setConfirmedEventBooking(newEventBooking);
    setEventsList((prev) => [newEventBooking, ...prev]);
    return newEventBooking;
  };

  // Reset helper
  const resetDemoData = () => {
    setBookingsList(defaultBookings);
    setEventsList(defaultEvents);
    setSelectedSeats(['A3', 'A4', 'A5', 'A6']);
    setTicketQuantity(4);
  };

  return (
    <BookingContext.Provider
      value={{
        // Movie Booking
        selectedMovie,
        setSelectedMovie,
        selectedScreen,
        setSelectedScreen,
        selectedDate,
        setSelectedDate,
        selectedShowtime,
        setSelectedShowtime,
        ticketQuantity,
        setTicketQuantity,
        selectedCategory,
        setSelectedCategory,
        selectedSeats,
        setSelectedSeats,
        appliedPromo,
        setAppliedPromo,
        customerInfo,
        setCustomerInfo,
        confirmedBooking,
        setConfirmedBooking,
        baseTicketTotal,
        convenienceFee,
        discountAmount,
        finalMovieTotal,
        completeMovieBooking,

        // Event Booking
        selectedEventCategory,
        setSelectedEventCategory,
        selectedEventScreen,
        setSelectedEventScreen,
        selectedEventDate,
        setSelectedEventDate,
        selectedEventSlot,
        setSelectedEventSlot,
        selectedEventPackage,
        setSelectedEventPackage,
        eventCustomization,
        setEventCustomization,
        confirmedEventBooking,
        setConfirmedEventBooking,
        completeEventBooking,

        // History
        bookingsList,
        setBookingsList,
        eventsList,
        setEventsList,
        resetDemoData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
