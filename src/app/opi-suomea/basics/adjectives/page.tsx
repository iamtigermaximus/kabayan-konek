import Adjectives from "@/components/opi-suomea/basics/adjectives/Adjectives";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADJECTIVES IN FINNISH | KABAYAN KONEK",
  description:
    "Learn Finnish adjectives with complete grammar guide. Master adjective types, comparison forms, cases, and agreement rules. Essential vocabulary for describing people, places, and things in Finnish.",
  keywords:
    "Finnish adjectives, adjective grammar Finnish, comparison forms Finnish, adjective cases, descriptive words Finnish, Opi Suomea, Kabayan Konek Finnish, Finnish vocabulary, adjective agreement",
  openGraph: {
    title: "ADJECTIVES IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish adjectives with complete grammar guide. Master adjective types, comparison forms, cases, and agreement rules. Essential vocabulary for describing people, places, and things in Finnish.",
    url: "https://www.kabayankonek.com/opi-suomea/adjectives",
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
    title: "ADJECTIVES IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish adjectives with complete grammar guide. Master adjective types, comparison forms, cases, and agreement rules. Essential vocabulary for describing people, places, and things in Finnish.",
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

const AdjectivesPage = () => {
  return (
    <div>
      <Adjectives />
    </div>
  );
};

export default AdjectivesPage;
