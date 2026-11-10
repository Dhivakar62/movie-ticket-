import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MOVIES_DATA } from '../data/moviesData';
import { useBooking } from '../context/BookingContext';
import MovieCard from '../components/movies/MovieCard';
import MovieCategoryTabs from '../components/movies/MovieCategoryTabs';
import MovieFilters from '../components/movies/MovieFilters';
import PageBackground from '../components/common/PageBackground';
import { Film } from 'lucide-react';

const Movies = () => {
  const navigate = useNavigate();
  const { setSelectedMovie } = useBooking();

  const [activeCategory, setActiveCategory] = useState('now-showing');
  const [filters, setFilters] = useState({
    language: 'All Languages',
    genre: 'All Genres',
    screen: 'All Screens',
    date: 'All Dates',
    time: 'All Times',
    sortBy: 'rating-desc',
  });

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

  const handleBookTickets = (movie) => {
    setSelectedMovie(movie);
    navigate(`/movie/${movie.id}`);
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
      if (filters.language !== 'All Languages') {
        if (movie.language !== filters.language) return false;
      }

      // 3. Genre check
      if (filters.genre !== 'All Genres') {
        if (movie.genre !== filters.genre) return false;
      }

      // 4. Screen check
      if (filters.screen !== 'All Screens') {
        const screenKey = filters.screen.split(' ')[0]; // 'Screen 1', 'Screen 2', etc.
        const matchesScreen = movie.screens?.some(s => s.includes(screenKey));
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

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative overflow-hidden py-8 sm:py-12">
      {/* Dedicated Rich Glassmorphic Background for Movies Discovery */}
      <PageBackground variant="movies" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header Area with Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2"
        >
          {/* Left Title & Subtitle with delayed reveal */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] text-[#241532] tracking-tight leading-none"
            >
              {categoryHeadings[activeCategory] || 'Now Showing'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2.5 text-xs sm:text-sm text-[#746A7D] font-normal"
            >
              Blockbuster movies at your favourite multiplex
            </motion.p>
          </div>

          {/* Right Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <MovieCategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </motion.div>
        </motion.div>

        {/* Filter and Sorting Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
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
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 mt-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredMovies.map((movie) => (
                <motion.div
                  key={movie.id}
                  layout
                  variants={cardItemVariants}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <MovieCard
                    movie={movie}
                    onBookTickets={handleBookTickets}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center glass-frosted rounded-3xl max-w-xl mx-auto my-12 p-8">
            <Film className="w-12 h-12 text-[#9B4BC5] mx-auto mb-3 opacity-60" />
            <h3 className="font-display font-bold text-lg text-[#241532]">No movies found</h3>
            <p className="text-xs text-[#746A7D] mt-1 max-w-sm mx-auto">
              No movies match your selected filters. Try choosing a different language or genre.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] shadow-sm transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Movies;
