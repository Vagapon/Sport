import React, { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <div className="text-2xl font-black text-gray-900">SPORTEYZ</div>
              <div className="text-xs text-purple-600 font-semibold uppercase tracking-wider">BADMINTON</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-purple-600 font-bold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:bottom-0 after:left-0">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Sports
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              News
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side icons and button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-purple-600 font-bold">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Sports</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Pages</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">News</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all mt-4">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
