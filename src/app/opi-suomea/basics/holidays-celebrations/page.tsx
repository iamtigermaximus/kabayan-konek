import HolidaysCelebrations from "@/components/opi-suomea/basics/holidays-celebrations/HolidaysCelebrations";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FINNISH HOLIDAYS & CELEBRATIONS | KABAYAN KONEK",
  description:
    "Learn about Finnish holidays, celebrations, and cultural traditions. Master vocabulary for major holidays, seasonal celebrations, and cultural events with pronunciation guides and cultural context.",
  keywords:
    "Finnish holidays, Finnish celebrations, cultural traditions Finland, holiday vocabulary Finnish, Finnish festivals, seasonal celebrations, Finnish culture, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "FINNISH HOLIDAYS & CELEBRATIONS | KABAYAN KONEK",
    description:
      "Learn about Finnish holidays, celebrations, and cultural traditions. Master vocabulary for major holidays, seasonal celebrations, and cultural events with pronunciation guides and cultural context.",
    url: "https://www.kabayankonek.com/opi-suomea/basics/holidays-celebrations",
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
    title: "FINNISH HOLIDAYS & CELEBRATIONS | KABAYAN KONEK",
    description:
      "Learn about Finnish holidays, celebrations, and cultural traditions. Master vocabulary for major holidays, seasonal celebrations, and cultural events with pronunciation guides and cultural context.",
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

const HolidaysCelebrationsPage = () => {
  return (
    <div>
      <HolidaysCelebrations />
    </div>
  );
};

export default HolidaysCelebrationsPage;
