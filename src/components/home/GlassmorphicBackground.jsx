import React from 'react';

const GlassmorphicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
      
      {/* =========================================================================
          LAYER 1: BASE MULTI-DIRECTIONAL MESH ATMOSPHERE
          ========================================================================= */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 15%, rgba(250, 245, 255, 0.95) 0%, transparent 50%),
            radial-gradient(circle at 82% 20%, rgba(237, 230, 250, 0.9) 0%, rgba(250, 246, 253, 0.5) 35%, transparent 65%),
            radial-gradient(circle at 50% 55%, rgba(245, 240, 252, 0.85) 0%, transparent 60%),
            radial-gradient(circle at 12% 80%, rgba(234, 239, 255, 0.75) 0%, transparent 50%),
            radial-gradient(circle at 88% 85%, rgba(252, 238, 248, 0.8) 0%, transparent 55%),
            #FAF8FE
          `
        }}
      />

      {/* =========================================================================
          LAYER 2: LARGE AMBIENT LIGHT FIELDS (Smooth studio illumination)
          ========================================================================= */}
      {/* 2A: Upper-Right Radiant Lavender / Orchid Glow */}
      <div className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#B78BE5]/25 via-[#D8C5F4]/20 to-transparent blur-[120px] animate-pulse-glow" />

      {/* 2B: Center-Left Soft Periwinkle & Sky Blue Field */}
      <div className="absolute top-[28%] -left-28 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#A9B8F4]/22 via-[#D6E5FF]/18 to-transparent blur-[130px] animate-float-slow" />

      {/* 2C: Lower-Right Blush-Pink & Soft Violet Field */}
      <div className="absolute bottom-[-10%] right-[10%] w-[560px] h-[560px] rounded-full bg-gradient-to-tl from-[#F3D9ED]/30 via-[#D8C5F4]/18 to-transparent blur-[110px] animate-float-reverse" />

      {/* 2D: Warm Cinematic Peach Horizon Glow Behind Hero Section */}
      <div className="absolute top-[16%] left-[30%] w-[650px] h-[380px] rounded-full bg-gradient-to-t from-[#FFEADB]/28 via-[#FAD9C8]/15 to-transparent blur-[90px]" />

      {/* =========================================================================
          LAYER 3: 3D TRANSLUCENT GLASS OBJECTS & ORGANIC FORMS
          ========================================================================= */}
      
      {/* 3A: Large 3D Glass Sphere (Top Right - Framing Multiplex Horizon) */}
      <div 
        className="absolute top-12 right-[4%] w-72 h-72 lg:w-96 lg:h-96 rounded-full animate-float-slow"
        style={{
          background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.15) 45%, rgba(183, 139, 229, 0.22) 80%, rgba(103, 34, 160, 0.28) 100%)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 255, 255, 0.85)',
          boxShadow: `
            inset 0 4px 20px rgba(255, 255, 255, 0.95),
            inset 0 -12px 30px rgba(103, 34, 160, 0.18),
            0 30px 60px -15px rgba(103, 34, 160, 0.15)
          `
        }}
      >
        {/* Specular Glint Highlight on Sphere Rim */}
        <div className="absolute top-5 left-10 w-28 h-14 bg-white/70 rounded-full blur-sm -rotate-35" />
        <div className="absolute top-8 left-14 w-8 h-8 bg-white/90 rounded-full blur-[1px]" />
      </div>

      {/* 3B: Translucent Organic Glass Ribbon (Top Left / Arching behind headline) */}
      <svg 
        className="absolute -top-16 -left-20 w-[620px] h-[520px] opacity-70 animate-float-reverse"
        viewBox="0 0 620 520" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glassRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#EDE6FA" stopOpacity="0.3" />
            <stop offset="80%" stopColor="#B78BE5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#A9B8F4" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="glassRibbonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D8C5F4" stopOpacity="0.7" />
          </linearGradient>
          <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path 
          d="M -30 80 C 140 -20, 320 60, 420 180 C 510 290, 480 410, 580 480 C 620 510, 680 520, 720 530 L 680 580 C 560 560, 420 480, 340 370 C 260 260, 150 180, -40 220 Z" 
          fill="url(#glassRibbonGrad)"
          stroke="url(#glassRibbonBorder)"
          strokeWidth="1.5"
          filter="url(#ribbonGlow)"
        />
      </svg>

      {/* 3C: Frosted Glass Sphere (Mid-Left / Behind Search Horizon) */}
      <div 
        className="absolute top-[48%] -left-12 w-52 h-52 lg:w-64 lg:h-64 rounded-full animate-float-slow"
        style={{
          background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 45%, rgba(169, 184, 244, 0.2) 80%, rgba(183, 139, 229, 0.25) 100%)',
          backdropFilter: 'blur(14px)',
          border: '1.2px solid rgba(255, 255, 255, 0.8)',
          boxShadow: `
            inset 0 3px 15px rgba(255, 255, 255, 0.9),
            inset 0 -8px 20px rgba(169, 184, 244, 0.15),
            0 20px 45px -10px rgba(169, 184, 244, 0.18)
          `
        }}
      >
        <div className="absolute top-4 left-8 w-16 h-8 bg-white/60 rounded-full blur-xs -rotate-30" />
      </div>

      {/* 3D: Organic Curved Glass Capsule (Bottom Right / Below Features) */}
      <div 
        className="absolute bottom-12 right-[8%] w-64 h-40 rounded-[60px] rotate-12 animate-float-reverse"
        style={{
          background: 'radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.65) 0%, rgba(243, 217, 237, 0.25) 50%, rgba(216, 197, 244, 0.2) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1.2px solid rgba(255, 255, 255, 0.75)',
          boxShadow: `
            inset 0 2px 10px rgba(255, 255, 255, 0.85),
            0 16px 36px -8px rgba(243, 217, 237, 0.25)
          `
        }}
      >
        <div className="absolute top-3 left-6 w-20 h-6 bg-white/60 rounded-full blur-xs -rotate-6" />
      </div>

      {/* =========================================================================
          LAYER 4: FINE SILKY NOISE ATMOSPHERIC TEXTURE
          ========================================================================= */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

    </div>
  );
};

export default GlassmorphicBackground;
