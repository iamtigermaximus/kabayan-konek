import AdvertisementDetails from "@/components/advertisement/advertisement-details/AdvertisementDetails";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise with Kabayan Konek | KABAYAN KONEK",
  description:
    "Reach the Filipino community in Finland with your advertisements. Post jobs, services, and events today and connect with your audience.",
  keywords:
    "Filipino advertisements, Pinoy jobs, Filipino services, advertise in Finland, Filipino events",

  openGraph: {
    title: "ADVERTISEMENT | KABAYAN KONEK",
    description:
      "Reach the Filipino community in Finland with your advertisements. Post jobs, services, and events today and connect with your audience.",
    // url: 'https://kabayankonek.com/advertisement',
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
    title: "ADVERTISEMENT | KABAYAN KONEK",
    description:
      "Reach the Filipino community in Finland with your advertisements. Post jobs, services, and events today and connect with your audience.",
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

  // alternates: {
  //   canonical: 'https://kabayankonek.com/advertisement',
  // },
};

const AdvertisementDetailsPage = () => {
  return <AdvertisementDetails />;
};

export default AdvertisementDetailsPage;
