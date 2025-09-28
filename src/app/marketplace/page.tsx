import MarketPlace from "@/components/marketplace/Marketplace";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARKETPLACE  | KABAYAN KONEK",
  description:
    "Explore the Kabayan Konek marketplace. Buy and sell a wide range of products including electronics, fashion, and home items within the Filipino community in Finland.",
  keywords:
    "Filipino marketplace, Kabayan Konek marketplace, Filipino products for sale, buy Filipino electronics, Filipino fashion marketplace, Filipino home goods, Pinoy products, Filipino community Finland, buy and sell Filipino products, secondhand Filipino marketplace",

  openGraph: {
    title: "MARKETPLACE | KABAYAN KONEK",
    description:
      "Explore the Kabayan Konek marketplace. Buy and sell a wide range of products including electronics, fashion, and home items within the Filipino community in Finland.",
    // url: 'https://kabayankonek.com/marketplace',
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
    title: "MARKETPLACE | KABAYAN KONEK",
    description:
      "Explore the Kabayan Konek marketplace. Buy and sell a wide range of products including electronics, fashion, and home items within the Filipino community in Finland.",
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
  //   canonical: 'https://kabayankonek.com/marketplace',
  // },
};

const MarketplacePage = () => {
  return <MarketPlace />;
};

export default MarketplacePage;
