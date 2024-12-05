import News from '@/components/news/News';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEWS | KABAYAN KONEK',
  description:
    'Stay updated with the latest news and articles from Kabayan Konek.',
  keywords:
    'Filipino news, Kabayan news, Pinoy news, Filipino community news, Kabayan Konek, news articles, Kabayan Konek news, Filipino news Finland, Pinoy news Finland, Filipino culture news, Filipino events, Kabayan updates, Kabayan community updates, Filipino lifestyle news, Pinoy news updates, Filipino stories, news for Filipinos, Filipino events in Finland, Kabayan Konek articles, Pinoy news and stories, Filipino expat news, Pinoy expat news, news for Pinoys in Finland, Kabayan Konek spotlight, Filipino expats in Finland, Kabayan community Finland',

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
  alternates: {
    canonical: 'https://kabayankonek.com/news',
  },
};

const NewsPage = () => {
  return <News />;
};
export default NewsPage;
