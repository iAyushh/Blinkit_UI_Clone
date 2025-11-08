import React, { useState } from "react";
import { ShoppingCart, Search, MapPin, User, Menu, X } from "lucide-react";

const Header = ({ cartCount, searchTerm, setSearchTerm, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-yellow-300">blink</span>
              <span className="text-green-500">it</span>
            </h1>
          </div>

          {/* Location - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all group">
            <MapPin className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition" />
            <div className="text-left">
              <p className="text-lg font-bold text-gray-500">
                Delivery in 10 minutes
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-700">
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for atta, dal, coke, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Cart & Login */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-sm hover:shadow-md">
              <User className="w-4 h-4" />
              Login
            </button>
            <button
              onClick={onCartClick}
              className="relative p-3 hover:bg-gray-50 rounded-xl transition-all group"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-yellow-500 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
