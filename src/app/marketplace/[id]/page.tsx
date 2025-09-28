import MarketplaceDetails from "@/components/marketplace/marketplace-details/MarketplaceDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  contactEmail: string;
  contactPhone: string;
  primaryImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await fetchProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | KABAYAN KONEK Marketplace",
    };
  }

  const canonicalUrl = `https://www.kabayankonek.com/marketplace/${product.id}`;

  return {
    title: `${product.name} | KABAYAN KONEK Marketplace`,
    description: product.description.slice(0, 150),
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "Filipino marketplace, Kabayan Konek marketplace, Filipino products for sale, buy Filipino electronics, Filipino fashion marketplace, Filipino home goods, Pinoy products, Filipino community Finland, buy and sell Filipino products, secondhand Filipino marketplace",
    openGraph: {
      title: `${product.name} | KABAYAN KONEK Marketplace`,
      description: product.description.slice(0, 150),
      url: canonicalUrl,
      images: [
        {
          url:
            product.primaryImageUrl ||
            "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      title: `${product.name} | KABAYAN KONEK Marketplace`,
      description: product.description.slice(0, 150),
      images: [
        {
          url:
            product.primaryImageUrl ||
            "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      card: "summary_large_image",
    },
  };
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(
      `https://www.kabayankonek.com/api/marketplace/${id}`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
};

const MarketplaceDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }
  return <MarketplaceDetails />;
};

export default MarketplaceDetailsPage;
