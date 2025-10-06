import DemonstrativePronouns from "@/components/opi-suomea/basics/demonstrative-pronouns/DemonstrativePronouns";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEMONSTRATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
  description:
    "Learn Finnish demonstrative pronouns (tämä, tuo, se) with complete grammar guide. Master this/that pronouns, cases, and practical usage examples in Finnish sentences.",
  keywords:
    "Finnish demonstrative pronouns, tämä tuo se, Finnish grammar, this that Finnish, Finnish pronouns, Finnish cases, Opi Suomea, Kabayan Konek Finnish, Finnish language learning",
  openGraph: {
    title: "DEMONSTRATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish demonstrative pronouns (tämä, tuo, se) with complete grammar guide. Master this/that pronouns, cases, and practical usage examples in Finnish sentences.",
    url: "https://www.kabayankonek.com/opi-suomea/demonstrative-pronouns",
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
    title: "DEMONSTRATIVE PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish demonstrative pronouns (tämä, tuo, se) with complete grammar guide. Master this/that pronouns, cases, and practical usage examples in Finnish sentences.",
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

const DemonstrativePronounsPage = () => {
  return (
    <div>
      <DemonstrativePronouns />
    </div>
  );
};

export default DemonstrativePronounsPage;
