import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dreamcineBgHd from '../../assets/images/dreamcine_cinema_bg_hd.webp';
import dreamcineBgMobile from '../../assets/images/dreamcine_cinema_bg_mobile_hd.webp';

/**
 * CinemaSparkle
 * Delicate twinkling star sparkle that accents the stars in the cinema artwork
 */
const CinemaSparkle = ({ className = '', style = {}, color = '#E6A817', size = 14 }) => (
  <div
    className={`absolute pointer-events-none select-none animate-cinema-sparkle ${className}`}
    style={{ width: size, height: size, ...style }}
  >
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full drop-shadow-[0_0_8px_rgba(230,168,23,0.7)]">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  </div>
);

/**
 * PageBackground
 * 
 * Implements the USER-PROVIDED MASTER DREAMCINE CINEMA BACKGROUND IMAGE
 * across every page and route of the application.
 * 
 * Key Features:
 * - Direct implementation of the exact attached cinema background artwork
 *   featuring the floating popcorn bucket, purple soda cup, french fries,
 *   cinema tickets, film reels, clapperboard, and film strips.
 * - Full-page responsive coverage (fixed, object-cover, desktop & mobile portrait compositions).
 * - Smooth scroll parallax using Framer Motion (subtle y-drift and scale).
 * - Delicate translucent readability veil so text and controls remain crisp.
 * - Safe z-index (-20) and pointer-events-none for 100% interactive integrity.
 * - Subtle page-specific ambient lighting veils for thematic cohesion.
 */
const PageBackground = ({ variant = 'movies' }) => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1200], [0, -35]);
  const backgroundScale = useTransform(scrollY, [0, 1200], [1.02, 1.05]);

  // Minor page-specific object positioning tweaks for perfect visual framing
  const objectPositionByVariant = {
    home: 'center 35%',
    movies: 'center 40%',
    'movie-details': 'center 45%',
    screens: 'center 35%',
    showtime: 'center 35%',
    tickets: 'center 35%',
    seats: 'center 30%',
    checkout: 'center 40%',
    events: 'center 40%',
    'event-slots': 'center 35%',
    dashboard: 'center 40%',
    offers: 'center 40%',
    info: 'center 40%',
  };

  const currentObjectPosition = objectPositionByVariant[variant] || 'center center';

  // Thematic soft ambient glow accents per page (gentle mood lighting over the artwork)
  const renderThematicAccent = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            {/* Soft Warm Cinematic Peach Horizon Glow Behind Hero */}
            <div className="absolute top-[18%] left-[28%] w-[600px] h-[340px] rounded-full bg-gradient-to-t from-[#FFEADB]/22 via-[#FAD9C8]/10 to-transparent blur-[90px] pointer-events-none" />
            {/* Twinkling star sparkles matching the stars in the artwork */}
            <CinemaSparkle className="top-[18%] left-[17%]" color="#F59E0B" size={16} style={{ animationDelay: '0.4s' }} />
            <CinemaSparkle className="top-[24%] right-[22%]" color="#FEF3C7" size={14} style={{ animationDelay: '1.2s' }} />
            <CinemaSparkle className="top-[65%] left-[22%]" color="#B78BE5" size={18} style={{ animationDelay: '2.1s' }} />
            <CinemaSparkle className="top-[78%] right-[18%]" color="#F59E0B" size={15} style={{ animationDelay: '0.8s' }} />
          </>
        );

      case 'events':
      case 'event-slots':
        return (
          <>
            {/* Romantic Rose and Champagne Celebration Ambient Flare */}
            <div className="absolute -top-20 right-[15%] w-[650px] h-[550px] rounded-full bg-gradient-to-br from-[#FDA4AF]/18 via-[#F3D9ED]/15 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[450px] rounded-full bg-gradient-to-tr from-[#FEF3C7]/20 to-transparent blur-[110px] pointer-events-none" />
            <CinemaSparkle className="top-[16%] left-[24%]" color="#F43F5E" size={18} />
            <CinemaSparkle className="top-[55%] right-[24%]" color="#FDA4AF" size={16} style={{ animationDelay: '1.5s' }} />
          </>
        );

      case 'screens':
        return (
          <>
            {/* Projector Beam Light Cone Flare */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-gradient-to-b from-[#6722A0]/16 via-[#A9B8F4]/10 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />
            <CinemaSparkle className="top-[20%] left-[28%]" color="#F59E0B" size={15} />
          </>
        );

      case 'tickets':
      case 'showtime':
        return (
          <>
            {/* Golden Crown Warm Shimmer */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#F59E0B]/14 via-[#6722A0]/08 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />
            <CinemaSparkle className="top-[15%] right-[25%]" color="#F59E0B" size={18} />
          </>
        );

      case 'seats':
        return (
          <>
            {/* Curved Theater Screen Illumination Beam */}
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-gradient-to-b from-[#6722A0]/20 via-[#9B4BC5]/10 to-transparent blur-[130px] pointer-events-none" />
            <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-gradient-to-r from-[#22C55E]/08 to-transparent blur-[100px] pointer-events-none" />
          </>
        );

      case 'movie-details':
        return (
          <>
            {/* Spotlight Aura behind widescreen movie banner */}
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-b from-[#6722A0]/18 via-[#B78BE5]/10 to-transparent blur-[130px] pointer-events-none" />
            <CinemaSparkle className="top-[22%] left-[24%]" color="#FEF3C7" size={16} />
          </>
        );

      default:
        return (
          <>
            <CinemaSparkle className="top-[18%] left-[20%]" color="#F59E0B" size={14} />
            <CinemaSparkle className="top-[60%] right-[22%]" color="#B78BE5" size={15} style={{ animationDelay: '1.8s' }} />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none -z-20 overflow-hidden">
      
      {/* =========================================================================
          LAYER 1: ATTACHED MASTER CINEMA BACKGROUND IMAGE (Full Viewport, Parallax)
          ========================================================================= */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <picture className="w-full h-full block">
          {/* Mobile Viewport: Tailored Portrait Composition */}
          <source media="(max-width: 768px)" srcSet={dreamcineBgMobile} />
          {/* Desktop & Tablet: High-Definition Widescreen Master Image */}
          <img
            src={dreamcineBgHd}
            alt="DreamCine Cinema World Background"
            className="w-full h-full object-cover"
            style={{ objectPosition: currentObjectPosition }}
            loading="eager"
          />
        </picture>
      </motion.div>

      {/* =========================================================================
          LAYER 2: TRANSLUCENT READABILITY VEIL
          Ensures high WCAG text readability while preserving 100% of the cinema snacks
          and vivid purple/lavender lighting across the entire screen.
          ========================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.25) 0%, rgba(250, 245, 255, 0.12) 60%, rgba(245, 238, 252, 0.05) 100%)
          `
        }}
      />

      {/* =========================================================================
          LAYER 3: THEMATIC SOFT AMBIENT LIGHTING & STAR SPARKLES
          ========================================================================= */}
      {renderThematicAccent()}
    </div>
  );
};

export default PageBackground;
