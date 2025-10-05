import NumbersColors from "@/components/opi-suomea/basics/numbers-colors/NumbersColors";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUMBERS & COLORS | KABAYAN KONEK",
  description:
    "Learn Finnish numbers and colors with comprehensive guides. Master counting from 0 to billions and all color names in Finnish with pronunciation examples.",
  keywords:
    "Finnish numbers, Finnish colors, numbers in Finnish, colors in Finnish, learn Finnish numbers, learn Finnish colors, counting in Finnish, color names Finnish, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "NUMBERS & COLORS | KABAYAN KONEK",
    description:
      "Learn Finnish numbers and colors with comprehensive guides. Master counting from 0 to billions and all color names in Finnish with pronunciation examples.",
    url: "https://kabayankonek.com/opi-suomea/numbers-colors",
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
    title: "NUMBERS & COLORS | KABAYAN KONEK",
    description:
      "Learn Finnish numbers and colors with comprehensive guides. Master counting from 0 to billions and all color names in Finnish with pronunciation examples.",
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

const NumbersColorsPage = () => {
  return (
    <div>
      <NumbersColors />
    </div>
  );
};

export default NumbersColorsPage;
