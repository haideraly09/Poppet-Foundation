// components/Transparency.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FUND_DATA } from '../data/constants';

const Transparency = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="transparency" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly how your donations are used to transform lives
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Fund Allocation */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Fund Allocation
            </h3>
            <div className="space-y-4 mb-8">
              {FUND_DATA.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Our Promise
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>95%</strong> of every donation goes directly to supporting students. Only <strong>5%</strong> covers essential operational costs, 
                ensuring maximum impact for your contribution. We provide quarterly reports to all donors showing exactly how funds were used.
              </p>
            </div>
          </div>
          
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Fund Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={FUND_DATA}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {FUND_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Transparency Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Monthly Reports</h4>
            <p className="text-gray-600 text-sm">Detailed financial reports sent to all donors every month</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">👥</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Student Updates</h4>
            <p className="text-gray-600 text-sm">Personal progress reports from students you sponsor</p>
          </div>
          
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🏫</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">School Visits</h4>
            <p className="text-gray-600 text-sm">Open invitation for donors to visit partner schools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;