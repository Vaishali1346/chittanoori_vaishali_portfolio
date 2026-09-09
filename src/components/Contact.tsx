import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const contactLinks = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
    { label: 'LinkedIn', value: profile.linkedinDisplay, href: profile.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', value: profile.githubDisplay, href: profile.github, icon: GithubIcon },
    { label: 'LeetCode', value: 'Vaishali_413 Profile', href: profile.leetcode, icon: LeetCodeIcon },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Let's Connect</h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm font-normal">
            I'm actively seeking Software Engineering, Full-Stack, and Data Science internship opportunities. Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods List */}
          <div className="space-y-3">
            {contactLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors shrink-0">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Call To Action Card */}
          <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 text-white border border-white/20">
                <Send size={26} />
              </div>
              <h3 className="text-2xl font-black mb-3 tracking-tight">Ready to contribute</h3>
              <p className="text-teal-50 text-sm leading-relaxed font-normal">
                Whether it's a software engineering role, a full-stack project, or a data science collaboration — I'd love to hear from you.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-teal-700 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-colors shadow-sm"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/25 transition-colors border border-white/20"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
