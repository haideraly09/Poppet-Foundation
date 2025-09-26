// components/About.js
import React from 'react';
import { Users, GraduationCap, Star, Heart } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Users, label: 'Transparency', color: 'blue' },
    { icon: GraduationCap, label: 'Opportunity', color: 'green' },
    { icon: Star, label: 'Impact', color: 'yellow' },
    { icon: Heart, label: 'Community', color: 'red' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600' }
    };
    return colorMap[color];
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Foundation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Poppet Adventure Foundation was created with one simple belief: <em>no child should be forced to leave school because of financial struggles.</em>
            </p>
            <p className="text-gray-600 mb-6">
              We support students from <strong>Grade 1 to Intermediate</strong>, focusing mainly on <strong>Class 8–10</strong>. 
              We provide full and partial fee support, books, and uniforms to ensure every child has equal access to education.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const colorClasses = getColorClasses(value.color);
                
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <IconComponent className={`h-6 w-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900">{value.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Unique Approach
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Direct fee support to schools
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Transparent donor updates
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Personal student progress reports
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Community-driven support system
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;