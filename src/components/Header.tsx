'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-5 md:px-10 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2 group">
          <AppLogo src="/assets/ssk-gym-logo.svg" size={44} className="" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:8135807345"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#E63946] border border-[#E63946]/30 px-5 py-2.5 hover:bg-[#E63946] hover:text-white transition-all duration-300"
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
            Join Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-5 right-5 p-2 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-12">
          <AppLogo src="/assets/ssk-gym-logo.svg" size={56} />
        </div>

        <nav className="flex flex-col gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-black uppercase tracking-tight text-white/80 hover:text-[#E63946] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/privacy"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-black uppercase tracking-tight text-white/80 hover:text-[#E63946] transition-colors duration-200"
          >
            Privacy
          </Link>
        </nav>

        <a
          href="tel:8135807345"
          className="mt-12 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white bg-[#E63946] px-8 py-4"
          onClick={() => setMenuOpen(false)}
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
          Call: 81358 07345
        </a>

        <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          Beltola Tiniali · Guwahati
        </div>
      </div>
    </>
  );
}
