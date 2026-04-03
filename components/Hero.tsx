'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronDown, Play, Terminal, Zap } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background items animation
      gsap.from('.bg-glow', {
        opacity: 0,
        scale: 0.5,
        duration: 2,
        stagger: 0.3,
        ease: 'power3.out',
      });

      // Text animation
      gsap.from('.hero-text > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.5,
      });

      // Floating animation for icons
      gsap.to('.hero-icon', {
        y: -15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
    >
      {/* Background Glower */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] bg-glow"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] bg-glow"></div>

      <div className="relative z-10 text-center hero-text max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 border border-secondary/20 rounded-full">
          <Zap className="w-3 h-3" />
          <span>Next-Gen Quality Engineering</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Precision Engineering for <br />
          <span className="text-gradient">Reliable Software</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I&apos;m a QA Engineer dedicated to building high-quality software through 
          comprehensive automation frameworks, performance optimization, and rigorous testing methodologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 text-lg font-bold text-white bg-primary rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95 group">
            View My Work
            <Play className="w-4 h-4 fill-white group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95">
            <Terminal className="w-4 h-4" />
            Check My Tech
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-slate-500 w-5 h-5" />
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute top-1/3 right-10 md:right-32 hero-icon">
        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
          <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-xs">PASSED</div>
        </div>
      </div>
      <div className="absolute bottom-1/3 left-10 md:left-32 hero-icon shadow-2xl">
        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
           <Terminal className="w-6 h-6 text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
