'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

type RequestType = 'data_deletion' | 'data_export' | 'opt_out' | 'general_inquiry';

const requestTypes: { value: RequestType; label: string; description: string }[] = [
  {
    value: 'data_deletion',
    label: 'Delete My Data',
    description: 'Request permanent deletion of all personal data we hold about you.',
  },
  {
    value: 'data_export',
    label: 'Export My Data',
    description: 'Get a copy of all personal information we have stored for you.',
  },
  {
    value: 'opt_out',
    label: 'Opt Out of Communications',
    description: 'Stop receiving any marketing or promotional messages from us.',
  },
  {
    value: 'general_inquiry',
    label: 'General Privacy Question',
    description: 'Ask us anything about how we handle your data.',
  },
];

interface FormState {
  name: string;
  email: string;
  requestType: RequestType | '';
  message: string;
}

export default function PrivacyPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    requestType: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.requestType) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: dbError } = await supabase.from('privacy_requests').insert({
        name: form.name,
        email: form.email,
        request_type: form.requestType,
        message: form.message || null,
      });

      if (dbError) {
        setError('Something went wrong. Please try again or contact us directly.');
      } else {
        setSuccess(true);
        setForm({ name: '', email: '', requestType: '', message: '' });
      }
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      {/* Top bar */}
      <div className="border-b border-white/5 px-5 md:px-10 py-4 flex items-center justify-between">
        <Link
          href="/homepage"
          className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-[#E63946] transition-colors duration-200"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to SSKGym
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          Privacy Policy
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E63946] block mb-4">
            — Legal
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
            Privacy
            <br />
            <span className="text-outline">Policy</span>
          </h1>
          <p className="text-white/40 text-base font-medium max-w-xl leading-relaxed">
            We respect your privacy and are committed to protecting your personal data. This policy
            explains how SSK Gym collects and uses your information.
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/20 mt-4">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-14" />

        {/* Policy Sections */}
        <div className="space-y-12 mb-20">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">01</span>
              Data We Collect
            </h2>
            <div className="text-white/50 text-sm leading-relaxed space-y-3 pl-8">
              <p>
                When you submit our lead capture form or contact us, we collect your{' '}
                <strong className="text-white/70">name</strong>,{' '}
                <strong className="text-white/70">email address</strong>,{' '}
                <strong className="text-white/70">phone number</strong>, and your{' '}
                <strong className="text-white/70">membership interest</strong>. This data is stored
                securely in our database.
              </p>
              <p>
                We do not collect sensitive personal data such as health records, payment card
                numbers, or government-issued IDs through our website. Membership and payment
                details are handled in-person at our facility.
              </p>
              <p>
                Our website may collect standard server logs including IP addresses and browser
                information for security and performance monitoring. We do not use this data to
                personally identify you.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">02</span>
              How We Use Your Data
            </h2>
            <div className="text-white/50 text-sm leading-relaxed space-y-3 pl-8">
              <p>We use the information you provide solely to:</p>
              <ul className="space-y-2 list-none">
                {[
                  'Contact you about your membership inquiry',
                  'Provide information about our plans, pricing, and facilities',
                  'Follow up on leads submitted through our website form',
                  'Improve our services based on general feedback',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#E63946] font-black mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                We will never sell, rent, or share your personal information with third-party
                marketing companies without your explicit consent.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">03</span>
              Data Storage &amp; Security
            </h2>
            <div className="text-white/50 text-sm leading-relaxed space-y-3 pl-8">
              <p>
                Your data is stored on secure servers powered by Supabase with row-level security
                policies enforced. All data in transit is encrypted using TLS/HTTPS.
              </p>
              <p>
                We retain lead and contact form data for a maximum of{' '}
                <strong className="text-white/70">24 months</strong> from submission, after which it
                is permanently deleted unless a membership relationship exists.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">04</span>
              Cookies
            </h2>
            <div className="text-white/50 text-sm leading-relaxed pl-8">
              <p>
                Our website uses only essential cookies required for session management and
                security. We do not use tracking cookies or third-party advertising cookies. No
                consent banner is required as we do not use non-essential cookies.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">05</span>
              Your Rights
            </h2>
            <div className="text-white/50 text-sm leading-relaxed space-y-3 pl-8">
              <p>You have the right to:</p>
              <ul className="space-y-2 list-none">
                {[
                  'Access the personal data we hold about you',
                  'Request correction of inaccurate data',
                  'Request deletion of your data (right to be forgotten)',
                  'Opt out of any marketing communications',
                  'Receive a copy of your data in a portable format',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#E63946] font-black mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                To exercise any of these rights, use the form below or contact us directly at{' '}
                <a href="tel:8135807345" className="text-[#E63946] font-bold hover:underline">
                  81358 07345
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4 flex items-center gap-3">
              <span className="text-[#E63946] font-black text-sm">06</span>
              Contact &amp; Grievances
            </h2>
            <div className="text-white/50 text-sm leading-relaxed pl-8">
              <p>
                For any privacy concerns or to reach our data protection officer, visit us in person
                at{' '}
                <strong className="text-white/70">
                  Lakhimi Path, Beltola Tiniali, Guwahati – 781028
                </strong>
                , or call{' '}
                <a href="tel:8135807345" className="text-[#E63946] font-bold hover:underline">
                  81358 07345
                </a>
                . We aim to respond to all privacy requests within{' '}
                <strong className="text-white/70">7 business days</strong>.
              </p>
            </div>
          </section>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-14" />

        {/* Privacy Request Form */}
        <div id="privacy-request">
          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E63946] block mb-4">
              — Data Request
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase mb-4">
              Submit a
              <br />
              <span className="text-outline">Privacy Request</span>
            </h2>
            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-lg">
              Use this form to exercise your data rights. We will process your request and respond
              within 7 business days.
            </p>
          </div>

          {success ? (
            <div className="contact-card p-10 text-center max-w-2xl">
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
                Request Received
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                We have received your privacy request and will respond to{' '}
                <strong className="text-white/70">{form.email || 'your email'}</strong> within 7
                business days.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-[#E63946] transition-colors duration-200"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-card p-8 md:p-10 max-w-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />

              <div className="flex flex-col gap-5">
                {/* Request Type Cards */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">
                    Request Type <span className="text-[#E63946]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {requestTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex flex-col gap-1 p-4 border cursor-pointer transition-all duration-200 ${
                          form.requestType === type.value
                            ? 'border-[#E63946]/60 bg-[#E63946]/5'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="requestType"
                          value={type.value}
                          checked={form.requestType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`text-[11px] font-black uppercase tracking-wider ${form.requestType === type.value ? 'text-[#E63946]' : 'text-white/70'}`}
                        >
                          {type.label}
                        </span>
                        <span className="text-[11px] text-white/35 leading-relaxed">
                          {type.description}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                    Full Name <span className="text-[#E63946]">*</span>
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
                    Email Address <span className="text-[#E63946]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="The email you submitted to us"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                    Additional Details <span className="text-white/20">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any additional context for your request..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm font-medium px-4 py-3 focus:outline-none focus:border-[#E63946]/60 transition-colors duration-200 resize-none"
                  />
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
                      Submit Request
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

                <p className="text-[10px] text-white/25 text-center leading-relaxed">
                  We will respond to your request within 7 business days via the email address
                  provided.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/5 px-5 md:px-10 py-6 flex items-center justify-between">
        <p className="text-[11px] font-medium text-white/20">
          © {new Date().getFullYear()} SSKGym · Beltola Tiniali, Guwahati
        </p>
        <Link
          href="/homepage"
          className="text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-[#E63946] transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
