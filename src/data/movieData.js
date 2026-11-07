import posterScreen01 from '../assets/images/poster_screen_01.png';
import posterScreen02 from '../assets/images/poster_screen_02.png';
import posterScreen03 from '../assets/images/poster_screen_03.png';
import posterScreen04 from '../assets/images/poster_screen_04.png';
import posterScreen05 from '../assets/images/poster_screen_05.png';
import posterScreen06 from '../assets/images/poster_screen_06.png';
import posterScreen07 from '../assets/images/poster_screen_07.png';
import posterScreen08 from '../assets/images/poster_screen_08.png';
import posterScreen09 from '../assets/images/poster_screen_09.png';

import movieNow1 from '../assets/images/movie_now_1.png';
import movieNow2 from '../assets/images/movie_now_2.png';
import movieNow3 from '../assets/images/movie_now_3.png';
import movieNow4 from '../assets/images/movie_now_4.png';

import moviePop1 from '../assets/images/movie_pop_1.png';
import moviePop2 from '../assets/images/movie_pop_2.png';
import moviePop3 from '../assets/images/movie_pop_3.png';
import moviePop4 from '../assets/images/movie_pop_4.png';

import movieSoon1 from '../assets/images/movie_soon_1.png';
import movieSoon2 from '../assets/images/movie_soon_2.png';
import movieSoon3 from '../assets/images/movie_soon_3.png';

export const MULTIPLEX_SCREENS = [
  {
    id: "screen-01",
    screenNumber: "Screen 01",
    tier: "Premium",
    movieTitle: "Dune: Part Two",
    poster: posterScreen01,
    rating: 4.9,
    format: "IMAX Laser 4K",
    duration: "2h 46m",
    genre: "Sci-Fi / Epic",
    language: "English",
    timings: ["10:15 AM", "01:45 PM", "05:15 PM", "08:45 PM"],
    selectedTiming: "10:15 AM",
    pricing: { silver: 220, gold: 350, platinum: 550 },
    director: "Denis Villeneuve",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },
  {
    id: "screen-02",
    screenNumber: "Screen 02",
    tier: "Gold",
    movieTitle: "Gladiator II",
    poster: posterScreen02,
    rating: 4.8,
    format: "Dolby Atmos 7.1",
    duration: "2h 28m",
    genre: "Action / Drama",
    language: "English",
    timings: ["11:00 AM", "02:30 PM", "06:00 PM", "09:30 PM"],
    selectedTiming: "11:00 AM",
    pricing: { silver: 200, gold: 320, platinum: 500 },
    director: "Ridley Scott",
    synopsis: "Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum."
  },
  {
    id: "screen-03",
    screenNumber: "Screen 03",
    tier: "Platinum",
    movieTitle: "Interstellar",
    poster: posterScreen03,
    rating: 4.9,
    format: "70mm IMAX Experience",
    duration: "2h 49m",
    genre: "Sci-Fi / Adventure",
    language: "English",
    timings: ["10:30 AM", "02:00 PM", "05:30 PM", "09:00 PM"],
    selectedTiming: "10:30 AM",
    pricing: { silver: 250, gold: 380, platinum: 600 },
    director: "Christopher Nolan",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: "screen-04",
    screenNumber: "Screen 04",
    tier: "Premium",
    movieTitle: "Oppenheimer",
    poster: posterScreen04,
    rating: 4.9,
    format: "Dolby Cinema 4K",
    duration: "3h 00m",
    genre: "Biography / Drama",
    language: "English",
    timings: ["10:00 AM", "01:30 PM", "05:00 PM", "08:30 PM"],
    selectedTiming: "01:30 PM",
    pricing: { silver: 220, gold: 350, platinum: 550 },
    director: "Christopher Nolan",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },
  {
    id: "screen-05",
    screenNumber: "Screen 05",
    tier: "Gold",
    movieTitle: "Avatar: Fire & Ash",
    poster: posterScreen05,
    rating: 4.7,
    format: "RealD 3D HFR",
    duration: "3h 12m",
    genre: "Sci-Fi / Fantasy",
    language: "English",
    timings: ["11:30 AM", "03:15 PM", "07:00 PM", "10:45 PM"],
    selectedTiming: "03:15 PM",
    pricing: { silver: 240, gold: 360, platinum: 580 },
    director: "James Cameron",
    synopsis: "Jake Sully and Neytiri encounter a new, aggressive volcanic clan of Na'vi known as the Ash People."
  },
  {
    id: "screen-06",
    screenNumber: "Screen 06",
    tier: "Platinum",
    movieTitle: "The Dark Knight",
    poster: posterScreen06,
    rating: 5.0,
    format: "IMAX Remastered",
    duration: "2h 32m",
    genre: "Action / Crime",
    language: "English",
    timings: ["12:00 PM", "03:30 PM", "07:00 PM", "10:30 PM"],
    selectedTiming: "07:00 PM",
    pricing: { silver: 250, gold: 380, platinum: 600 },
    director: "Christopher Nolan",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of his greatest tests."
  },
  {
    id: "screen-07",
    screenNumber: "Screen 07",
    tier: "Platinum",
    movieTitle: "Blade Runner 2049",
    poster: posterScreen07,
    rating: 4.8,
    format: "Dolby Atmos 4K",
    duration: "2h 44m",
    genre: "Neo-Noir / Sci-Fi",
    language: "English",
    timings: ["10:45 AM", "02:15 PM", "05:45 PM", "09:15 PM"],
    selectedTiming: "05:45 PM",
    pricing: { silver: 230, gold: 350, platinum: 560 },
    director: "Denis Villeneuve",
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard."
  },
  {
    id: "screen-08",
    screenNumber: "Screen 08",
    tier: "Gold",
    movieTitle: "Cyberpunk: Odyssey",
    poster: posterScreen08,
    rating: 4.6,
    format: "Digital 4K Atmos",
    duration: "2h 18m",
    genre: "Animation / Action",
    language: "English",
    timings: ["11:15 AM", "02:45 PM", "06:15 PM", "09:45 PM"],
    selectedTiming: "06:15 PM",
    pricing: { silver: 200, gold: 320, platinum: 500 },
    director: "Hiroyuki Imaishi",
    synopsis: "A street kid trying to survive in a technology and body modification-obsessed city of the future."
  },
  {
    id: "screen-09",
    screenNumber: "Screen 09",
    tier: "Platinum",
    movieTitle: "Inception: Dream State",
    poster: posterScreen09,
    rating: 4.9,
    format: "Laser Ultra 4K",
    duration: "2h 28m",
    genre: "Sci-Fi / Heist",
    language: "English",
    timings: ["10:15 AM", "01:45 PM", "05:15 PM", "08:45 PM"],
    selectedTiming: "08:45 PM",
    pricing: { silver: 250, gold: 380, platinum: 600 },
    director: "Christopher Nolan",
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
  }
];

export const NOW_SHOWING_MOVIES = [
  {
    id: "movie-01",
    title: "Dune: Part Two",
    poster: movieNow1,
    rating: 4.9,
    genre: "Sci-Fi / Action",
    duration: "166 mins",
    language: "English / IMAX",
    releaseDate: "In Theatres Now",
    screenId: "screen-01"
  },
  {
    id: "movie-02",
    title: "Gladiator II",
    poster: movieNow2,
    rating: 4.8,
    genre: "Action / Historical",
    duration: "148 mins",
    language: "English / Dolby 7.1",
    releaseDate: "In Theatres Now",
    screenId: "screen-02"
  },
  {
    id: "movie-03",
    title: "Interstellar",
    poster: movieNow3,
    rating: 4.9,
    genre: "Sci-Fi / Epic",
    duration: "169 mins",
    language: "English / 70mm",
    releaseDate: "Special Re-Release",
    screenId: "screen-03"
  },
  {
    id: "movie-04",
    title: "Oppenheimer",
    poster: movieNow4,
    rating: 4.9,
    genre: "Drama / Biography",
    duration: "180 mins",
    language: "English / 4K",
    releaseDate: "In Theatres Now",
    screenId: "screen-04"
  }
];

export const POPULAR_MOVIES = [
  {
    id: "movie-05",
    title: "Avatar: Fire & Ash",
    poster: moviePop1,
    rating: 4.7,
    genre: "Fantasy / Adventure",
    duration: "192 mins",
    language: "English / 3D",
    screenId: "screen-05"
  },
  {
    id: "movie-06",
    title: "The Dark Knight",
    poster: moviePop2,
    rating: 5.0,
    genre: "Action / Noir",
    duration: "152 mins",
    language: "English / IMAX",
    screenId: "screen-06"
  },
  {
    id: "movie-07",
    title: "Blade Runner 2049",
    poster: moviePop3,
    rating: 4.8,
    genre: "Sci-Fi / Mystery",
    duration: "164 mins",
    language: "English / Dolby",
    screenId: "screen-07"
  },
  {
    id: "movie-08",
    title: "Inception",
    poster: moviePop4,
    rating: 4.9,
    genre: "Thriller / Sci-Fi",
    duration: "148 mins",
    language: "English / Ultra",
    screenId: "screen-09"
  }
];

export const COMING_SOON_MOVIES = [
  {
    id: "soon-01",
    title: "Avengers: Secret Wars",
    poster: movieSoon1,
    releaseDate: "May 2027",
    genre: "Superhero / Multiverse",
    format: "IMAX 3D Laser"
  },
  {
    id: "soon-02",
    title: "Superman: Legacy",
    poster: movieSoon2,
    releaseDate: "July 2025",
    genre: "Action / Sci-Fi",
    format: "Dolby Vision Atmos"
  },
  {
    id: "soon-03",
    title: "Spider-Man: Beyond The Multiverse",
    poster: movieSoon3,
    releaseDate: "October 2025",
    genre: "Animation / Action",
    format: "4K Laser Experience"
  }
];

export const CONCESSIONS = [
  {
    id: "snack-01",
    name: "Golden Caramel Popcorn (L)",
    category: "Popcorn",
    price: 280,
    desc: "Crispy freshly popped corn coated with imported golden caramel"
  },
  {
    id: "snack-02",
    name: "Truffle Cheese Loaded Nachos",
    category: "Nachos",
    price: 260,
    desc: "Crisp stone-ground corn chips with warm melted artisan cheese & jalapenos"
  },
  {
    id: "snack-03",
    name: "Chilled Coca-Cola Royale (600ml)",
    category: "Beverage",
    price: 140,
    desc: "Served ice-cold with fresh lemon zest and cinema chiller cup"
  },
  {
    id: "snack-04",
    name: "VIP Luxe Combo",
    category: "Combo",
    price: 550,
    desc: "1 Large Caramel Popcorn + 1 Loaded Nachos + 2 Chilled Sodas"
  }
];
