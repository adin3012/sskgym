'use client';

import React, { useEffect, useRef } from 'react';

const shortTermPlans = [
  {
    id: 'daily',
    title: 'Daily Pass',
    price: 200,
    duration: 'Per Day',
    tag: 'Drop-In',
    featured: false,
    note: 'Walk in anytime during gym hours',
  },
  {
    id: 'admission',
    title: 'Admission Fee',
    price: 1000,
    duration: 'One-Time',
    tag: 'Registration',
    featured: false,
    note: 'One-time joining fee for new members',
  },
  {
    id: 'monthly',
    title: 'Monthly',
    price: 2000,
    duration: '1 Month',
    tag: 'Most Flexible',
    featured: true,
    note: 'Full access, renew every month',
  },
  {
    id: 'student',
    title: 'Student',
    price: 1500,
    duration: '1 Month',
    tag: 'Student Offer',
    featured: false,
    note: 'Valid student ID required',
  },
  {
    id: 'senior-monthly',
    title: 'Senior Citizen',
    price: 1500,
    duration: '1 Month',
    tag: 'Senior Special',
    featured: false,
    note: 'Age 60+ — special care & guidance',
  },
];

const longTermPlans = [
  {
    id: 'quarterly',
    title: 'Quarterly',
    price: 5000,
    duration: '3 Months',
    tag: 'Save More',
    featured: false,
    note: '3 months of uninterrupted training',
  },
  {
    id: 'half-yearly',
    title: 'Half Yearly',
    price: 8000,
    duration: '6 Months',
    tag: 'Popular',
    featured: false,
    note: '6 months, great value',
  },
  {
    id: 'yearly',
    title: 'Yearly',
    price: 14000,
    duration: '12 Months',
    tag: 'Best Value',
    featured: true,
    note: 'Full year, maximum savings',
  },
  {
    id: 'couple',
    title: 'Couple',
    price: 12000,
    duration: '12 Months',
    tag: 'Couple Plan',
    featured: false,
    note: 'Train together, save together',
  },
  {
    id: 'senior-yearly',
    title: 'Senior Citizen',
    price: 12000,
    duration: '12 Months',
    tag: 'Senior Annual',
    featured: false,
    note: 'Age 60+ — full year with dedicated support',
  },
];

type PlanKey = 'short-term' | 'long-term';

export default function MembershipSection() {
  const [activePlan, setActivePlan] = React.useState<PlanKey>('short-term');
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

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

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activePlan]);

  const plans = activePlan === 'short-term' ? shortTermPlans : longTermPlans;

  return (
    <section
      id="membership"
      className="py-20 md:py-24 px-5 md:px-10 bg-[#111111] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E63946]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="reveal-hidden mb-10 text-center">
          <span className="section-label block mb-4">— 2026 Membership Plans</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-4">
            Choose Your
            <br />
            <span className="text-[#E63946]">Commitment</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base font-medium">
            Transparent pricing. All facilities included. No hidden charges.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-white/10 p-1 gap-1">
            <button
              onClick={() => setActivePlan('short-term')}
              className={`px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                activePlan === 'short-term'
                  ? 'bg-[#E63946] text-white'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              Short Term
            </button>
            <button
              onClick={() => setActivePlan('long-term')}
              className={`px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                activePlan === 'long-term'
                  ? 'bg-[#E63946] text-white'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              Long Term
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`membership-card p-6 flex flex-col relative overflow-hidden ${
                plan.featured ? 'featured' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Featured border glow */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />
              )}

              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-[9px] font-black uppercase tracking-[0.3em] px-2 py-1 ${
                    plan.featured
                      ? 'bg-[#E63946] text-white'
                      : 'bg-white/5 text-white/50 border border-white/10'
                  }`}
                >
                  {plan.tag}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                  {plan.duration}
                </span>
              </div>

              {/* Title */}
              <div className="mb-5">
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
                  {plan.title}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-[10px] font-bold text-[#E63946] mb-1">₹</span>
                  <span
                    className={`text-4xl font-black tracking-tighter price-tag ${plan.featured ? 'text-[#E63946]' : 'text-white'}`}
                  >
                    {plan.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mt-1">
                  {plan.note}
                </p>
              </div>

              {/* CTA */}
              <a
                href="tel:8135807345"
                className={`w-full py-3 text-[10px] font-black uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.featured
                    ? 'bg-[#E63946] text-white hover:bg-[#C1121F]'
                    : 'border border-white/15 text-white hover:border-[#E63946] hover:text-[#E63946]'
                }`}
              >
                Enroll Now
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mt-8">
          Call 81358 07345 to enroll · All plans include access to all premium facilities
        </p>
      </div>
    </section>
  );
}
