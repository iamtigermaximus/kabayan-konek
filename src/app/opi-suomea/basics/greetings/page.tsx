import Greetings from "@/components/opi-suomea/basics/greetings/Greetings";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GREETINGS | KABAYAN KONEK",
  description:
    "Learn essential Finnish greetings and basic phrases. Master hello, goodbye, thank you, and common Finnish expressions with pronunciation guides.",
  keywords:
    "Finnish greetings, learn Finnish, basic Finnish phrases, hello in Finnish, goodbye in Finnish, thank you in Finnish, Finnish language learning, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "GREETINGS | KABAYAN KONEK",
    description:
      "Learn essential Finnish greetings and basic phrases. Master hello, goodbye, thank you, and common Finnish expressions with pronunciation guides.",
    url: "https://kabayankonek.com/opi-suomea/greetings",
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
    title: "GREETINGS | KABAYAN KONEK",
    description:
      "Learn essential Finnish greetings and basic phrases. Master hello, goodbye, thank you, and common Finnish expressions with pronunciation guides.",
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

const GreetingsPage = () => {
  return <Greetings />;
};

export default GreetingsPage;
