import Events from '@/components/events/Events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EVENTS | KABAYAN KONEK',
  description:
    'Discover upcoming events in your community, create and manage events easily, and engage with others. Join Kabayan Konek today!',
  openGraph: {
    title: 'ADVERTISEMENTS | KABAYAN KONEK',
    description:
      'Discover upcoming events in your community, create and manage events easily, and engage with others. Join Kabayan Konek today!',
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
    title: 'EVENTS | KABAYAN KONEK',
    description:
      'Discover upcoming events in your community, create and manage events easily, and engage with others. Join Kabayan Konek today!',
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

const EventsPage = () => {
  return <Events />;
};

export default EventsPage;
