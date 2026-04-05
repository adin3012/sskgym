'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef?.current, subRef?.current, ctaRef?.current];
    elements?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(60px)';
      setTimeout(
        () => {
          if (!el) return;
          el.style.transition =
            'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        },
        200 + i * 180
      );
    });
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden noise-overlay">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        {/* Slideshow images */}
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_146f5083a-1772147435432.png"
          alt="Dark gym interior with heavy barbells and dim atmospheric lighting, deep shadows and industrial feel"
          fill
          priority
          className="hero-slide object-cover"
          unoptimized
        />

        <AppImage
          src="https://images.unsplash.com/photo-1728902681848-fffd72bee939"
          alt="Gym weight rack in low-key industrial lighting with dark steel walls and heavy shadows"
          fill
          className="hero-slide object-cover"
          unoptimized
        />

        <AppImage
          src="https://images.unsplash.com/photo-1697490575303-f605a7b12745"
          alt="Fitness equipment silhouettes in dark moody gym with red accent lighting"
          fill
          className="hero-slide object-cover"
          unoptimized
        />

        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_103bc34a3-1773045046617.png"
          alt="Athlete training in dark gym environment with dramatic shadows and steel equipment"
          fill
          className="hero-slide object-cover"
          unoptimized
        />
      </div>
      {/* Grid lines */}
      <div className="absolute inset-0 z-[2] grid-lines opacity-40" />
      {/* Red accent glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E63946]/10 rounded-full blur-[120px] z-[2]" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#E63946]/8 rounded-full blur-[100px] z-[2]" />
      {/* Vertical side label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[5] hidden lg:block">
        <span className="vertical-text text-[9px] font-bold uppercase tracking-[1em] text-white/15">
          Beltola Tiniali · Guwahati · Est. 2020
        </span>
      </div>
      {/* Content */}
      <div className="relative z-[5] px-5 md:px-10 pb-16 md:pb-20 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] text-[#E63946]">
              <span className="w-6 h-px bg-[#E63946]" />
              SSK Gym · Guwahati
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="editorial-text font-black text-[clamp(3.5rem,12vw,12rem)] leading-none"
          >
            <span className="block text-[#F5F5F5]">WORK.</span>
            <span className="block text-outline-red">SWEAT.</span>
            <span className="block text-[#F5F5F5] text-[clamp(1.5rem,4vw,4rem)] tracking-[-0.02em] font-bold mt-2 leading-tight">
              ACHIEVE<span className="text-[#E63946]">.</span>
            </span>
          </h1>

          {/* Sub + CTA row */}
          <div
            ref={subRef}
            className="mt-8 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end"
          >
            <p className="max-w-md text-white/50 text-lg font-medium leading-relaxed">
              Guwahati&apos;s premium fitness destination with{' '}
              <span className="text-white">steam bath</span>,{' '}
              <span className="text-white">InBody assessment</span>, and{' '}
              <span className="text-white">expert personal trainers</span>.
            </p>

            {/* Timing badge */}
            <div className="flex flex-col gap-3">
              <div className="timing-badge px-5 py-3 inline-flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#E63946]">
                  Gym Timings
                </span>
                <span className="text-sm font-bold text-white">Mon–Sat: 5AM – 11PM</span>
                <span className="text-sm font-bold text-white/70">Sunday: 5AM – 12 Noon</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={() =>
                document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group flex items-center gap-3 bg-[#E63946] text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:bg-[#C1121F] transition-colors duration-300"
            >
              View Memberships
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href="tel:8135807345"
              className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest hover:border-[#E63946] hover:text-[#E63946] transition-all duration-300"
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
              81358 07345
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { val: '5AM', label: 'Opens Daily' },
              { val: '5+', label: 'Premium Facilities' },
              { val: '2026', label: 'New Offers' },
            ]?.map((stat) => (
              <div key={stat?.label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-[#E63946] tracking-tight">
                  {stat?.val}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                  {stat?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </header>
  );
}
