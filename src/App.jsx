import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FCFBFE] text-[#241532] flex flex-col font-sans selection:bg-[#9B4BC5]/20 selection:text-[#321044] relative overflow-x-hidden">
        {/* Layered Glassmorphism Ambient Glow Effects */}
        <div className="fixed top-0 left-1/4 w-[650px] h-[650px] bg-[#9B4BC5]/4 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="fixed top-1/3 right-10 w-[550px] h-[550px] bg-[#3B82F6]/3 rounded-full blur-[130px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-[#EC4899]/3 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        {/* Main Sticky Header */}
        <Header />

        {/* Dynamic Route Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            {/* Fallback to Home for other links until implemented */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
