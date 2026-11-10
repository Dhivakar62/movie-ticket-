import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/home/Hero';
import BookingSearch from '../components/home/BookingSearch';
import FeatureHighlights from '../components/home/FeatureHighlights';
import GlassmorphicBackground from '../components/home/GlassmorphicBackground';
import { Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleExploreMovies = () => {
    navigate('/movies');
  };

  const handlePlanEvent = () => {
    showToast('Private Event Booking celebration packages are coming in the upcoming phase!');
  };

  const handleSearch = (searchParams) => {
    showToast(`Loading showtimes for "${searchParams.movie}" in ${searchParams.city}...`);
    setTimeout(() => {
      navigate('/movies');
    }, 600);
  };

  return (
    <main className="w-full min-h-[calc(100vh-74px)] flex flex-col justify-between bg-transparent relative overflow-hidden">
      {/* Complete Multi-Layer Glassmorphic Background Environment */}
      <GlassmorphicBackground />

      {/* Interactive Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#321044]/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#6722A0]/40 animate-bounce">
          <div className="w-6 h-6 rounded-full bg-[#6722A0] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#F2CA50]" />
          </div>
          <span className="text-xs font-medium tracking-wide">{notification}</span>
        </div>
      )}

      {/* Main Landing Sections */}
      <div className="relative z-10">
        <Hero
          onExploreMovies={handleExploreMovies}
          onPlanEvent={handlePlanEvent}
        />
        <BookingSearch onSearch={handleSearch} />
        <FeatureHighlights />
      </div>
    </main>
  );
};

export default Home;
