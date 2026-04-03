'use client';

import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Heart, Mail, ArrowRight, Globe, Link, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-column', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="pt-24 pb-12 px-6 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* CTA Banner Area */}
        <div className="footer-column mb-20 p-8 md:p-12 glass rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           
           <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to automate quality?</h3>
              <p className="text-slate-400 max-w-sm">Let’s discuss how we can build a resilient testing infrastructure together.</p>
           </div>
           
           <div className="relative z-10">
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 shadow-xl active:scale-95 group/btn">
                 Start a Project
                 <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="footer-column col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold tracking-tighter text-white">
                  QA<span className="text-secondary">PRO</span>
                </span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Redefining software reliability through advanced automation, performance benchmarking, and architectural precision.
             </p>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 border border-success/20 rounded-full text-[10px] font-bold text-success uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                Available for Projects
             </div>
          </div>

          <div className="footer-column">
             <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Services</h4>
             <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">Automation Frameworks</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Performance Audits</li>
                <li className="hover:text-primary transition-colors cursor-pointer">API Security Testing</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Visual Regression</li>
             </ul>
          </div>

          <div className="footer-column">
             <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
             <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-secondary transition-colors">Lab Summary</a></li>
                <li><a href="#projects" className="hover:text-secondary transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Quality Hotline</a></li>
                <li className="hover:text-secondary transition-colors cursor-pointer">Resources</li>
             </ul>
          </div>

          <div className="footer-column">
             <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Social Connect</h4>
             <div className="flex flex-wrap gap-4">
                {[Globe, Link, Share2, Mail].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 text-slate-400 hover:text-white">
                      <Icon className="w-5 h-5" />
                   </a>
                ))}
             </div>
             <p className="mt-8 text-xs text-slate-500 font-medium">Follow for latest QA insights.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-column pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} QA Portfolio. All tests compiled successfully.</p>
          <div className="flex items-center gap-2 group cursor-default">
             Handcrafted with <Heart className="w-4 h-4 text-rose-500 group-hover:fill-rose-500 group-hover:scale-125 transition-all" /> by QA PRO
          </div>
          <div className="flex gap-8">
             <span className="hover:text-white transition-colors cursor-pointer">Status</span>
             <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
             <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
