import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Film, ArrowRight, Play, Star, Calendar } from 'lucide-react';
import heroClapperImg from '../../assets/images/hero_clapper.png';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "THE PINNACLE OF LUXURY ENTERTAINMENT",
      titleLine1: "EXPERIENCE MOVIES",
      titleLine2: "BEYOND IMAGINATION",
      subtitle: "A premium multiplex movie, private event booking platform for cinematic memories.",
      ctaPrimary: "BOOK YOUR EXPERIENCE",
      ctaSecondary: "EXPLORE MOVIES"
    },
    {
      badge: "ROYAL PRIVATE SCREENINGS",
      titleLine1: "CELEBRATE YOUR",
      titleLine2: "MEMORIES IN 4K",
      subtitle: "Bespoke private theatre buyouts for proposals, anniversaries, and grand birthdays.",
      ctaPrimary: "BOOK PRIVATE EVENT",
      ctaSecondary: "VIEW PACKAGES"
    }
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08090d] via-[#0e121a] to-[#08090d] pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#1c2230]">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* VIP Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[11px] font-semibold tracking-[0.2em] uppercase shadow-gold-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>{current.badge}</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-white leading-tight">
                {current.titleLine1} <br />
                <span className="gold-text-gradient font-black">
                  {current.titleLine2}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {current.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#screens"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-200 border border-brand-gold/50 bg-[#161a25]/80 hover:bg-brand-gold/15 hover:text-brand-gold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>{current.ctaSecondary}</span>
                <Film className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
              </a>

              <Link
                to={activeSlide === 0 ? "/movie/screen-01" : "/private-events"}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-[#f6d77c] via-brand-gold to-[#b38421] hover:brightness-110 transition-all duration-300 shadow-gold-md flex items-center justify-center gap-2.5 group"
              >
                <span>{current.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1f2636] max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-white flex items-center gap-1 justify-center lg:justify-start">
                  9 <span className="text-brand-gold text-xs font-sans">SCREENS</span>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">IMAX Laser 4K</p>
              </div>
              <div className="border-x border-[#1f2636] px-2 text-center lg:text-left">
                <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-white flex items-center gap-1 justify-center lg:justify-start">
                  4.9 <Star className="w-4 h-4 text-brand-gold fill-brand-gold inline" />
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Guest Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-white flex items-center gap-1 justify-center lg:justify-start">
                  100% <span className="text-brand-gold text-xs font-sans">DOLBY</span>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Atmos Surround</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient circular frame with glowing rotation */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-1 bg-gradient-to-tr from-brand-gold/40 via-transparent to-brand-gold/20 shadow-2xl flex items-center justify-center group">
              
              <div className="w-full h-full bg-gradient-to-br from-[#121622] via-[#0a0d14] to-[#151a26] rounded-[22px] overflow-hidden relative flex items-center justify-center border border-[#2a3245]">
                
                {/* The Extracted Clapperboard & Film Reel Visual */}
                <img
                  src={heroClapperImg}
                  alt="Luxe Cinema Film Clapper & Golden Reel"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_15px_35px_rgba(212,175,55,0.25)]"
                />

                {/* Floating Cinema Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0d111a]/90 backdrop-blur-md border border-brand-gold/30 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">Special Feature</span>
                    <h4 className="text-xs font-bold text-white">Private Red Carpet Celebrations</h4>
                  </div>
                  <Link
                    to="/private-events"
                    className="px-3 py-1 bg-brand-gold/20 text-brand-gold text-[10px] font-bold rounded-md hover:bg-brand-gold hover:text-black transition-colors"
                  >
                    View
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 pt-10">
          <button
            onClick={() => setActiveSlide(0)}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'w-8 bg-brand-gold' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => setActiveSlide(1)}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'w-8 bg-brand-gold' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
            aria-label="Slide 2"
          />
        </div>

      </div>
    </section>
  );
}
