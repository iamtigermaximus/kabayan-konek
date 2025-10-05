import Time from "@/components/opi-suomea/basics/time/Time";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIME IN FINNISH | KABAYAN KONEK",
  description:
    "Learn how to tell time in Finnish. Complete guide with hours, minutes, time expressions, and common phrases. Master Finnish time vocabulary with pronunciation examples.",
  keywords:
    "Finnish time, telling time Finnish, hours in Finnish, minutes in Finnish, time expressions Finnish, learn Finnish time, Finnish clock, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "TIME IN FINNISH | KABAYAN KONEK",
    description:
      "Learn how to tell time in Finnish. Complete guide with hours, minutes, time expressions, and common phrases. Master Finnish time vocabulary with pronunciation examples.",
    url: "https://www.kabayankonek.com/opi-suomea/time",
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
    title: "TIME IN FINNISH | KABAYAN KONEK",
    description:
      "Learn how to tell time in Finnish. Complete guide with hours, minutes, time expressions, and common phrases. Master Finnish time vocabulary with pronunciation examples.",
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

const TimePage = () => {
  return (
    <div>
      <Time />
    </div>
  );
};

export default TimePage;
