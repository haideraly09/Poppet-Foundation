// components/Hero.js
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Campaign progress data
  const currentStudents = 11;
  const targetStudents = 100;
  const progressPercentage = (currentStudents / targetStudents) * 100;

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Current Campaign: Back to School – Every Child Counts
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Today,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Lead Tomorrow
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering students with the support they need to learn today and lead tomorrow. 
            No child should be forced to leave school because of financial struggles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('help')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              Donate Now
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all text-lg font-medium"
            >
              Learn More
            </button>
          </div>
          
          {/* Campaign Progress */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Campaign Progress</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Students Supported</span>
              <span className="text-sm font-medium text-gray-900">
                {currentStudents}/{targetStudents}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-1000" 
                style={{width: `${progressPercentage}%`}}
              ></div>
            </div>
            <p className="text-sm text-gray-600">Help us reach {targetStudents} students this year!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;