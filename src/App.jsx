import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import ScreenSelection from './pages/ScreenSelection';
import ShowtimeSelection from './pages/ShowtimeSelection';
import TicketSelection from './pages/TicketSelection';
import SeatSelection from './pages/SeatSelection';
import Checkout from './pages/Checkout';
import BookingConfirmation from './pages/BookingConfirmation';

// Event Pages
import Events from './pages/Events';
import EventCategorySelection from './pages/EventCategorySelection';
import EventSlotSelection from './pages/EventSlotSelection';
import EventPackageSelection from './pages/EventPackageSelection';
import EventCustomization from './pages/EventCustomization';
import EventConfirmation from './pages/EventConfirmation';

// Customer & Informational Pages
import Dashboard from './pages/Dashboard';
import MyBookings from './pages/MyBookings';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FCFBFE] text-[#241532] flex flex-col font-sans selection:bg-[#9B4BC5]/20 selection:text-[#321044] relative overflow-x-hidden">
          
          {/* Main Sticky Header */}
          <Header />

          {/* Dynamic Route Content */}
          <div className="flex-1">
            <Routes>
              {/* Home & Movies Flow */}
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              <Route path="/booking/screens" element={<ScreenSelection />} />
              <Route path="/booking/showtime" element={<ShowtimeSelection />} />
              <Route path="/booking/tickets" element={<TicketSelection />} />
              <Route path="/booking/seats" element={<SeatSelection />} />
              <Route path="/booking/checkout" element={<Checkout />} />
              <Route path="/booking/confirmation" element={<BookingConfirmation />} />

              {/* Private Events Flow */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/categories" element={<EventCategorySelection />} />
              <Route path="/events/slots" element={<EventSlotSelection />} />
              <Route path="/events/packages" element={<EventPackageSelection />} />
              <Route path="/events/customize" element={<EventCustomization />} />
              <Route path="/events/confirmation" element={<EventConfirmation />} />

              {/* Dashboard & Customer Management */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-bookings" element={<MyBookings />} />

              {/* Informational Pages */}
              <Route path="/offers" element={<Offers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}
