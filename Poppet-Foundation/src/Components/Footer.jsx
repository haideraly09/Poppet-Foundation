// components/Footer.js
import React, { useState } from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your email service
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Ways to Help', id: 'help' },
    { label: 'Student Stories', id: 'stories' },
    { label: 'Transparency', id: 'transparency' }
  ];

  const resourceLinks = [
    { label: 'Annual Reports', href: '#reports' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact Form', href: '#contact-form' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/popitfoundation', 
      label: 'Facebook',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/popitfoundation', 
      label: 'Twitter',
      color: 'hover:text-sky-400'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/popitfoundation', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Logo and Description - Takes 2 columns on larger screens */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Poppett Adventure</h2>
                  <p className="text-blue-400 text-sm font-medium">Foundation</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-lg leading-relaxed text-base">
                Empowering students with the support they need to learn today and lead tomorrow. 
                No child should be forced to leave school because of financial struggles.
              </p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-3">Follow us on social media:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-all duration-300 p-3 hover:bg-gray-800 rounded-lg transform hover:scale-110`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-blue-400 font-semibold text-sm mb-1">Our Mission</p>
                <p className="text-gray-300 text-sm italic">
                  "Learn Today, Lead Tomorrow"
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Resources Section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-200 mb-4">Resources</h4>
                <ul className="space-y-2">
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a 
                      href="tel:+923001234567" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      +92 301 9033263
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a 
                      href="mailto:info@popitfoundation.org" 
                      className="text-gray-400 hover:text-white transition-colors break-all"
                    >
                      poppetfoundation.official@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-medium">Address</p>
                    <div className="text-gray-400">
                     House #6,Street #60 Korang Islamabad,<br />
                      Pakistan
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-8 bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Office Hours</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-green-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-yellow-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Get monthly updates on student progress and foundation activities
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-lg p-4">
                  <p className="text-green-200 font-semibold">
                    ✅ Thank you for subscribing! You'll receive our next update soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold whitespace-nowrap transform hover:scale-105 shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              
              <p className="text-blue-200 text-sm mt-4">
                📧 Join 500+ supporters who stay informed about our impact
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 The Popit Adventure Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registered Non-Profit Organization
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-500 text-sm">
                Built with ❤️ for education | 
                <span className="text-blue-400 ml-1 font-medium">Making dreams possible</span>
              </p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="text-green-400">🔒</span>
                <span>Secure Donations</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">📊</span>
                <span>Full Transparency</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">✅</span>
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-purple-400">🏆</span>
                <span>Verified Non-Profit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;