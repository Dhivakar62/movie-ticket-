import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import heroArtwork from '../../assets/images/hero_couple_hd.png';

const Hero = ({ onExploreMovies, onPlanEvent }) => {
  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-20 sm:pb-24">
      {/* Cinematic Ambient Glow Directly Framing Hero Content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-tr from-[#A9B8F4]/20 via-[#D8C5F4]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-bl from-[#B78BE5]/20 via-[#FFEADB]/25 to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, & Action CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left py-2 sm:py-4 lg:pr-4">
            
            {/* Soft Translucent Glass Aura Backdrop for Maximum Readability */}
            <div className="bg-white/45 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/70 shadow-[0_12px_36px_rgba(103,34,160,0.04)] relative overflow-hidden">
              {/* Subtle Glass Glint across top edge */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

              {/* Main Headline */}
              <h1 className="font-display font-black text-[#241532] text-4xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                Where Movies<br />
                <span className="text-[#6722A0] bg-gradient-to-r from-[#6722A0] via-[#852ECA] to-[#9B4BC5] bg-clip-text text-transparent">
                  Meet Memories
                </span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#746A7D] max-w-lg font-normal leading-relaxed">
                Book your movie tickets or plan your special celebrations with us!
              </p>

              {/* Dual CTAs matching reference */}
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <button
                  onClick={onExploreMovies}
                  className="px-7 sm:px-8 py-3.5 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white font-semibold text-sm shadow-[0_6px_22px_rgba(103,34,160,0.32)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                >
                  <span>Explore Movies</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onPlanEvent}
                  className="px-6 sm:px-7 py-3.5 rounded-full bg-white/85 hover:bg-white text-[#241532] hover:text-[#6722A0] border border-white hover:border-[#6722A0]/40 backdrop-blur-md font-semibold text-sm shadow-[0_4px_16px_rgba(103,34,160,0.06)] flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Plan Your Event</span>
                  <Heart className="w-4 h-4 text-[#746A7D] group-hover:text-[#6722A0] transition-colors" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Cinema Couple & Multiplex Artwork (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Ethereal Glass Halo Behind Artwork */}
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-[#B78BE5]/30 via-white/40 to-[#FFEADB]/40 blur-lg -z-10" />

            {/* Crystal Glass Frame Container */}
            <div className="relative w-full max-w-xl rounded-3xl p-2 bg-white/50 backdrop-blur-xl border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_25px_60px_-15px_rgba(103,34,160,0.2)] group overflow-hidden">
              
              {/* Internal Inner Image */}
              <div className="relative w-full rounded-[20px] overflow-hidden">
                <img
                  src={heroArtwork}
                  alt="DreamCine Cinema Multiplex and Celebration Experience"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Refractive Glass Rim Reflection on Image */}
                <div className="absolute inset-0 rounded-[20px] border border-white/20 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
