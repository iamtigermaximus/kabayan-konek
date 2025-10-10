import Kpt from "@/components/opi-suomea/intermediate/kpt/Kpt";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPT CHANGES IN FINNISH | KABAYAN KONEK",
  description:
    "Master Finnish KPT consonant gradation rules. Learn consonant changes, stem variations, and pronunciation patterns for intermediate Finnish grammar with practical examples.",
  keywords:
    "Finnish KPT, consonant gradation Finnish, KPT changes, Finnish grammar intermediate, consonant changes Finnish, stem variations, Finnish pronunciation, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "KPT CHANGES IN FINNISH | KABAYAN KONEK",
    description:
      "Master Finnish KPT consonant gradation rules. Learn consonant changes, stem variations, and pronunciation patterns for intermediate Finnish grammar with practical examples.",
    url: "https://www.kabayankonek.com/opi-suomea/intermediate/kpt",
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
    title: "KPT CHANGES IN FINNISH | KABAYAN KONEK",
    description:
      "Master Finnish KPT consonant gradation rules. Learn consonant changes, stem variations, and pronunciation patterns for intermediate Finnish grammar with practical examples.",
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

const KptPage = () => {
  return (
    <div>
      <Kpt />
    </div>
  );
};

export default KptPage;
