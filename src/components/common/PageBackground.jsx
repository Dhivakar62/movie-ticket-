import React from 'react';

/**
 * PageBackground
 * Provides an individual, highly immersive multi-layer ambient background
 * tailored specifically for each route/page of the DreamCine platform.
 * 
 * Visual Features:
 * - Multi-directional mesh gradient base
 * - Multiple animated ambient lighting fields (float, pulse, drift)
 * - 3D translucent organic glass shapes (spheres, rings, ribbons) with specular highlights
 * - Safe z-index (-10) and pointer-events-none so interactive controls remain perfectly responsive
 */
const PageBackground = ({ variant = 'movies' }) => {
  switch (variant) {
    /* =========================================================================
       1. MOVIES LISTING (/movies)
       Cinematic movie-discovery atmosphere with violet, periwinkle & blue fields
       ========================================================================= */
    case 'movies':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          {/* Base Mesh */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 15% 10%, rgba(245, 240, 252, 0.95) 0%, transparent 55%),
                radial-gradient(circle at 85% 18%, rgba(237, 230, 250, 0.9) 0%, rgba(214, 229, 255, 0.4) 40%, transparent 70%),
                radial-gradient(circle at 50% 65%, rgba(243, 217, 237, 0.4) 0%, transparent 60%),
                radial-gradient(circle at 8% 85%, rgba(214, 229, 255, 0.5) 0%, transparent 50%),
                radial-gradient(circle at 92% 80%, rgba(232, 225, 239, 0.8) 0%, transparent 55%),
                #FAF8FE
              `
            }}
          />

          {/* Ambient Lighting Fields */}
          <div className="absolute -top-24 right-[10%] w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#B78BE5]/22 via-[#A9B8F4]/18 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[35%] -left-32 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#6722A0]/15 via-[#D6E5FF]/20 to-transparent blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[5%] right-[-5%] w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-[#F3D9ED]/30 via-[#D8C5F4]/15 to-transparent blur-[110px] animate-float-reverse" />

          {/* 3D Glass Sphere Top-Right */}
          <div
            className="absolute top-8 right-[5%] w-60 h-60 lg:w-80 lg:h-80 rounded-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 45%, rgba(183, 139, 229, 0.22) 80%, rgba(103, 34, 160, 0.25) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.85)',
              boxShadow: 'inset 0 4px 18px rgba(255, 255, 255, 0.95), inset 0 -10px 25px rgba(103, 34, 160, 0.15), 0 25px 50px -12px rgba(103, 34, 160, 0.12)'
            }}
          >
            <div className="absolute top-5 left-10 w-24 h-12 bg-white/70 rounded-full blur-sm -rotate-30" />
            <div className="absolute top-7 left-14 w-6 h-6 bg-white/95 rounded-full blur-[1px]" />
          </div>

          {/* 3D Glass Film Reel Ring (Mid-Left) */}
          <div
            className="absolute top-[42%] -left-16 w-56 h-56 rounded-full border-[18px] border-white/40 backdrop-blur-md animate-float-reverse"
            style={{
              boxShadow: 'inset 0 0 20px rgba(183, 139, 229, 0.3), 0 20px 40px rgba(103, 34, 160, 0.08)'
            }}
          />
        </div>
      );

    /* =========================================================================
       2. MOVIE DETAILS (/movie/:movieId)
       Cinematic editorial atmosphere with spotlight flare & specular glass
       ========================================================================= */
    case 'movie-details':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% -10%, rgba(103, 34, 160, 0.25) 0%, rgba(245, 240, 252, 0.85) 45%, transparent 70%),
                radial-gradient(circle at 10% 30%, rgba(214, 229, 255, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 90% 45%, rgba(243, 217, 237, 0.6) 0%, transparent 55%),
                radial-gradient(circle at 50% 85%, rgba(237, 230, 250, 0.9) 0%, transparent 60%),
                #FAF8FE
              `
            }}
          />
          {/* Spotlight aura behind movie banner */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6722A0]/20 via-[#B78BE5]/15 to-transparent blur-[140px] pointer-events-none" />
          <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#A9B8F4]/20 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[-10%] left-[5%] w-[520px] h-[520px] bg-gradient-to-tr from-[#F3D9ED]/25 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-reverse" />

          {/* Floating Glass Polygon Refraction */}
          <div
            className="absolute top-28 right-[8%] w-48 h-48 rounded-3xl rotate-12 animate-float-slow"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(216, 197, 244, 0.2) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 20px 40px rgba(103, 34, 160, 0.1)'
            }}
          />
        </div>
      );

    /* =========================================================================
       3. SCREENS SELECTION (/booking/screens)
       Auditorium-inspired lighting with projector beams and geometric louvers
       ========================================================================= */
    case 'screens':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 0%, rgba(169, 184, 244, 0.45) 0%, transparent 55%),
                radial-gradient(circle at 10% 25%, rgba(237, 230, 250, 0.9) 0%, transparent 50%),
                radial-gradient(circle at 90% 30%, rgba(214, 229, 255, 0.6) 0%, transparent 55%),
                radial-gradient(circle at 50% 75%, rgba(245, 240, 252, 0.8) 0%, transparent 60%),
                #FAF8FE
              `
            }}
          />
          {/* Projector beam light cone */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-b from-[#6722A0]/18 via-[#A9B8F4]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[45%] -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#D8C5F4]/20 to-transparent blur-[110px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#B78BE5]/15 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-reverse" />

          {/* Frosted Screen Glass Ring */}
          <div
            className="absolute top-16 left-[6%] w-52 h-52 rounded-full border-[14px] border-white/50 backdrop-blur-lg animate-float-slow"
            style={{
              boxShadow: 'inset 0 0 25px rgba(103, 34, 160, 0.15), 0 20px 45px rgba(103, 34, 160, 0.08)'
            }}
          />
        </div>
      );

    /* =========================================================================
       4. SHOWTIME SELECTION (/booking/showtime)
       Sunset violet and warm golden-lavender gradient flares
       ========================================================================= */
    case 'showtime':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 15%, rgba(254, 243, 199, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(237, 230, 250, 0.95) 0%, transparent 60%),
                radial-gradient(circle at 50% 60%, rgba(245, 240, 252, 0.85) 0%, transparent 65%),
                radial-gradient(circle at 10% 80%, rgba(214, 229, 255, 0.5) 0%, transparent 50%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B78BE5]/20 via-[#FEF3C7]/20 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[35%] -left-20 w-[520px] h-[520px] bg-gradient-to-tr from-[#A9B8F4]/20 via-[#D8C5F4]/15 to-transparent blur-[110px] animate-float-slow" />

          {/* Translucent Time Wheel Glass */}
          <div
            className="absolute top-20 right-[7%] w-64 h-64 rounded-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(254, 243, 199, 0.2) 60%, rgba(183, 139, 229, 0.25) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.85)',
              boxShadow: '0 20px 45px rgba(103, 34, 160, 0.1)'
            }}
          >
            <div className="absolute top-6 left-12 w-20 h-10 bg-white/75 rounded-full blur-sm -rotate-30" />
          </div>
        </div>
      );

    /* =========================================================================
       5. TICKET CATEGORY (/booking/tickets)
       Royal gold shimmer and majestic deep plum ambiance
       ========================================================================= */
    case 'tickets':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 12%, rgba(253, 230, 138, 0.35) 0%, transparent 55%),
                radial-gradient(circle at 85% 25%, rgba(237, 230, 250, 0.9) 0%, transparent 55%),
                radial-gradient(circle at 15% 45%, rgba(214, 229, 255, 0.5) 0%, transparent 50%),
                radial-gradient(circle at 50% 85%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#F59E0B]/15 via-[#6722A0]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#B78BE5]/20 via-[#FEF3C7]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 -left-20 w-[520px] h-[520px] bg-gradient-to-tr from-[#321044]/15 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-reverse" />

          {/* Golden Crown Glass Orb */}
          <div
            className="absolute top-12 right-[6%] w-56 h-56 rounded-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(253, 230, 138, 0.35) 50%, rgba(103, 34, 160, 0.2) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 25px 50px -10px rgba(245, 158, 11, 0.2)'
            }}
          >
            <div className="absolute top-5 left-10 w-24 h-12 bg-white/70 rounded-full blur-sm -rotate-30" />
          </div>
        </div>
      );

    /* =========================================================================
       6. SEAT SELECTION (/booking/seats)
       Curved theater arc screen glow, green availability notes, and cinema depth
       ========================================================================= */
    case 'seats':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 5%, rgba(103, 34, 160, 0.2) 0%, rgba(245, 240, 252, 0.9) 45%, transparent 70%),
                radial-gradient(circle at 10% 35%, rgba(34, 197, 94, 0.12) 0%, transparent 45%),
                radial-gradient(circle at 90% 40%, rgba(169, 184, 244, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 50% 85%, rgba(237, 230, 250, 0.9) 0%, transparent 60%),
                #FAF8FE
              `
            }}
          />
          {/* Intense theater screen spotlight beam */}
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#6722A0]/25 via-[#9B4BC5]/15 to-transparent blur-[130px] pointer-events-none" />
          <div className="absolute top-[45%] -left-24 w-[520px] h-[520px] bg-gradient-to-r from-[#22C55E]/10 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#321044]/15 via-[#A9B8F4]/18 to-transparent blur-[120px] animate-float-reverse" />
        </div>
      );

    /* =========================================================================
       7. CHECKOUT & CONFIRMATION (/booking/checkout, /booking/confirmation)
       Clean pearl-lavender with secure emerald & celebration pastel bursts
       ========================================================================= */
    case 'checkout':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 15%, rgba(214, 229, 255, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(237, 230, 250, 0.9) 0%, transparent 55%),
                radial-gradient(circle at 50% 65%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                radial-gradient(circle at 15% 85%, rgba(243, 217, 237, 0.5) 0%, transparent 50%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#A9B8F4]/20 via-[#B78BE5]/15 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#F3D9ED]/25 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-slow" />

          {/* Secure Shield Glass Element */}
          <div
            className="absolute top-16 right-[8%] w-52 h-52 rounded-3xl rotate-6 animate-float-slow"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(216, 197, 244, 0.25) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 20px 45px rgba(103, 34, 160, 0.08)'
            }}
          />
        </div>
      );

    /* =========================================================================
       8. PRIVATE EVENTS LANDING (/events)
       Romantic celebration atmosphere (pearl white, blush pink, soft rose, champagne)
       ========================================================================= */
    case 'events':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 12%, rgba(253, 164, 175, 0.35) 0%, transparent 50%),
                radial-gradient(circle at 80% 18%, rgba(243, 217, 237, 0.8) 0%, rgba(254, 243, 199, 0.3) 40%, transparent 70%),
                radial-gradient(circle at 50% 55%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                radial-gradient(circle at 10% 85%, rgba(253, 230, 138, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(237, 230, 250, 0.8) 0%, transparent 55%),
                #FAF8FE
              `
            }}
          />
          {/* Romantic Rose-Violet Ambient Flares */}
          <div className="absolute -top-32 right-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#FDA4AF]/25 via-[#F3D9ED]/25 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute top-[30%] -left-28 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#B78BE5]/20 via-[#FEF3C7]/20 to-transparent blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-[#F43F5E]/15 via-[#D8C5F4]/20 to-transparent blur-[120px] animate-float-reverse" />

          {/* 3D Glass Romantic Heart Sphere */}
          <div
            className="absolute top-12 right-[6%] w-64 h-64 lg:w-88 lg:h-88 rounded-full animate-float-slow"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(253, 164, 175, 0.25) 50%, rgba(183, 139, 229, 0.25) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              boxShadow: 'inset 0 4px 20px rgba(255, 255, 255, 0.95), inset 0 -12px 30px rgba(244, 63, 94, 0.15), 0 30px 60px -15px rgba(244, 63, 94, 0.12)'
            }}
          >
            <div className="absolute top-5 left-10 w-28 h-14 bg-white/75 rounded-full blur-sm -rotate-30" />
            <div className="absolute top-8 left-14 w-8 h-8 bg-white/95 rounded-full blur-[1px]" />
          </div>

          {/* Translucent Rose Glass Ribbon (Mid-Left) */}
          <div
            className="absolute top-[45%] -left-16 w-60 h-60 rounded-full border-[20px] border-white/50 backdrop-blur-md animate-float-reverse"
            style={{
              boxShadow: 'inset 0 0 25px rgba(253, 164, 175, 0.35), 0 25px 45px rgba(244, 63, 94, 0.08)'
            }}
          />
        </div>
      );

    /* =========================================================================
       9. BREAK-TIME EVENT SLOTS (/events/slots)
       Playful popcorn amber, cinema lights, and schedule clock glasswork
       ========================================================================= */
    case 'event-slots':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 10%, rgba(254, 243, 199, 0.45) 0%, transparent 55%),
                radial-gradient(circle at 15% 30%, rgba(245, 240, 252, 0.9) 0%, transparent 50%),
                radial-gradient(circle at 85% 35%, rgba(243, 217, 237, 0.6) 0%, transparent 55%),
                radial-gradient(circle at 50% 80%, rgba(237, 230, 250, 0.85) 0%, transparent 60%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-gradient-to-b from-[#F59E0B]/18 via-[#B78BE5]/12 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute top-[40%] -left-20 w-[520px] h-[520px] bg-gradient-to-r from-[#FEF3C7]/25 to-transparent blur-[110px] animate-float-slow" />
          <div className="absolute bottom-0 right-[5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#FDA4AF]/20 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-reverse" />
        </div>
      );

    /* =========================================================================
       10. DASHBOARD & MY BOOKINGS (/dashboard, /my-bookings)
       Executive pearl and lavender atmospheric mesh with ambient metric halos
       ========================================================================= */
    case 'dashboard':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 15%, rgba(237, 230, 250, 0.95) 0%, transparent 55%),
                radial-gradient(circle at 80% 20%, rgba(214, 229, 255, 0.6) 0%, transparent 55%),
                radial-gradient(circle at 50% 65%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                radial-gradient(circle at 10% 85%, rgba(243, 217, 237, 0.5) 0%, transparent 50%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-24 left-1/3 w-[650px] h-[650px] bg-gradient-to-br from-[#6722A0]/15 via-[#A9B8F4]/15 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[580px] h-[580px] bg-gradient-to-tl from-[#D8C5F4]/20 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-float-slow" />

          {/* Floating Metric Halos */}
          <div
            className="absolute top-16 right-[10%] w-52 h-52 rounded-full border-[12px] border-white/50 backdrop-blur-md animate-float-slow"
            style={{
              boxShadow: 'inset 0 0 20px rgba(103, 34, 160, 0.1), 0 20px 40px rgba(103, 34, 160, 0.06)'
            }}
          />
        </div>
      );

    /* =========================================================================
       11. OFFERS & PROMOTIONS (/offers)
       Ruby and gold celebration shimmer over lavender
       ========================================================================= */
    case 'offers':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 15% 15%, rgba(254, 243, 199, 0.45) 0%, transparent 50%),
                radial-gradient(circle at 85% 20%, rgba(253, 164, 175, 0.35) 0%, transparent 55%),
                radial-gradient(circle at 50% 65%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                radial-gradient(circle at 10% 85%, rgba(214, 229, 255, 0.5) 0%, transparent 50%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-24 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#F59E0B]/18 via-[#FDA4AF]/20 to-transparent blur-[130px] animate-pulse-glow" />
          <div className="absolute bottom-[5%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-[#6722A0]/15 via-[#FEF3C7]/20 to-transparent blur-[120px] animate-float-slow" />
        </div>
      );

    /* =========================================================================
       12. ABOUT & CONTACT (/about, /contact)
       Architectural glass, high-tech projection, and luminous horizon
       ========================================================================= */
    case 'info':
    default:
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 15%, rgba(237, 230, 250, 0.95) 0%, transparent 50%),
                radial-gradient(circle at 80% 25%, rgba(214, 229, 255, 0.6) 0%, transparent 55%),
                radial-gradient(circle at 50% 65%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
                radial-gradient(circle at 15% 85%, rgba(243, 217, 237, 0.5) 0%, transparent 50%),
                #FAF8FE
              `
            }}
          />
          <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B78BE5]/20 via-[#D6E5FF]/20 to-transparent blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-[#F3D9ED]/25 via-[#D8C5F4]/15 to-transparent blur-[120px] animate-float-slow" />
        </div>
      );
  }
};

export default PageBackground;
