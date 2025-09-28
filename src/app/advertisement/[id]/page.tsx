import { Metadata } from "next";
import { notFound } from "next/navigation";
import AdvertisementDetails from "@/components/advertisement/advertisement-details/AdvertisementDetails";

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchAdvertisement(id: string) {
  try {
    const response = await fetch(
      `https://www.kabayankonek.com/api/advertisements/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching advertisement:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // Remove await since params is not a Promise
  const advertisement = await fetchAdvertisement(id);

  if (!advertisement) {
    return {
      title: "Advertisement Not Found | KABAYAN KONEK",
    };
  }

  const canonicalUrl = `https://www.kabayankonek.com/advertisement/${id}`;

  // Clean description by removing HTML tags
  const cleanDescription = advertisement.description
    ? advertisement.description.replace(/<[^>]*>/g, "").slice(0, 150)
    : "Advertisement details";

  return {
    title: `${advertisement.title} | KABAYAN KONEK`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: advertisement.title,
      description: cleanDescription,
      url: canonicalUrl,
      images: advertisement.imageUrl
        ? [
            {
              url: advertisement.imageUrl,
              width: 1200,
              height: 630,
              alt: advertisement.title,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: advertisement.title,
      description: cleanDescription,
      images: advertisement.imageUrl ? [advertisement.imageUrl] : [],
    },
  };
}

export default async function AdvertisementPage({ params }: Props) {
  const { id } = await params; // Remove await
  const advertisement = await fetchAdvertisement(id);

  if (!advertisement) {
    notFound();
  }

  return <AdvertisementDetails />;
}
