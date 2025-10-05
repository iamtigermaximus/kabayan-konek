import DaysMonths from "@/components/opi-suomea/basics/days-months/DaysMonths";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAYS AND MONTHS | KABAYAN KONEK",
  description:
    "Learn days of the week and months of the year in Finnish. Complete guide with English equivalents, pronunciation, and proper grammatical cases for time expressions.",
  keywords:
    "Finnish days, Finnish months, days of week Finnish, months of year Finnish, learn Finnish calendar, Finnish time expressions, Finnish grammar cases, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "DAYS AND MONTHS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn days of the week and months of the year in Finnish. Complete guide with English equivalents, pronunciation, and proper grammatical cases for time expressions.",
    url: "https://www.kabayankonek.com/opi-suomea/days-months",
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
    title: "DAYS AND MONTHS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn days of the week and months of the year in Finnish. Complete guide with English equivalents, pronunciation, and proper grammatical cases for time expressions.",
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

const DaysMonthsPage = () => {
  return (
    <div>
      <DaysMonths />
    </div>
  );
};

export default DaysMonthsPage;
