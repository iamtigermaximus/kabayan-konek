import Anatomy from "@/components/opi-suomea/basics/anatomy/Anatomy";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FINNISH ANATOMY & BODY PARTS | KABAYAN KONEK",
  description:
    "Learn Finnish anatomy and body parts vocabulary. Master terms for body parts, organs, and medical vocabulary with pronunciation guides and practical examples for healthcare and everyday conversations.",
  keywords:
    "Finnish anatomy, body parts Finnish, medical vocabulary Finnish, human body Finnish, healthcare vocabulary, Finnish basics, body terms, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "FINNISH ANATOMY & BODY PARTS | KABAYAN KONEK",
    description:
      "Learn Finnish anatomy and body parts vocabulary. Master terms for body parts, organs, and medical vocabulary with pronunciation guides and practical examples for healthcare and everyday conversations.",
    url: "https://www.kabayankonek.com/opi-suomea/basics/anatomy",
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
    title: "FINNISH ANATOMY & BODY PARTS | KABAYAN KONEK",
    description:
      "Learn Finnish anatomy and body parts vocabulary. Master terms for body parts, organs, and medical vocabulary with pronunciation guides and practical examples for healthcare and everyday conversations.",
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

const AnatomyPage = () => {
  return (
    <div>
      <Anatomy />
    </div>
  );
};

export default AnatomyPage;
