// components/CallToAction.js
import React from 'react';

const CallToAction = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Us in Changing Lives
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Every donation, no matter the size, helps a child stay in school and build a brighter future. 
          Be part of their success story today.
        </p>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100</div>
            <div className="text-blue-100 text-sm">Aim to help this year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-blue-100 text-sm">Goes directly to students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">847</div>
            <div className="text-blue-100 text-sm">Students helped so far</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('help')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            Donate Now
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all text-lg font-medium"
          >
            Contact Us
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-10 pt-8 border-t border-white border-opacity-20">
          <p className="text-blue-100 text-sm mb-4">Trusted by donors worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="text-white text-xs">🔒 Secure Donations</div>
            <div className="text-white text-xs">📊 Full Transparency</div>
            <div className="text-white text-xs">✅ Tax Deductible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;