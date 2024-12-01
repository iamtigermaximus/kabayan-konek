import About from '@/components/about/About';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT US | KABAYAN KONEK',
  description:
    'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
  openGraph: {
    title: 'ABOUT US | KABAYAN KONEK',
    description:
      'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
    url: 'https://kabayankonek.com/about',
    images: [
      {
        url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
        width: 1200,
        height: 630,
        alt: 'Kabayan Konek Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'ABOUT US | KABAYAN KONEK',
    description:
      'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
    images: [
      {
        url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
        width: 1200,
        height: 630,
        alt: 'Kabayan Konek Image',
      },
    ],
    card: 'summary_large_image',
  },

  alternates: {
    canonical: 'https://kabayankonek.com/about',
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
