'use client';

import React, { useEffect, useRef } from 'react';

const timings = [
  { day: 'Monday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Tuesday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Wednesday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Thursday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Friday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Saturday', time: '5:00 AM – 11:00 PM', open: true },
  { day: 'Sunday', time: '5:00 AM – 12:00 Noon', open: true },
];

export default function ContactSection() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-5 md:px-10 bg-[#111111] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E63946]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => {
            revealRefs.current[0] = el;
          }}
          className="reveal-hidden mb-14"
        >
          <span className="section-label block mb-4">— Find Us</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
            Visit <span className="text-[#E63946]">SSKGym</span>
            <br />
            <span className="text-outline">Today</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Address + Phone */}
          <div
            ref={(el) => {
              revealRefs.current[1] = el;
            }}
            className="reveal-hidden stagger-1 contact-card p-7 flex flex-col justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E63946"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                  Location
                </span>
              </div>
              <address className="not-italic">
                <p className="text-xl font-black uppercase tracking-tight text-white mb-2">
                  SSK Gym
                </p>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  Lakhimi Path,
                  <br />
                  Beltola Tiniali,
                  <br />
                  Guwahati – 781028
                  <br />
                  Assam, India
                </p>
              </address>
            </div>

            <div className="red-divider" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E63946"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16.92z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                  Phone
                </span>
              </div>
              <a
                href="tel:8135807345"
                className="text-2xl font-black text-white hover:text-[#E63946] transition-colors duration-200 tracking-tight"
              >
                81358 07345
              </a>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 mt-1">
                Call to enroll or enquire
              </p>
            </div>

            <a
              href="tel:8135807345"
              className="w-full bg-[#E63946] text-white text-[11px] font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#C1121F] transition-colors duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16.92z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Gym Timings */}
          <div
            ref={(el) => {
              revealRefs.current[2] = el;
            }}
            className="reveal-hidden stagger-2 contact-card p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                Timings
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {timings.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-3 ${
                    i < timings.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <span className="text-sm font-bold text-white/60">{item.day}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${
                        item.day === 'Sunday' ? 'text-[#E63946]' : 'text-white'
                      }`}
                    >
                      {item.time}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-red" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#E63946]/8 border border-[#E63946]/20">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E63946] mb-1">
                Note
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                Timings may vary on public holidays. Call ahead to confirm.
              </p>
            </div>
          </div>

          {/* CTA / Map placeholder */}
          <div
            ref={(el) => {
              revealRefs.current[3] = el;
            }}
            className="reveal-hidden stagger-3 flex flex-col gap-5"
          >
            {/* Big CTA */}
            <div className="contact-card p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-tight mb-4">
                  Start Your Journey
                  <br />
                  <span className="text-[#E63946]">in {new Date().getFullYear()}</span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Walk in, call us, or just show up — we&apos;ll help you find the right plan and
                  get started today.
                </p>

                {/* Quick facts */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: '✓', text: 'No joining fee' },
                    { icon: '✓', text: 'All facilities included' },
                    { icon: '✓', text: '10% PT discount on longer plans' },
                    { icon: '✓', text: 'Student & senior special pricing' },
                  ].map((fact) => (
                    <div key={fact.text} className="flex items-center gap-3">
                      <span className="text-[#E63946] font-black text-sm">{fact.icon}</span>
                      <span className="text-sm text-white/60">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="tel:8135807345"
                  className="w-full bg-[#E63946] text-white text-[11px] font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#C1121F] transition-colors duration-300"
                >
                  Enroll: 81358 07345
                </a>
                <button
                  onClick={() =>
                    document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="w-full border border-white/10 text-white/50 text-[11px] font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:border-[#E63946]/50 hover:text-[#E63946] transition-all duration-300"
                >
                  View All Plans
                </button>
              </div>
            </div>

            {/* Address badge */}
            <div className="contact-card px-5 py-4 flex items-center gap-4">
              <div className="w-8 h-8 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center flex-shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25 mb-0.5">
                  PIN Code
                </p>
                <p className="text-sm font-bold text-white/70">
                  Beltola Tiniali, Guwahati – 781028
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
