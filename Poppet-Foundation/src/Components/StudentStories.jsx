// components/StudentStories.js
import React from 'react';
import { Star } from 'lucide-react';

const StudentStories = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      grade: "Class 9",
      story: "Thanks to The Poppet Adventure Foundation, I can continue my studies without worrying about fees. My dream of becoming a doctor is still alive!",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3ES.A%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Muhammad Ali",
      grade: "Class 10",
      story: "The foundation provided me with books and uniform when my family couldn't afford them. Now I'm preparing for my board exams with confidence.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EM.A%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Fatima Khan",
      grade: "Class 8",
      story: "Education seemed impossible until this foundation stepped in. Today, I'm excelling in mathematics and science, pursuing my passion for engineering.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%236b7280' text-anchor='middle' dy='.3em'%3EF.K%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from students whose lives have been transformed through education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.grade}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.story}"
              </p>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Be Part of Their Success Story
            </h3>
            <p className="text-gray-600 mb-6">
              Every donation creates a new success story. Help us write the next chapter 
              in a student's educational journey.
            </p>
            <button 
              onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Support a Student Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStories;