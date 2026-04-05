'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const membershipOptions = [
  'Daily Pass',
  'Monthly (₹2,000)',
  'Student Monthly (₹1,500)',
  'Senior Citizen Monthly (₹1,500)',
  'Quarterly (₹5,000)',
  'Half Yearly (₹8,000)',
  'Yearly (₹14,000)',
  'Couple Plan (₹12,000)',
  'Senior Citizen Yearly (₹12,000)',
  'Not Sure Yet',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  membershipInterest: string;
}

export default function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    membershipInterest: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.membershipInterest) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: dbError } = await supabase.from('gym_leads').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        membership_interest: form.membershipInterest,
      });

      if (dbError) {
        setError('Something went wrong. Please try again.');
      } else {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', membershipInterest: '' });
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="get-started"
      className="py-20 md:py-24 px-5 md:px-10 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E63946]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="section-label block mb-4">— Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase mb-4">
            Join <span className="text-[#E63946]">SSK Gym</span>
            <br />
            <span className="text-outline">Today</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base font-medium">
            Fill in your details and we&apos;ll get back to you with the best plan.
          </p>
        </div>

        {success ? (
          <div className="contact-card p-10 text-center">
            <div className="w-16 h-16 bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E63946"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">
              We Got Your Details!
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Our team will reach out to you shortly. You can also call us directly at{' '}
              <a href="tel:8135807345" className="text-[#E63946] font-bold">
                81358 07345
              </a>
              .
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-[#E63946] transition-colors duration-200"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-card p-8 md:p-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />

            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200"
                />
              </div>

              {/* Membership Interest */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                  Membership Interest
                </label>
                <select
                  name="membershipInterest"
                  value={form.membershipInterest}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" disabled className="bg-[#111111]">
                    Select a plan
                  </option>
                  {membershipOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#111111]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error */}
              {error && (
                <p className="text-[11px] font-bold text-[#E63946] uppercase tracking-widest">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E63946] text-white text-[11px] font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#C1121F] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Send My Details
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
