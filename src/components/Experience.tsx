import React from 'react';
import { Briefcase, Calendar, Zap, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Wells Fargo Technology Internship
          </h2>
        </div>

        {/* Company Overview Header Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white mb-8 shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-teal-400 border border-white/10 shadow-inner">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">{experienceData.company}</h3>
                <p className="text-slate-300 text-sm font-medium mt-0.5">{experienceData.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 self-start sm:self-auto">
              <Calendar size={15} className="text-teal-400" />
              {experienceData.period}
            </div>
          </div>
        </div>

        {/* Internship Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experienceData.projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Impact Highlight Banner */}
                {idx === 0 ? (
                  <div className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-teal-700">
                      <Zap size={20} className="fill-teal-500 text-teal-500" />
                      <span className="text-xl font-extrabold">{project.impact}</span>
                    </div>
                    <p className="text-[11px] text-teal-600 font-semibold uppercase tracking-wider mt-1">
                      Validation Time Saved
                    </p>
                  </div>
                ) : (
                  <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-blue-700">
                      <ShieldCheck size={20} className="text-blue-600" />
                      <span className="text-base font-bold">{project.impact}</span>
                    </div>
                    <p className="text-[11px] text-blue-600 font-semibold uppercase tracking-wider mt-1">
                      Outbound API Payload Security
                    </p>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
