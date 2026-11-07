import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import FilterBar from '../components/common/FilterBar';
import MultiplexGrid from '../components/home/MultiplexGrid';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, Heart, Gift, ArrowRight, Star, ShieldCheck, Film } from 'lucide-react';
import eventHeroImg from '../assets/images/event_hero_couple.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Filter / Search Bar */}
      <FilterBar onSearch={(q) => setSearchQuery(q)} />

      {/* Multiplex 9-Screens Showcase */}
      <MultiplexGrid />

      {/* Private Events Banner Section (Matching Stitch Design) */}
      <section className="py-16 bg-gradient-to-b from-transparent via-[#0d1017] to-transparent border-y border-[#1e2434]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121622] rounded-3xl border border-brand-gold/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
                  <Crown className="w-3.5 h-3.5" />
                  <span>Exclusive Private Portal</span>
                </div>

                <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Make Your Special Moments <br />
                  <span className="gold-text-gradient">Truly Cinematic</span>
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                  Whether it is an intimate surprise marriage proposal, milestone birthday bash, or golden anniversary celebration, reserve our ultra-luxury auditorium during designated intermission break slots.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/private-events"
                    className="px-7 py-3 rounded-xl font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-goldLight via-brand-gold to-brand-goldDark hover:brightness-110 transition-all shadow-gold-sm flex items-center gap-2 text-xs"
                  >
                    <span>Explore Private Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/private-events#packages"
                    className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-gray-300 border border-[#2d374d] hover:border-brand-gold hover:text-white transition-all bg-[#171d2a]"
                  >
                    View Break Schedules
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#2d374c] shadow-xl aspect-video relative group">
                  <img
                    src={eventHeroImg}
                    alt="Private event celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                      Auditorium Buyout Packages from ₹15,000
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Luxe Amenities Feature Bar */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#10141e] p-5 rounded-2xl border border-[#22293a] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-sm font-bold text-white">4K Laser Projection</h4>
              <p className="text-[11px] text-gray-400">Crystal clear dual-laser HDR visual fidelity</p>
            </div>
          </div>

          <div className="bg-[#10141e] p-5 rounded-2xl border border-[#22293a] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-sm font-bold text-white">VIP Recliner Loungers</h4>
              <p className="text-[11px] text-gray-400">Motorized leather recliners with food service</p>
            </div>
          </div>

          <div className="bg-[#10141e] p-5 rounded-2xl border border-[#22293a] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-sm font-bold text-white">Dolby Atmos Sound</h4>
              <p className="text-[11px] text-gray-400">64-channel immersive spatial acoustics</p>
            </div>
          </div>

          <div className="bg-[#10141e] p-5 rounded-2xl border border-[#22293a] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-sm font-bold text-white">Gourmet Concessions</h4>
              <p className="text-[11px] text-gray-400">Artisan snacks delivered directly to your seat</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
