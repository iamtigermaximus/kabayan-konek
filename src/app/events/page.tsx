import Events from '@/components/events/Events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover Filipino Community Event | KABAYAN KONEK',
  description:
    'Explore upcoming events in the Filipino community in Finland. Join Kabayan Konek to stay connected and participate in exciting activities!',
  keywords:
    'Filipino community events, Kabayan Konek events, Pinoy gatherings Finland, Filipino festivals Finland, Filipino cultural events',

  openGraph: {
    title: 'Discover Filipino Community Event | KABAYAN KONEK',
    description:
      'Explore upcoming events in the Filipino community in Finland. Join Kabayan Konek to stay connected and participate in exciting activities!',

    url: 'https://kabayankonek.com/events',
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
    title: 'Discover Filipino Community Event| KABAYAN KONEK',
    description:
      'Explore upcoming events in the Filipino community in Finland. Join Kabayan Konek to stay connected and participate in exciting activities!',
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
    canonical: 'https://kabayankonek.com/events',
  },
};

const EventsPage = () => {
  return <Events />;
};

export default EventsPage;
