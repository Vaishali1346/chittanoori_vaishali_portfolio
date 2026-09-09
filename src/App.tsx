import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Hackathon } from './components/Hackathon';
import { Achievements } from './components/Achievements';
import { GithubLeetcode } from './components/GithubLeetcode';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Hackathon />
        <Achievements />
        <GithubLeetcode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
