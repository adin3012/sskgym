'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaInjector from '@/components/SchemaInjector';
import HeroSection from './components/HeroSection';
import FacilitiesSection from './components/FacilitiesSection';
import MembershipSection from './components/MembershipSection';
import TrainerSection from './components/TrainerSection';
import ContactSection from './components/ContactSection';
import LeadCaptureForm from './components/LeadCaptureForm';

export default function HomepagePage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
      <SchemaInjector />
      <Header />
      <HeroSection />
      <FacilitiesSection />
      <MembershipSection />
      <LeadCaptureForm />
      <TrainerSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
