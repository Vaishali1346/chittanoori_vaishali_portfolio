import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { profile, githubRepos, statsList } from '../data/portfolioData';
import { GithubIcon, LeetCodeIcon } from './SocialIcons';

export const GithubLeetcode: React.FC = () => {
  return (
    <section id="github" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Coding Profiles</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">GitHub & LeetCode</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Highlight Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-500/50 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold">{profile.githubDisplay}</h3>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-xs hover:text-teal-400 transition-colors font-mono"
                  >
                    {profile.github}
                  </a>
                </div>
              </div>

              {/* Repos Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {githubRepos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm truncate">{repo.name}</span>
                      <ExternalLink size={15} className="text-slate-500 group-hover:text-teal-400 transition-colors shrink-0" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Code size={13} className="text-teal-400" />
                      {repo.lang}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10 self-start"
            >
              <GithubIcon size={16} />
              View All Repositories
            </a>
          </div>

          {/* LeetCode Card */}
          <div className="bg-gradient-to-br from-orange-50/90 via-amber-50/70 to-orange-100/50 rounded-3xl p-8 border border-orange-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 border border-orange-200">
                  <LeetCodeIcon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">LeetCode</h3>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Problem Solving</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-white/80 rounded-2xl p-4 border border-orange-100">
                  <div className="text-3xl font-black text-orange-600 tracking-tight">{statsList[0].stat}</div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-0.5">{statsList[0].label}</div>
                </div>

                <div className="bg-white/80 rounded-2xl p-4 border border-orange-100">
                  <div className="text-3xl font-black text-orange-600 tracking-tight">{statsList[1].stat}</div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider mt-0.5">{statsList[1].label}</div>
                </div>
              </div>
            </div>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-orange-600/20"
            >
              <LeetCodeIcon size={16} />
              LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
