import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF8FE] border-t border-[#E8E1EF] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6722A0] to-[#9B4BC5] flex items-center justify-center text-white shadow-xs">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.5v15a1 1 0 001.55.83l12-7.5a1 1 0 000-1.66l-12-7.5A1 1 0 007 4.5z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-[#321044] tracking-tight">
                Dream<span className="text-[#6722A0]">Cine</span>
              </span>
              <span className="text-[10px] text-[#746A7D] block -mt-1 font-medium">
                Movies & Private Events
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#746A7D]">
            <a href="#movies" className="hover:text-[#6722A0] transition-colors">Movies</a>
            <a href="#events" className="hover:text-[#6722A0] transition-colors">Private Events</a>
            <a href="#offers" className="hover:text-[#6722A0] transition-colors">Special Offers</a>
            <a href="#about" className="hover:text-[#6722A0] transition-colors">About Us</a>
            <a href="#contact" className="hover:text-[#6722A0] transition-colors">Contact</a>
            <a href="#privacy" className="hover:text-[#6722A0] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#6722A0] transition-colors">Terms of Service</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#746A7D] flex items-center gap-1">
            <span>© {new Date().getFullYear()} DreamCine. Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#6722A0] fill-[#6722A0]" />
            <span>for cinema lovers.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
