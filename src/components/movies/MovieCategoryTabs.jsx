import React from 'react';

const CATEGORIES = [
  { id: 'now-showing', label: 'Now Showing' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'trending', label: 'Trending' },
  { id: 'popular', label: 'Popular' },
  { id: 'recommended', label: 'Recommended' },
];

const MovieCategoryTabs = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
      {CATEGORIES.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectCategory(tab.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-[#6722A0] text-white shadow-[0_4px_14px_rgba(103,34,160,0.25)] scale-[1.02]'
                : 'bg-white/70 hover:bg-[#F5F0FC] text-[#241532] border border-[#E8E1EF] hover:border-[#6722A0]/40'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default MovieCategoryTabs;
