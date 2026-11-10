import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import heroArtwork from '../../assets/images/hero_couple_hd.png';

const Hero = ({ onExploreMovies, onPlanEvent }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#FBF8FE] via-[#F6F0FC] to-[#FCEFEA] pt-10 sm:pt-14 pb-20 sm:pb-24 border-b border-[#E8E1EF]/60">
      {/* Subtle Pearl Ambient Lighting */}
      <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-[#9B4BC5]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#FAD9C8]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headline, Subtitle, & Action CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left py-2 sm:py-6 lg:py-8 lg:pr-4">
            
            {/* Main Headline */}
            <h1 className="font-display font-black text-[#241532] text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight">
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
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(103,34,160,0.3)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Movies</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onPlanEvent}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF8FE] text-[#241532] hover:text-[#6722A0] border border-[#D8CEE2] hover:border-[#6722A0] font-semibold text-sm shadow-xs flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Plan Your Event</span>
                <Heart className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0]" />
              </button>
            </div>

          </div>

          {/* Right Column: Cinema Couple & Multiplex Artwork (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(103,34,160,0.14)] border border-[#E8E1EF]/70 bg-white group">
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
