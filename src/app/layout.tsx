import './globals.css';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { NextAuthProvider } from './providers/sessionProviders';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Kabayan Konek',
  description:
    'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
  openGraph: {
    title: 'Kabayan Konek',
    description: 'A platform connecting Filipinos in Finland.',
    url: 'https://kabayankonek.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
        width: 1200,
        height: 630,
        alt: 'Kabayan Konek Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="text/javascript"
          src="https://upload-widget.cloudinary.com/global/all.js"
          async
        ></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
