// components/WaysToHelp.js
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Shirt, DollarSign, X, Mail, Phone } from 'lucide-react';
import { DONATION_OPTIONS } from '../data/constants';

const WaysToHelp = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      GraduationCap,
      BookOpen,
      Shirt,
      DollarSign
    };
    return icons[iconName] || GraduationCap;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-50 to-blue-100",
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        text: "text-blue-600"
      },
      green: {
        gradient: "from-green-50 to-green-100",
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        text: "text-green-600"
      },
      yellow: {
        gradient: "from-yellow-50 to-yellow-100",
        bg: "bg-yellow-600",
        hover: "hover:bg-yellow-700",
        text: "text-yellow-600"
      },
      purple: {
        gradient: "from-purple-50 to-purple-100",
        bg: "bg-purple-600",
        hover: "hover:bg-purple-700",
        text: "text-purple-600"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleDonation = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  return (
    <>
      <section id="help" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to make a difference in a student's life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DONATION_OPTIONS.map((option, index) => {
              const IconComponent = getIcon(option.icon);
              const colorClasses = getColorClasses(option.color);
              
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses.gradient} rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2`}
                >
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <button 
                    onClick={() => handleDonation(option)}
                    className={`w-full ${colorClasses.bg} text-white py-3 rounded-lg ${colorClasses.hover} transition-colors`}
                  >
                    {option.title.includes('General') ? 'Donate Now' : 
                     option.title.includes('Sponsor') ? 'Sponsor Now' : 
                     `Donate ${option.title.split(' ')[1] || 'Now'}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fadeIn">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank you for your interest!
              </h3>
              <p className="text-gray-600 mb-6">
                To proceed with your donation for "{selectedOption?.title}", please contact us:
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email us at:</p>
                    <a 
                      href="mailto:donations@yourorganization.com" 
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      poppetfoundation.official@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">Call us at:</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      +92 (301) 9033263
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Our team will get back to you within 24 hours to help you complete your donation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add this CSS to your global styles or component styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WaysToHelp;