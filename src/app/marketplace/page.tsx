import MarketPlace from '@/components/marketplace/Marketplace';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MARKETPLACE  | KABAYAN KONEK',
  description:
    'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
  openGraph: {
    title: 'MARKETPLACE | KABAYAN KONEK',
    description:
      'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
    url: 'https://kabayankonek.com/marketplace',
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
    title: 'MARKETPLACE | KABAYAN KONEK',
    description:
      'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
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
    canonical: 'https://kabayankonek.com/marketplace',
  },
};

const MarketplacePage = () => {
  return <MarketPlace />;
};

export default MarketplacePage;
