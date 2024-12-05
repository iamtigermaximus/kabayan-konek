import LifestyleDetails from '@/components/lifestyle/lifestyle-details/LifestyleDetails';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIFESTYLE  | KABAYAN KONEK',
  description:
    'Explore the latest lifestyle articles, tips, and inspiration on Kabayan Konek',
  keywords:
    'Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino tips and inspiration, Pinoy community Finland, Filipino living in Finland, Filipino events, Filipino culture in Finland, Filipino expats tips, Pinoy lifestyle articles, Kabayan Konek articles, Filipino fashion and trends, Filipino food, Filipino health and wellness, Pinoy travel tips, Filipino entertainment',

  openGraph: {
    title: 'ADVERTISEMENTS | KABAYAN KONEK',
    description:
      'Explore the latest lifestyle articles, tips, and inspiration on Kabayan Konek',
    url: 'https://kabayankonek.com/lifestyle',
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
    title: 'LIFESTYLE | KABAYAN KONEK',
    description:
      'Explore the latest lifestyle articles, tips, and inspiration on Kabayan Konek',
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
    canonical: 'https://kabayankonek.com/lifestyle',
  },
};

const LifestyleDetailsPage = () => {
  return <LifestyleDetails />;
};

export default LifestyleDetailsPage;
