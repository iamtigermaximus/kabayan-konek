import About from '@/components/about/About';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT US | KABAYAN KONEK',
  description:
    'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
  keywords:
    'Kabayan Konek, Filipino community in Finland, Pinoy culture, Filipino lifestyle, Kabayan Konek Finland, Filipino events in Finland, Filipino news and events, Pinoy lifestyle platform, Filipino online community, connect Filipinos in Finland, Kabayan platform Finland, share Filipino culture Finland, Filipino community hub, Filipino lifestyle website, Kabayan news Finland, Filipino marketplace Finland',

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
