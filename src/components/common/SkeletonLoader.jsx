import React from 'react';

const SkeletonLoader = () => (
  <div className="bg-white rounded-2xl p-5 shadow-sm animate-pulse">
    <div className="bg-gray-200 w-full h-48 rounded-xl mb-4"></div>
    <div className="bg-gray-200 h-4 rounded-lg mb-3"></div>
    <div className="bg-gray-200 h-3 w-2/3 rounded-lg mb-3"></div>
    <div className="bg-gray-200 h-6 w-1/2 rounded-lg mb-4"></div>
    <div className="bg-gray-200 h-10 rounded-lg"></div>
  </div>
);

export default SkeletonLoader;