import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X, Ticket } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Movies', hasDropdown: true },
    { name: 'Events', hasDropdown: true },
    { name: 'Offers', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E1EF] shadow-[0_2px_12px_rgba(103,34,160,0.04)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">
        
        {/* Left: DreamCine Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          {/* Logo Symbol: Purple gradient rounded play button */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6722A0] via-[#852ECA] to-[#9B4BC5] p-[2px] shadow-[0_4px_12px_rgba(103,34,160,0.25)] flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-[#6722A0] to-[#4F1381] rounded-[10px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-white ml-0.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.5v15a1 1 0 001.55.83l12-7.5a1 1 0 000-1.66l-12-7.5A1 1 0 007 4.5z" />
              </svg>
            </div>
          </div>

          {/* Logo Wordmark & Subtitle */}
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-[#321044] tracking-tight leading-none">
              Dream<span className="text-[#6722A0]">Cine</span>
            </span>
            <span className="text-[10px] text-[#746A7D] font-medium tracking-wider uppercase mt-1">
              Movies & Events
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                activeNav === item.name
                  ? 'text-[#6722A0] font-bold'
                  : 'text-[#241532] hover:text-[#6722A0]'
              }`}
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-[#746A7D] group-hover:text-[#6722A0]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Search Button */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-[#F5F0FC] border border-[#6722A0] rounded-full px-3 py-1.5 transition-all">
                <Search className="w-4 h-4 text-[#6722A0] mr-2" />
                <input
                  type="text"
                  placeholder="Search movies, events..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  autoFocus
                  onBlur={() => !searchVal && setSearchOpen(false)}
                  className="bg-transparent border-none outline-none text-xs text-[#241532] w-40 placeholder-[#746A7D]"
                />
                <button onClick={() => setSearchOpen(false)} className="text-[#746A7D] hover:text-[#241532]">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-full bg-[#F5F0FC] hover:bg-[#E9E5FA] border border-[#E8E1EF] flex items-center justify-center text-[#746A7D] hover:text-[#6722A0] transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Login Button */}
          <button className="px-5 py-2 rounded-full border border-[#E8E1EF] hover:border-[#6722A0] text-[#241532] hover:text-[#6722A0] text-xs font-semibold bg-white hover:bg-[#F5F0FC] transition-all cursor-pointer">
            Login
          </button>

          {/* My Bookings Button */}
          <button className="px-5 py-2 rounded-full bg-[#6722A0] hover:bg-[#531584] text-white text-xs font-semibold shadow-[0_2px_10px_rgba(103,34,160,0.25)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
            <span>My Bookings</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-9 h-9 rounded-full bg-[#F5F0FC] border border-[#E8E1EF] flex items-center justify-center text-[#746A7D]"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-[#F5F0FC] border border-[#E8E1EF] flex items-center justify-center text-[#241532]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#E8E1EF] px-5 py-4 flex flex-col gap-3 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveNav(item.name);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm py-2 font-medium ${
                activeNav === item.name ? 'text-[#6722A0] font-bold' : 'text-[#241532]'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-3 border-t border-[#E8E1EF] flex items-center gap-3">
            <button className="flex-1 py-2 rounded-full border border-[#E8E1EF] text-xs font-semibold text-[#241532] text-center">
              Login
            </button>
            <button className="flex-1 py-2 rounded-full bg-[#6722A0] text-white text-xs font-semibold text-center shadow-sm">
              My Bookings
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
