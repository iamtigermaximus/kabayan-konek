import AdvertisementDetails from '@/components/advertisement/advertisement-details/AdvertisementDetails';
import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADVERTISEMENTS | KABAYAN KONEK',
  description:
    "Post your advertisements to reach the Filipino community in Finland. Whether it's jobs, services, or events, create an ad today!",
  openGraph: {
    title: 'ADVERTISEMENTS | KABAYAN KONEK',
    description:
      "Post your advertisements to reach the Filipino community in Finland. Whether it's jobs, services, or events, create an ad today!",
    url: 'https://kabayankonek.com/advertisement',
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
    title: 'ADVERTISEMENTS | KABAYAN KONEK',
    description:
      "Post your advertisements to reach the Filipino community in Finland. Whether it's jobs, services, or events, create an ad today!",
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
    canonical: 'https://kabayankonek.com/advertisement',
  },
};

const AdvertisementDetailsPage = () => {
  return <AdvertisementDetails />;
};

export default AdvertisementDetailsPage;
