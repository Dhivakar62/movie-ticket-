import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, Film, ShieldCheck } from 'lucide-react';

function TwitterXIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#06080c] border-t border-[#1e2330] pt-16 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1a1f2c]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldDark p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0d14] rounded-[7px] flex items-center justify-center">
                  <Crown className="w-4 h-4 text-brand-gold" />
                </div>
              </div>
              <span className="font-serif-luxury text-xl font-bold tracking-[0.2em] text-white">
                LUXE <span className="text-brand-gold text-xs font-sans tracking-widest">CINEMAS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              India's premier ultra-luxury multiplex cinema and private event celebration destination. Immerse yourself in 4K Laser projection, custom acoustics, and bespoke royal hospitality.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-gold/80">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Certified Dolby Atmos & IMAX Partner</span>
            </div>
          </div>

          {/* Home & Navigation */}
          <div>
            <h4 className="font-serif-luxury text-sm font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home Showcase</Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-brand-gold transition-colors">Now Showing Movies</Link>
              </li>
              <li>
                <a href="#screens" className="hover:text-brand-gold transition-colors">Multiplex 9-Screens</a>
              </li>
              <li>
                <Link to="/private-events" className="hover:text-brand-gold transition-colors">Private Events Portal</Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-brand-gold transition-colors">Customer Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Brand Info & Policies */}
          <div>
            <h4 className="font-serif-luxury text-sm font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Brand Info
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">About Luxe Experience</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-brand-gold transition-colors">Sound & Projection Tech</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-gold transition-colors">Booking FAQs & Support</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-brand-gold transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media & VIP Updates */}
          <div>
            <h4 className="font-serif-luxury text-sm font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Social & VIP Club
            </h4>
            <p className="text-xs mb-3 text-gray-400">
              Follow our red carpet events and unlock exclusive early-bird movie ticket premieres.
            </p>
            <div className="flex items-center space-x-3 mb-5">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#161a24] border border-[#262c3e] flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#161a24] border border-[#262c3e] flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#161a24] border border-[#262c3e] flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#161a24] border border-[#262c3e] flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter email for VIP invites..."
                className="w-full bg-[#11141c] border border-[#282f42] rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-brand-gold text-black rounded text-[11px] font-semibold hover:bg-brand-goldLight transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Luxe Cinemas. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            Designed according to Google Stitch Specification • 100% Pixel Faithful
          </p>
        </div>
      </div>
    </footer>
  );
}
