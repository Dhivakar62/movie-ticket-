import React, { useState } from 'react';
import { MapPin, Calendar, Search, Globe, Film, ChevronDown } from 'lucide-react';

export default function FilterBar({ onSearch, onCityChange, onDateChange, onLanguageChange, onGenreChange }) {
  const [city, setCity] = useState("Kozhikode");
  const [date, setDate] = useState("Today, 07 Nov");
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("All Languages");
  const [genre, setGenre] = useState("All Genres");

  const cities = ["Kozhikode", "Bengaluru", "Mumbai", "Chennai", "Kochi", "Hyderabad", "Delhi NCR"];
  const dates = ["Today, 07 Nov", "Tomorrow, 08 Nov", "Sun, 09 Nov", "Mon, 10 Nov", "Tue, 11 Nov"];
  const languages = ["All Languages", "English", "Tamil", "Hindi", "Malayalam", "Telugu"];
  const genres = ["All Genres", "Sci-Fi", "Action", "Drama", "Adventure", "Animation", "Thriller"];

  return (
    <div className="w-full max-w-6xl mx-auto -mt-6 sm:-mt-8 relative z-20 px-4">
      <div className="bg-[#121622]/95 backdrop-blur-xl border border-brand-gold/30 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
          
          {/* City Selector */}
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold" /> City
            </label>
            <div className="relative">
              <select
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  if (onCityChange) onCityChange(e.target.value);
                }}
                className="w-full appearance-none bg-[#191f30] border border-[#2c344a] rounded-lg px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
              >
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Date Selector */}
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-brand-gold" /> Date
            </label>
            <div className="relative">
              <select
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (onDateChange) onDateChange(e.target.value);
                }}
                className="w-full appearance-none bg-[#191f30] border border-[#2c344a] rounded-lg px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
              >
                {dates.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative group lg:col-span-1">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1 flex items-center gap-1">
              <Search className="w-3 h-3 text-brand-gold" /> Search
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Movie, screen, artist..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (onSearch) onSearch(e.target.value);
                }}
                className="w-full bg-[#191f30] border border-[#2c344a] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1 flex items-center gap-1">
              <Globe className="w-3 h-3 text-brand-gold" /> Language
            </label>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  if (onLanguageChange) onLanguageChange(e.target.value);
                }}
                className="w-full appearance-none bg-[#191f30] border border-[#2c344a] rounded-lg px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
              >
                {languages.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Genre Selector */}
          <div className="relative group">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1 flex items-center gap-1">
              <Film className="w-3 h-3 text-brand-gold" /> Genre
            </label>
            <div className="relative">
              <select
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                  if (onGenreChange) onGenreChange(e.target.value);
                }}
                className="w-full appearance-none bg-[#191f30] border border-[#2c344a] rounded-lg px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
              >
                {genres.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
