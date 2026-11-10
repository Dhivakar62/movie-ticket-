import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-[#241532] flex flex-col font-sans selection:bg-[#9B4BC5]/20 selection:text-[#321044]">
        {/* Main Sticky Header */}
        <Header />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future pages (Movies, MovieDetails, SeatSelection, Events, Dashboard) will be added step-by-step as approved */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
