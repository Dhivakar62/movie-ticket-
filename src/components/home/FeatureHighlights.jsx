import React from 'react';
import { Film, Star, Gift } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      id: 'screens',
      icon: Film,
      iconBg: 'bg-[#F4EDFC]/80',
      iconColor: 'text-[#6722A0]',
      title: 'Multiple Screens',
      subtitle: 'Premium Experience',
    },
    {
      id: 'events',
      icon: Star,
      iconBg: 'bg-[#FEF6E8]/80',
      iconColor: 'text-[#EAB308]',
      title: 'Exclusive Events',
      subtitle: 'Celebrate in Style',
    },
    {
      id: 'offers',
      icon: Gift,
      iconBg: 'bg-[#FDF1F7]/80',
      iconColor: 'text-[#EC4899]',
      title: 'Exciting Offers',
      subtitle: 'More Savings',
    },
  ];

  return (
    <section className="relative w-full pt-8 pb-14 overflow-hidden">
      {/* Subtle Ambient Glow Behind Feature Strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-[#9B4BC5]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Unified Translucent Glass Strip */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-[0_8px_30px_rgba(103,34,160,0.04)] px-6 py-5 sm:px-10 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 group cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  {/* Rounded Icon Badge with Glass Edge */}
                  <div
                    className={`w-11 h-11 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center flex-shrink-0 shadow-xs border border-white/90 backdrop-blur-sm transition-transform group-hover:scale-105`}
                  >
                    <Icon className="w-5 h-5 fill-current/20" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-sm text-[#241532] tracking-tight group-hover:text-[#6722A0] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#746A7D] font-normal mt-0.5 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
