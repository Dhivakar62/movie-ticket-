import React, { useState } from 'react';
import { ChevronDown, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';

const MovieFilters = ({ filters, onFilterChange, onResetFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'language' | 'genre' | 'screen' | 'date' | 'time' | 'sortBy' | null

  const languageOptions = ['All Languages', 'Tamil', 'Telugu', 'English', 'Hindi'];
  const genreOptions = ['All Genres', 'Action', 'Sci-Fi', 'Animation', 'Drama'];
  const screenOptions = ['All Screens', 'Screen 1 (IMAX 4K)', 'Screen 2 (Dolby Atmos)', 'Screen 3', 'Screen 4'];
  const dateOptions = ['All Dates', 'Today, 10 Nov', 'Tomorrow, 11 Nov', 'Wed, 12 Nov', 'Thu, 13 Nov'];
  const timeOptions = ['All Times', 'Morning (Before 12 PM)', 'Matinee (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)', 'Night (After 8 PM)'];
  const sortOptions = [
    { id: 'rating-desc', label: 'Highest Rated' },
    { id: 'title-asc', label: 'Title (A-Z)' },
    { id: 'duration-asc', label: 'Shortest Duration' },
  ];

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSelect = (key, value) => {
    onFilterChange(key, value);
    setOpenDropdown(null);
  };

  const hasActiveFilters = 
    filters.language !== 'All Languages' ||
    filters.genre !== 'All Genres' ||
    filters.screen !== 'All Screens' ||
    filters.date !== 'All Dates' ||
    filters.time !== 'All Times' ||
    filters.sortBy !== 'rating-desc';

  return (
    <div className="relative z-20 w-full py-4 border-y border-[#E8E1EF]/70 bg-white/40 backdrop-blur-md rounded-2xl px-4 sm:px-6 my-6 shadow-[0_4px_20px_rgba(103,34,160,0.02)]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        
        {/* Left Filter Group */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('language')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                filters.language !== 'All Languages'
                  ? 'bg-[#6722A0]/10 border-[#6722A0] text-[#6722A0]'
                  : 'bg-white/80 border-[#E8E1EF] text-[#241532] hover:border-[#6722A0]/40'
              }`}
            >
              <span>{filters.language === 'All Languages' ? 'Language' : filters.language}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
            </button>
            {openDropdown === 'language' && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
                {languageOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('language', opt)}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                      filters.language === opt ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                    }`}
                  >
                    <span>{opt}</span>
                    {filters.language === opt && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Genre Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('genre')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                filters.genre !== 'All Genres'
                  ? 'bg-[#6722A0]/10 border-[#6722A0] text-[#6722A0]'
                  : 'bg-white/80 border-[#E8E1EF] text-[#241532] hover:border-[#6722A0]/40'
              }`}
            >
              <span>{filters.genre === 'All Genres' ? 'Genre' : filters.genre}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
            </button>
            {openDropdown === 'genre' && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
                {genreOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('genre', opt)}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                      filters.genre === opt ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                    }`}
                  >
                    <span>{opt}</span>
                    {filters.genre === opt && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Screen Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('screen')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                filters.screen !== 'All Screens'
                  ? 'bg-[#6722A0]/10 border-[#6722A0] text-[#6722A0]'
                  : 'bg-white/80 border-[#E8E1EF] text-[#241532] hover:border-[#6722A0]/40'
              }`}
            >
              <span>{filters.screen === 'All Screens' ? 'Screen' : filters.screen.split(' ')[0]}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
            </button>
            {openDropdown === 'screen' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
                {screenOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('screen', opt)}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                      filters.screen === opt ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                    }`}
                  >
                    <span>{opt}</span>
                    {filters.screen === opt && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('date')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                filters.date !== 'All Dates'
                  ? 'bg-[#6722A0]/10 border-[#6722A0] text-[#6722A0]'
                  : 'bg-white/80 border-[#E8E1EF] text-[#241532] hover:border-[#6722A0]/40'
              }`}
            >
              <span>{filters.date === 'All Dates' ? 'Date' : filters.date}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
            </button>
            {openDropdown === 'date' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
                {dateOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('date', opt)}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                      filters.date === opt ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                    }`}
                  >
                    <span>{opt}</span>
                    {filters.date === opt && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Show Time Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('time')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                filters.time !== 'All Times'
                  ? 'bg-[#6722A0]/10 border-[#6722A0] text-[#6722A0]'
                  : 'bg-white/80 border-[#E8E1EF] text-[#241532] hover:border-[#6722A0]/40'
              }`}
            >
              <span>{filters.time === 'All Times' ? 'Show Time' : filters.time.split(' ')[0]}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
            </button>
            {openDropdown === 'time' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
                {timeOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('time', opt)}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                      filters.time === opt ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                    }`}
                  >
                    <span>{opt}</span>
                    {filters.time === opt && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#746A7D] hover:text-[#6722A0] hover:bg-[#F5F0FC] flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

        </div>

        {/* Right Sort By Control */}
        <div className="relative flex items-center gap-2 self-end lg:self-auto">
          <span className="text-xs text-[#746A7D] font-medium hidden sm:inline">Sort By</span>
          <button
            type="button"
            onClick={() => toggleDropdown('sortBy')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-[#E8E1EF] bg-white/80 text-[#241532] hover:border-[#6722A0]/40 transition-all cursor-pointer"
          >
            <span>{sortOptions.find((s) => s.id === filters.sortBy)?.label || 'Sort By'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#746A7D]" />
          </button>
          {openDropdown === 'sortBy' && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E1EF] py-2 z-50">
              {sortOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('sortBy', opt.id)}
                  className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[#F5F0FC] ${
                    filters.sortBy === opt.id ? 'text-[#6722A0] bg-[#F5F0FC]' : 'text-[#241532]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {filters.sortBy === opt.id && <Check className="w-3.5 h-3.5 text-[#6722A0]" />}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default MovieFilters;
