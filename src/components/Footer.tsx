import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <a href="#home" className="text-xl font-black text-white tracking-tight">
            <span className="gradient-text">Vaishali</span> Chittanoori
          </a>

          <p className="text-xs max-w-md text-slate-400 font-medium">
            Computer Science (Data Science) Undergraduate | Aspiring Software Engineer
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors border border-white/5"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              aria-label="Call Phone"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors border border-white/5"
            >
              <Phone size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors border border-white/5"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors border border-white/5"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors border border-white/5"
            >
              <LeetCodeIcon size={18} />
            </a>
          </div>

          <div className="w-full border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} Chittanoori Vaishali. All rights reserved.</p>
            <a
              href="#home"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors uppercase text-[10px] tracking-wider font-bold"
            >
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
