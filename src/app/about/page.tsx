import About from '@/components/about/About';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT US | KABAYAN KONEK',
  description:
    'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
  keywords:
    'Kabayan Konek, Filipino community in Finland, Pinoy culture, Filipino lifestyle, Kabayan Konek Finland, Filipino events in Finland, Filipino news and events, Pinoy lifestyle platform, Filipino online community, connect Filipinos in Finland, Kabayan platform Finland, share Filipino culture Finland, Filipino community hub, Filipino lifestyle website, Kabayan news Finland, Filipino marketplace Finland, Filipino community Europe, Pinoy community Europe, Kabayan Konek Europe, Filipino culture Europe, Filipino lifestyle Europe, Filipino news and events Europe, Filipino events Europe, Filipino online community Europe, Kabayan platform Europe, Filipino community hub Europe, share Filipino culture Europe, Filipino lifestyle website Europe, Filipino news Europe, Filipino marketplace Europe, Filipino community USA, Pinoy community USA, Kabayan Konek USA, Filipino culture USA, Filipino lifestyle USA, Filipino news and events USA, Filipino events USA, Filipino online community USA, Kabayan platform USA, share Filipino culture USA, Filipino community hub USA, Filipino lifestyle website USA, Kabayan news USA, Filipino marketplace USA, Filipino community Canada, Pinoy community Canada, Kabayan Konek Canada, Filipino culture Canada, Filipino lifestyle Canada, Filipino news and events Canada, Filipino events Canada, Filipino online community Canada, Kabayan platform Canada, share Filipino culture Canada, Filipino community hub Canada, Filipino lifestyle website Canada, Kabayan news Canada, Filipino marketplace Canada, Filipino community Australia, Pinoy community Australia, Kabayan Konek Australia, Filipino culture Australia, Filipino lifestyle Australia, Filipino news and events Australia, Filipino events Australia, Filipino online community Australia, Kabayan platform Australia, share Filipino culture Australia, Filipino community hub Australia, Filipino lifestyle website Australia, Kabayan news Australia, Filipino marketplace Australia, Filipino community Middle East, Pinoy community Middle East, Kabayan Konek Middle East, Filipino culture Middle East, Filipino lifestyle Middle East, Filipino news and events Middle East, Filipino events Middle East, Filipino online community Middle East, Kabayan platform Middle East, share Filipino culture Middle East, Filipino community hub Middle East, Filipino lifestyle website Middle East, Kabayan news Middle East, Filipino marketplace Middle East, Filipino community worldwide, Pinoy community worldwide, Kabayan Konek global, Filipino culture worldwide, Filipino lifestyle worldwide, Filipino news and events worldwide, Filipino events worldwide, Filipino online community worldwide, Kabayan platform global, share Filipino culture globally, Filipino community hub worldwide, Filipino lifestyle website worldwide, Kabayan news worldwide, Filipino marketplace worldwide',
  openGraph: {
    title: 'ABOUT US | KABAYAN KONEK',
    description:
      'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',

    url: 'https://kabayankonek.com/about',
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
    title: 'ABOUT US | KABAYAN KONEK',
    description:
      'Learn about Kabayan Konek, a platform connecting Filipinos in Finland to share their culture, lifestyle, and community events.',
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
    canonical: 'https://kabayankonek.com/about',
  },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
