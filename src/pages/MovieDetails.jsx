import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOVIES_DATA } from '../data/moviesData';
import { useBooking } from '../context/BookingContext';
import { Star, Clock, Calendar, ShieldCheck, Play, ArrowRight, X, Film, CheckCircle2 } from 'lucide-react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { setSelectedMovie, setSelectedScreen, setSelectedDate, setSelectedShowtime } = useBooking();

  const movie = MOVIES_DATA.find((m) => m.id === movieId) || MOVIES_DATA[0];

  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'cast' | 'screens' | 'reviews'
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [quickDate, setQuickDate] = useState('Today, 10 Nov');
  const [quickScreen, setQuickScreen] = useState('Screen 1 (IMAX 4K Laser)');
  const [quickTime, setQuickTime] = useState(movie.showtimes?.[0] || '10:00 AM');

  const dates = ['Today, 10 Nov', 'Tomorrow, 11 Nov', 'Wed, 12 Nov', 'Thu, 13 Nov', 'Fri, 14 Nov'];

  const handleStartBooking = () => {
    setSelectedMovie(movie);
    setSelectedScreen(quickScreen);
    setSelectedDate(quickDate);
    setSelectedShowtime(quickTime);
    navigate('/booking/tickets');
  };

  const handleChooseScreen = () => {
    setSelectedMovie(movie);
    navigate('/booking/screens');
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-6 sm:py-10">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#9B4BC5]/6 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Cinematic Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-3xl overflow-hidden border border-white/80 shadow-[0_20px_50px_rgba(103,34,160,0.12)] bg-[#1a0c24] text-white"
        >
          {/* Banner Background Image with Gradient Overlays */}
          <div className="absolute inset-0">
            <img
              src={movie.banner || movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover object-top filter brightness-[0.7] opacity-80"
            />
            {/* Gradient overlays matching reference */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c24] via-[#1a0c24]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c24] via-transparent to-black/30" />
          </div>

          {/* Banner Content Container */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl flex flex-col justify-end min-h-[380px] sm:min-h-[440px]">
            
            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.08] text-white drop-shadow-md">
              {movie.title}
            </h1>

            {/* Badges: Certificate, Genre, Duration */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 font-bold uppercase tracking-wider">
                {movie.certificate}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 font-medium">
                {movie.genre}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 font-medium">
                {movie.language}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6722A0]/70 backdrop-blur-md border border-[#9B4BC5]/40 text-[#F2CA50] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#F2CA50]" />
                <span>{movie.rating}/10</span>
                <span className="text-white/80 font-normal">({movie.votes})</span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 text-white/80 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{movie.duration}</span>
              </div>
            </div>

            {/* Short Tagline/Synopsis */}
            <p className="mt-4 text-xs sm:text-sm text-white/90 font-normal max-w-xl leading-relaxed line-clamp-2">
              {movie.synopsis}
            </p>

            {/* Action Buttons: Book Tickets & Watch Trailer */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleStartBooking}
                className="px-8 py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(103,34,160,0.4)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Book Tickets</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={() => setTrailerOpen(true)}
                className="px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md font-semibold text-sm shadow-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Trailer</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Sub-Tabs Row (About, Cast & Crew, Screens, Reviews) */}
        <div className="mt-8 flex items-center gap-3 border-b border-[#E8E1EF] pb-4">
          {[
            { id: 'about', label: 'About' },
            { id: 'cast', label: 'Cast & Crew' },
            { id: 'screens', label: 'Screens' },
            { id: 'reviews', label: 'Reviews' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#6722A0] text-white shadow-sm'
                  : 'bg-white/80 hover:bg-[#F5F0FC] text-[#241532] border border-[#E8E1EF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panes */}
        <div className="mt-6">
          {activeTab === 'about' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xs">
                <h3 className="font-display font-bold text-lg text-[#241532] mb-3">Synopsis</h3>
                <p className="text-sm text-[#746A7D] leading-relaxed">
                  {movie.synopsis}
                </p>

                <div className="mt-8 pt-6 border-t border-[#E8E1EF] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#746A7D] block">Director</span>
                    <span className="font-bold text-[#241532] mt-0.5 block">{movie.director || 'Nag Ashwin'}</span>
                  </div>
                  <div>
                    <span className="text-[#746A7D] block">Music Director</span>
                    <span className="font-bold text-[#241532] mt-0.5 block">{movie.music || 'Santhosh Narayanan'}</span>
                  </div>
                  <div>
                    <span className="text-[#746A7D] block">Release Date</span>
                    <span className="font-bold text-[#241532] mt-0.5 block">{movie.releaseDate || '27 June 2024'}</span>
                  </div>
                  <div>
                    <span className="text-[#746A7D] block">Certification</span>
                    <span className="font-bold text-[#241532] mt-0.5 block">{movie.certificate}</span>
                  </div>
                </div>
              </div>

              {/* Quick Booking Widget on the side */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-[0_12px_36px_rgba(103,34,160,0.06)] flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#241532] mb-4">Quick Showtime Selection</h3>

                  {/* Date picker */}
                  <span className="text-[11px] font-bold text-[#746A7D] uppercase tracking-wider block mb-2">Select Date</span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dates.slice(0, 3).map((d) => (
                      <button
                        key={d}
                        onClick={() => setQuickDate(d)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          quickDate === d
                            ? 'bg-[#6722A0] text-white shadow-xs'
                            : 'bg-[#F5F0FC] text-[#241532] hover:bg-[#E9E5FA]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  {/* Showtimes */}
                  <span className="text-[11px] font-bold text-[#746A7D] uppercase tracking-wider block mb-2">Showtimes</span>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {movie.showtimes?.map((t) => (
                      <button
                        key={t}
                        onClick={() => setQuickTime(t)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          quickTime === t
                            ? 'bg-[#6722A0] text-white shadow-xs'
                            : 'bg-[#F5F0FC] text-[#241532] hover:bg-[#E9E5FA] border border-[#E8E1EF]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E1EF]">
                  <button
                    onClick={handleStartBooking}
                    className="w-full py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Proceed to Tickets</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleChooseScreen}
                    className="w-full mt-2 py-2 text-center text-xs font-semibold text-[#6722A0] hover:underline cursor-pointer"
                  >
                    Explore all cinema screens →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cast' && (
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xs">
              <h3 className="font-display font-bold text-lg text-[#241532] mb-6">Starring Cast & Crew</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {movie.cast?.map((actor) => (
                  <div key={actor.name} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-md mb-3 transition-transform group-hover:scale-105">
                      <img src={actor.photo} alt={actor.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-display font-bold text-sm text-[#241532]">{actor.name}</span>
                    <span className="text-xs text-[#746A7D]">{actor.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'screens' && (
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#241532]">Available Multiplex Screens</h3>
                  <p className="text-xs text-[#746A7D]">Choose your preferred projection and audio environment</p>
                </div>
                <button
                  onClick={handleChooseScreen}
                  className="px-5 py-2 rounded-full bg-[#6722A0] text-white text-xs font-semibold hover:bg-[#521782] transition-colors"
                >
                  View All Screens
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {movie.screens?.map((screenName) => (
                  <div key={screenName} className="p-4 rounded-2xl bg-white border border-[#E8E1EF] flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-sm text-[#241532] block">{screenName}</span>
                      <span className="text-xs text-[#746A7D]">Dolby Atmos Spatial Sound • 4K Laser</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedMovie(movie);
                        setSelectedScreen(screenName);
                        navigate('/booking/tickets');
                      }}
                      className="px-4 py-1.5 rounded-full bg-[#F5F0FC] text-[#6722A0] text-xs font-semibold hover:bg-[#6722A0] hover:text-white transition-colors"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-lg text-[#241532] mb-4">Audience & Critic Reviews</h3>
              {movie.reviews && movie.reviews.length > 0 ? (
                movie.reviews.map((rev, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E8E1EF]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-[#241532]">{rev.user}</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-[#6722A0]">
                        <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                        <span>{rev.rating}/10</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#746A7D] leading-relaxed">{rev.comment}</p>
                    <span className="text-[10px] text-[#746A7D]/70 mt-2 block">{rev.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#746A7D]">Reviews will be open once the movie premieres.</p>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Trailer Video Modal */}
      {trailerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#1a0c24] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <span className="font-display font-bold text-sm">{movie.title} — Official Trailer</span>
              <button
                onClick={() => setTrailerOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Embedded Responsive Trailer Preview */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/kQDd1AhGIHk?autoplay=1"
                title={`${movie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MovieDetails;
