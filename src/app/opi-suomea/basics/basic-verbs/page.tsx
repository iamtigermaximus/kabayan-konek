import BasicVerbs from "@/components/opi-suomea/basics/basic-verbs/BasicVerbs";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BASIC VERBS IN FINNISH | KABAYAN KONEK",
  description:
    "Learn essential Finnish verbs with complete conjugation guide. Master common action verbs, present tense conjugation, and practical usage in everyday conversations and sentences.",
  keywords:
    "Finnish verbs, basic verbs Finnish, verb conjugation Finnish, present tense Finnish, action verbs Finnish, Opi Suomea, Kabayan Konek Finnish, Finnish vocabulary, verb types",
  openGraph: {
    title: "BASIC VERBS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn essential Finnish verbs with complete conjugation guide. Master common action verbs, present tense conjugation, and practical usage in everyday conversations and sentences.",
    url: "https://www.kabayankonek.com/opi-suomea/basic-verbs",
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
    title: "BASIC VERBS IN FINNISH | KABAYAN KONEK",
    description:
      "Learn essential Finnish verbs with complete conjugation guide. Master common action verbs, present tense conjugation, and practical usage in everyday conversations and sentences.",
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

const BasicVerbsPage = () => {
  return (
    <div>
      <BasicVerbs />
    </div>
  );
};

export default BasicVerbsPage;
