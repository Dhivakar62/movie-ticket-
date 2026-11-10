import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  popcornBucket,
  sodaCup,
  frenchFries,
  cinemaTickets,
  filmReel,
  clapperboard,
  cinemaCamera,
  filmStrip,
  popcornPiece1,
  popcornPiece2,
  popcornPiece3,
  popcornPiece4,
} from '../../assets/cinema3dAssets';

/**
 * CinemaSparkle
 * Polished four-point star sparkle with twinkling scale and rotation
 */
const CinemaSparkle = ({ className = '', style = {}, color = '#E6A817', size = 16 }) => (
  <div
    className={`absolute pointer-events-none select-none animate-cinema-sparkle ${className}`}
    style={{ width: size, height: size, ...style }}
  >
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full drop-shadow-[0_0_8px_rgba(230,168,23,0.6)]">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  </div>
);

/**
 * PageBackground
 * Provides an immersive CINEMA-THEMED FLOATING 3D BACKGROUND across DreamCine routes.
 * 
 * Visual Features:
 * - Realistic 3D floating cinema objects: popcorn bucket, soda cup, french fries,
 *   VIP tickets, film reels, film strips, clapperboard, 3D cinema camera, floating popcorn kernels.
 * - Varied continuous floating animations with distinct cycle durations and paths.
 * - Smooth scroll-driven parallax depth layers via Framer Motion.
 * - Glassmorphic ambient lighting fields, mesh gradients, and specular highlights.
 * - Non-intrusive layout (pointer-events-none, -z-10, edges and margins composition).
 */
const PageBackground = ({ variant = 'movies' }) => {
  const { scrollY } = useScroll();
  const parallaxForeground = useTransform(scrollY, [0, 1000], [0, -75]);
  const parallaxMidground = useTransform(scrollY, [0, 1000], [0, -45]);
  const parallaxBackground = useTransform(scrollY, [0, 1000], [0, -20]);

  // Shared Base Mesh Background
  const renderBaseMesh = (extraGradient = '') => (
    <div
      className="absolute inset-0"
      style={{
        background: `
          ${extraGradient ? extraGradient + ',' : ''}
          radial-gradient(circle at 18% 12%, rgba(250, 245, 255, 0.98) 0%, transparent 50%),
          radial-gradient(circle at 82% 18%, rgba(237, 230, 250, 0.92) 0%, rgba(250, 246, 253, 0.5) 35%, transparent 65%),
          radial-gradient(circle at 50% 55%, rgba(245, 240, 252, 0.88) 0%, transparent 60%),
          radial-gradient(circle at 12% 80%, rgba(234, 239, 255, 0.75) 0%, transparent 50%),
          radial-gradient(circle at 88% 85%, rgba(252, 238, 248, 0.8) 0%, transparent 55%),
          #FAF8FE
        `
      }}
    />
  );

  switch (variant) {
    /* =========================================================================
       1. HOMEPAGE (/): RICHEST CINEMATIC 3D FLOATING WORLD
       ========================================================================= */
    case 'home':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% 20%, rgba(255, 234, 219, 0.35) 0%, transparent 60%)')}

          {/* Ambient Lighting Fields */}
          <div className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#B78BE5]/25 via-[#D8C5F4]/20 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[28%] -left-28 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#A9B8F4]/22 via-[#D6E5FF]/18 to-transparent blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[560px] h-[560px] rounded-full bg-gradient-to-tl from-[#F3D9ED]/30 via-[#D8C5F4]/18 to-transparent blur-[110px] animate-float-reverse" />
          <div className="absolute top-[16%] left-[30%] w-[650px] h-[380px] rounded-full bg-gradient-to-t from-[#FFEADB]/28 via-[#FAD9C8]/15 to-transparent blur-[90px]" />

          {/* 3D Glass Sphere Top-Right for Depth */}
          <div
            className="absolute top-10 right-[3%] w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-60 animate-float-slow"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.15) 45%, rgba(183, 139, 229, 0.22) 80%, rgba(103, 34, 160, 0.28) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.85)',
              boxShadow: 'inset 0 4px 20px rgba(255, 255, 255, 0.95), 0 30px 60px -15px rgba(103, 34, 160, 0.15)'
            }}
          />

          {/* LEFT FLANK: Floating 3D Popcorn Bucket & Drifting Kernels */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -left-12 lg:-left-20 z-0">
            <img
              src={popcornBucket}
              alt="3D Cinema Popcorn Bucket"
              className="w-56 sm:w-72 lg:w-96 max-w-none animate-popcorn-bucket drop-shadow-[0_28px_45px_rgba(103,34,160,0.25)]"
            />
          </motion.div>

          {/* Individual Floating Popcorn Kernels (Left) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-44 left-36 lg:left-56 z-0">
            <img
              src={popcornPiece1}
              alt="Floating Popcorn Piece"
              className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-1 drop-shadow-[0_10px_18px_rgba(245,158,11,0.3)]"
            />
          </motion.div>

          <motion.div style={{ y: parallaxBackground }} className="absolute top-[48%] left-8 lg:left-14 z-0">
            <img
              src={popcornPiece2}
              alt="Floating Popcorn Piece"
              className="w-14 h-14 lg:w-20 lg:h-20 animate-kernel-2 drop-shadow-[0_12px_22px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          <motion.div style={{ y: parallaxMidground }} className="absolute top-[68%] left-24 lg:left-36 z-0">
            <img
              src={popcornPiece3}
              alt="Floating Popcorn Piece"
              className="w-10 h-10 lg:w-14 lg:h-14 animate-kernel-3 drop-shadow-[0_10px_16px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          {/* RIGHT FLANK: Floating 3D Soda Cup, French Fries, Tickets & Film Strip */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-20 -right-8 lg:right-6 z-0">
            <img
              src={sodaCup}
              alt="3D Cinema Soda Cup"
              className="w-48 sm:w-60 lg:w-76 max-w-none animate-soda-cup drop-shadow-[0_26px_40px_rgba(103,34,160,0.22)]"
            />
          </motion.div>

          {/* Floating 3D Cinema Admission Tickets (Upper Right) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-8 right-32 lg:right-56 z-0">
            <img
              src={cinemaTickets}
              alt="3D Cinema VIP Tickets"
              className="w-36 sm:w-44 lg:w-56 animate-cinema-tickets drop-shadow-[0_20px_35px_rgba(103,34,160,0.25)]"
            />
          </motion.div>

          {/* Floating 3D Gourmet French Fries (Mid-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-[55%] -right-10 lg:right-12 z-0">
            <img
              src={frenchFries}
              alt="3D Gourmet Cinema Fries"
              className="w-44 sm:w-52 lg:w-68 max-w-none animate-french-fries drop-shadow-[0_24px_38px_rgba(103,34,160,0.20)]"
            />
          </motion.div>

          {/* Subtle 3D Translucent Film Strip (Right Margin) */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[32%] right-2 lg:right-28 opacity-45 z-0">
            <img
              src={filmStrip}
              alt="3D Film Strip"
              className="w-24 sm:w-32 lg:w-40 animate-film-strip drop-shadow-[0_18px_30px_rgba(103,34,160,0.18)]"
            />
          </motion.div>

          {/* Additional Floating Popcorn Kernels (Right) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[42%] right-48 lg:right-72 z-0">
            <img
              src={popcornPiece4}
              alt="Floating Popcorn Piece"
              className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-4 drop-shadow-[0_12px_20px_rgba(245,158,11,0.28)]"
            />
          </motion.div>

          {/* Cinema Sparkles */}
          <CinemaSparkle className="top-16 left-[22%]" color="#F59E0B" size={18} style={{ animationDelay: '0.4s' }} />
          <CinemaSparkle className="top-40 right-[35%]" color="#B78BE5" size={14} style={{ animationDelay: '1.2s' }} />
          <CinemaSparkle className="top-[60%] left-[28%]" color="#FEF3C7" size={16} style={{ animationDelay: '2.1s' }} />
          <CinemaSparkle className="top-[75%] right-[24%]" color="#F59E0B" size={20} style={{ animationDelay: '0.8s' }} />
        </div>
      );

    /* =========================================================================
       2. MOVIES LISTING (/movies)
       ========================================================================= */
    case 'movies':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 15% 10%, rgba(245, 240, 252, 0.95) 0%, transparent 55%)')}

          {/* Ambient Lighting Fields */}
          <div className="absolute -top-24 right-[10%] w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#B78BE5]/22 via-[#A9B8F4]/18 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[35%] -left-32 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#6722A0]/15 via-[#D6E5FF]/20 to-transparent blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[5%] right-[-5%] w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-[#F3D9ED]/30 via-[#D8C5F4]/15 to-transparent blur-[110px] animate-float-reverse" />

          {/* 3D Popcorn Bucket (Top-Right Edge) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-12 -right-16 lg:-right-20 opacity-90 z-0">
            <img
              src={popcornBucket}
              alt="3D Cinema Popcorn"
              className="w-52 lg:w-72 max-w-none animate-popcorn-bucket drop-shadow-[0_24px_40px_rgba(103,34,160,0.22)]"
            />
          </motion.div>

          {/* 3D Cinema VIP Tickets (Top-Left Edge) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-24 -left-10 lg:left-4 z-0">
            <img
              src={cinemaTickets}
              alt="3D Cinema Tickets"
              className="w-36 lg:w-48 animate-cinema-tickets drop-shadow-[0_20px_35px_rgba(103,34,160,0.25)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels along Borders */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[38%] left-4 lg:left-12 z-0">
            <img
              src={popcornPiece1}
              alt="Popcorn Kernel"
              className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-1 drop-shadow-[0_10px_16px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          <motion.div style={{ y: parallaxMidground }} className="absolute top-[60%] right-6 lg:right-14 z-0">
            <img
              src={popcornPiece3}
              alt="Popcorn Kernel"
              className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-3 drop-shadow-[0_10px_16px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          {/* 3D Soda Cup (Bottom-Left Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute bottom-16 -left-10 lg:left-4 opacity-85 z-0">
            <img
              src={sodaCup}
              alt="3D Soda Cup"
              className="w-40 lg:w-56 animate-soda-cup drop-shadow-[0_22px_36px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Subtle 3D Film Strip (Mid-Right) */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[45%] -right-4 lg:right-8 opacity-40 z-0">
            <img
              src={filmStrip}
              alt="3D Film Strip"
              className="w-24 lg:w-36 animate-film-strip drop-shadow-[0_16px_28px_rgba(103,34,160,0.16)]"
            />
          </motion.div>

          {/* Sparkles */}
          <CinemaSparkle className="top-20 left-[20%]" color="#F59E0B" size={16} />
          <CinemaSparkle className="top-[50%] right-[18%]" color="#B78BE5" size={18} style={{ animationDelay: '1.4s' }} />
          <CinemaSparkle className="bottom-28 left-[35%]" color="#F59E0B" size={15} style={{ animationDelay: '2.5s' }} />
        </div>
      );

    /* =========================================================================
       3. MOVIE DETAILS (/movie/:movieId)
       ========================================================================= */
    case 'movie-details':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% -10%, rgba(103, 34, 160, 0.25) 0%, rgba(245, 240, 252, 0.85) 45%, transparent 70%)')}

          {/* Atmospheric Cinematic Flares */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6722A0]/20 via-[#B78BE5]/15 to-transparent blur-[140px]" />
          <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#A9B8F4]/20 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[-10%] left-[5%] w-[520px] h-[520px] bg-gradient-to-tr from-[#F3D9ED]/25 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D Chrome & Amethyst Film Reel (Left) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-28 -left-12 lg:left-4 z-0">
            <img
              src={filmReel}
              alt="3D Cinema Film Reel"
              className="w-44 sm:w-56 lg:w-72 animate-film-reel drop-shadow-[0_25px_40px_rgba(103,34,160,0.22)]"
            />
          </motion.div>

          {/* 3D Cinema Director Clapperboard (Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-36 -right-10 lg:right-6 z-0">
            <img
              src={clapperboard}
              alt="3D Director Clapperboard"
              className="w-44 sm:w-52 lg:w-68 animate-clapperboard drop-shadow-[0_24px_38px_rgba(50,16,68,0.22)]"
            />
          </motion.div>

          {/* 3D VIP Admission Tickets (Mid-Right) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[52%] right-8 lg:right-20 z-0">
            <img
              src={cinemaTickets}
              alt="3D Cinema Tickets"
              className="w-36 lg:w-48 animate-cinema-tickets drop-shadow-[0_20px_35px_rgba(103,34,160,0.24)]"
            />
          </motion.div>

          {/* Floating Popcorn Pieces */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[48%] left-10 lg:left-24 z-0">
            <img
              src={popcornPiece2}
              alt="Popcorn Kernel"
              className="w-13 h-13 lg:w-16 lg:h-16 animate-kernel-2 drop-shadow-[0_10px_18px_rgba(245,158,11,0.26)]"
            />
          </motion.div>

          <motion.div style={{ y: parallaxBackground }} className="absolute bottom-24 right-14 lg:right-32 z-0">
            <img
              src={popcornPiece4}
              alt="Popcorn Kernel"
              className="w-11 h-11 lg:w-14 lg:h-14 animate-kernel-4 drop-shadow-[0_10px_16px_rgba(245,158,11,0.24)]"
            />
          </motion.div>

          {/* Sparkles */}
          <CinemaSparkle className="top-24 left-[24%]" color="#FEF3C7" size={18} />
          <CinemaSparkle className="top-[62%] left-[16%]" color="#F59E0B" size={15} style={{ animationDelay: '1.6s' }} />
        </div>
      );

    /* =========================================================================
       4. SCREEN SELECTION (/booking/screens)
       ========================================================================= */
    case 'screens':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% 0%, rgba(169, 184, 244, 0.45) 0%, transparent 55%)')}

          {/* Projector Beam Lighting Cone */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-b from-[#6722A0]/18 via-[#A9B8F4]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[45%] -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#D8C5F4]/20 to-transparent blur-[110px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#B78BE5]/15 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D Cinema Camera (Left Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-20 -left-12 lg:left-4 z-0">
            <img
              src={cinemaCamera}
              alt="3D Cinema Studio Camera"
              className="w-48 sm:w-60 lg:w-76 animate-cinema-camera drop-shadow-[0_26px_42px_rgba(103,34,160,0.24)]"
            />
          </motion.div>

          {/* 3D Film Reel (Right Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-24 -right-10 lg:right-6 z-0">
            <img
              src={filmReel}
              alt="3D Cinema Film Reel"
              className="w-44 sm:w-56 lg:w-70 animate-film-reel drop-shadow-[0_24px_38px_rgba(103,34,160,0.20)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[45%] left-8 lg:left-20 z-0">
            <img src={popcornPiece1} alt="Popcorn" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[55%] right-10 lg:right-24 z-0">
            <img src={popcornPiece3} alt="Popcorn" className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-3" />
          </motion.div>

          {/* Sparkles */}
          <CinemaSparkle className="top-16 right-[26%]" color="#F59E0B" size={16} />
          <CinemaSparkle className="bottom-20 left-[22%]" color="#B78BE5" size={18} style={{ animationDelay: '1.8s' }} />
        </div>
      );

    /* =========================================================================
       5. SHOWTIME SELECTION (/booking/showtime)
       ========================================================================= */
    case 'showtime':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 20% 15%, rgba(254, 243, 199, 0.4) 0%, transparent 50%)')}

          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B78BE5]/20 via-[#FEF3C7]/20 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[35%] -left-20 w-[520px] h-[520px] bg-gradient-to-tr from-[#A9B8F4]/20 via-[#D8C5F4]/15 to-transparent blur-[110px] animate-float-slow" />

          {/* 3D VIP Cinema Tickets (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -right-8 lg:right-8 z-0">
            <img
              src={cinemaTickets}
              alt="3D Cinema Tickets"
              className="w-40 sm:w-48 lg:w-60 animate-cinema-tickets drop-shadow-[0_22px_36px_rgba(103,34,160,0.24)]"
            />
          </motion.div>

          {/* 3D Popcorn Bucket (Left Margin - Restrained) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-28 -left-16 lg:-left-20 opacity-80 z-0">
            <img
              src={popcornBucket}
              alt="3D Popcorn Bucket"
              className="w-48 lg:w-64 max-w-none animate-popcorn-bucket drop-shadow-[0_24px_38px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[48%] left-10 lg:left-24 z-0">
            <img src={popcornPiece2} alt="Popcorn" className="w-12 h-12 lg:w-15 lg:h-15 animate-kernel-2" />
          </motion.div>
          <motion.div style={{ y: parallaxMidground }} className="absolute bottom-28 right-12 lg:right-28 z-0">
            <img src={popcornPiece4} alt="Popcorn" className="w-10 h-10 lg:w-14 lg:h-14 animate-kernel-4" />
          </motion.div>

          {/* Sparkles */}
          <CinemaSparkle className="top-24 left-[20%]" color="#F59E0B" size={16} />
          <CinemaSparkle className="top-[60%] right-[18%]" color="#FEF3C7" size={18} style={{ animationDelay: '1.3s' }} />
        </div>
      );

    /* =========================================================================
       6. TICKET CATEGORY (/booking/tickets)
       ========================================================================= */
    case 'tickets':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% 12%, rgba(253, 230, 138, 0.35) 0%, transparent 55%)')}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#F59E0B]/15 via-[#6722A0]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#B78BE5]/20 via-[#FEF3C7]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 -left-20 w-[520px] h-[520px] bg-gradient-to-tr from-[#321044]/15 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D VIP Admission Tickets (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-12 -right-8 lg:right-6 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Cinema Tickets"
              className="w-44 sm:w-54 lg:w-68 animate-cinema-tickets drop-shadow-[0_24px_40px_rgba(245,158,11,0.3)]"
            />
          </motion.div>

          {/* 3D Gourmet Fries (Left Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-24 -left-10 lg:left-4 opacity-85 z-0">
            <img
              src={frenchFries}
              alt="3D French Fries"
              className="w-40 sm:w-48 lg:w-60 animate-french-fries drop-shadow-[0_22px_36px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[42%] left-12 lg:left-28 z-0">
            <img src={popcornPiece1} alt="Popcorn" className="w-13 h-13 lg:w-16 lg:h-16 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[52%] right-14 lg:right-32 z-0">
            <img src={popcornPiece3} alt="Popcorn" className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-3" />
          </motion.div>

          {/* Sparkles */}
          <CinemaSparkle className="top-14 left-[22%]" color="#F59E0B" size={20} />
          <CinemaSparkle className="top-[45%] right-[24%]" color="#FEF3C7" size={16} style={{ animationDelay: '1.2s' }} />
        </div>
      );

    /* =========================================================================
       7. SEAT SELECTION (/booking/seats) - Restrained to preserve seat grid
       ========================================================================= */
    case 'seats':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% 5%, rgba(103, 34, 160, 0.2) 0%, rgba(245, 240, 252, 0.9) 45%, transparent 70%)')}

          {/* Curved Theater Spotlight Beam */}
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#6722A0]/25 via-[#9B4BC5]/15 to-transparent blur-[130px]" />
          <div className="absolute top-[45%] -left-24 w-[520px] h-[520px] bg-gradient-to-r from-[#22C55E]/10 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#321044]/15 via-[#A9B8F4]/18 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D VIP Tickets (Far Right Margin) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-16 -right-12 lg:-right-6 opacity-75 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Tickets"
              className="w-36 lg:w-48 animate-cinema-tickets drop-shadow-[0_18px_32px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* 3D Soda Cup (Far Left Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-28 -left-12 lg:-left-6 opacity-75 z-0">
            <img
              src={sodaCup}
              alt="Soda Cup"
              className="w-40 lg:w-52 animate-soda-cup drop-shadow-[0_20px_34px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Popcorn Kernels (Margins Only) */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[60%] left-6 lg:left-14 z-0">
            <img src={popcornPiece2} alt="Popcorn" className="w-10 h-10 lg:w-14 lg:h-14 animate-kernel-2" />
          </motion.div>
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[65%] right-6 lg:right-16 z-0">
            <img src={popcornPiece4} alt="Popcorn" className="w-10 h-10 lg:w-14 lg:h-14 animate-kernel-4" />
          </motion.div>
        </div>
      );

    /* =========================================================================
       8. CHECKOUT & CONFIRMATION (/booking/checkout, /booking/confirmation)
       ========================================================================= */
    case 'checkout':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 20% 15%, rgba(214, 229, 255, 0.6) 0%, transparent 50%)')}

          <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#A9B8F4]/20 via-[#B78BE5]/15 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#F3D9ED]/25 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-slow" />

          {/* 3D VIP Tickets (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -right-8 lg:right-10 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Admission Tickets"
              className="w-40 sm:w-48 lg:w-60 animate-cinema-tickets drop-shadow-[0_22px_36px_rgba(103,34,160,0.24)]"
            />
          </motion.div>

          {/* 3D Soda Cup (Bottom-Left Margin) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute bottom-16 -left-10 lg:left-6 opacity-80 z-0">
            <img
              src={sodaCup}
              alt="Cinema Soda Cup"
              className="w-40 lg:w-56 animate-soda-cup drop-shadow-[0_22px_36px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[40%] left-8 lg:left-20 z-0">
            <img src={popcornPiece1} alt="Popcorn" className="w-12 h-12 lg:w-15 lg:h-15 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[50%] right-10 lg:right-24 z-0">
            <img src={popcornPiece3} alt="Popcorn" className="w-11 h-11 lg:w-14 lg:h-14 animate-kernel-3" />
          </motion.div>

          <CinemaSparkle className="top-16 left-[20%]" color="#F59E0B" size={16} />
          <CinemaSparkle className="bottom-24 right-[25%]" color="#B78BE5" size={18} style={{ animationDelay: '1.5s' }} />
        </div>
      );

    /* =========================================================================
       9. PRIVATE EVENTS & CELEBRATIONS (/events, /events/*)
       ========================================================================= */
    case 'events':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 20% 12%, rgba(253, 164, 175, 0.40) 0%, transparent 50%), radial-gradient(circle at 80% 18%, rgba(243, 217, 237, 0.8) 0%, rgba(254, 243, 199, 0.35) 40%, transparent 70%)')}

          {/* Romantic Rose-Violet Ambient Flares */}
          <div className="absolute -top-32 right-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#FDA4AF]/28 via-[#F3D9ED]/28 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[30%] -left-28 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#B78BE5]/22 via-[#FEF3C7]/25 to-transparent blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-[#F43F5E]/18 via-[#D8C5F4]/22 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D Popcorn Bucket with Romantic Ambient Aura (Left Margin) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -left-12 lg:-left-16 z-0">
            <img
              src={popcornBucket}
              alt="3D Popcorn Bucket"
              className="w-52 sm:w-68 lg:w-88 max-w-none animate-popcorn-bucket drop-shadow-[0_28px_45px_rgba(244,63,94,0.22)]"
            />
          </motion.div>

          {/* 3D VIP Admission Tickets (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-12 -right-8 lg:right-8 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Tickets"
              className="w-40 sm:w-50 lg:w-64 animate-cinema-tickets drop-shadow-[0_22px_38px_rgba(244,63,94,0.25)]"
            />
          </motion.div>

          {/* 3D Soda Cup (Mid-Right) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[52%] -right-8 lg:right-10 z-0">
            <img
              src={sodaCup}
              alt="Cinema Soda Cup"
              className="w-44 sm:w-52 lg:w-68 animate-soda-cup drop-shadow-[0_24px_38px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels & Celebration Stars */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-44 left-36 lg:left-56 z-0">
            <img src={popcornPiece1} alt="Popcorn Piece" className="w-13 h-13 lg:w-17 lg:h-17 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[48%] left-10 lg:left-24 z-0">
            <img src={popcornPiece3} alt="Popcorn Piece" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-3" />
          </motion.div>
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[42%] right-44 lg:right-68 z-0">
            <img src={popcornPiece4} alt="Popcorn Piece" className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-4" />
          </motion.div>

          {/* Celebration Sparkles */}
          <CinemaSparkle className="top-14 left-[24%]" color="#F43F5E" size={20} />
          <CinemaSparkle className="top-36 right-[32%]" color="#F59E0B" size={18} style={{ animationDelay: '0.9s' }} />
          <CinemaSparkle className="top-[60%] left-[28%]" color="#FEF3C7" size={16} style={{ animationDelay: '1.8s' }} />
          <CinemaSparkle className="top-[70%] right-[22%]" color="#FDA4AF" size={22} style={{ animationDelay: '2.4s' }} />
        </div>
      );

    /* =========================================================================
       10. BREAK-TIME EVENT SLOTS (/events/slots)
       ========================================================================= */
    case 'event-slots':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 50% 10%, rgba(254, 243, 199, 0.45) 0%, transparent 55%)')}

          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-gradient-to-b from-[#F59E0B]/18 via-[#B78BE5]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[40%] -left-20 w-[520px] h-[520px] bg-gradient-to-r from-[#FEF3C7]/25 to-transparent blur-[110px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#FDA4AF]/20 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D Popcorn Bucket (Left) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -left-12 lg:-left-16 z-0">
            <img
              src={popcornBucket}
              alt="3D Popcorn Bucket"
              className="w-52 sm:w-64 lg:w-80 max-w-none animate-popcorn-bucket drop-shadow-[0_26px_42px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          {/* 3D Clapperboard (Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-20 -right-8 lg:right-6 z-0">
            <img
              src={clapperboard}
              alt="3D Clapperboard"
              className="w-44 sm:w-52 lg:w-66 animate-clapperboard drop-shadow-[0_22px_36px_rgba(50,16,68,0.22)]"
            />
          </motion.div>

          {/* Floating Popcorn Pieces */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[45%] left-10 lg:left-24 z-0">
            <img src={popcornPiece2} alt="Popcorn" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-2" />
          </motion.div>
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[52%] right-12 lg:right-28 z-0">
            <img src={popcornPiece4} alt="Popcorn" className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-4" />
          </motion.div>

          <CinemaSparkle className="top-18 left-[22%]" color="#F59E0B" size={18} />
          <CinemaSparkle className="top-[55%] right-[20%]" color="#FEF3C7" size={16} style={{ animationDelay: '1.4s' }} />
        </div>
      );

    /* =========================================================================
       11. DASHBOARD & MY BOOKINGS (/dashboard, /my-bookings)
       ========================================================================= */
    case 'dashboard':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 20% 15%, rgba(237, 230, 250, 0.95) 0%, transparent 55%)')}

          <div className="absolute -top-24 left-1/3 w-[650px] h-[650px] bg-gradient-to-br from-[#6722A0]/15 via-[#A9B8F4]/15 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[580px] h-[580px] bg-gradient-to-tl from-[#D8C5F4]/20 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-slow" />

          {/* 3D VIP Admission Tickets (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-14 -right-6 lg:right-10 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Admission Tickets"
              className="w-42 sm:w-50 lg:w-64 animate-cinema-tickets drop-shadow-[0_24px_38px_rgba(103,34,160,0.25)]"
            />
          </motion.div>

          {/* 3D Chrome Film Reel (Bottom-Left Margin) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute bottom-12 -left-10 lg:left-6 opacity-75 z-0">
            <img
              src={filmReel}
              alt="3D Film Reel"
              className="w-40 sm:w-50 lg:w-64 animate-film-reel drop-shadow-[0_22px_36px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[38%] left-8 lg:left-20 z-0">
            <img src={popcornPiece1} alt="Popcorn" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[55%] right-8 lg:right-22 z-0">
            <img src={popcornPiece3} alt="Popcorn" className="w-11 h-11 lg:w-14 lg:h-14 animate-kernel-3" />
          </motion.div>

          <CinemaSparkle className="top-16 left-[25%]" color="#F59E0B" size={16} />
          <CinemaSparkle className="bottom-20 right-[25%]" color="#B78BE5" size={18} style={{ animationDelay: '1.7s' }} />
        </div>
      );

    /* =========================================================================
       12. OFFERS & PROMOTIONS (/offers)
       ========================================================================= */
    case 'offers':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 15% 15%, rgba(254, 243, 199, 0.45) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(253, 164, 175, 0.35) 0%, transparent 55%)')}

          <div className="absolute -top-24 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#F59E0B]/18 via-[#FDA4AF]/20 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute bottom-[5%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-[#6722A0]/15 via-[#FEF3C7]/20 to-transparent blur-[120px] animate-float-slow" />

          {/* 3D Popcorn Bucket (Left) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-16 -left-12 lg:-left-16 z-0">
            <img
              src={popcornBucket}
              alt="3D Popcorn Bucket"
              className="w-52 sm:w-64 lg:w-84 max-w-none animate-popcorn-bucket drop-shadow-[0_26px_42px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          {/* 3D Gourmet French Fries (Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-20 -right-8 lg:right-8 z-0">
            <img
              src={frenchFries}
              alt="3D French Fries"
              className="w-44 sm:w-52 lg:w-66 animate-french-fries drop-shadow-[0_24px_38px_rgba(103,34,160,0.2)]"
            />
          </motion.div>

          {/* Floating VIP Tickets (Bottom-Right) */}
          <motion.div style={{ y: parallaxMidground }} className="absolute bottom-20 right-6 lg:right-16 z-0">
            <img
              src={cinemaTickets}
              alt="VIP Tickets"
              className="w-38 lg:w-52 animate-cinema-tickets drop-shadow-[0_20px_35px_rgba(245,158,11,0.25)]"
            />
          </motion.div>

          {/* Popcorn Kernels */}
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[48%] left-10 lg:left-24 z-0">
            <img src={popcornPiece2} alt="Popcorn" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-2" />
          </motion.div>

          <CinemaSparkle className="top-14 left-[24%]" color="#F59E0B" size={20} />
          <CinemaSparkle className="top-[60%] right-[22%]" color="#FEF3C7" size={16} style={{ animationDelay: '1.2s' }} />
        </div>
      );

    /* =========================================================================
       13. ABOUT & CONTACT (/about, /contact, default)
       ========================================================================= */
    case 'info':
    default:
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {renderBaseMesh('radial-gradient(circle at 20% 15%, rgba(237, 230, 250, 0.95) 0%, transparent 50%)')}

          <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B78BE5]/20 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#F3D9ED]/25 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />

          {/* 3D Cinema Camera (Top-Left) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-20 -left-10 lg:left-6 z-0">
            <img
              src={cinemaCamera}
              alt="3D Cinema Studio Camera"
              className="w-48 sm:w-58 lg:w-74 animate-cinema-camera drop-shadow-[0_26px_42px_rgba(103,34,160,0.22)]"
            />
          </motion.div>

          {/* 3D Clapperboard (Top-Right) */}
          <motion.div style={{ y: parallaxForeground }} className="absolute top-24 -right-8 lg:right-8 z-0">
            <img
              src={clapperboard}
              alt="3D Clapperboard"
              className="w-44 sm:w-52 lg:w-66 animate-clapperboard drop-shadow-[0_22px_36px_rgba(50,16,68,0.22)]"
            />
          </motion.div>

          {/* Floating Popcorn Kernels */}
          <motion.div style={{ y: parallaxMidground }} className="absolute top-[48%] left-10 lg:left-24 z-0">
            <img src={popcornPiece1} alt="Popcorn" className="w-12 h-12 lg:w-16 lg:h-16 animate-kernel-1" />
          </motion.div>
          <motion.div style={{ y: parallaxBackground }} className="absolute top-[52%] right-10 lg:right-26 z-0">
            <img src={popcornPiece3} alt="Popcorn" className="w-11 h-11 lg:w-15 lg:h-15 animate-kernel-3" />
          </motion.div>

          <CinemaSparkle className="top-18 left-[22%]" color="#F59E0B" size={18} />
          <CinemaSparkle className="top-[55%] right-[20%]" color="#B78BE5" size={16} style={{ animationDelay: '1.5s' }} />
        </div>
      );
  }
};

export default PageBackground;
