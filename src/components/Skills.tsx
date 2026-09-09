import React from 'react';
import { Code, Database, Cpu, Globe, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillCategories = [
  {
    title: 'Programming Languages',
    items: skillsData.languages,
    icon: Code,
    color: 'text-teal-600 bg-teal-50 border-teal-100',
  },
  {
    title: 'Databases',
    items: skillsData.databases,
    icon: Database,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Core Concepts',
    items: skillsData.core,
    icon: Cpu,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Web Technologies',
    items: skillsData.web,
    icon: Globe,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    title: 'Tools & Utilities',
    items: skillsData.tools,
    icon: Wrench,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Technical Toolkit</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${category.color}`}>
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-100 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
