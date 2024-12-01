import './globals.css';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { NextAuthProvider } from './providers/sessionProviders';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Kabayan Konek',
  description: 'A platform connecting Filipinos in Finland.',
  openGraph: {
    title: 'Kabayan Konek',
    description: 'A platform connecting Filipinos in Finland.',
    url: 'https://kabayankonek.com',
    images: [
      {
        url: 'https://example.com/og-image.png',
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
      <body>
        <div>
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
        </div>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
