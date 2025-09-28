import ProfileDetails from "@/components/profile-feature/profile-details/ProfileDetails";
import { stripHtml } from "@/utils/helper";
import { Metadata } from "next";

interface KabayanArticle {
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

  const canonicalUrl = `https://www.kabayankonek.com/profile/${article.id}`;

  return {
    title: articleTitle,
    description: articleContent,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      "Kabayan Spotlight, Filipino profiles, Pinoy profiles, Filipino success stories, Filipino leaders, Kabayan community, inspiring Pinoy stories, Filipino achievements, Pinoy role models, Filipino influencers, Filipino empowerment, Pinoy empowerment, Kabayan profiles Finland, Filipino leaders in Finland, Filipino role models, Kabayan community Europe, Filipino professionals Europe, Filipino diaspora Europe, Filipino heroes, Pinoy heroes, Filipinos making a difference, Filipino stories, Kabayan community USA, Filipino influencers, Pinoy influencers, Filipino success stories worldwide",
    openGraph: {
      title: articleTitle,
      description: articleContent,
      // url: `https://kabayankonek.com/profile/${article.id}`,
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
const fetchArticle = async (id: string): Promise<KabayanArticle | null> => {
  try {
    const res = await fetch(`https://www.kabayankonek.com/api/profile/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching article:", err);
    return null;
  }
};

const ProfileDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return <ProfileDetails article={article} />;
};

export default ProfileDetailsPage;
