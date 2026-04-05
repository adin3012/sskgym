import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo + Brand */}
        <Link href="/homepage" className="flex items-center gap-2">
          <AppLogo src="/assets/ssk-gym-logo.svg" size={40} />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-[13px] font-medium text-white/40">
          <button
            onClick={() =>
              document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-white transition-colors"
          >
            Facilities
          </button>
          <button
            onClick={() =>
              document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-white transition-colors"
          >
            Membership
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[12px] font-medium text-white/20">
          © {new Date().getFullYear()} SSKGym. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
