import Lifestyle from '@/components/lifestyle/Lifestyle';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIFESTYLE  | KABAYAN KONEK',
  description:
    'Explore the latest lifestyle articles, tips, and inspiration on Kabayan Konek',
  keywords:
    'Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino tips and inspiration, Pinoy community Finland, Filipino living in Finland, Filipino events, Filipino culture in Finland, Filipino expats tips, Pinoy lifestyle articles, Kabayan Konek articles, Filipino fashion and trends, Filipino food, Filipino health and wellness, Pinoy travel tips, Filipino entertainment, Filipino lifestyle Europe, Kabayan lifestyle Europe, Pinoy lifestyle Europe, Filipino expat life Europe, Filipino culture Europe, Kabayan Konek Europe, Filipino tips Europe, Pinoy community Europe, Filipino living in Europe, Filipino events Europe, Filipino expats tips Europe, Filipino fashion Europe, Filipino food Europe, Filipino health Europe, Pinoy travel tips Europe, Filipino entertainment Europe, Filipino lifestyle USA, Kabayan lifestyle USA, Pinoy lifestyle USA, Filipino expat life USA, Filipino culture USA, Kabayan Konek USA, Filipino tips USA, Pinoy community USA, Filipino living in USA, Filipino events USA, Filipino expats tips USA, Filipino fashion USA, Filipino food USA, Filipino health USA, Pinoy travel tips USA, Filipino entertainment USA, Filipino lifestyle Canada, Kabayan lifestyle Canada, Pinoy lifestyle Canada, Filipino expat life Canada, Filipino culture Canada, Kabayan Konek Canada, Filipino tips Canada, Pinoy community Canada, Filipino living in Canada, Filipino events Canada, Filipino expats tips Canada, Filipino fashion Canada, Filipino food Canada, Filipino health Canada, Pinoy travel tips Canada, Filipino entertainment Canada, Filipino lifestyle Australia, Kabayan lifestyle Australia, Pinoy lifestyle Australia, Filipino expat life Australia, Filipino culture Australia, Kabayan Konek Australia, Filipino tips Australia, Pinoy community Australia, Filipino living in Australia, Filipino events Australia, Filipino expats tips Australia, Filipino fashion Australia, Filipino food Australia, Filipino health Australia, Pinoy travel tips Australia, Filipino entertainment Australia, Filipino lifestyle Middle East, Kabayan lifestyle Middle East, Pinoy lifestyle Middle East, Filipino expat life Middle East, Filipino culture Middle East, Kabayan Konek Middle East, Filipino tips Middle East, Pinoy community Middle East, Filipino living in Middle East, Filipino events Middle East, Filipino expats tips Middle East, Filipino fashion Middle East, Filipino food Middle East, Filipino health Middle East, Pinoy travel tips Middle East, Filipino entertainment Middle East, Filipino lifestyle worldwide, Kabayan lifestyle worldwide, Pinoy lifestyle worldwide, Filipino expat life worldwide, Filipino culture worldwide, Kabayan Konek global, Filipino tips worldwide, Pinoy community worldwide, Filipino living worldwide, Filipino events worldwide, Filipino expats tips worldwide, Filipino fashion worldwide, Filipino food worldwide, Filipino health worldwide, Pinoy travel tips worldwide, Filipino entertainment worldwide',

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
