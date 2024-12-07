import Home from '@/components/home/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOME | KABAYAN KONEK',
  description:
    'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
  keywords:
    'Kabayan Konek, Kabayan, Kababayan, OFW, Overseas Filipino Workers, Pinoy community in Finland, Filipino community in Finland, Pinoys in Finland, Filipinos in Finland, Filipino marketplace Finland, Pinoy marketplace Finland, Pinoy lifestyle Finland, Filipino lifestyle Finland, Filipino news Finland, Pinoy news Finland, Pinoy events Finland, Kabayan lifestyle Finland, Pinoy culture Finland, Filipino expats Finland, Pinoy expats Finland, Pinoy business Finland, Filipino business Finland, Pinoy products Finland, Filipino products Finland, Filipino culture in Finland, Connecting Pinoys Finland, Connecting Filipinos Finland, Pinoy community hub Finland, Filipino community hub Finland, Pinoy online community Finland, Filipino online community Finland, Filipino lifestyle blog Finland, Finnish lifestyle for Pinoys, Finnish lifestyle for Filipinos, Pinoy resources Finland, Filipino resources Finland, Pinoy networking Finland, Filipino networking Finland, Filipino traditions in Finland, Pinoy food in Finland, Filipino gatherings in Finland, Support for OFWs in Finland, Filipino integration in Finland, Filipino events calendar Finland, Kabayan support system, Filipino goods in Europe, Filipino expats in Europe, Pinoy expat groups, Pinoy families in Finland, Filipino student community Finland, Filipino professionals in Finland, Kabayan connection platform, Pinoy heritage in Finland, Filipino cultural preservation Finland, Filipino community activities, Pinoy local services Finland, Pinoy friendship groups Finland, OFW life in Finland, Filipino organizations Finland, Pinoy diaspora in Finland, Filipino business directory Finland, Promoting Filipino culture Finland, Filipino event organizers Finland, Kabayan marketplace hub, Filipino social network Finland',

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
