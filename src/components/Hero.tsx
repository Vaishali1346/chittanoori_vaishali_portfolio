import React from 'react';
import { ArrowUpRight, Mail, Download, ChevronDown } from 'lucide-react';
import { profile, heroData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          Open to Software Engineering & Internship Opportunities
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight max-w-4xl">
          {heroData.headline.split(' | ').map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-slate-300 mx-2 font-normal">|</span>}
              {index === 0 ? <span className="gradient-text">{part}</span> : part}
            </React.Fragment>
          ))}
        </h1>

        {/* Subheading */}
        <p className="animation-delay-200 animate-fade-in-up mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
          {heroData.subheading}
        </p>

        {/* Call To Action Buttons */}
        <div className="animation-delay-300 animate-fade-in-up mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <ArrowUpRight size={18} />
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50/50 transition-all"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50/50 transition-all"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Social Icons Quick Row */}
        <div className="animation-delay-500 animate-fade-in-up mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all shadow-sm"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all shadow-sm"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all shadow-sm"
          >
            <LeetCodeIcon size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center justify-center mt-14">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-slate-400 hover:text-teal-600 transition-colors p-2"
          >
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
