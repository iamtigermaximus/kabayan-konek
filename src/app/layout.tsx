import './globals.css';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { NextAuthProvider } from './providers/sessionProviders';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Add Cloudinary's upload widget script */}
        <script
          type="text/javascript"
          src="https://upload-widget.cloudinary.com/global/all.js"
          async
        ></script>
        {/* Global Metadata */}
        <meta
          name="description"
          content="Kabayan Konek is a community hub for Filipinos in Finland, offering lifestyle content, events, marketplace, and advertisements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:title" content="Kabayan Konek" />
        <meta
          property="og:description"
          content="Connecting Filipinos in Finland through local events, marketplace, and more."
        />
        <meta
          property="og:image"
          content="https://kabayankonek.com/default-image.jpg"
        />
        <meta property="og:url" content="https://kabayankonek.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kabayan Konek" />
        <meta
          name="twitter:description"
          content="Kabayan Konek is a community hub for Filipinos in Finland."
        />
        <meta
          name="twitter:image"
          content="https://kabayankonek.com/default-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
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
