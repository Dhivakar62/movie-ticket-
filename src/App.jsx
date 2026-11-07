import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import BookingFlow from './pages/BookingFlow';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import PrivateEvents from './pages/PrivateEvents';
import MyBookings from './pages/MyBookings';

export default function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#08090c] text-gray-100">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<BookingFlow />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/private-events" element={<PrivateEvents />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}
