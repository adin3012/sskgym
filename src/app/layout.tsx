import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'SSKGym — Premium Fitness in Guwahati',
  description:
    'SSK Gym at Beltola Tiniali, Guwahati offers premium fitness facilities including steam bath, InBody assessment, and personal training from ₹5000.',
  keywords: [
    'gym in Guwahati',
    'fitness center',
    'personal training',
    'steam bath',
    'InBody assessment',
    'premium gym',
  ],
  alternates: {
    canonical: 'https://sskgym1690.builtwithrocket.new',
  },
  openGraph: {
    type: 'website',
    url: 'https://sskgym1690.builtwithrocket.new',
    title: 'SSKGym — Premium Fitness',
    description:
      "Guwahati's premier gym with steam bath, InBody assessment, and expert trainers. Join now from ₹5000.",
    siteName: 'SSKGym',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'SSKGym logo — premium fitness center in Guwahati with state-of-the-art facilities',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSKGym — Premium Fitness in Guwahati',
    description:
      "Guwahati's premier gym with steam bath, InBody assessment, and expert trainers. Join now from ₹5000.",
    images: ['/assets/images/app_logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://img.rocket.new" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
