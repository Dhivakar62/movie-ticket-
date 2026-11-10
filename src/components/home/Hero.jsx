import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import heroArtwork from '../../assets/images/hero_couple_hd.png';

const Hero = ({ onExploreMovies, onPlanEvent }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF7FE] via-[#F5EDFC]/70 to-[#FDF4EF]/80 pt-10 sm:pt-14 pb-20 sm:pb-24 border-b border-[#E8E1EF]/50">
      {/* Layered Glassmorphism Ambient Glow Effects */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[#9B4BC5]/12 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-[#60A5FA]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-[550px] h-[550px] bg-[#FAD9C8]/35 rounded-full blur-[110px] pointer-events-none"></div>

      {/* Subtle Geometric Glass Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline, Subtitle, & Action CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left py-2 sm:py-6 lg:py-8 lg:pr-4">
            
            {/* Main Headline */}
            <h1 className="font-display font-black text-[#241532] text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              Where Movies<br />
              <span className="text-[#6722A0]">
                Meet Memories
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#746A7D] max-w-lg font-normal leading-relaxed">
              Book your movie tickets or plan your special celebrations with us!
            </p>

            {/* Dual CTAs matching reference */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={onExploreMovies}
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(103,34,160,0.28)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Movies</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onPlanEvent}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#241532] hover:text-[#6722A0] border border-white/90 hover:border-[#6722A0] backdrop-blur-md font-semibold text-sm shadow-[0_4px_16px_rgba(103,34,160,0.06)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Plan Your Event</span>
                <Heart className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0]" />
              </button>
            </div>

          </div>

          {/* Right Column: Cinema Couple & Multiplex Artwork (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(103,34,160,0.14)] border border-white/80 bg-white/60 backdrop-blur-sm group">
              <img
                src={heroArtwork}
                alt="DreamCine Cinema Multiplex and Celebration Experience"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
