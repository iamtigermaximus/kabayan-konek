import React from "react";
import type { Metadata } from "next";
import FamilyRelationships from "@/components/opi-suomea/basics/family-relationships/FamilyRelationships";

export const metadata: Metadata = {
  title: "FAMILY AND RELATIONSHIPS | KABAYAN KONEK",
  description:
    "Learn Finnish family relationship vocabulary. Master terms for family members, relatives, and kinship terms with pronunciation guides and practical examples for everyday conversations.",
  keywords:
    "Finnish family vocabulary, family relationships Finnish, family members Finnish, kinship terms Finnish, Finnish basics, family words, Opi Suomea, Kabayan Konek Finnish",
  openGraph: {
    title: "FINNISH FAMILY RELATIONSHIPS | KABAYAN KONEK",
    description:
      "Learn Finnish family relationship vocabulary. Master terms for family members, relatives, and kinship terms with pronunciation guides and practical examples for everyday conversations.",
    url: "https://www.kabayankonek.com/opi-suomea/basics/family-relationships",
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
    title: "FINNISH FAMILY RELATIONSHIPS | KABAYAN KONEK",
    description:
      "Learn Finnish family relationship vocabulary. Master terms for family members, relatives, and kinship terms with pronunciation guides and practical examples for everyday conversations.",
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

const FamilyRelationshipsPage = () => {
  return (
    <div>
      <FamilyRelationships />
    </div>
  );
};

export default FamilyRelationshipsPage;
