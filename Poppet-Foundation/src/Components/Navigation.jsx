// components/Navigation.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Impact', id: 'impact' },
    { label: 'Ways to Help', id: 'help' },
    { label: 'Stories', id: 'stories' },
    { label: 'Transparency', id: 'transparency' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                {/* Your Actual Logo */}
                <div className="w-12 h-12">
                  <img 
                    src="/p.png" 
                    alt="Poppet Adventure Foundation Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-green-500 bg-clip-text text-transparent">
                    Poppet Adventure
                  </h1>
                  <p className="text-xs text-blue-600 font-medium">Foundation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block bg-blue-600 text-white px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-2"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;