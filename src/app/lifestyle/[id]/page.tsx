'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head'; // Import Head to manage metadata
import LifestyleDetails from '@/components/lifestyle/lifestyle-details/LifestyleDetails';

interface LifestyleArticle {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const LifestyleDetailsPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<LifestyleArticle | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/lifestyle/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setArticle(data);
        })
        .catch((err) => {
          console.error('Error fetching article:', err);
        });
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const articleUrl = `https://kabayankonek.com/lifestyle/${article.id}`;

  return (
    <>
      <Head>
        <title>{`${article.title} | Kabayan Konek`}</title>
        <meta name="description" content={article.content.slice(0, 150)} />
        <meta
          name="keywords"
          content={`Filipino lifestyle, Kabayan lifestyle, Pinoy lifestyle, lifestyle for Filipinos, Filipino expat life, Filipino culture, Kabayan Konek lifestyle, Filipino tips and inspiration, Pinoy community Finland, Filipino living in Finland, Filipino events, Filipino culture in Finland, Filipino expats tips, Pinoy lifestyle articles, Kabayan Konek articles, Filipino fashion and trends, Filipino food, Filipino health and wellness, Pinoy travel tips, Filipino entertainment, ${article.title}`}
        />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.content.slice(0, 150)}
        />
        <meta property="og:url" content={articleUrl} />
        <meta
          property="og:image"
          content={
            article.imageUrl ||
            'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png'
          }
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={article.content.slice(0, 150)}
        />
        <meta
          name="twitter:image"
          content={
            article.imageUrl ||
            'https://res.cloudinary.com/dgkjr3qbc/image/upload/v1733010227/kabayan_iqasip.png'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Render article content */}
      <LifestyleDetails />
    </>
  );
};

export default LifestyleDetailsPage;
