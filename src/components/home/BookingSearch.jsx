import React, { useState } from 'react';
import { MapPin, Calendar, Film, ChevronDown, Check } from 'lucide-react';

const BookingSearch = ({ onSearch }) => {
  const [city, setCity] = useState('Bengaluru');
  const [date, setDate] = useState('Select Date');
  const [movie, setMovie] = useState('All Movies');

  const [openDropdown, setOpenDropdown] = useState(null); // 'city' | 'date' | 'movie' | null

  const cities = ['Bengaluru', 'Mumbai', 'Delhi-NCR', 'Hyderabad', 'Chennai', 'Pune'];
  const dates = ['Today, 10 Nov', 'Tomorrow, 11 Nov', 'Wed, 12 Nov', 'Thu, 13 Nov', 'Fri, 14 Nov', 'Weekend, 15 Nov'];
  const movies = ['All Movies', 'Kalki 2898 AD', 'Thangalaan', 'Pushpa 2', 'Deadpool & Wolverine', 'Inside Out 2'];

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSearchClick = () => {
    setOpenDropdown(null);
    if (onSearch) {
      onSearch({ city, date: date === 'Select Date' ? 'Today, 10 Nov' : date, movie });
    }
  };

  return (
    <div className="relative z-30 max-w-4xl mx-auto px-4 -mt-9 sm:-mt-10">
      {/* Glassmorphism Floating Search Card */}
      <div className="bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/90 shadow-[0_16px_40px_rgba(103,34,160,0.08)] p-2 sm:p-2.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 transition-all hover:shadow-[0_20px_48px_rgba(103,34,160,0.12)]">
        
        {/* Field 1: City */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => toggleDropdown('city')}
            className="w-full px-4 py-2 rounded-xl sm:rounded-full hover:bg-white/60 transition-colors text-left cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F0FC]/80 text-[#6722A0] flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#746A7D] block leading-tight">
                  City
                </span>
                <span className="text-sm font-bold text-[#241532] block leading-tight mt-0.5">
                  {city}
                </span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0] ml-2" />
          </button>

          {/* City Dropdown Menu */}
          {openDropdown === 'city' && (
            <div className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/80 py-2 z-50 animate-fadeIn">
              {cities.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCity(c);
                    setOpenDropdown(null);
                  }}
                  className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] transition-colors ${
                    city === c ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                  }`}
                >
                  <span>{c}</span>
                  {city === c && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Divider 1 */}
        <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-[#E8E1EF] to-transparent hidden sm:block"></div>

        {/* Field 2: Date */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => toggleDropdown('date')}
            className="w-full px-4 py-2 rounded-xl sm:rounded-full hover:bg-white/60 transition-colors text-left cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F0FC]/80 text-[#6722A0] flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#746A7D] block leading-tight">
                  Date
                </span>
                <span className={`text-sm font-bold block leading-tight mt-0.5 ${date === 'Select Date' ? 'text-[#746A7D]' : 'text-[#241532]'}`}>
                  {date}
                </span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0] ml-2" />
          </button>

          {/* Date Dropdown Menu */}
          {openDropdown === 'date' && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/80 py-2 z-50 animate-fadeIn">
              {dates.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => {
                    setDate(d);
                    setOpenDropdown(null);
                  }}
                  className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] transition-colors ${
                    date === d ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                  }`}
                >
                  <span>{d}</span>
                  {date === d && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Divider 2 */}
        <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-[#E8E1EF] to-transparent hidden sm:block"></div>

        {/* Field 3: Movie */}
        <div className="relative flex-1">
          <button
            type="button"
            onClick={() => toggleDropdown('movie')}
            className="w-full px-4 py-2 rounded-xl sm:rounded-full hover:bg-white/60 transition-colors text-left cursor-pointer group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F5F0FC]/80 text-[#6722A0] flex items-center justify-center flex-shrink-0 transition-colors shadow-xs">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#746A7D] block leading-tight">
                  Movie
                </span>
                <span className="text-sm font-bold text-[#241532] block leading-tight mt-0.5 truncate max-w-[130px]">
                  {movie}
                </span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0] ml-2" />
          </button>

          {/* Movie Dropdown Menu */}
          {openDropdown === 'movie' && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/80 py-2 z-50 animate-fadeIn">
              {movies.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setMovie(m);
                    setOpenDropdown(null);
                  }}
                  className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] transition-colors ${
                    movie === m ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                  }`}
                >
                  <span className="truncate">{m}</span>
                  {movie === m && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Button: Search */}
        <div className="sm:pl-1">
          <button
            type="button"
            onClick={handleSearchClick}
            className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(103,34,160,0.28)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingSearch;
