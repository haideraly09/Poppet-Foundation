// components/ImpactStats.js
import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Calendar, Heart } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';
import { STATS } from '../data/constants';

const ImpactStats = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter values
  const studentsHelped = useCounter(STATS.studentsHelped, 2000, visibleStats);
  const schoolsPartnered = useCounter(STATS.schoolsPartnered, 2000, visibleStats);
  const yearsActive = useCounter(STATS.yearsActive, 2000, visibleStats);
  const volunteers = useCounter(STATS.volunteers, 2000, visibleStats);

  const statsData = [
    {
      icon: Users,
      value: studentsHelped,
      label: "Students Helped",
      color: "blue"
    },
    {
      icon: GraduationCap,
      value: schoolsPartnered,
      label: "Partner Schools",
      color: "green"
    },
    {
      icon: Calendar,
      value: yearsActive,
      label: "Years Active",
      color: "yellow"
    },
    {
      icon: Heart,
      value: volunteers,
      label: "Volunteers",
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
      red: { bg: "bg-red-100", text: "text-red-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="impact" ref={statsRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every number represents a life changed, a dream preserved, and a future brightened.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            const IconComponent = stat.icon;
            
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-full mb-4`}>
                  <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;