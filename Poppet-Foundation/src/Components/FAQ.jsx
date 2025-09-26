// components/FAQ.js
import React, { useState } from 'react';
import { ChevronDown, X, Mail, Phone } from 'lucide-react';
import { FAQS } from '../data/constants';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our foundation
            </p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    activeAccordion === index ? 'pb-4 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  {activeAccordion === index && (
                    <div className="pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact for More Questions */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We're here to help! Contact us directly and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleContactClick}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Email Us
                </button>
                <button 
                  onClick={handleContactClick}
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fadeIn">
            {/* Close Button */}
            <button 
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Here are the ways you can reach us:
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email us at:</p>
                    <a 
                      href="mailto:poppetfoundation.official@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 font-semibold break-all"
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
                      href="tel:+923001234567" 
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      +92 301-9033263
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Our team will get back to you within 24 hours to answer your questions.
              </p>

              <button
                onClick={closeContactModal}
                className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Got it, thanks!
              </button>
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

export default FAQ;