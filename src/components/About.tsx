import React from 'react';
import { UserCheck, Award, Briefcase, Sparkles } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Career Objective Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                <UserCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Career Objective</h3>
                <p className="text-xs text-slate-500 font-medium">Aspiring Software Engineer & Data Scientist</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-base font-normal">
              {aboutData.objective}
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-teal-500" />
              Quick Facts
            </h3>
            <ul className="space-y-4">
              {aboutData.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                  {index < 3 ? (
                    <Award size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  ) : index === 3 ? (
                    <Briefcase size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  ) : (
                    <Sparkles size={18} className="text-teal-500 shrink-0 mt-0.5" />
                  )}
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
