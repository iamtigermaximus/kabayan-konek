import Directions from "@/components/opi-suomea/basics/directions/Directions";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIRECTIONS IN FINNISH | KABAYAN KONEK",
  description:
    "Learn directions and location vocabulary in Finnish. Complete guide with cardinal directions, prepositions, and common phrases for navigation and giving directions.",
  keywords:
    "Finnish directions, directions in Finnish, Finnish location vocabulary, cardinal directions Finnish, Finnish prepositions, navigation Finnish, learn Finnish directions, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "DIRECTIONS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn directions and location vocabulary in Finnish. Complete guide with cardinal directions, prepositions, and common phrases for navigation and giving directions.",
    url: "https://www.kabayankonek.com/opi-suomea/directions",
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
    title: "DIRECTIONS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn directions and location vocabulary in Finnish. Complete guide with cardinal directions, prepositions, and common phrases for navigation and giving directions.",
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
};

const DirectionsPage = () => {
  return (
    <div>
      <Directions />
    </div>
  );
};

export default DirectionsPage;
