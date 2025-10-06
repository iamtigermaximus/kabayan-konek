import InterrogativePronouns from "@/components/opi-suomea/basics/interrogative-pronouns/InterrogativePronouns";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INTERROGATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
  description:
    "Learn Finnish interrogative pronouns (kuka, mikä, kumpi) with complete grammar guide. Master question words, cases, and practical usage examples for asking questions in Finnish.",
  keywords:
    "Finnish interrogative pronouns, Finnish question words, kuka mikä kumpi, Finnish grammar, asking questions Finnish, Finnish pronouns, Opi Suomea, Kabayan Konek Finnish, Finnish language learning",
  openGraph: {
    title: "INTERROGATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish interrogative pronouns (kuka, mikä, kumpi) with complete grammar guide. Master question words, cases, and practical usage examples for asking questions in Finnish.",
    url: "https://www.kabayankonek.com/opi-suomea/interrogative-pronouns",
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
    title: "INTERROGATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish interrogative pronouns (kuka, mikä, kumpi) with complete grammar guide. Master question words, cases, and practical usage examples for asking questions in Finnish.",
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

const InterrogativePronounsPage = () => {
  return (
    <div>
      <InterrogativePronouns />
    </div>
  );
};

export default InterrogativePronounsPage;
