import LifestyleDetails from '@/components/lifestyle/lifestyle-details/LifestyleDetails';
import { stripHtml } from '@/utils/helper';
import { Metadata } from 'next';
import React from 'react';

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
      title: 'Kabayan Konek - Article Not Found',
      description: 'This article could not be found.',
    };
  }

  const articleTitle = article.title;
  const cleanContent = stripHtml(article.content); // Strip HTML tags from content
  const articleContent = cleanContent.slice(0, 150);
  const imageUrl =
    article.imageUrl ||
    'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png';

  return {
    title: articleTitle,
    description: articleContent,
    keywords:
      'Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino tips and inspiration, Pinoy community Finland, Filipino living in Finland, Filipino events, Filipino culture in Finland, Filipino expats tips, Pinoy lifestyle articles, Kabayan Konek articles, Filipino fashion and trends, Filipino food, Filipino health and wellness, Pinoy travel tips, Filipino entertainment, Filipino lifestyle Europe, Kabayan lifestyle Europe, Pinoy lifestyle Europe, Filipino expat life Europe, Filipino culture Europe, Kabayan Konek Europe, Filipino tips Europe, Pinoy community Europe, Filipino living in Europe, Filipino events Europe, Filipino expats tips Europe, Filipino fashion Europe, Filipino food Europe, Filipino health Europe, Pinoy travel tips Europe, Filipino entertainment Europe, Filipino lifestyle USA, Kabayan lifestyle USA, Pinoy lifestyle USA, Filipino expat life USA, Filipino culture USA, Kabayan Konek USA, Filipino tips USA, Pinoy community USA, Filipino living in USA, Filipino events USA, Filipino expats tips USA, Filipino fashion USA, Filipino food USA, Filipino health USA, Pinoy travel tips USA, Filipino entertainment USA, Filipino lifestyle Canada, Kabayan lifestyle Canada, Pinoy lifestyle Canada, Filipino expat life Canada, Filipino culture Canada, Kabayan Konek Canada, Filipino tips Canada, Pinoy community Canada, Filipino living in Canada, Filipino events Canada, Filipino expats tips Canada, Filipino fashion Canada, Filipino food Canada, Filipino health Canada, Pinoy travel tips Canada, Filipino entertainment Canada, Filipino lifestyle Australia, Kabayan lifestyle Australia, Pinoy lifestyle Australia, Filipino expat life Australia, Filipino culture Australia, Kabayan Konek Australia, Filipino tips Australia, Pinoy community Australia, Filipino living in Australia, Filipino events Australia, Filipino expats tips Australia, Filipino fashion Australia, Filipino food Australia, Filipino health Australia, Pinoy travel tips Australia, Filipino entertainment Australia, Filipino lifestyle Middle East, Kabayan lifestyle Middle East, Pinoy lifestyle Middle East, Filipino expat life Middle East, Filipino culture Middle East, Kabayan Konek Middle East, Filipino tips Middle East, Pinoy community Middle East, Filipino living in Middle East, Filipino events Middle East, Filipino expats tips Middle East, Filipino fashion Middle East, Filipino food Middle East, Filipino health Middle East, Pinoy travel tips Middle East, Filipino entertainment Middle East, Filipino lifestyle worldwide, Kabayan lifestyle worldwide, Pinoy lifestyle worldwide, Filipino expat life worldwide, Filipino culture worldwide, Kabayan Konek global, Filipino tips worldwide, Pinoy community worldwide, Filipino living worldwide, Filipino events worldwide, Filipino expats tips worldwide, Filipino fashion worldwide, Filipino food worldwide, Filipino health worldwide, Pinoy travel tips worldwide, Filipino entertainment worldwide',

    openGraph: {
      title: articleTitle,
      description: articleContent,
      url: `https://kabayankonek.com/lifestyle/${article.id}`,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: 'Kabayan Konek Image' },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: articleTitle,
      description: articleContent,
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: 'Kabayan Konek Image' },
      ],
    },
  };
};

// Fetching article data
const fetchArticle = async (id: string): Promise<LifestyleArticle | null> => {
  try {
    const res = await fetch(`https://kabayankonek.com/api/lifestyle/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch article');
    }

    return res.json();
  } catch (err) {
    console.error('Error fetching article:', err);
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
