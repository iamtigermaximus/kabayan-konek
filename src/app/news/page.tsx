import News from '@/components/news/News';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEWS | KABAYAN KONEK',
  description:
    'Stay updated with the latest news and articles from Kabayan Konek, covering Filipino culture, events, and community updates in Finland.',
  keywords:
    'Filipino news, Kabayan Konek news, Filipino community Finland, Pinoy news Finland, Kabayan updates, Filipino culture news, Kabayan Konek articles, Filipino expat news, Filipino lifestyle news, Pinoy news updates, Kabayan community Finland',

  openGraph: {
    title: 'NEWS | KABAYAN KONEK',
    description:
      'Stay updated with the latest news and articles from Kabayan Konek, covering Filipino culture, events, and community updates in Finland.',
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
      'Stay updated with the latest news and articles from Kabayan Konek, covering Filipino culture, events, and community updates in Finland.',
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
    canonical: 'https://kabayankonek.com/news',
  },
};

const NewsPage = () => {
  return <News />;
};
export default NewsPage;
