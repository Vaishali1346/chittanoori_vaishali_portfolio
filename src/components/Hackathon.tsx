import React from 'react';
import { Trophy, Layers, MessageSquare, Video, Workflow } from 'lucide-react';
import { hackathonData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Hackathon: React.FC = () => {
  return (
    <section id="hackathon" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy size={16} />
            Hackathon Experience
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Built Under Pressure</h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50/80 via-white to-orange-50/80 rounded-3xl p-8 lg:p-10 border border-amber-200/60 shadow-lg relative overflow-hidden">
          <Trophy size={200} className="absolute -right-8 -top-8 text-amber-100/60 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                  {hackathonData.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{hackathonData.name}</h3>
              </div>

              <a
                href={hackathonData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm self-start sm:self-auto"
              >
                <GithubIcon size={16} />
                View Code
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl text-sm font-normal">
              {hackathonData.description}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {hackathonData.features.map((feature, idx) => {
                const icons = [Layers, MessageSquare, Video, Workflow];
                const IconComp = icons[idx] || Layers;
                return (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-100 shadow-sm">
                    <IconComp size={22} className="text-amber-600 mb-2" />
                    <p className="text-xs text-slate-800 font-semibold leading-snug">{feature}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {hackathonData.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-white text-slate-700 text-xs font-semibold border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
