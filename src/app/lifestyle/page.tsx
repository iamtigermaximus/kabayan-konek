import Lifestyle from '@/components/lifestyle/Lifestyle';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIFESTYLE  | KABAYAN KONEK',
  description:
    'Explore the latest lifestyle articles, tips, and inspiration on Kabayan Konek',
  keywords:
    'Filipino lifestyle, Kabayan Konek lifestyle, Pinoy lifestyle, Filipino expat life, Filipino culture, Filipino community, lifestyle for Filipinos, Kabayan Konek Finland, Filipino tips, Filipino culture Finland, Filipino food, Filipino health, Filipino entertainment',
  openGraph: {
    title: 'LIFESTYLE | KABAYAN KONEK',
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

const LifestylePage = () => {
  return <Lifestyle />;
};

export default LifestylePage;
