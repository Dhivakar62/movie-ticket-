import posterKalki from '../assets/images/movie_kalki_poster.jpg';
import bannerKalki from '../assets/images/movie_kalki_banner.jpg';
import posterThangalaan from '../assets/images/movie_thangalaan_poster.jpg';
import bannerThangalaan from '../assets/images/movie_thangalaan_banner.jpg';
import posterPushpa2 from '../assets/images/movie_pushpa2_poster.jpg';
import bannerPushpa2 from '../assets/images/movie_pushpa2_banner.jpg';
import posterDeadpool from '../assets/images/movie_deadpool_poster.jpg';
import bannerDeadpool from '../assets/images/movie_deadpool_banner.jpg';
import posterInsideOut2 from '../assets/images/movie_insideout2_poster.jpg';
import bannerInsideOut2 from '../assets/images/movie_insideout2_banner.jpg';
import posterGladiator2 from '../assets/images/movie_gladiator2_poster.jpg';

export const MOVIES_DATA = [
  {
    id: 'kalki-2898-ad',
    title: 'Kalki 2898 AD',
    language: 'Telugu',
    genre: 'Sci-Fi',
    rating: 8.6,
    votes: '190K+',
    duration: '3h 10m',
    certificate: 'UA',
    releaseDate: '27 June 2024',
    banner: bannerKalki,
    poster: posterKalki,
    categories: ['now-showing', 'popular', 'recommended'],
    screens: ['Screen 1 (IMAX 4K Laser)', 'Screen 2 (Dolby Atmos Luxe)'],
    showtimes: ['10:00 AM', '01:45 PM', '05:30 PM', '07:00 PM', '09:15 PM'],
    synopsis: 'A futuristic saga of hope, humanity and a legendary battle for truth. Set in the dystopian city of Kasi in 2898 AD, the story follows Supreme Yaskin’s empire, the bounty hunter Bhairava, and the mythical warrior Ashwatthama who protects a divine child prophesied to restore order.',
    director: 'Nag Ashwin',
    music: 'Santhosh Narayanan',
    cast: [
      { name: 'Prabhas', role: 'Bhairava', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Deepika Padukone', role: 'SUM-80', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Amitabh Bachchan', role: 'Ashwatthama', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Kamal Haasan', role: 'Supreme Yaskin', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: [
      { user: 'Vikram R.', rating: 9, comment: 'Visual spectacle on par with Hollywood! Prabhas and Amitabh Bachchan bring an unforgettable mythological sci-fi experience.', date: 'Yesterday' },
      { user: 'Sneha M.', rating: 9, comment: 'The world-building and climax fight sequence are mind-blowing on the IMAX screen.', date: '2 days ago' },
    ]
  },
  {
    id: 'thangalaan',
    title: 'Thangalaan',
    language: 'Tamil',
    genre: 'Action',
    rating: 8.5,
    votes: '120K+',
    duration: '2h 45m',
    certificate: 'UA',
    releaseDate: '15 August 2024',
    banner: bannerThangalaan,
    poster: posterThangalaan,
    categories: ['now-showing', 'trending'],
    screens: ['Screen 1 (IMAX 4K Laser)', 'Screen 3 (Gold Class)'],
    showtimes: ['10:30 AM', '02:15 PM', '06:30 PM', '10:00 PM'],
    synopsis: 'A historical action adventure exploring the mystical lore and gritty struggle of workers in the Kolar Gold Fields under British colonial rule, guided by spiritual forces and ancient guardians.',
    director: 'Pa. Ranjith',
    music: 'GV Prakash Kumar',
    cast: [
      { name: 'Chiyaan Vikram', role: 'Thangalaan', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Malavika Mohanan', role: 'Aarathi', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Parvathy Thiruvothu', role: 'Gangamma', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: [
      { user: 'Karthik N.', rating: 8.5, comment: 'Vikram gives a career-defining performance. The cinematic atmosphere is raw and captivating.', date: '3 days ago' },
    ]
  },
  {
    id: 'pushpa-2',
    title: 'Pushpa 2: The Rule',
    language: 'Telugu',
    genre: 'Action',
    rating: 8.7,
    votes: '250K+',
    duration: '3h 20m',
    certificate: 'UA',
    releaseDate: '5 December 2024',
    banner: bannerPushpa2,
    poster: posterPushpa2,
    categories: ['now-showing', 'trending', 'popular'],
    screens: ['Screen 1 (IMAX 4K Laser)', 'Screen 2 (Dolby Atmos Luxe)'],
    showtimes: ['11:00 AM', '03:30 PM', '07:15 PM', '10:45 PM'],
    synopsis: 'Pushpa Raj asserts his empire amidst intense clashes with law enforcement led by SP Bhanwar Singh Shekhawat and rival syndicates in this high-octane mass cinematic saga.',
    director: 'Sukumar',
    music: 'Devi Sri Prasad',
    cast: [
      { name: 'Allu Arjun', role: 'Pushpa Raj', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Rashmika Mandanna', role: 'Srivalli', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
      { name: 'Fahadh Faasil', role: 'Bhanwar Singh Shekhawat', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: [
      { user: 'Arun K.', rating: 9, comment: 'The swagger, background score, and dialogue delivery are electrifying in the theater!', date: 'Yesterday' },
    ]
  },
  {
    id: 'deadpool-wolverine',
    title: 'Deadpool & Wolverine',
    language: 'English',
    genre: 'Action',
    rating: 8.3,
    votes: '140K+',
    duration: '2h 08m',
    certificate: 'A',
    releaseDate: '26 July 2024',
    banner: bannerDeadpool,
    poster: posterDeadpool,
    categories: ['now-showing', 'trending', 'popular'],
    screens: ['Screen 1 (IMAX 4K Laser)', 'Screen 3 (Gold Class)'],
    showtimes: ['12:15 PM', '04:00 PM', '08:00 PM', '11:15 PM'],
    synopsis: 'The Merc with a Mouth teams up with an emotionally weathered Wolverine in a chaotic journey across the multiverse to save his timeline from bureaucratic erasure.',
    director: 'Shawn Levy',
    music: 'Rob Simonsen',
    cast: [
      { name: 'Ryan Reynolds', role: 'Wade Wilson / Deadpool', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Hugh Jackman', role: 'Logan / Wolverine', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: [
      { user: 'John D.', rating: 8.5, comment: 'Laugh out loud comedy, incredible cameos, and brutal action sequences. Must watch on IMAX!', date: '4 days ago' },
    ]
  },
  {
    id: 'inside-out-2',
    title: 'Inside Out 2',
    language: 'English',
    genre: 'Animation',
    rating: 8.3,
    votes: '140K+',
    duration: '1h 36m',
    certificate: 'U',
    releaseDate: '14 June 2024',
    banner: bannerInsideOut2,
    poster: posterInsideOut2,
    categories: ['now-showing', 'recommended'],
    screens: ['Screen 4 (Executive Suites)', 'Screen 2 (Dolby Atmos Luxe)'],
    showtimes: ['10:15 AM', '01:00 PM', '04:30 PM', '07:00 PM'],
    synopsis: 'Joy, Sadness, Anger, Fear, and Disgust welcome unexpected new teenage emotions including Anxiety, Envy, Ennui, and Embarrassment inside teenage Riley’s mind.',
    director: 'Kelsey Mann',
    music: 'Andrea Datzman',
    cast: [
      { name: 'Amy Poehler', role: 'Joy (voice)', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
      { name: 'Maya Hawke', role: 'Anxiety (voice)', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: [
      { user: 'Pooja T.', rating: 9, comment: 'Heartfelt, emotional, and so relatable. Kids and adults will both love it.', date: '1 week ago' },
    ]
  },
  {
    id: 'gladiator-2',
    title: 'Gladiator II',
    language: 'English',
    genre: 'Action',
    rating: 8.4,
    votes: '95K+',
    duration: '2h 28m',
    certificate: 'A',
    releaseDate: '15 November 2024',
    banner: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&h=650&q=80',
    poster: posterGladiator2,
    categories: ['coming-soon', 'trending'],
    screens: ['Screen 1 (IMAX 4K Laser)'],
    showtimes: ['Coming Soon Nov 2024'],
    synopsis: 'Years after witnessing the death of Maximus, Lucius enters the Colosseum after his home is conquered by tyrannical emperors who rule Rome with an iron fist.',
    director: 'Ridley Scott',
    music: 'Harry Gregson-Williams',
    cast: [
      { name: 'Paul Mescal', role: 'Lucius', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Pedro Pascal', role: 'Marcus Acacius', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Denzel Washington', role: 'Macrinus', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
    ],
    reviews: []
  },
];
