'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const trainers = [
  {
    name: 'Gautam Hazarika',
    role: 'Head Trainer',
    spec: 'Strength · Conditioning · Performance',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fa965c95-1772532604600.png',
    alt: 'Male fitness trainer in dark gym environment with athletic build and confident stance',
    exp: 'Head Trainer',
  },
  {
    name: 'Shankar Hazarika',
    role: 'Personal Trainer',
    spec: 'Powerlifting · Hypertrophy',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b0c42d7e-1772747609280.png',
    alt: 'Athletic male trainer demonstrating exercise form in dark gym setting',
    exp: 'Trainer',
  },
  {
    name: 'Malin Nath',
    role: 'Personal Trainer',
    spec: 'Weight Loss · Functional Fitness',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_184d0d3ba-1772138383057.png',
    alt: 'Personal trainer in fitness attire in a dark gym with professional lighting',
    exp: 'Trainer',
  },
  {
    name: 'Sanjeev Basumatary',
    role: 'Personal Trainer',
    spec: 'Muscle Gain · Sports Nutrition',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fa965c95-1772532604600.png',
    alt: 'Athletic male trainer in gym setting with professional stance',
    exp: 'Trainer',
  },
];

export default function TrainerSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="trainers"
      ref={sectionRef}
      className="py-20 md:py-24 px-5 md:px-10 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#E63946]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Layout: 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Text content (60%) */}
          <div className="lg:col-span-3">
            <div
              ref={(el) => {
                revealRefs.current[0] = el;
              }}
              className="reveal-hidden"
            >
              <span className="section-label block mb-4">— Expert Guidance</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-6">
                Personal
                <br />
                <span className="text-outline">Trainers</span>
              </h2>
              <p className="text-white/50 text-lg font-medium leading-relaxed max-w-lg mb-8">
                Our certified personal trainers craft customized programs to match your exact goals
                — whether it&apos;s fat loss, muscle gain, or athletic performance.
              </p>
            </div>

            {/* Discount Highlight */}
            <div
              ref={(el) => {
                revealRefs.current[1] = el;
              }}
              className="reveal-hidden stagger-1 trainer-highlight p-6 mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-[#E63946]">10%</span>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                    Personal Trainer Discount
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Get <span className="text-[#E63946] font-bold">10% off</span> on personal
                    training sessions when you enroll in a{' '}
                    <span className="text-white font-semibold">Half-Yearly</span> or{' '}
                    <span className="text-white font-semibold">Yearly</span> membership plan.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {['Half-Yearly Plan', 'Yearly Plan'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 border border-[#E63946]/30 text-[#E63946]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What's included */}
            <div
              ref={(el) => {
                revealRefs.current[2] = el;
              }}
              className="reveal-hidden stagger-2"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E63946]/70 mb-4">
                What&apos;s Included
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    label: 'Custom Workout Plans',
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    ),
                    desc: 'Tailored programs built around your body type and goals',
                  },
                  {
                    label: 'Diet & Nutrition Guidance',
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10" />
                        <path d="M12 6v6l4 2" />
                        <circle cx="18" cy="6" r="3" />
                      </svg>
                    ),
                    desc: 'Expert meal plans to fuel performance and recovery',
                  },
                  {
                    label: 'Progress Tracking',
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    ),
                    desc: 'Regular check-ins and measurable milestone reviews',
                  },
                  {
                    label: 'InBody-Based Assessment',
                    icon: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                        <path d="M7 10h2l2-3 2 6 2-3h2" />
                      </svg>
                    ),
                    desc: 'Precise body composition analysis using InBody technology',
                  },
                ].map((item, _idx) => (
                  <div
                    key={item.label}
                    className="group relative p-5 bg-[#111111] border border-white/8 hover:border-[#E63946]/50 transition-all duration-300 overflow-hidden cursor-default"
                  >
                    {/* Red corner accent */}
                    <div
                      className="absolute top-0 left-0 w-0 h-0 border-t-[32px] border-l-[32px] border-t-[#E63946]/20 border-l-transparent group-hover:border-t-[#E63946]/50 transition-all duration-300"
                      style={{ borderLeftColor: 'transparent', borderTopColor: undefined }}
                    />
                    <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-0 h-0"
                        style={{
                          borderTop: '32px solid rgba(230,57,70,0.18)',
                          borderRight: '32px solid transparent',
                        }}
                      />
                    </div>

                    {/* Bottom glow on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/0 to-transparent group-hover:via-[#E63946]/60 transition-all duration-500" />

                    <div className="flex items-start gap-4">
                      {/* Icon box */}
                      <div className="w-10 h-10 flex items-center justify-center bg-[#E63946]/10 border border-[#E63946]/25 text-[#E63946] flex-shrink-0 group-hover:bg-[#E63946]/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black uppercase tracking-tight text-white leading-tight mb-1.5 group-hover:text-[#E63946] transition-colors duration-300">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Trainer cards (40%) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.name}
                ref={(el) => {
                  revealRefs.current[3 + i] = el;
                }}
                className={`reveal-hidden stagger-${i + 1} group flex items-center gap-4 p-4 bg-[#1A1A1A] border border-white/5 hover:border-[#E63946]/40 transition-all duration-400`}
              >
                <div className="w-16 h-20 overflow-hidden flex-shrink-0 relative">
                  <AppImage
                    src={trainer.image}
                    alt={trainer.alt}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-black uppercase tracking-tight text-white truncate">
                    {trainer.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#E63946] mb-1">
                    {trainer.role}
                  </p>
                  <p className="text-xs text-white/40">{trainer.spec}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/25 block">
                    {trainer.exp}
                  </span>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div
              ref={(el) => {
                revealRefs.current[7] = el;
              }}
              className="reveal-hidden stagger-4 p-5 bg-[#E63946]/8 border border-[#E63946]/20 text-center"
            >
              <p className="text-sm font-bold text-white/70 mb-3">
                Book a free consultation with our trainers
              </p>
              <a
                href="tel:8135807345"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E63946] border border-[#E63946]/40 px-5 py-2.5 hover:bg-[#E63946] hover:text-white transition-all duration-300"
              >
                <svg
                  width="12"
                  height="12"
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
          </div>
        </div>
      </div>
    </section>
  );
}
