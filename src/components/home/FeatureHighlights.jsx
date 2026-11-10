import React from 'react';
import { Film, Star, Gift } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      id: 'screens',
      icon: Film,
      iconBg: 'bg-[#F4EDFC]/90',
      iconColor: 'text-[#6722A0]',
      title: 'Multiple Screens',
      subtitle: 'Premium Experience',
    },
    {
      id: 'events',
      icon: Star,
      iconBg: 'bg-[#FEF6E8]/90',
      iconColor: 'text-[#EAB308]',
      title: 'Exclusive Events',
      subtitle: 'Celebrate in Style',
    },
    {
      id: 'offers',
      icon: Gift,
      iconBg: 'bg-[#FDF1F7]/90',
      iconColor: 'text-[#EC4899]',
      title: 'Exciting Offers',
      subtitle: 'More Savings',
    },
  ];

  return (
    <section className="relative w-full pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Glass Material B: Layered Transparent Glass Surface */}
        <div 
          className="rounded-3xl px-6 py-5 sm:px-10 sm:py-6 transition-all duration-300 hover:shadow-[0_24px_60px_-15px_rgba(103,34,160,0.14)] relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.74) 0%, rgba(246, 240, 252, 0.58) 50%, rgba(255, 255, 255, 0.7) 100%)',
            backdropFilter: 'blur(24px) saturate(180%)',
            border: '1.5px solid rgba(255, 255, 255, 0.92)',
            boxShadow: `
              inset 0 1.5px 3px rgba(255, 255, 255, 0.95),
              inset 0 -1px 2px rgba(183, 139, 229, 0.08),
              0 20px 50px -15px rgba(103, 34, 160, 0.1)
            `
          }}
        >
          {/* Subtle Top-Edge Specular Glass Glint */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 group cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  {/* Rounded Crystal Icon Badge with Specular Border */}
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center flex-shrink-0 border border-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_6px_16px_rgba(103,34,160,0.08)] backdrop-blur-md transition-all group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(103,34,160,0.15)]`}
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
