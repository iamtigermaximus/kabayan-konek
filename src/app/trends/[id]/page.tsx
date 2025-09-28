import TrendDetails from "@/components/trends/trends-details/TrendDetails";
import { stripHtml } from "@/utils/helper";
import { Metadata } from "next";
import React from "react";

interface TrendArticle {
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

  return {
    title: articleTitle,
    description: articleContent,
    keywords:
      "Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino travel trends, Pinoy travel tips, Filipino budget travel, Kabayan travel ideas, Filipino tech gadgets, Pinoy gadget reviews, Filipino gaming devices, Kabayan tech updates, Pinoy community events, Filipino festivals, Kabayan food bazaars, Filipino pop culture trends, Pinoy TikTok challenges, Filipino music trends, Filipino celebrity updates, Kabayan expat tips, Filipino community inspiration, Pinoy entrepreneurship, Filipino diaspora lifestyle, Kabayan tips for living abroad, Filipino beauty trends, Pinoy skincare routines, Filipino health and wellness, Kabayan cooking hacks, Filipino food trends, Pinoy home improvement, Filipino fitness tips, Kabayan productivity hacks, Pinoy relationship advice, Filipino family trends, Kabayan educational resources, Filipino parenting tips, Pinoy pop-up markets, Filipino vlogging gear, Kabayan entertainment trends, Filipino success stories, Pinoy culture worldwide, Filipino living tips, Kabayan lifestyle Finland, Filipino travel Finland, Kabayan living Europe, Filipino tech Europe, Pinoy entertainment USA, Filipino festivals Canada, Kabayan trends Middle East, Pinoy gadgets Australia, Filipino events global, Kabayan culture global, Filipino lifestyle worldwide, Pinoy tips worldwide, Kabayan fashion trends, Filipino health tips, Pinoy travel inspiration, Filipino entertainment worldwide.",
    openGraph: {
      title: articleTitle,
      description: articleContent,
      // url: `https://kabayankonek.com/trends/${article.id}`,
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
const fetchArticle = async (id: string): Promise<TrendArticle | null> => {
  try {
    const res = await fetch(`https://www.kabayankonek.com/api/trends/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch trend article");
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching trend article:", err);
    return null;
  }
};

const TrendDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return <TrendDetails article={article} />;
};

export default TrendDetailsPage;
