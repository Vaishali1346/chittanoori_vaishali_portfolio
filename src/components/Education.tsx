import React from 'react';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Academic Background</h2>
        </div>

        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-teal-200 to-transparent lg:-translate-x-1/2" />

          {educationList.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex gap-6 lg:gap-0 mb-10 last:mb-0 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-teal-100 lg:-translate-x-1/2 top-6 z-10 shadow-sm" />

                {/* Card Container */}
                <div
                  className={`flex-1 ml-12 lg:ml-0 ${
                    isEven ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'
                  }`}
                >
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        !isEven ? 'lg:justify-end' : ''
                      }`}
                    >
                      <Calendar size={15} className="text-teal-500" />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap size={20} className="text-teal-600 shrink-0 lg:hidden" />
                      {item.degree}
                    </h3>

                    <p className="text-sm text-slate-600 mt-1 font-medium">{item.institution}</p>

                    <div
                      className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-100 ${
                        !isEven ? 'lg:ml-auto' : ''
                      }`}
                    >
                      <Award size={14} />
                      CGPA: {item.cgpa}
                    </div>
                  </div>
                </div>

                {/* Empty Flex Spacer for Desktop */}
                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
