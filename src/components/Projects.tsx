import React from 'react';
import { ShieldCheck, Stethoscope, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'shield-check': ShieldCheck,
  stethoscope: Stethoscope,
  'file-text': FileText,
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const IconComponent = iconMap[project.icon] || FileText;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Colorful Gradient Header Banner */}
        <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden p-6 flex flex-col justify-between`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-white/95 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
              {project.category}
            </span>
            <span className="text-white/80 font-mono text-xs font-bold bg-black/20 px-2.5 py-1 rounded-lg">
              #{index + 1}
            </span>
          </div>
          <div className="relative z-10 flex items-center gap-3 text-white">
            <IconComponent size={36} className="drop-shadow" />
            <h3 className="text-xl font-black tracking-tight drop-shadow">{project.name}</h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-7">
          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Features List */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer: Tech & Links */}
      <div className="px-7 pb-7 pt-0">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            <GithubIcon size={16} />
            GitHub Repository
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-teal-300 hover:text-teal-600 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Featured Work</h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm font-normal">
            Full-stack web applications and AI-driven solutions built during my software engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
