import Home from '@/components/home/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOME | KABAYAN KONEK',
  description:
    'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
  openGraph: {
    title: 'HOME| KABAYAN KONEK',
    description:
      'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
    url: 'https://kabayankonek.com/',
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
    title: 'HOME | KABAYAN KONEK',
    description:
      'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
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

const HomePage = () => {
  return <Home />;
};

export default HomePage;
