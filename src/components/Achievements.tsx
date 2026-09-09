import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { statsList, certificationsList } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Achievements</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Milestones & Numbers</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-black gradient-text mb-1 tracking-tight">{item.stat}</div>
              <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div id="certifications" className="pt-4">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Certifications</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Continuous Learning</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    {cert.title}
                    <CheckCircle size={15} className="text-teal-500 shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
