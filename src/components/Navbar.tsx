import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { profile, navItems } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = navItems.map((item) => item.href.slice(1));
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar for Desktop */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Phone size={14} />
              {profile.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <LinkedinIcon size={14} />
              {profile.linkedinDisplay}
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <LeetCodeIcon size={14} />
              LeetCode
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-slate-900/5 border-b border-slate-200/60'
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
            <span className="gradient-text text-xl">Vaishali</span>
            <span>Chittanoori</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-teal-600 bg-teal-50 font-semibold'
                        : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-slate-100">
                <a href={`mailto:${profile.email}`} className="text-slate-500 hover:text-teal-600">
                  <Mail size={18} />
                </a>
                <a href={`tel:${profile.phone}`} className="text-slate-500 hover:text-teal-600">
                  <Phone size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600">
                  <LinkedinIcon size={18} />
                </a>
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600">
                  <LeetCodeIcon size={18} />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600">
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
