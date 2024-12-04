import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PRIVACY POLICY  | KABAYAN KONEK',
  description:
    'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
  openGraph: {
    title: 'PRIVACY POLICY  | KABAYAN KONEK',
    description:
      'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
    url: 'https://kabayankonek.com/privacy-policy',
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
    title: 'PRIVACY POLICY | KABAYAN KONEK',
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

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
