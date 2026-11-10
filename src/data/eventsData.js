import eventProposalHero from '../assets/images/event_proposal_hero.jpg';
import thumbProposal from '../assets/images/event_proposal_thumb.jpg';
import thumbBirthday from '../assets/images/event_birthday_thumb.jpg';
import thumbAnniversary from '../assets/images/event_anniversary_thumb.jpg';
import thumbSpecial from '../assets/images/event_special_thumb.jpg';

export const EVENT_CATEGORIES = [
  {
    id: 'proposal',
    title: 'Proposal Celebration',
    headline: 'Say Yes in Cinematic Style',
    subtitle: 'A fairy-tale romantic setup with rose petal aisles, candlelights, and your question illuminated in lights on the grand multiplex screen.',
    startingPrice: 4999,
    image: thumbProposal,
    heroBanner: eventProposalHero,
    idealFor: 'Couples, surprise proposals, milestone romance',
    features: ['Illuminated Screen Proposal Message', 'Rose Petal Carpet & Candle Ambience', 'Romantic Playlist of Choice', 'Chilled Sparkling Toast'],
  },
  {
    id: 'birthday',
    title: 'Birthday Celebration',
    headline: 'The Ultimate Big-Screen Birthday Bash',
    subtitle: 'Celebrate your special day surrounded by friends, personalized video montages on the giant screen, gourmet snacks, and birthday cake.',
    startingPrice: 5999,
    image: thumbBirthday,
    heroBanner: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Kids, teens, milestone adult birthdays',
    features: ['Personalized Photo/Video Montage', 'Themed Balloons & Ambient Lighting', 'Celebration Cake & Poppers', 'Private Hall Gaming & Screening'],
  },
  {
    id: 'anniversary',
    title: 'Anniversary Celebration',
    headline: 'Relive Your Love Story on the Big Screen',
    subtitle: 'An intimate private theatre experience celebrating your journey together, complete with memory slideshow, candlelight, and fine treats.',
    startingPrice: 5999,
    image: thumbAnniversary,
    heroBanner: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    idealFor: '1st, 10th, 25th, 50th wedding anniversaries',
    features: ['Couple Love Story Projection', 'Champagne & Chocolate Truffles', 'Acoustic Love Song Ambience', 'Dedicated Service Butler'],
  },
  {
    id: 'special',
    title: 'Special Celebrations',
    headline: 'Bespoke Private Cinema Gatherings',
    subtitle: 'Farewells, family reunions, promotions, corporate milestones, or baby showers hosted in our ultra-luxurious private suites.',
    startingPrice: 3999,
    image: thumbSpecial,
    heroBanner: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Friends reunions, baby announcements, graduations',
    features: ['Custom Visuals & Presentation Support', 'Full Theatre Surround Sound', 'Appetizer & Beverage Combos', 'Flexible Seating Configurations'],
  },
];

export const EVENT_PACKAGES = [
  {
    id: 'silver',
    name: 'Silver Package',
    tagline: 'Classic Private Cinema Experience',
    price: 4999,
    badge: 'Essential Charm',
    image: thumbBirthday,
    features: [
      'Private Hall Reservation (45 mins break slot)',
      'Up to 10 Guests Included',
      'Basic Ambient Stage Lighting',
      'Personalized Screen Message & Photos',
      'Surround Sound Playlist of Your Choice',
      'Complimentary Popcorn Tub for All Guests',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    tagline: 'Premium Celebration with Gourmet Treats',
    price: 9999,
    badge: 'Most Popular',
    popular: true,
    image: eventProposalHero,
    features: [
      'Private Hall Reservation (45 mins break slot)',
      'Up to 25 Guests Included',
      'Enhanced Romantic/Festive Floral & Fairy Light Decor',
      'Full 1080p Video/Slide Projection on the Big Screen',
      '1 Kg Artisan Celebration Cake (Choice of Flavours)',
      'Gourmet Appetizers & Refreshing Mocktails',
      'Dedicated Event Coordinator on Site',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    tagline: 'Ultimate VIP Red-Carpet Extravaganza',
    price: 15999,
    badge: 'Luxury Royalty',
    image: thumbAnniversary,
    features: [
      'Private Hall Extended Reservation (Up to 1 hour)',
      'Up to 50 Guests Included (Entire VIP Screen)',
      'Luxury Red Carpet Walkway & Rose Petals / Balloons',
      'Illuminated Neon Marquee Signage ("MARRY ME" / "HAPPY BIRTHDAY")',
      '2 Kg Custom Multi-Tier Designer Cake',
      '3-Course Chef-Curated Gourmet Bites & Fine Mocktails',
      'Professional Cinema Hall Photography (25 High-Res Photos)',
      'VIP Concierge & Dedicated Butler Service',
    ],
  },
];

/**
 * Break-Time Slot Calculator
 * Private events must strictly occur only in the gap intervals
 * between movie screenings.
 */
export const getBreakTimeSlots = (screenId, date) => {
  return [
    {
      id: 'slot-1',
      timeRange: '12:30 PM - 1:15 PM',
      duration: '45 mins',
      status: 'available',
      screen: 'Screen 1 (IMAX 4K Laser)',
      precedingMovie: 'Kalki 2898 AD (Morning Show ends 12:30 PM)',
      subsequentMovie: 'Thangalaan (Matinee Show starts 01:15 PM)',
    },
    {
      id: 'slot-2',
      timeRange: '3:45 PM - 4:30 PM',
      duration: '45 mins',
      status: 'available',
      screen: 'Screen 1 (IMAX 4K Laser)',
      precedingMovie: 'Thangalaan (Matinee ends 03:45 PM)',
      subsequentMovie: 'Pushpa 2: The Rule (Evening starts 04:30 PM)',
    },
    {
      id: 'slot-3',
      timeRange: '7:00 PM - 7:45 PM',
      duration: '45 mins',
      status: 'booked',
      screen: 'Screen 1 (IMAX 4K Laser)',
      precedingMovie: 'Pushpa 2 (Evening ends 07:00 PM)',
      subsequentMovie: 'Deadpool & Wolverine (Night starts 07:45 PM)',
    },
    {
      id: 'slot-4',
      timeRange: '10:00 PM - 10:45 PM',
      duration: '45 mins',
      status: 'available',
      screen: 'Screen 2 (Dolby Atmos Luxe)',
      precedingMovie: 'Inside Out 2 (Prime ends 10:00 PM)',
      subsequentMovie: 'Late Night Special (starts 10:45 PM)',
    },
  ];
};
