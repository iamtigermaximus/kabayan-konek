import PersonalPronouns from "@/components/opi-suomea/basics/personal-pronouns/PersonalPronouns";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PERSONAL PRONOUNS IN FINNISH | KABAYAN KONEK",
  description:
    "Learn Finnish personal pronouns (minä, sinä, hän, me, te, he) with complete grammar guide. Master subject pronouns, object forms, cases, and practical usage in Finnish sentences.",
  keywords:
    "Finnish personal pronouns, minä sinä hän, Finnish grammar, Finnish pronouns, subject pronouns Finnish, object pronouns Finnish, Opi Suomea, Kabayan Konek Finnish, Finnish language basics",
  openGraph: {
    title: "PERSONAL PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish personal pronouns (minä, sinä, hän, me, te, he) with complete grammar guide. Master subject pronouns, object forms, cases, and practical usage in Finnish sentences.",
    url: "https://www.kabayankonek.com/opi-suomea/personal-pronouns",
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
    title: "PERSONAL PRONOUNS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn Finnish personal pronouns (minä, sinä, hän, me, te, he) with complete grammar guide. Master subject pronouns, object forms, cases, and practical usage in Finnish sentences.",
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

const PersonalPronounsPage = () => {
  return (
    <div>
      <PersonalPronouns />
    </div>
  );
};

export default PersonalPronounsPage;
