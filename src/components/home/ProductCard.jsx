import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
      <div className="relative mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-48 rounded-xl flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
          {product.image}
        </div>
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-yellow-600 transition">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.weight}</p>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>
        
        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md transform hover:scale-105 ${
            added 
              ? 'bg-green-600 text-white' 
              : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
          }`}
        >
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;