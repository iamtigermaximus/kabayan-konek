import Housing from "@/components/opi-suomea/basics/housing/Housing";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FINNISH HOUSING VOCABULARY | KABAYAN KONEK",
  description:
    "Learn essential Finnish housing and accommodation vocabulary. Master terms for rooms, furniture, household items, and rental vocabulary with practical examples for everyday living in Finland.",
  keywords:
    "Finnish housing vocabulary, accommodation Finnish, household items Finnish, rooms and furniture Finnish, rental vocabulary Finnish, Finnish basics, housing words, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "FINNISH HOUSING VOCABULARY | KABAYAN KONEK",
    description:
      "Learn essential Finnish housing and accommodation vocabulary. Master terms for rooms, furniture, household items, and rental vocabulary with practical examples for everyday living in Finland.",
    url: "https://www.kabayankonek.com/opi-suomea/basics/housing",
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
    title: "FINNISH HOUSING VOCABULARY | KABAYAN KONEK",
    description:
      "Learn essential Finnish housing and accommodation vocabulary. Master terms for rooms, furniture, household items, and rental vocabulary with practical examples for everyday living in Finland.",
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

const HousingPage = () => {
  return (
    <div>
      <Housing />
    </div>
  );
};

export default HousingPage;
