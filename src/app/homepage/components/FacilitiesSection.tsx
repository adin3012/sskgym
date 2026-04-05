'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const facilities = [
  {
    id: 1,
    title: 'Electric Massage Chair',
    desc: 'Full-body recovery with premium electric massage chairs for post-workout relaxation.',
    image: 'https://images.unsplash.com/photo-1611769446369-d2895c2fcc91',
    alt: 'Electric massage chair in dim wellness room with dark atmospheric lighting',
    span: 'col-span-2',
    tall: false,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Steamed Bath',
    desc: 'Rejuvenate with our professional steam bath for deep muscle recovery and detox.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14ded40bd-1772238549968.png',
    alt: 'Steam sauna room with warm amber light and wooden benches in dark spa environment',
    span: 'col-span-1',
    tall: false,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 2c0 2.5-4 3-4 6a4 4 0 0 0 8 0c0-3-4-3.5-4-6z" />
        <path d="M16 2c0 2.5-4 3-4 6a4 4 0 0 0 8 0c0-3-4-3.5-4-6z" />
        <path d="M12 22v-3" />
        <path d="M8 19h8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'InBody Assessment',
    desc: 'Precise body composition analysis — track muscle mass, fat %, and metabolic rate.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_194eff55f-1768792918754.png',
    alt: 'Professional body assessment equipment in a clean dark fitness facility with clinical lighting',
    span: 'col-span-1',
    tall: false,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Locker Facility',
    desc: 'Secure lockers for your belongings so you can focus entirely on your workout.',
    image: 'https://images.unsplash.com/photo-1689779510269-16d9a1563546',
    alt: 'Row of modern gym lockers in dark changing room with moody low-key lighting',
    span: 'col-span-1',
    tall: false,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="11" r="3" />
        <path d="M12 14v3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Kangen Water',
    desc: 'Alkaline Kangen water station — superior hydration for peak athletic performance.',
    image: 'https://images.unsplash.com/photo-1657161707024-cb1e467507ac',
    alt: 'Crystal clear water in clean dark environment with blue ambient lighting',
    span: 'col-span-1',
    tall: false,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2C6.5 11 2 13 2 17a10 10 0 0 0 20 0c0-4-4.5-6-10-15z" />
      </svg>
    ),
  },
];

export default function FacilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="py-20 md:py-24 px-5 md:px-10 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E63946]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className="reveal-hidden mb-14 flex flex-col md:flex-row md:items-end gap-6 justify-between"
        >
          <div>
            <span className="section-label block mb-4">— Premium Amenities</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
              World-Class
              <br />
              <span className="text-outline">Facilities</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 text-base font-medium leading-relaxed md:text-right">
            Every membership includes access to all premium facilities — no hidden fees, no extras.
          </p>
        </div>

        {/* Bento Grid
             Row 1: [Massage Chair col-span-2] + [Steamed Bath col-span-1] = 3/3 ✓
             Row 2: [InBody col-span-1] + [Locker col-span-1] + [Kangen Water col-span-1] = 3/3 ✓
            */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Massage Chair — col-span-2 */}
          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="reveal-hidden stagger-1 facility-card md:col-span-2 relative overflow-hidden group min-h-[280px] md:min-h-[340px]"
          >
            <div className="absolute inset-0">
              <AppImage
                src={facilities[0].image}
                alt={facilities[0].alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
            </div>
            <div className="relative z-10 p-7 flex flex-col justify-end h-full min-h-[280px] md:min-h-[340px]">
              <div className="facility-icon text-white/40 mb-4">{facilities[0].icon}</div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
                {facilities[0].title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">{facilities[0].desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[#E63946]">
                <span className="w-4 h-px bg-[#E63946]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em]">
                  Included in all plans
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Steamed Bath — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
            className="reveal-hidden stagger-2 facility-card relative overflow-hidden group min-h-[280px] md:min-h-[340px]"
          >
            <div className="absolute inset-0">
              <AppImage
                src={facilities[1].image}
                alt={facilities[1].alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[280px] md:min-h-[340px]">
              <div className="facility-icon text-white/40 mb-3">{facilities[1].icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                {facilities[1].title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{facilities[1].desc}</p>
            </div>
          </div>

          {/* Card 3: InBody — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[3] = el;
            }}
            className="reveal-hidden stagger-3 facility-card relative overflow-hidden group min-h-[240px]"
          >
            <div className="absolute inset-0">
              <AppImage
                src={facilities[2].image}
                alt={facilities[2].alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[240px]">
              <div className="facility-icon text-white/40 mb-3">{facilities[2].icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
                {facilities[2].title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{facilities[2].desc}</p>
            </div>
          </div>

          {/* Card 4: Locker — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[4] = el;
            }}
            className="reveal-hidden stagger-4 facility-card relative overflow-hidden group min-h-[240px]"
          >
            <div className="absolute inset-0">
              <AppImage
                src={facilities[3].image}
                alt={facilities[3].alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[240px]">
              <div className="facility-icon text-white/40 mb-3">{facilities[3].icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
                {facilities[3].title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{facilities[3].desc}</p>
            </div>
          </div>

          {/* Card 5: Kangen Water — col-span-1 */}
          <div
            ref={(el) => {
              cardRefs.current[5] = el;
            }}
            className="reveal-hidden stagger-5 facility-card relative overflow-hidden group min-h-[240px]"
          >
            <div className="absolute inset-0">
              <AppImage
                src={facilities[4].image}
                alt={facilities[4].alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[240px]">
              <div className="facility-icon text-white/40 mb-3">{facilities[4].icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
                {facilities[4].title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{facilities[4].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
