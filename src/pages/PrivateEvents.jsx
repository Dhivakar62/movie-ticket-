import React, { useRef } from 'react';
import EventHero from '../components/events/EventHero';
import EventCard from '../components/events/EventCard';
import EventPackageCard from '../components/events/EventPackageCard';
import EventBookingFlow from '../components/events/EventBookingFlow';
import { PRIVATE_EVENT_TYPES, EVENT_PACKAGES } from '../data/eventData';
import { Sparkles, Crown, Heart, Gift, ShieldAlert } from 'lucide-react';

export default function PrivateEvents() {
  const bookingFlowRef = useRef(null);

  const scrollToBooking = () => {
    bookingFlowRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <EventHero onScrollToBooking={scrollToBooking} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: 4 Event Celebration Types (matching Stitch Screen 5) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Celebrations</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white">
              Private Events <span className="gold-text-gradient">Portal</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Select your celebration style. Every package is completely customized with personal video projection, red carpet aisle, and luxury recliner comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIVATE_EVENT_TYPES.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={scrollToBooking}
              />
            ))}
          </div>
        </section>

        {/* Section 2: 3 Event Packages (Silver, Gold, Platinum) */}
        <section id="packages" className="space-y-8 pt-8 border-t border-[#1c2232]">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Crown className="w-3.5 h-3.5" />
              <span>All-Inclusive Tiers</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white">
              Celebration <span className="gold-text-gradient">Packages</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Transparent pricing with no hidden charges. All packages include exclusive auditorium access and technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT_PACKAGES.map((pkg) => (
              <EventPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* Section 3: Event Booking Flow & Intermission Slot Schedule */}
        <section ref={bookingFlowRef} className="space-y-8 pt-8 border-t border-[#1c2232]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#21283a]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1.5">
                <Crown className="w-3.5 h-3.5" />
                <span>Slot Reservation</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white">
                Reserve Your <span className="gold-text-gradient">Celebration</span>
              </h2>
            </div>

            <div className="bg-[#121622] px-3.5 py-2 rounded-xl border border-brand-gold/30 text-xs text-brand-gold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Private slots hosted only between active film shows</span>
            </div>
          </div>

          <EventBookingFlow />
        </section>

      </div>
    </div>
  );
}
