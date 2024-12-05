import ProfileFeature from '@/components/profile-feature/ProfileFeature';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KABAYAN SPOTLIGHT | KABAYAN KONEK',
  description:
    'Discover inspiring stories from the Kabayan community and learn about the profiles making a difference in the world.',
  keywords:
    'Kabayan Spotlight, OFW Stories, Filipino Family in Finland, Pinoy Family in Finland,Kabayan community, Filipino profiles, Pinoy profiles, inspiring Pinoy stories, Filipino achievements, Filipino leaders, Kabayan success stories, Pinoy success stories, Filipino personalities, Pinoy personalities, Filipino influencers, Pinoy influencers, Filipino culture, Pinoy culture, Filipino heroes, Pinoy heroes, Filipinos making a difference, Filipino empowerment, Pinoy empowerment, Filipinos in Finland, Filipino expats, Pinoy expats, Kabayan spotlight Finland, Filipino stories Finland, Pinoy stories Finland, Kabayan Konek community, Filipino community Finland, Filipino culture in Finland, Filipino leaders in Finland, Filipino role models',

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
