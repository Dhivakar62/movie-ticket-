import eventProposal from '../assets/images/event_proposal.png';
import eventBirthday from '../assets/images/event_birthday.png';
import eventAnniversary from '../assets/images/event_anniversary.png';
import eventHeroCouple from '../assets/images/event_hero_couple.png';

export const PRIVATE_EVENT_TYPES = [
  {
    id: "proposal",
    name: "Proposal Celebration",
    tagline: "A Grand 'Yes' on the Giant 4K Screen",
    description: "Create an unforgettable milestone with a personalized romantic video projection on the theatre screen, red carpet aisle with candlelight, flower bouquets, and private intimacy.",
    image: eventProposal,
    recommendedPackage: "gold",
    badge: "Most Romantic"
  },
  {
    id: "birthday",
    name: "Birthday Celebration",
    tagline: "Grand Birthday Bash with Cinema Magic",
    description: "Celebrate birthdays with your chosen blockbuster or connect your gaming console to the 70ft screen! Includes custom birthday slide, cake cutting ceremony, and party music.",
    image: eventBirthday,
    recommendedPackage: "silver",
    badge: "Popular"
  },
  {
    id: "anniversary",
    name: "Anniversary Celebrations",
    tagline: "Celebrate Your Eternal Love Story",
    description: "Relive your memories with a custom photo and video reel on the big screen, surrounded by warm ambient candlelight, plush VIP recliner seating, and bespoke dining.",
    image: eventAnniversary,
    recommendedPackage: "platinum",
    badge: "Exclusive"
  },
  {
    id: "vip-private",
    name: "Special Private Screenings",
    tagline: "Exclusive VIP Theatre Buyout for Family & Friends",
    description: "Host private family screenings, celebrity premieres, corporate appreciation nights, or high-stakes esports tournaments in an acoustically tuned luxury auditorium.",
    image: eventHeroCouple,
    recommendedPackage: "platinum",
    badge: "VIP Luxe"
  }
];

export const EVENT_PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    subtitle: "Intimate Cinema Celebration",
    price: 15000,
    priceFormatted: "₹15,000",
    guestLimit: "Up to 15 Guests",
    duration: "2 Hours Private Slot",
    features: [
      "Exclusive Auditorium Booking (2 Hours)",
      "Screen Your Own Video / Photos (1080p)",
      "Standard Surround Sound System",
      "Welcome Mocktails for all guests",
      "Standard Birthday / Event Digital Poster",
      "Dedicated Event Coordinator"
    ],
    highlighted: false
  },
  {
    id: "gold",
    name: "Gold Package",
    subtitle: "Signature Luxe Celebration",
    price: 25000,
    priceFormatted: "₹25,000",
    guestLimit: "Up to 30 Guests",
    duration: "3 Hours Private Slot",
    features: [
      "Complete Multiplex Screen Buyout (3 Hours)",
      "4K Laser Projection + Dolby Atmos 7.1",
      "Custom Cinematic Video Montage Editing",
      "Red Carpet VIP Entry with Velvet Stanchions",
      "Gourmet Snack & Beverage Box for all guests",
      "Artisan Celebration Cake (1.5 kg)",
      "Party Confetti Cannon Moment"
    ],
    highlighted: true
  },
  {
    id: "platinum",
    name: "Platinum Package",
    subtitle: "Ultra-Royal Red Carpet Experience",
    price: 45000,
    priceFormatted: "₹45,000",
    guestLimit: "Up to 60 Guests",
    duration: "4 Hours Private Slot",
    features: [
      "Entire Premium Auditorium Buyout (4 Hours)",
      "IMAX Experience / Laser 4K Atmos Audio",
      "Dedicated Private Butler & Concierge",
      "Professional Cinema Photographer & Videographer",
      "Full Multi-Course Gourmet Buffet & Mocktail Bar",
      "Fresh Rose & Candlelight Floor Ambience",
      "Custom Screen Lighting & Laser Effects",
      "Commemorative Framed Golden Ticket"
    ],
    highlighted: false
  }
];

/**
 * Strict Cinema Schedule & Event Break Slots
 * Rule: Private events can ONLY be booked during designated breaks between movie shows.
 * Active movie shows are clearly disabled and marked as "Show In Progress".
 */
export const CINEMA_SCHEDULE_SLOTS = [
  {
    id: "slot-01",
    timeRange: "08:30 AM - 10:00 AM",
    type: "event_break",
    isAvailableForEvent: true,
    label: "Morning VIP Break Slot",
    note: "Between cinema opening & first movie shows"
  },
  {
    id: "slot-02",
    timeRange: "10:15 AM - 01:15 PM",
    type: "active_movie_show",
    isAvailableForEvent: false,
    label: "Morning Blockbuster Show",
    note: "Dune: Part Two (Active Movie - Hall Occupied)"
  },
  {
    id: "slot-03",
    timeRange: "01:30 PM - 03:00 PM",
    type: "event_break",
    isAvailableForEvent: true,
    label: "Afternoon Intermission Break Slot",
    note: "Designated cleaning & private celebration window"
  },
  {
    id: "slot-04",
    timeRange: "03:15 PM - 06:15 PM",
    type: "active_movie_show",
    isAvailableForEvent: false,
    label: "Matinee Blockbuster Show",
    note: "Gladiator II (Active Movie - Hall Occupied)"
  },
  {
    id: "slot-05",
    timeRange: "06:30 PM - 08:00 PM",
    type: "event_break",
    isAvailableForEvent: true,
    label: "Twilight Prime Break Slot",
    note: "Designated private celebration & proposal window"
  },
  {
    id: "slot-06",
    timeRange: "08:15 PM - 11:15 PM",
    type: "active_movie_show",
    isAvailableForEvent: false,
    label: "Prime Night Blockbuster Show",
    note: "Oppenheimer (Active Movie - Hall Occupied)"
  },
  {
    id: "slot-07",
    timeRange: "11:30 PM - 02:00 AM",
    type: "event_break",
    isAvailableForEvent: true,
    label: "Late-Night Royal Midnight Slot",
    note: "Exclusive after-hours private cinema booking"
  }
];

export const EVENT_ADDONS = [
  {
    id: "addon-video",
    name: "Custom 4K Video Editing & Intro Slide",
    price: 3500,
    desc: "Our editing team creates a 3-minute cinematic video from your photos/videos with soundtrack"
  },
  {
    id: "addon-photo",
    name: "Professional Cinema Photographer",
    price: 5000,
    desc: "Dedicated event photographer with 50+ high-res edited photos delivered within 24 hours"
  },
  {
    id: "addon-flowers",
    name: "Fresh Exotic Flower & Candle Decor",
    price: 4500,
    desc: "Aisle flower petals, scented floating candles, and stage flower arch for breathtaking ambiance"
  },
  {
    id: "addon-cake",
    name: "Artisan Belgian Chocolate Truffle Cake (2kg)",
    price: 2200,
    desc: "Luxury fondant cake with sparkler candles and personalized gold inscription"
  },
  {
    id: "addon-catering",
    name: "VIP Gourmet Finger Food & Mocktail Bar",
    price: 6500,
    desc: "Assorted hot appetizers, gourmet sliders, artisanal mocktails, and cinema treats"
  }
];
