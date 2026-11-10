import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOVIES_DATA } from '../data/moviesData';
import MovieCard from '../components/movies/MovieCard';
import MovieCategoryTabs from '../components/movies/MovieCategoryTabs';
import MovieFilters from '../components/movies/MovieFilters';
import { Film, Sparkles, X, Calendar, Clock, MapPin, Check } from 'lucide-react';

const Movies = () => {
  const [activeCategory, setActiveCategory] = useState('now-showing');
  const [filters, setFilters] = useState({
    language: 'All Languages',
    genre: 'All Genres',
    screen: 'All Screens',
    date: 'All Dates',
    time: 'All Times',
    sortBy: 'rating-desc',
  });

  const [bookingModalMovie, setBookingModalMovie] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      language: 'All Languages',
      genre: 'All Genres',
      screen: 'All Screens',
      date: 'All Dates',
      time: 'All Times',
      sortBy: 'rating-desc',
    });
  };

  // Filter & Sort Logic
  const filteredMovies = useMemo(() => {
    let result = MOVIES_DATA.filter((movie) => {
      // 1. Category check
      if (activeCategory !== 'all') {
        const matchesCategory = movie.categories?.includes(activeCategory);
        if (!matchesCategory) return false;
      }

      // 2. Language check
      if (filters.language !== 'All Languages' && movie.language !== filters.language) {
        return false;
      }

      // 3. Genre check
      if (filters.genre !== 'All Genres' && movie.genre !== filters.genre) {
        return false;
      }

      // 4. Screen check
      if (filters.screen !== 'All Screens') {
        const matchesScreen = movie.screens?.some((s) => s.includes(filters.screen.split(' ')[0]));
        if (!matchesScreen) return false;
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (filters.sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      if (filters.sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      if (filters.sortBy === 'duration-asc') {
        return a.duration.localeCompare(b.duration);
      }
      return 0;
    });

    return result;
  }, [activeCategory, filters]);

  const categoryHeadings = {
    'now-showing': 'Now Showing',
    'coming-soon': 'Coming Soon',
    'trending': 'Trending Movies',
    'popular': 'Popular Hits',
    'recommended': 'Recommended For You',
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FCFBFE] relative overflow-hidden py-8 sm:py-12">
      {/* Cinematic Ambient Glow Background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#9B4BC5]/6 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header Area with Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2"
        >
          {/* Left Title & Subtitle */}
          <div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] text-[#241532] tracking-tight leading-none">
              {categoryHeadings[activeCategory] || 'Now Showing'}
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm text-[#746A7D] font-normal">
              Blockbuster movies at your favourite multiplex
            </p>
          </div>

          {/* Right Category Tabs */}
          <div>
            <MovieCategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </motion.div>

        {/* Filter and Sorting Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <MovieFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </motion.div>

        {/* Movies Grid (5 columns on desktop matching reference) */}
        {filteredMovies.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 mt-4"
          >
            <AnimatePresence>
              {filteredMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <MovieCard
                    movie={movie}
                    onBookTickets={(m) => setBookingModalMovie(m)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white/50 backdrop-blur-md rounded-3xl border border-[#E8E1EF] max-w-xl mx-auto my-12 p-8">
            <Film className="w-12 h-12 text-[#9B4BC5] mx-auto mb-3 opacity-60" />
            <h3 className="font-display font-bold text-lg text-[#241532]">No movies found</h3>
            <p className="text-xs text-[#746A7D] mt-1 max-w-sm mx-auto">
              No movies match your selected filters. Try choosing a different language or genre.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] shadow-sm transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Booking Feedback / Upcoming Phase Modal */}
      {bookingModalMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/80 shadow-2xl relative">
            <button
              onClick={() => setBookingModalMovie(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5F0FC] hover:bg-[#E9E5FA] flex items-center justify-center text-[#746A7D] hover:text-[#241532] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <img
                src={bookingModalMovie.poster}
                alt={bookingModalMovie.title}
                className="w-20 h-28 object-cover rounded-xl shadow-md border border-[#E8E1EF] flex-shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-full">
                  {bookingModalMovie.certificate} • {bookingModalMovie.language}
                </span>
                <h3 className="font-display font-extrabold text-lg text-[#241532] mt-1 leading-tight">
                  {bookingModalMovie.title}
                </h3>
                <p className="text-xs text-[#746A7D] mt-0.5">
                  {bookingModalMovie.genre} • {bookingModalMovie.duration}
                </p>
                <div className="mt-2 text-xs font-semibold text-[#6722A0]">
                  ★ {bookingModalMovie.rating} ({bookingModalMovie.votes})
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#F8F4FD] border border-[#E8E1EF]/70 text-xs text-[#746A7D]">
              <div className="flex items-center gap-2 text-[#321044] font-semibold mb-1">
                <Sparkles className="w-4 h-4 text-[#9B4BC5]" />
                <span>Next Step: Seat Selection</span>
              </div>
              <p>
                Screen selection and interactive seat reservation for <strong className="text-[#241532]">{bookingModalMovie.title}</strong> will be implemented in the next phase!
              </p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setBookingModalMovie(null)}
                className="px-6 py-2.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                Got it
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Movies;
