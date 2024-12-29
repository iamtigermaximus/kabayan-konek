import './globals.css';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { NextAuthProvider } from './providers/sessionProviders';
// import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

// export const metadata: Metadata = {
//   title: 'KABAYAN KONEK',
//   description:
//     'Kabayan Konek is a platform that connects Filipinos in Finland, offering lifestyle content, news, local events, a marketplace, and a community hub. Stay informed, share experiences, and engage with kababayans through our spotlight features and advertisements.',
//   openGraph: {
//     title: 'KABAYAN KONEK',
//     description: 'A platform connecting Filipinos in Finland.',
//     url: 'https://kabayankonek.com',
//     images: [
//       {
//         url: 'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png',
//         width: 1200,
//         height: 630,
//         alt: 'Kabayan Konek Logo',
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google Adsense Script */}

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2534929702759944"
          crossOrigin="anonymous"
        />

        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-H0PBMXTEBB`} // Replace with your GA4 ID
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H0PBMXTEBB', { page_path: window.location.pathname });
            `,
          }}
        ></script>
        <script
          type="text/javascript"
          src="https://upload-widget.cloudinary.com/global/all.js"
          async
        ></script>

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.kabayankonek.com/" />

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
          <Analytics />
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
