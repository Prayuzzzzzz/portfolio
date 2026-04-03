'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import { Mail, Send, Phone, Globe, Link, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sendContactEmail } from '@/app/actions/contact';

gsap.registerPlugin(ScrollTrigger);

const initialState = {
  success: false,
  error: '',
};

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto contact-section">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 contact-info">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s build something <span className="text-gradient">bug-free</span>.</h3>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-lg">
            Whether you&apos;re looking for a lead QA Engineer, a consultant for automation architecture, or just want to chat about testing, my inbox is always open.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <p className="text-lg font-semibold text-slate-200">qa@engineer.io</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                <p className="text-lg font-semibold text-slate-200">+1 (555) QA-TEST</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[Globe, Link, Share2].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-slate-400 hover:text-white">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 contact-form p-8 md:p-12 glass rounded-3xl border border-white/10">
          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Full Name</label>
                <input name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Email Address</label>
                <input name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Subject</label>
              <input name="subject" type="text" placeholder="QA Architecture Review" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Message</label>
              <textarea name="message" rows={4} placeholder="I'd love to discuss testing improvements..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-all resize-none"></textarea>
            </div>
            {state.error ? (
              <p className="text-sm text-red-400">{state.error}</p>
            ) : null}
            {state.success ? (
              <p className="text-sm text-emerald-400">Your message was sent successfully.</p>
            ) : null}
            <button type="submit" disabled={isPending} className="flex items-center justify-center gap-2 w-full py-4 text-lg font-bold text-white bg-primary rounded-2xl hover:bg-indigo-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 group disabled:cursor-not-allowed disabled:opacity-70">
              {isPending ? 'Sending...' : 'Deploy Message'}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
