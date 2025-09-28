import LifestyleDetails from "@/components/lifestyle/lifestyle-details/LifestyleDetails";
import { stripHtml } from "@/utils/helper";
import { Metadata } from "next";
import React from "react";

interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Type Definitions
type Params = Promise<{ id: string }>;

// This function generates dynamic metadata based on the article
export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { id } = await params; // Await the params Promise
  const article = await fetchArticle(id); // Fetch the article here

  if (!article) {
    return {
      title: "Kabayan Konek - Article Not Found",
      description: "This article could not be found.",
    };
  }

  const articleTitle = article.title;
  const cleanContent = stripHtml(article.content); // Strip HTML tags from content
  const articleContent = cleanContent.slice(0, 150);
  const imageUrl =
    article.imageUrl ||
    "https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png";

  const canonicalUrl = `https://www.kabayankonek.com/lifestyle/${article.id}`;

  return {
    title: articleTitle,
    description: articleContent,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "Filipino lifestyle, Kabayan Konek lifestyle, Pinoy lifestyle, Filipino expat life, Filipino culture, Filipino community, lifestyle for Filipinos, Kabayan Konek Finland, Filipino tips, Filipino culture Finland, Filipino food, Filipino health, Filipino entertainment",
    openGraph: {
      title: articleTitle,
      description: articleContent,
      // url: `https://kabayankonek.com/lifestyle/${article.id}`,
      url: canonicalUrl,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: "Kabayan Konek Image" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: articleTitle,
      description: articleContent,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: "Kabayan Konek Image" },
      ],
    },
  };
};

// Fetching article data
const fetchArticle = async (id: string): Promise<LifestyleArticle | null> => {
  try {
    const res = await fetch(`https://www.kabayankonek.com/api/lifestyle/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching article:", err);
    return null;
  }
};

const LifestyleDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return <LifestyleDetails article={article} />;
};

export default LifestyleDetailsPage;
