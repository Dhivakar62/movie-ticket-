import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBackground from '../components/common/PageBackground';
import { Film, Sparkles, Heart, Shield, Award, Users, ArrowRight } from 'lucide-react';
import heroCouple from '../assets/images/hero_couple_cinema.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-16">
      {/* Dedicated Info Background */}
      <PageBackground variant="info" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Our Story & Vision
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#241532] mt-3 tracking-tight">
            Where Movies Meet Memories
          </h1>
          <p className="text-xs sm:text-base text-[#746A7D] mt-3 leading-relaxed">
            DreamCine was built with a single mission: to transcend ordinary movie-going into an unforgettable cinematic and emotional celebration.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-reflective rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
        >
          <div>
            <h2 className="font-display font-extrabold text-2xl text-[#241532] mb-4">
              Reinventing the Multiplex Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#746A7D] leading-relaxed mb-4">
              Founded in Bengaluru, DreamCine combines Hollywood and Indian blockbuster screenings with dedicated private intermission suites. Whether you are experiencing the visual spectacle of 4K Laser IMAX or proposing under illuminated marquee letters on the giant silver screen, we craft every detail for luxury and magic.
            </p>
            <p className="text-xs sm:text-sm text-[#746A7D] leading-relaxed">
              With 4 distinct cinematic auditoriums, curated gourmet dining, and motorized leather loungers, we welcome cinema lovers to experience stories the way filmmakers intended.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-white/80">
            <img src={heroCouple} alt="DreamCine Multiplex" className="w-full h-72 object-cover" />
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-reflective rounded-2xl p-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center mx-auto mb-3 shadow-xs border border-white">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-sm text-[#241532]">4K Laser Vision</h3>
            <p className="text-xs text-[#746A7D] mt-1">Dual laser projectors deliver ultra-vivid contrast and color accuracy.</p>
          </div>

          <div className="glass-reflective rounded-2xl p-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center mx-auto mb-3 shadow-xs border border-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-sm text-[#241532]">Dolby Atmos Spatial</h3>
            <p className="text-xs text-[#746A7D] mt-1">Up to 128 individual audio channels engulf the room in three dimensions.</p>
          </div>

          <div className="glass-reflective rounded-2xl p-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center mx-auto mb-3 shadow-xs border border-white">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-sm text-[#241532]">Private Intermissions</h3>
            <p className="text-xs text-[#746A7D] mt-1">Celebrate proposals, birthdays, and anniversaries in private luxury.</p>
          </div>

          <div className="glass-reflective rounded-2xl p-5 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E6ECFF] text-[#2563EB] flex items-center justify-center mx-auto mb-3 shadow-xs border border-white">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-sm text-[#241532]">Gourmet Hospitality</h3>
            <p className="text-xs text-[#746A7D] mt-1">Chef-crafted menus, artisan mocktails, and discreet at-seat dining service.</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#6722A0] to-[#321044] rounded-3xl p-8 sm:p-12 text-white text-center shadow-lg">
          <h2 className="font-display font-black text-2xl sm:text-3xl mb-3">
            Ready to Experience the Magic?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto mb-6">
            Book your tickets for today's blockbuster screenings or plan your dream celebration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/movies')}
              className="px-6 py-2.5 rounded-full bg-white text-[#6722A0] text-xs font-bold hover:bg-[#F5F0FC] transition-colors cursor-pointer shadow-xs"
            >
              Browse Movies
            </button>
            <button
              onClick={() => navigate('/events')}
              className="px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors cursor-pointer border border-white/30"
            >
              Plan an Event
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
