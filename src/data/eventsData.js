import eventMarryMe from '../assets/images/event_marryme_hd.png';
import thumbProposal from '../assets/images/event_thumb_proposal.png';
import thumbBirthday from '../assets/images/event_thumb_birthday.png';
import thumbAnniversary from '../assets/images/event_thumb_anniversary.png';
import thumbSpecial from '../assets/images/event_thumb_special.png';

export const EVENT_CATEGORIES = [
  {
    id: 'proposal',
    title: 'Proposal Celebration',
    headline: 'Say Yes in Cinematic Style',
    subtitle: 'A fairy-tale romantic setup with rose petal aisles, candlelights, and your question illuminated in lights on the grand multiplex screen.',
    startingPrice: 4999,
    image: thumbProposal,
    heroBanner: eventMarryMe,
    idealFor: 'Couples, surprise proposals, milestone romance',
    features: ['Neon "MARRY ME" Screen Backlight', 'Rose Petal Carpet', 'Romantic Playlist', 'Chilled Sparkling Toast'],
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
    features: ['Personalized Photo/Video Montage', 'Themed Balloons & Lighting', 'Celebration Cake & Poppers', 'Private Hall Gaming & Screening'],
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
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
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
    image: eventMarryMe,
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
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    features: [
      'Private Hall Extended Reservation (Up to 1 hour)',
      'Up to 50 Guests Included (Entire VIP Screen)',
      'Luxury Red Carpet Walkway & Rose Petals / Balloons',
      'Neon Marquee Signage ("MARRY ME" / "HAPPY BIRTHDAY")',
      '2 Kg Custom Designer Cake + Champagne Toast',
      'Professional Photography Coverage (50 edited photos)',
      'Full Banquet Snacks, Popcorn & Gourmet Drink Bar',
      'Surprise Gift Hamper from DreamCine',
    ],
  },
];

// Helper to generate valid Break Time slots from movie screening schedules
export const getBreakTimeSlots = (screenId, date) => {
  // Break slots generated from gaps between movie screenings
  // Example for Screen 1:
  // Screening 1: 10:00 AM - 12:30 PM
  // -> Break 1: 12:30 PM - 01:15 PM (Available)
  // Screening 2: 01:15 PM - 03:45 PM
  // -> Break 2: 03:45 PM - 04:30 PM (Available)
  // Screening 3: 04:30 PM - 07:00 PM
  // -> Break 3: 07:00 PM - 07:45 PM (Booked - as shown in reference)
  
  return [
    {
      id: 'slot-1',
      startTime: '12:30 PM',
      endTime: '01:15 PM',
      duration: '45 mins',
      status: 'available', // available | booked
      label: '12:30 PM - 1:15 PM',
      precedingMovie: 'Kalki 2898 AD (Morning Show)',
      followingMovie: 'Thangalaan (Matinee Show)',
    },
    {
      id: 'slot-2',
      startTime: '03:45 PM',
      endTime: '04:30 PM',
      duration: '45 mins',
      status: 'available',
      label: '3:45 PM - 4:30 PM',
      precedingMovie: 'Thangalaan (Matinee Show)',
      followingMovie: 'Pushpa 2 (Evening Show)',
    },
    {
      id: 'slot-3',
      startTime: '07:00 PM',
      endTime: '07:45 PM',
      duration: '45 mins',
      status: 'booked',
      label: '7:00 PM - 7:45 PM',
      precedingMovie: 'Pushpa 2 (Evening Show)',
      followingMovie: 'Kalki 2898 AD (Night Show)',
    },
  ];
};
