'use client';

import React, { useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Zap 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'Manual Testing', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, desc: 'Exploratory, Smoke, Regression Testing.' },
    { name: 'Selenium WebDriver', icon: <Code2 className="w-5 h-5 text-blue-400" />, desc: 'Java/Python based automation for UI tests.' },
    { name: 'Playwright', icon: <Zap className="w-5 h-5 text-indigo-400" />, desc: 'Modern, fast E2E testing for modern apps.' },
    { name: 'Performance (JMeter)', icon: <Cpu className="w-5 h-5 text-amber-400" />, desc: 'Load, Stress, and Scalability analysis.' },
    { name: 'API Testing (Postman)', icon: <Globe className="w-5 h-5 text-cyan-400" />, desc: 'REST/GraphQL comprehensive validation.' },
    { name: 'CI/CD Pipelines', icon: <Layers className="w-5 h-5 text-purple-400" />, desc: 'Jenkins, GitHub Actions, GitLab CI.' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/2 section-title">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Specialist</h2>
          <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
            Testing for <span className="text-gradient">Resilience</span> & Quality.
          </h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
             I don&apos;t just find bugs; I design frameworks that prevent them. With a strong foundation in software engineering and a passion for quality, I transition between manual exploratory testing and high-scale automation with ease.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
             <div className="flex items-center gap-1"><span className="text-success">5+</span> Years Exp.</div>
             <div className="flex items-center gap-1"><span className="text-success">200+</span> Bugs squashed.</div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 skills-grid">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 skill-card group cursor-default"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-secondary group-hover:tracking-wide transition-all">{skill.name}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
