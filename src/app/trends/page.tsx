import Trends from '@/components/trends/Trends';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRENDS  | KABAYAN KONEK',
  description:
    'Explore the latest trends shaping the lives of Filipinos around the world! From travel tips and must-visit destinations to the hottest gadgets and tech updates, Kabayan Konek brings you articles and inspiration tailored for the Filipino community. Dive into insights on health, wellness, food, and culture, as well as events and lifestyle stories that celebrate the vibrant Pinoy spirit. Whether you are looking for practical advice, entertainment updates, or community highlights, Kabayan Konek is your go-to source for staying connected and inspired.',
  keywords:
    'Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino travel trends, Pinoy travel tips, Filipino budget travel, Kabayan travel ideas, Filipino tech gadgets, Pinoy gadget reviews, Filipino gaming devices, Kabayan tech updates, Pinoy community events, Filipino festivals, Kabayan food bazaars, Filipino pop culture trends, Pinoy TikTok challenges, Filipino music trends, Filipino celebrity updates, Kabayan expat tips, Filipino community inspiration, Pinoy entrepreneurship, Filipino diaspora lifestyle, Kabayan tips for living abroad, Filipino beauty trends, Pinoy skincare routines, Filipino health and wellness, Kabayan cooking hacks, Filipino food trends, Pinoy home improvement, Filipino fitness tips, Kabayan productivity hacks, Pinoy relationship advice, Filipino family trends, Kabayan educational resources, Filipino parenting tips, Pinoy pop-up markets, Filipino vlogging gear, Kabayan entertainment trends, Filipino success stories, Pinoy culture worldwide, Filipino living tips, Kabayan lifestyle Finland, Filipino travel Finland, Kabayan living Europe, Filipino tech Europe, Pinoy entertainment USA, Filipino festivals Canada, Kabayan trends Middle East, Pinoy gadgets Australia, Filipino events global, Kabayan culture global, Filipino lifestyle worldwide, Pinoy tips worldwide, Kabayan fashion trends, Filipino health tips, Pinoy travel inspiration, Filipino entertainment worldwide.',

  openGraph: {
    title: 'TRENDS | KABAYAN KONEK',
    description:
      'Explore the latest trends shaping the lives of Filipinos around the world! From travel tips and must-visit destinations to the hottest gadgets and tech updates, Kabayan Konek brings you articles and inspiration tailored for the Filipino community. Dive into insights on health, wellness, food, and culture, as well as events and lifestyle stories that celebrate the vibrant Pinoy spirit. Whether you are looking for practical advice, entertainment updates, or community highlights, Kabayan Konek is your go-to source for staying connected and inspired.',
    url: 'https://kabayankonek.com/trends',
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
    title: 'TRENDS | KABAYAN KONEK',
    description:
      'Explore the latest trends shaping the lives of Filipinos around the world! From travel tips and must-visit destinations to the hottest gadgets and tech updates, Kabayan Konek brings you articles and inspiration tailored for the Filipino community. Dive into insights on health, wellness, food, and culture, as well as events and lifestyle stories that celebrate the vibrant Pinoy spirit. Whether you are looking for practical advice, entertainment updates, or community highlights, Kabayan Konek is your go-to source for staying connected and inspired.',
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
    canonical: 'https://kabayankonek.com/trends',
  },
};

const TrendsPage = () => {
  return <Trends />;
};

export default TrendsPage;
