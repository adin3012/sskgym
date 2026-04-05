import { LocalBusiness, Organization, WebPage, FAQPage, WithContext } from 'schema-dts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sskgym1690.builtwithrocket.new';

export const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${siteUrl}#local-business`,
  name: 'SSK Gym',
  alternateName: 'SSKGym',
  description:
    'Premium fitness center in Guwahati offering state-of-the-art facilities, personal training, and wellness services.',
  url: siteUrl,
  telephone: '+918135807345',
  email: 'contact@sskgym.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lakhimi Path, Beltola Tiniali',
    addressLocality: 'Guwahati',
    addressRegion: 'Assam',
    postalCode: '781028',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.1445,
    longitude: 91.7362,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '05:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '05:00',
      closes: '12:00',
    },
  ],
  image: `${siteUrl}/assets/images/app_logo.png`,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/assets/images/app_logo.png`,
    width: { '@type': 'QuantitativeValue', value: 200 },
    height: { '@type': 'QuantitativeValue', value: 200 },
  },
  priceRange: '₹5000 - ₹10800',
  areaServed: {
    '@type': 'City',
    name: 'Guwahati',
  },
  foundingDate: '2020',
  sameAs: ['https://www.facebook.com/sskgym', 'https://www.instagram.com/sskgym'],
};

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}#organization`,
  name: 'SSK Gym',
  url: siteUrl,
  logo: `${siteUrl}/assets/images/app_logo.png`,
  description:
    'Premium fitness center in Guwahati with steam bath, InBody assessment, and expert personal trainers.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lakhimi Path, Beltola Tiniali',
    addressLocality: 'Guwahati',
    addressRegion: 'Assam',
    postalCode: '781028',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+918135807345',
    availableLanguage: ['en', 'hi', 'as'],
  },
  sameAs: ['https://www.facebook.com/sskgym', 'https://www.instagram.com/sskgym'],
};

export const webPageSchema: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}#webpage`,
  url: siteUrl,
  name: 'SSKGym — Premium Fitness in Guwahati',
  description:
    'SSK Gym at Beltola Tiniali, Guwahati offers premium fitness facilities including steam bath, InBody assessment, and personal training from ₹5000.',
  isPartOf: {
    '@id': `${siteUrl}#website`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${siteUrl}/assets/images/app_logo.png`,
    width: { '@type': 'QuantitativeValue', value: 1200 },
    height: { '@type': 'QuantitativeValue', value: 630 },
  },
  datePublished: '2020-01-01',
  dateModified: new Date().toISOString(),
  inLanguage: 'en-IN',
};

export const faqPageSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: "What are SSK Gym's operating hours?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SSK Gym is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sunday from 5:00 AM to 12:00 Noon. Timings may vary on public holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'What facilities are included in the membership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All memberships include full gym access, electric massage chair, steam bath, InBody assessment, Kangen water, and locker facility. No hidden fees or extras.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the membership prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Half-yearly memberships start from ₹5000 for students, ₹6000 for groups (3+ people), and ₹6500 for individuals. Yearly memberships start from ₹9000 for groups and ₹10800 for individuals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer personal training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SSK Gym has certified personal trainers specializing in strength training, weight loss, muscle gain, and sports nutrition. Get 10% discount on personal training with longer membership plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is InBody assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'InBody assessment is a professional body composition analysis that measures muscle mass, body fat percentage, and metabolic rate. It helps track your fitness progress accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a joining fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, SSK Gym has no joining fee. You can start your membership immediately with transparent pricing and no hidden charges.',
      },
    },
  ],
};

export const allSchemas = [localBusinessSchema, organizationSchema, webPageSchema, faqPageSchema];
