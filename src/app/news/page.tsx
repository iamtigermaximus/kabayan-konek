import News from '@/components/news/News';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEWS | KABAYAN KONEK',
  description:
    'Stay updated with the latest news and articles from Kabayan Konek.',
  openGraph: {
    title: 'NEWS | KABAYAN KONEK',
    description:
      'Stay updated with the latest news and articles from Kabayan Konek.',
    url: 'https://kabayankonek.com/news',
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
    title: 'NEWS | KABAYAN KONEK',
    description:
      'Stay updated with the latest news and articles from Kabayan Konek.',
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
};

const NewsPage = () => {
  return <News />;
};
export default NewsPage;
