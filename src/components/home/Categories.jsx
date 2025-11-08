import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { categories } from '../../data/categories';

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-8 px-4 border-b relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 px-2">Shop by Category</h2>
        
        <button
          onClick={() => scroll('left')}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex-shrink-0 text-center cursor-pointer group"
            >
              <div className={`${cat.color} w-32 h-32 rounded-2xl flex items-center justify-center text-6xl mb-3 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg`}>
                {cat.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700 w-32 group-hover:text-yellow-600 transition">{cat.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Categories;