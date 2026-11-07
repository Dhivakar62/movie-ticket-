import React from 'react';
import { Sparkles, Calendar, Heart, Gift, ArrowRight } from 'lucide-react';
import eventHeroImg from '../../assets/images/event_hero_couple.png';

export default function EventHero({ onScrollToBooking }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08090d] via-[#10141e] to-[#08090d] pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-[#1c2230]">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[11px] font-semibold tracking-[0.2em] uppercase shadow-gold-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Private Cinema Experiences</span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-black text-white tracking-wide leading-tight">
              MAKE YOUR SPECIAL <br />
              <span className="gold-text-gradient">MOMENTS CINEMATIC</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Transform our ultra-luxury auditorium into your private sanctuary. Host dream proposals, grand birthdays, golden anniversaries, and VIP screenings during exclusive intermission windows.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToBooking}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-md flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <span>BOOK PRIVATE SCREENING</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#packages"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-200 border border-brand-gold/40 bg-[#161a25]/80 hover:bg-brand-gold/15 hover:text-brand-gold transition-all"
              >
                EXPLORE PACKAGES
              </a>
            </div>

            {/* Event Types Pill Tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-gray-400">
              <span className="px-3 py-1 rounded-full bg-[#181d28] border border-[#273042] flex items-center gap-1.5">
                <Heart className="w-3 h-3 text-red-400" /> Proposals
              </span>
              <span className="px-3 py-1 rounded-full bg-[#181d28] border border-[#273042] flex items-center gap-1.5">
                <Gift className="w-3 h-3 text-brand-gold" /> Birthdays
              </span>
              <span className="px-3 py-1 rounded-full bg-[#181d28] border border-[#273042] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-purple-400" /> Anniversaries
              </span>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl p-1 bg-gradient-to-tr from-brand-gold/40 via-transparent to-brand-gold/20 shadow-2xl group">
              <div className="w-full h-full bg-[#0d1017] rounded-[22px] overflow-hidden relative border border-[#283144]">
                <img
                  src={eventHeroImg}
                  alt="Couple celebrating anniversary in private cinema"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">VIP Auditorium 03</span>
                    <h3 className="font-serif-luxury text-base font-bold">Private Birthday & Proposal Setup</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
