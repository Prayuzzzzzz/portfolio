'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Globe, Layers, ShieldCheck, Smartphone, Search, Eye, Accessibility } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Categories = ['All', 'Automation', 'Performance', 'Security'] as const;
type Category = (typeof Categories)[number];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initial entry animation
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation when category changes
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)' }
      );
    }
  }, [activeCategory]);

  const projects = [
    {
      title: 'Auto-Sentinel Framework',
      desc: 'Robust automation framework built with Playwright/TypeScript.',
      metrics: { primary: '99.8% Reliability', secondary: '12m Tests/mo' },
      tags: ['Playwright', 'TS', 'CI/CD'],
      status: 'Passed',
      category: 'Automation',
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Perf-Guard Dashboard',
      desc: 'Real-time performance metrics collector using JMeter and Grafana.',
      metrics: { primary: '< 50ms Latency', secondary: '100k Req/sec' },
      tags: ['JMeter', 'Influx', 'Grafana'],
      status: 'Live',
      category: 'Performance',
      icon: <Layers className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Mobile-Audit Pro',
      desc: 'Appium-based mobile automation suite for iOS and Android.',
      metrics: { primary: '85% Coverage', secondary: '20+ Devices' },
      tags: ['Appium', 'BS', 'Java'],
      status: 'Active',
      category: 'Automation',
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Secure-Test API Suite',
      desc: 'End-to-end API security testing suite with automated scanning.',
      metrics: { primary: 'OWASP Top 10', secondary: 'Daily Scans' },
      tags: ['Postman', 'ZAP', 'Node'],
      status: 'Secure',
      category: 'Security',
      icon: <Search className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Visual-Capture Engine',
      desc: 'Automated visual regression tool utilizing pixel comparisons.',
      metrics: { primary: '1:1 Visuals', secondary: '500+ Viewports' },
      tags: ['Percy', 'Cypress', 'AI'],
      status: 'Verified',
      category: 'Automation',
      icon: <Eye className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Inclusive-Check Runner',
      desc: 'Accessibility auditing engine that validates against WCAG 2.1 AA.',
      metrics: { primary: 'AA Compliant', secondary: 'Auto-Fixes' },
      tags: ['Axe', 'Selenium', 'JS'],
      status: 'Passed',
      category: 'Security',
      icon: <Accessibility className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Data-Sync Validator',
      desc: 'ETL testing framework ensuring integrity between SQL/NoSQL.',
      metrics: { primary: '0% Data Loss', secondary: '10TB Analyzed' },
      tags: ['Python', 'AWS', 'SQL'],
      status: 'Syncing',
      category: 'Performance',
      icon: <Layers className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'Cloud-Scale Regression',
      desc: 'Massive parallel regression suite running 1000+ tests on K8s.',
      metrics: { primary: '< 5m Runtime', secondary: '1k Parallel' },
      tags: ['Docker', 'K8s', 'Scale'],
      status: 'Running',
      category: 'Performance',
      icon: <Globe className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
    {
      title: 'UX Flow Monitor',
      desc: 'User flow monitoring tool that alerts on critical path failures.',
      metrics: { primary: 'Real-time Alert', secondary: 'Global Edge' },
      tags: ['Relic', 'DataDog', 'Synth'],
      status: 'Watching',
      category: 'Security',
      icon: <Eye className="w-8 h-8 text-primary" />,
      gradient: 'from-primary/20 to-secondary/10',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" ref={containerRef} className="py-16 px-6 bg-slate-900/40 relative min-h-screen">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #6366f1 0.1rem, transparent 0.1rem)', backgroundSize: '1.5rem 1.5rem' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 text-pretty">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Case Studies</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Engineering <span className="text-gradient">Precision</span></h3>
          
          {/* CATEGORY FILTER BAR */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all duration-300 active:scale-90 ${
                  activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative p-0 bg-slate-900/80 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 project-card shadow-lg"
            >
              <div className={`h-28 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                <div className="absolute inset-0 bg-slate-950/10"></div>
                <div className="z-10 transform scale-75 group-hover:scale-90 transition-all duration-500 p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                   {project.icon}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-baseline mb-3">
                   <div className="inline-flex items-center gap-1 px-2 py-0.5 text-[8px] font-black uppercase text-secondary bg-secondary/10 border border-secondary/20 rounded-full">
                      {project.status}
                   </div>
                   <div className="text-slate-500 group-hover:text-primary transition-colors">
                      <ExternalLink className="w-3 h-3" />
                   </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-1">{project.title}</h4>
                <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-4 h-8 overflow-hidden line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between p-2 mb-4 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold">
                   <span className="text-secondary">{project.metrics.primary}</span>
                   <span className="text-slate-500">|</span>
                   <span className="text-primary">{project.metrics.secondary}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 text-[8px] font-black text-slate-400 bg-white/5 rounded uppercase border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a href="#" className="text-[10px] font-black text-white hover:text-secondary transition-colors underline decoration-primary underline-offset-4 tracking-tighter">
                     FRAMEWORK
                  </a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors">
                     <Globe className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
