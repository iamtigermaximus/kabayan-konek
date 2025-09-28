import About from "@/components/about/About";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kabayan Konek | Connecting Filipinos in Finland",
  description:
    "Discover Kabayan Konek, a platform dedicated to connecting Filipinos in Finland. Learn about our mission, values, and community initiatives.",
  keywords:
    "Kabayan Konek, Filipino community Finland, Pinoy culture, Filipino events Finland, Kabayan platform Finland",
  openGraph: {
    title: "About Kabayan Konek | Connecting Filipinos in Finland",
    description:
      "Discover Kabayan Konek, a platform dedicated to connecting Filipinos in Finland. Learn about our mission, values, and community initiatives.",

    // url: 'https://kabayankonek.com/about',
    images: [
      {
        url: "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
        width: 1200,
        height: 630,
        alt: "Kabayan Konek Image",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "About Kabayan Konek | Connecting Filipinos in Finland",
    description:
      "Discover Kabayan Konek, a platform dedicated to connecting Filipinos in Finland. Learn about our mission, values, and community initiatives.",
    images: [
      {
        url: "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
        width: 1200,
        height: 630,
        alt: "Kabayan Konek Image",
      },
    ],
    card: "summary_large_image",
  },

  // alternates: {
  //   canonical: "https://kabayankonek.com/about",
  // },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
