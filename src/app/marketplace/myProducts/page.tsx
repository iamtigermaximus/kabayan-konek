import MyPostedProducts from '@/components/marketplace/myProducts/MyPostedProducts';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MARKETPLACE  | KABAYAN KONEK',
  description:
    'Explore products for sale in the Kabayan Konek marketplace. Buy and sell electronics, fashion, home items, and more.',
  keywords:
    'Filipino marketplace, Kabayan marketplace, Pinoy marketplace, buy Filipino products, sell Filipino products, Kabayan Konek marketplace, Filipino electronics, Filipino fashion, Pinoy fashion, Filipino home items, Filipino marketplace Finland, Pinoy products for sale, Filipino online shopping, Kabayan Konek buy and sell, e-commerce for Filipinos, Filipino goods, Pinoy products marketplace, Filipino community marketplace, Filipino expats buy and sell, online store for Filipinos, Kabayan marketplace Finland, secondhand products marketplace',

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

const MyPostedProductsPage = () => {
  return <MyPostedProducts />;
};

export default MyPostedProductsPage;
