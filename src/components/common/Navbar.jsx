import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Film, Calendar, Ticket, Menu, X, Sparkles, User } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function Navbar() {
  const location = useLocation();
  const { myBookings } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'Screens', path: '/#screens' },
    { name: 'Private Events', path: '/private-events' },
    { name: 'Offers', path: '/#offers' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const isActive = (path) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080a0f]/90 backdrop-blur-md border-b border-[#232938] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldDark p-0.5 shadow-gold-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0a0d14] rounded-[7px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-brand-gold" />
            </div>
          </div>
          <div>
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-white flex items-center gap-1.5">
              LUXE
              <span className="text-xs font-sans tracking-widest text-brand-gold px-1.5 py-0.5 rounded bg-brand-gold/10 border border-brand-gold/30">CINEMAS</span>
            </span>
            <p className="text-[9px] tracking-[0.25em] text-gray-400 uppercase -mt-0.5 hidden sm:block">Ultra-Luxury Multiplex</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isActive(link.path)
                  ? 'text-brand-gold bg-brand-gold/10 font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-gold rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="text-xs tracking-wider uppercase text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5 px-3 py-2">
            <User className="w-3.5 h-3.5 text-brand-gold" />
            Login
          </button>

          <Link
            to="/my-bookings"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#181d28] border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black transition-all shadow-gold-sm"
          >
            <Ticket className="w-4 h-4" />
            <span>My Bookings</span>
            {myBookings.length > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 text-[10px] bg-brand-gold text-black rounded-full font-bold">
                {myBookings.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-brand-gold" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f17] border-b border-[#252b3b] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'text-brand-gold bg-brand-gold/10 font-semibold'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <button className="text-sm text-gray-300 flex items-center gap-2">
              <User className="w-4 h-4 text-brand-gold" />
              Login / Register
            </button>
            <Link
              to="/my-bookings"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-gold text-black"
            >
              <Ticket className="w-3.5 h-3.5" />
              My Bookings ({myBookings.length})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
