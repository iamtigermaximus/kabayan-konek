import ProfileFeature from '@/components/profile-feature/ProfileFeature';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KABAYAN SPOTLIGHT | KABAYAN KONEK',
  description:
    'Discover inspiring stories from the Kabayan community and learn about the profiles making a difference in the world.',
  openGraph: {
    title: 'KABAYAN SPOTLIGHT | KABAYAN KONEK',
    description:
      'Discover inspiring stories from the Kabayan community and learn about the profiles making a difference in the world.',
    url: 'https://kabayankonek.com/profile',
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
    title: 'KABAYAN SPOTLIGHT | KABAYAN KONEK',
    description:
      'Discover inspiring stories from the Kabayan community and learn about the profiles making a difference in the world.',
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
    canonical: 'https://kabayankonek.com/profile',
  },
};

const ProfileFeaturePage = () => {
  return <ProfileFeature />;
};

export default ProfileFeaturePage;
